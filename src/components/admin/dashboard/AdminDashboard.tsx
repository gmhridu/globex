"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Eye,
  Trash2,
  Search,
  RefreshCw,
  CheckCircle,
  Clock,
  AlertCircle,
  Archive,
  Mail,
  Phone,
  Building,
  Calendar,
  Filter,
  Download,
  ChevronDown,
  FileText,
  Plus,
  Edit,
  Image as ImageIcon,
  User,
  Tag,
  X,
  TrendingUp,
  Activity,
  LogOut,
} from "lucide-react";
import { toast } from "sonner";

// Blogs are now fetched from database

interface ContactSubmission {
  id: string;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string;
  description: string;
  message: string;
  status: "new" | "in_progress" | "completed" | "archived";
  isRead: boolean;
  submittedAt: Date;
  updatedAt: Date;
}

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "new" | "in_progress" | "completed" | "archived"
  >("all");
  const [selectedSubmission, setSelectedSubmission] =
    useState<ContactSubmission | null>(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  // Blog management states
  const [activeTab, setActiveTab] = useState<"contacts" | "blogs">("contacts");
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [isBlogDetailModalOpen, setIsBlogDetailModalOpen] = useState(false);
  const [isCreateBlogModalOpen, setIsCreateBlogModalOpen] = useState(false);
  const [blogFormData, setBlogFormData] = useState({
    title: "",
    excerpt: "",
    body: "",
    image: "",
    category: "",
    author: "Globex Team",
  });

  // Using database data
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [contactsLoading, setContactsLoading] = useState(true);

  // Fetch blogs and contacts from database
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setBlogsLoading(true);
        const response = await fetch('/api/blogs');
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
        } else {
          console.error('Failed to fetch blogs');
          setBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setBlogsLoading(false);
      }
    };

    const fetchContacts = async () => {
      try {
        setContactsLoading(true);
        const response = await fetch('/api/contacts');
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        } else {
          console.error('Failed to fetch contacts');
          setSubmissions([]);
        }
      } catch (error) {
        console.error('Error fetching contacts:', error);
        setSubmissions([]);
      } finally {
        setContactsLoading(false);
      }
    };

    fetchBlogs();
    fetchContacts();
  }, []);

  const statusCounts = {
    new: submissions.filter(s => s.status === 'new').length,
    in_progress: submissions.filter(s => s.status === 'in_progress').length,
    completed: submissions.filter(s => s.status === 'completed').length,
    archived: submissions.filter(s => s.status === 'archived').length,
  };

  const unreadCount = submissions.filter(s => !s.isRead).length;

  const blogStats = {
    totalBlogs: blogs.length,
    categories: Array.from(new Set(blogs.map(b => b.category))).map(cat => ({ category: cat })),
  };

  const handleStatusUpdate = (id: string, status: "new" | "in_progress" | "completed" | "archived") => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, status } : s));
  };

  const handleMarkAsRead = (id: string) => {
    setSubmissions(prev => prev.map(s => s.id === id ? { ...s, isRead: true } : s));
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      setSubmissions(prev => prev.filter(s => s.id !== id));
      setIsDetailModalOpen(false);
    }
  };

  const handleCreateBlog = () => {
    setBlogFormData({
      title: "",
      excerpt: "",
      body: "",
      image: "",
      category: "",
      author: "Globex Team",
    });
    setSelectedBlog(null);
    setIsCreateBlogModalOpen(true);
  };

  const handleBlogSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(blogFormData),
      });

      if (!response.ok) {
        throw new Error('Failed to create blog');
      }

      const newBlog = await response.json();
      setBlogs(prev => [newBlog, ...prev]);
      setBlogFormData({
        title: "",
        excerpt: "",
        body: "",
        image: "",
        category: "",
        author: "Globex Team",
      });
      setIsCreateBlogModalOpen(false);
    } catch (error) {
      console.error('Error creating blog:', error);
      toast.error("Failed to create blog. Please try again.");
    }
  };

  const handleBlogUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBlog) return;

    try {
      const response = await fetch('/api/blogs', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: selectedBlog.id,
          ...blogFormData,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update blog');
      }

      const result = await response.json();
      setBlogs(prev => prev.map(b => b.id === selectedBlog.id ? result : b));
      setIsBlogDetailModalOpen(false);
      setSelectedBlog(null);
    } catch (error) {
      console.error('Error updating blog:', error);
      toast.error("Failed to update blog. Please try again.");
    }
  };

  const handleEditBlog = (blog: any) => {
    setSelectedBlog(blog);
    setBlogFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      body: blog.body,
      image: blog.image || "",
      category: blog.category,
      author: blog.author,
    });
    setIsBlogDetailModalOpen(true);
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);

  const handleDeleteBlog = (id: string) => {
    setBlogToDelete(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteBlog = async () => {
    if (!blogToDelete) return;

    try {
      const response = await fetch('/api/blogs', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: blogToDelete }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      setBlogs(prev => prev.filter(b => b.id !== blogToDelete));
      setIsBlogDetailModalOpen(false);
      setSelectedBlog(null);
      setIsDeleteModalOpen(false);
      setBlogToDelete(null);
      toast.success("Blog deleted successfully!");
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error("Failed to delete blog. Please try again.");
    }
  };

  const handleLogout = async () => {
    if (!confirm("Are you sure you want to logout?")) return;

    try {
      const response = await fetch('/api/auth/sign-out', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Redirect to login page
        window.location.href = '/admin/login';
      } else {
        throw new Error('Logout failed');
      }
    } catch (error) {
      console.error('Logout error:', error);
      toast.error("Failed to logout. Please try again.");
    }
  };

  const handleViewSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    setIsDetailModalOpen(true);
    if (!submission.isRead) {
      handleMarkAsRead(submission.id);
    }
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      new: {
        color: "bg-blue-500/20 text-blue-300 border-blue-400/30 shadow-blue-500/10",
        icon: AlertCircle,
        label: "New",
      },
      in_progress: {
        color: "bg-amber-500/20 text-amber-300 border-amber-400/30 shadow-amber-500/10",
        icon: Clock,
        label: "In Progress",
      },
      completed: {
        color: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30 shadow-emerald-500/10",
        icon: CheckCircle,
        label: "Completed",
      },
      archived: {
        color: "bg-slate-500/20 text-slate-300 border-slate-400/30 shadow-slate-500/10",
        icon: Archive,
        label: "Archived",
      },
    };

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.new;
    const Icon = config.icon;

    return (
      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border shadow-sm ${config.color}`}>
        <Icon className="w-3.5 h-3.5" />
        {config.label}
      </span>
    );
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch = !searchTerm ||
      submission.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === "all" || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalSubmissions = Object.values(statusCounts).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent tracking-tight mb-2">
                Admin Dashboard
              </h1>
              <p className="text-slate-400 text-sm flex items-center gap-2">
                <Activity className="w-4 h-4" />
                Manage contacts and blog content efficiently
              </p>
            </div>
            <div className="flex items-center gap-3">
               <button
                 onClick={handleLogout}
                 className="px-4 py-2.5 bg-red-600/20 border border-red-500/30 rounded-xl text-sm font-medium text-red-300 hover:bg-red-600/30 transition-all shadow-lg flex items-center gap-2"
               >
                 <LogOut className="w-4 h-4" />
                 Logout
               </button>
               <button className="px-4 py-2.5 bg-slate-800/60 backdrop-blur-xl border border-slate-700/50 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-700/60 transition-all shadow-lg shadow-black/20 flex items-center gap-2 group">
                 <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                 Export
               </button>
               <button
                 onClick={() => setIsLoading(true)}
                 disabled={isLoading}
                 className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-medium hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 flex items-center gap-2"
               >
                 <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
                 Refresh
               </button>
             </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-8 flex space-x-2 bg-slate-800/40 backdrop-blur-xl p-1.5 rounded-2xl w-fit border border-slate-700/50 shadow-xl">
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "contacts"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Contacts
              {unreadCount > 0 && (
                <span className="ml-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("blogs")}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "blogs"
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Blogs
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        {activeTab === "contacts" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Submissions",
                value: totalSubmissions,
                icon: MessageSquare,
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/20 to-cyan-500/20",
                trend: "+12%",
                trendUp: true,
              },
              {
                label: "Unread Messages",
                value: unreadCount,
                icon: Mail,
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-500/20 to-orange-500/20",
                trend: "+5",
                trendUp: true,
              },
              {
                label: "New Inquiries",
                value: statusCounts.new,
                icon: AlertCircle,
                gradient: "from-emerald-500 to-green-500",
                bgGradient: "from-emerald-500/20 to-green-500/20",
                trend: "+3",
                trendUp: true,
              },
              {
                label: "In Progress",
                value: statusCounts.in_progress,
                icon: Clock,
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/20 to-pink-500/20",
                trend: "2 active",
                trendUp: false,
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                      stat.trendUp ? 'text-emerald-300 bg-emerald-500/20' : 'text-blue-300 bg-blue-500/20'
                    }`}>
                      {stat.trendUp && <TrendingUp className="w-3 h-3" />}
                      {stat.trend}
                    </span>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                label: "Total Blogs",
                value: blogStats.totalBlogs,
                icon: FileText,
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: "from-blue-500/20 to-cyan-500/20",
                trend: "+8%",
              },
              {
                label: "Categories",
                value: blogStats.categories.length,
                icon: Tag,
                gradient: "from-purple-500 to-pink-500",
                bgGradient: "from-purple-500/20 to-pink-500/20",
                trend: "active",
              },
              {
                label: "Published",
                value: blogStats.totalBlogs,
                icon: CheckCircle,
                gradient: "from-emerald-500 to-green-500",
                bgGradient: "from-emerald-500/20 to-green-500/20",
                trend: "100%",
              },
              {
                label: "Most Popular",
                value: blogStats.categories[0]?.category || "N/A",
                icon: Eye,
                gradient: "from-amber-500 to-orange-500",
                bgGradient: "from-amber-500/20 to-orange-500/20",
                trend: "views",
              },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-lg`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-full">
                      {stat.trend}
                    </span>
                  </div>

                  <div>
                    <p className="text-3xl font-bold text-white mb-1">
                      {typeof stat.value === 'string' ? stat.value : stat.value}
                    </p>
                    <p className="text-sm text-slate-400 font-medium">
                      {stat.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filters & Search */}
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
              <input
                type="text"
                placeholder={activeTab === "contacts" ? "Search by name, email, or company..." : "Search by title, author, or category..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
              />
            </div>

            <div className="flex gap-3">
              {activeTab === "contacts" ? (
                <div className="relative">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="appearance-none pl-4 pr-10 py-3.5 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer min-w-[160px]"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="archived">Archived</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              ) : (
                <button
                  onClick={handleCreateBlog}
                  className="px-5 py-3.5 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl text-sm font-semibold hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  New Blog
                </button>
              )}

              <button className="px-5 py-3.5 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/50 transition-all flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Content Table */}
        {activeTab === "contacts" ? (
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden">
            {contactsLoading ? (
              <div className="py-16 text-center">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-400" />
                <p className="text-slate-300 font-medium">Loading submissions...</p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="py-16 text-center">
                <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-300 font-medium mb-1">No submissions found</p>
                <p className="text-sm text-slate-500">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900/50 border-b border-slate-700/50">
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Company
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Topic
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/30">
                    {filteredSubmissions.map((submission) => (
                      <tr
                        key={submission.id}
                        onClick={() => handleViewSubmission(submission)}
                        className={`hover:bg-slate-800/40 cursor-pointer transition-all duration-200 group ${
                          !submission.isRead ? "bg-blue-500/5" : ""
                        }`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                                <span className="text-sm font-bold text-white">
                                  {submission.firstName[0]}{submission.lastName[0]}
                                </span>
                              </div>
                              {!submission.isRead && (
                                <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-slate-800 shadow-lg shadow-blue-500/50 animate-pulse" />
                              )}
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white">
                                {submission.firstName} {submission.lastName}
                              </div>
                              <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                                <Mail className="w-3 h-3" />
                                {submission.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Building className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium text-slate-200">
                              {submission.company}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-sm text-slate-300">
                            {submission.description}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {getStatusBadge(submission.status)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-sm text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {new Date(submission.submittedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleViewSubmission(submission);
                              }}
                              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                            >
                              <Eye className="w-4 h-4 text-slate-300" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(submission.id);
                              }}
                              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden">
            {blogsLoading ? (
              <div className="py-16 text-center">
                <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-slate-400" />
                <p className="text-slate-300 font-medium">Loading blogs...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="py-16 text-center">
                <FileText className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-300 font-medium mb-1">No blogs found</p>
                <p className="text-sm text-slate-500 mb-4">Start by creating your first blog post</p>
                <button
                  onClick={handleCreateBlog}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-lg hover:from-emerald-500 hover:to-green-500 transition-all flex items-center gap-2 mx-auto shadow-lg"
                >
                  <Plus className="w-4 h-4" />
                  Create Blog
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-900/50 border-b border-slate-700/50">
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Blog
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/30">
                    {blogs.map((blog) => (
                      <tr
                        key={blog.id}
                        className="hover:bg-slate-800/40 cursor-pointer transition-all duration-200 group"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              {blog.image ? (
                                <img
                                  src={blog.image}
                                  alt={blog.title}
                                  className="w-12 h-12 rounded-xl object-cover border border-slate-700/50"
                                />
                              ) : (
                                <div className="w-12 h-12 rounded-xl bg-slate-700/50 flex items-center justify-center">
                                  <FileText className="w-5 h-5 text-slate-400" />
                                </div>
                              )}
                            </div>
                            <div className="max-w-sm">
                              <div className="text-sm font-semibold text-white line-clamp-1">
                                {blog.title}
                              </div>
                              <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {blog.excerpt}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-400/30">
                            <Tag className="w-3 h-3" />
                            {blog.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-slate-500" />
                            <span className="text-sm font-medium text-slate-200">
                              {blog.author}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-1.5 text-sm text-slate-400">
                            <Calendar className="w-4 h-4" />
                            {new Date(blog.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleEditBlog(blog);
                              }}
                              className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                            >
                              <Edit className="w-4 h-4 text-slate-300" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteBlog(blog.id);
                              }}
                              className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4 text-red-400" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Submission Detail Modal */}
        {isDetailModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsDetailModalOpen(false)}>
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-blue-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/20 rounded-xl border border-blue-500/30">
                      <MessageSquare className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Submission Details
                      </h2>
                      {selectedSubmission && (
                        <p className="text-sm text-slate-400">
                          ID: {selectedSubmission.id}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsDetailModalOpen(false)}
                    className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              {selectedSubmission && (
                <div className="overflow-y-auto px-8 py-6 max-h-[calc(90vh-180px)]">
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          First Name
                        </label>
                        <p className="text-sm font-medium text-white">
                          {selectedSubmission.firstName}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Last Name
                        </label>
                        <p className="text-sm font-medium text-white">
                          {selectedSubmission.lastName}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Email Address
                        </label>
                        <p className="text-sm font-medium text-white flex items-center gap-2">
                          <Mail className="w-4 h-4 text-slate-500" />
                          {selectedSubmission.email}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <p className="text-sm font-medium text-white flex items-center gap-2">
                          <Phone className="w-4 h-4 text-slate-500" />
                          {selectedSubmission.phone}
                        </p>
                      </div>
                      <div className="col-span-2 space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Company
                        </label>
                        <p className="text-sm font-medium text-white flex items-center gap-2">
                          <Building className="w-4 h-4 text-slate-500" />
                          {selectedSubmission.company}
                        </p>
                      </div>
                    </div>

                    {/* Description & Message */}
                    <div className="space-y-4 pt-4 border-t border-slate-700/50">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Description
                        </label>
                        <p className="text-sm text-slate-200 bg-slate-900/50 px-4 py-3 rounded-xl border border-slate-700/30">
                          {selectedSubmission.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Message
                        </label>
                        <div className="bg-slate-900/50 px-4 py-3 rounded-xl border border-slate-700/30">
                          <p className="text-sm text-slate-200 whitespace-pre-wrap">
                            {selectedSubmission.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Status & Date */}
                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-700/50">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Current Status
                        </label>
                        <div>{getStatusBadge(selectedSubmission.status)}</div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Submitted Date
                        </label>
                        <p className="text-sm text-white flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-500" />
                          {new Date(selectedSubmission.submittedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-6 border-t border-slate-700/50">
                      <div className="relative flex-1">
                        <select
                          value={selectedSubmission.status}
                          onChange={(e) =>
                            handleStatusUpdate(
                              selectedSubmission.id,
                              e.target.value as "new" | "in_progress" | "completed" | "archived"
                            )
                          }
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer"
                        >
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="archived">Archived</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>

                      <button
                        onClick={() => handleDelete(selectedSubmission.id)}
                        className="px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-medium text-red-300 hover:bg-red-500/30 transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Blog Detail/Edit Modal */}
        {isBlogDetailModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsBlogDetailModalOpen(false)}>
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-emerald-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                      <FileText className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        {selectedBlog ? "Edit Blog" : "Blog Details"}
                      </h2>
                      {selectedBlog && (
                        <p className="text-sm text-slate-400">
                          ID: {selectedBlog.id}
                        </p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setIsBlogDetailModalOpen(false)}
                    className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <form onSubmit={handleBlogUpdate} className="overflow-y-auto px-8 py-6 max-h-[calc(90vh-180px)]">
                <div className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Title *</label>
                    <input
                      type="text"
                      value={blogFormData.title}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      placeholder="Enter blog title"
                      required
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Excerpt *</label>
                    <textarea
                      value={blogFormData.excerpt}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                      placeholder="Brief description of the blog post"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Category & Author */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Category *</label>
                      <input
                        type="text"
                        value={blogFormData.category}
                        onChange={(e) => setBlogFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="e.g., Technology, Business"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Author *</label>
                      <input
                        type="text"
                        value={blogFormData.author}
                        onChange={(e) => setBlogFormData(prev => ({ ...prev, author: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="Author name"
                        required
                      />
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Image URL</label>
                    <input
                      type="url"
                      value={blogFormData.image}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Content *</label>
                    <textarea
                      value={blogFormData.body}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, body: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                      placeholder="Full blog content"
                      rows={8}
                      required
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-6 border-t border-slate-700/50">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl text-sm font-semibold hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      Update Blog
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsBlogDetailModalOpen(false)}
                      className="px-6 py-3 bg-slate-700/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>

                    {selectedBlog && (
                      <button
                        type="button"
                        onClick={() => handleDeleteBlog(selectedBlog.id)}
                        className="px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-medium text-red-300 hover:bg-red-500/30 transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Create Blog Modal */}
        {isCreateBlogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsCreateBlogModalOpen(false)}>
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/80 to-emerald-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                      <Plus className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">
                        Create New Blog
                      </h2>
                      <p className="text-sm text-slate-400">
                        Add a new blog post to your collection
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsCreateBlogModalOpen(false)}
                    className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-400" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <form onSubmit={handleBlogSubmit} className="overflow-y-auto px-8 py-6 max-h-[calc(90vh-180px)]">
                <div className="space-y-6">
                  {/* Title */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Title *</label>
                    <input
                      type="text"
                      value={blogFormData.title}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, title: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      placeholder="Enter blog title"
                      required
                    />
                  </div>

                  {/* Excerpt */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Excerpt *</label>
                    <textarea
                      value={blogFormData.excerpt}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, excerpt: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                      placeholder="Brief description of the blog post"
                      rows={3}
                      required
                    />
                  </div>

                  {/* Category & Author */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Category *</label>
                      <input
                        type="text"
                        value={blogFormData.category}
                        onChange={(e) => setBlogFormData(prev => ({ ...prev, category: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="e.g., Technology, Business"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300">Author *</label>
                      <input
                        type="text"
                        value={blogFormData.author}
                        onChange={(e) => setBlogFormData(prev => ({ ...prev, author: e.target.value }))}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="Author name"
                        required
                      />
                    </div>
                  </div>

                  {/* Image URL */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Image URL</label>
                    <input
                      type="url"
                      value={blogFormData.image}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, image: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Body */}
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300">Content *</label>
                    <textarea
                      value={blogFormData.body}
                      onChange={(e) => setBlogFormData(prev => ({ ...prev, body: e.target.value }))}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                      placeholder="Full blog content"
                      rows={8}
                      required
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-6 border-t border-slate-700/50">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl text-sm font-semibold hover:from-emerald-500 hover:to-green-500 transition-all shadow-lg flex items-center justify-center gap-2"
                    >
                      Create Blog
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsCreateBlogModalOpen(false)}
                      className="px-6 py-3 bg-slate-700/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setIsDeleteModalOpen(false)}>
            <div className="relative w-full max-w-md bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-700/50 bg-gradient-to-r from-red-900/30 to-slate-900/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/20 rounded-xl border border-red-500/30">
                    <Trash2 className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">
                      Delete Blog Post
                    </h2>
                    <p className="text-sm text-slate-400">
                      This action cannot be undone
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-6 py-6">
                <p className="text-slate-200 mb-6">
                  Are you sure you want to delete this blog post? This action cannot be undone and will permanently remove the blog post from your collection.
                </p>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setIsDeleteModalOpen(false)}
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-700 transition-colors"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={confirmDeleteBlog}
                    className="flex-1 px-4 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-sm font-medium text-red-300 hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
