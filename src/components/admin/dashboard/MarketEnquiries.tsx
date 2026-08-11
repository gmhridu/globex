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
  Calendar,
  ChevronDown,
  Globe,
  Tag,
  X,
  TrendingUp,
} from "lucide-react";

interface MarketSubmission {
  id: string;
  name: string;
  country: string;
  sector: string;
  message: string;
  status: "new" | "in_progress" | "completed" | "archived";
  isRead: boolean;
  submittedAt: string;
  updatedAt: string;
}

const MarketEnquiries = () => {
  const [submissions, setSubmissions] = useState<MarketSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "all" | "new" | "in_progress" | "completed" | "archived"
  >("all");
  const [selected, setSelected] = useState<MarketSubmission | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/our-markets-contacts");
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        } else {
          console.error("Failed to fetch market enquiries");
          setSubmissions([]);
        }
      } catch (error) {
        console.error("Error fetching market enquiries:", error);
        setSubmissions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const statusCounts = {
    new: submissions.filter((s) => s.status === "new").length,
    in_progress: submissions.filter((s) => s.status === "in_progress").length,
    completed: submissions.filter((s) => s.status === "completed").length,
    archived: submissions.filter((s) => s.status === "archived").length,
  };

  const unreadCount = submissions.filter((s) => !s.isRead).length;
  const totalCount = submissions.length;

  const handleStatusUpdate = (
    id: string,
    status: "new" | "in_progress" | "completed" | "archived"
  ) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
    setSelected((prev) => (prev && prev.id === id ? { ...prev, status } : prev));
  };

  const handleMarkAsRead = (id: string) => {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isRead: true } : s))
    );
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this enquiry?")) {
      setSubmissions((prev) => prev.filter((s) => s.id !== id));
      setModalOpen(false);
      setSelected(null);
    }
  };

  const handleView = (submission: MarketSubmission) => {
    setSelected(submission);
    setModalOpen(true);
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

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.new;
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border shadow-sm ${config.color}`}
      >
        <Icon className="w-3.5 h-3.5" />
        {config.label}
      </span>
    );
  };

  const filteredSubmissions = submissions.filter((submission) => {
    const matchesSearch =
      !searchTerm ||
      submission.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.sector.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || submission.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          {
            label: "Total Enquiries",
            value: totalCount,
            icon: MessageSquare,
            gradient: "from-blue-500 to-cyan-500",
            bgGradient: "from-blue-500/20 to-cyan-500/20",
            trend: "total",
            trendUp: true,
          },
          {
            label: "Unread Messages",
            value: unreadCount,
            icon: Mail,
            gradient: "from-amber-500 to-orange-500",
            bgGradient: "from-amber-500/20 to-orange-500/20",
            trend: "new",
            trendUp: true,
          },
          {
            label: "New Inquiries",
            value: statusCounts.new,
            icon: AlertCircle,
            gradient: "from-emerald-500 to-green-500",
            bgGradient: "from-emerald-500/20 to-green-500/20",
            trend: "new",
            trendUp: true,
          },
          {
            label: "In Progress",
            value: statusCounts.in_progress,
            icon: Clock,
            gradient: "from-purple-500 to-pink-500",
            bgGradient: "from-purple-500/20 to-pink-500/20",
            trend: "active",
            trendUp: false,
          },
        ].map((stat, index) => (
          <div
            key={stat.label}
            className="relative bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 group overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div
              className={`absolute inset-0 bg-linear-to-br ${stat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            ></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-3 rounded-xl bg-linear-to-br ${stat.gradient} shadow-lg`}
                >
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <span
                  className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                    stat.trendUp
                      ? "text-emerald-300 bg-emerald-500/20"
                      : "text-blue-300 bg-blue-500/20"
                  }`}
                >
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

      {/* Filters & Search */}
      <div className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" />
            <input
              type="text"
              placeholder="Search by name, country, or sector..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
            />
          </div>

          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) =>
                setStatusFilter(
                  e.target.value as
                    | "all"
                    | "new"
                    | "in_progress"
                    | "completed"
                    | "archived"
                )
              }
              className="appearance-none pl-4 pr-10 py-3.5 bg-slate-900/50 border border-slate-700/50 rounded-xl text-sm font-medium text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all cursor-pointer min-w-40"
            >
              <option value="all">All Status</option>
              <option value="new">New</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
              <option value="archived">Archived</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-700/50 overflow-hidden">
        {loading ? (
          <div className="py-16 text-center">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-400" />
            <p className="text-slate-300 font-medium">Loading enquiries...</p>
          </div>
        ) : filteredSubmissions.length === 0 ? (
          <div className="py-16 text-center">
            <MessageSquare className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <p className="text-slate-300 font-medium mb-1">No enquiries found</p>
            <p className="text-sm text-slate-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-900/50 border-b border-slate-700/50">
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Enquirer
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Country
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Sector
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
                    onClick={() => handleView(submission)}
                    className={`hover:bg-slate-800/40 cursor-pointer transition-all duration-200 group ${
                      !submission.isRead ? "bg-blue-500/5" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-11 h-11 rounded-xl bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                            <span className="text-sm font-bold text-white">
                              {submission.name[0]}
                            </span>
                          </div>
                          {!submission.isRead && (
                            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-slate-800 shadow-lg shadow-blue-500/50 animate-pulse" />
                          )}
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {submission.name}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-500" />
                        <span className="text-sm font-medium text-slate-200">
                          {submission.country}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Tag className="w-4 h-4 text-slate-500" />
                        <span className="text-sm text-slate-300">
                          {submission.sector}
                        </span>
                      </div>
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
                            handleView(submission);
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

      {/* Enquiry Detail Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-linear-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-slate-700/50 bg-linear-to-r from-slate-800/80 to-blue-900/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-xl border border-blue-500/30">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      Market Enquiry
                    </h2>
                    {selected && (
                      <p className="text-sm text-slate-400">ID: {selected.id}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            {selected && (
              <div className="overflow-y-auto px-8 py-6 max-h-[calc(90vh-180px)]">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Name
                      </label>
                      <p className="text-sm font-medium text-white">
                        {selected.name}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Country
                      </label>
                      <p className="text-sm font-medium text-white flex items-center gap-2">
                        <Globe className="w-4 h-4 text-slate-500" />
                        {selected.country}
                      </p>
                    </div>
                    <div className="col-span-2 space-y-1">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Sector
                      </label>
                      <p className="text-sm font-medium text-white flex items-center gap-2">
                        <Tag className="w-4 h-4 text-slate-500" />
                        {selected.sector}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-slate-700/50">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Message
                      </label>
                      <div className="bg-slate-900/50 px-4 py-3 rounded-xl border border-slate-700/30">
                        <p className="text-sm text-slate-200 whitespace-pre-wrap">
                          {selected.message || "No message provided."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-700/50">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Current Status
                      </label>
                      <div>{getStatusBadge(selected.status)}</div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Submitted Date
                      </label>
                      <p className="text-sm text-white flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        {new Date(selected.submittedAt).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-6 border-t border-slate-700/50">
                    <div className="relative flex-1">
                      <select
                        value={selected.status}
                        onChange={(e) =>
                          handleStatusUpdate(
                            selected.id,
                            e.target.value as
                              | "new"
                              | "in_progress"
                              | "completed"
                              | "archived"
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
                      onClick={() => handleDelete(selected.id)}
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
    </>
  );
};

export default MarketEnquiries;
