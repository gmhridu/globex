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
} from "lucide-react";
import { useTRPC } from "@/trpc/client";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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

  const trpc = useTRPC();
  const queryClient = useQueryClient();

  const getContactFormQuery = trpc.admin.getAllSubmissions.queryOptions(
    {
      limit: 50,
      offset: 0,
      status: statusFilter === "all" ? undefined : statusFilter,
    },
  );

  const { data, isLoading, error, refetch } = useQuery(getContactFormQuery);

  const getStatusCountsQuery = trpc.admin.getStatusCounts.queryOptions(undefined);
  const { data: statusData } = useQuery(getStatusCountsQuery);

  const statusCounts = statusData || { new: 0, in_progress: 0, completed: 0, archived: 0 };

  const getUnreadCount = trpc.admin.getUnreadCount.queryOptions(undefined);
  const { data: unreadData } = useQuery(getUnreadCount);

  // Listen for cross-tab updates
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const bc = new BroadcastChannel('contact-submissions');
      bc.onmessage = (event) => {
        if (event.data.type === 'new-submission') {
          queryClient.invalidateQueries({ queryKey: ['admin', 'getAllSubmissions'] });
          queryClient.invalidateQueries({ queryKey: ['admin', 'getStatusCounts'] });
          queryClient.invalidateQueries({ queryKey: ['admin', 'getUnreadCount'] });
        }
      };
      return () => bc.close();
    }
  }, [queryClient]);

  const updateSubmission = trpc.admin.updateSubmission.mutationOptions({
    onSuccess: () => {
      refetch();
    },
  });

  const updateSubmissionMutation = useMutation(updateSubmission);

  const deleteSubmission = trpc.admin.deleteSubmission.mutationOptions({
    onSuccess: () => {
      refetch();
      setIsDetailModalOpen(false);
    },
  });

  const deleteSubmissionMutation = useMutation(deleteSubmission);

  const handleStatusUpdate = (
    id: string,
    status: "new" | "in_progress" | "completed" | "archived"
  ) => {
    updateSubmissionMutation.mutate({ id, status });
  };

  const handleMarkAsRead = (id: string) => {
    updateSubmissionMutation.mutate({ id, isRead: true });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this submission?")) {
      deleteSubmissionMutation.mutate({ id });
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
        color: "bg-blue-500/10 text-blue-700 border-blue-200/50",
        icon: AlertCircle,
        label: "New",
      },
      in_progress: {
        color: "bg-amber-500/10 text-amber-700 border-amber-200/50",
        icon: Clock,
        label: "In Progress",
      },
      completed: {
        color: "bg-emerald-500/10 text-emerald-700 border-emerald-200/50",
        icon: CheckCircle,
        label: "Completed",
      },
      archived: {
        color: "bg-slate-500/10 text-slate-700 border-slate-200/50",
        icon: Archive,
        label: "Archived",
      },
    };

    const config =
      statusConfig[status as keyof typeof statusConfig] || statusConfig.new;
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${config.color}`}
      >
        <Icon className="w-3.5 h-3.5" />
        {config.label}
      </span>
    );
  };

  const filteredSubmissions = (data?.submissions as ContactSubmission[])?.filter(
    (submission: ContactSubmission) => {
      if (!searchTerm) return true;
      const searchLower = searchTerm.toLowerCase();
      return (
        submission.firstName.toLowerCase().includes(searchLower) ||
        submission.lastName.toLowerCase().includes(searchLower) ||
        submission.email.toLowerCase().includes(searchLower) ||
        submission.company.toLowerCase().includes(searchLower)
      );
    }
  );

  const totalSubmissions =
    (statusCounts?.new || 0) +
    (statusCounts?.in_progress || 0) +
    (statusCounts?.completed || 0) +
    (statusCounts?.archived || 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-1">
                Contact Management
              </h1>
              <p className="text-slate-600 text-sm">
                Monitor and manage customer inquiries in real-time
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button
                onClick={() => refetch()}
                disabled={isLoading}
                className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl text-sm font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-sm shadow-blue-500/20 disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              label: "Total Submissions",
              value: totalSubmissions,
              icon: MessageSquare,
              bgColor: "bg-blue-500/10",
              iconColor: "text-blue-600",
              trend: "+12%",
            },
            {
              label: "Unread Messages",
              value: unreadData?.count || 0,
              icon: Mail,
              bgColor: "bg-amber-500/10",
              iconColor: "text-amber-600",
              trend: "+5",
            },
            {
              label: "New Inquiries",
              value: statusCounts?.new || 0,
              icon: AlertCircle,
              bgColor: "bg-emerald-500/10",
              iconColor: "text-emerald-600",
              trend: "+3",
            },
            {
              label: "In Progress",
              value: statusCounts?.in_progress || 0,
              icon: Clock,
              bgColor: "bg-purple-500/10",
              iconColor: "text-purple-600",
              trend: "2 active",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
                </div>
                <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                  {stat.trend}
                </span>
              </div>

              <div>
                <p className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600 font-medium">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search by name, email, or company..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>

            <div className="flex gap-3">
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
                  className="appearance-none pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer min-w-[160px]"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="in_progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
              </div>

              <button className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 hover:bg-slate-100 transition-all flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
          {isLoading ? (
            <div className="py-16 text-center">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-slate-600 font-medium">Loading submissions...</p>
            </div>
          ) : error ? (
            <div className="py-16 text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-slate-900 font-semibold mb-2">Failed to load submissions</p>
              <p className="text-slate-600 text-sm mb-4">Please try again</p>
              <button
                onClick={() => refetch()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Retry
              </button>
            </div>
          ) : filteredSubmissions?.length === 0 ? (
            <div className="py-16 text-center">
              <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <p className="text-slate-600 font-medium mb-1">No submissions found</p>
              <p className="text-sm text-slate-500">
                Try adjusting your search or filters
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Topic
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-right text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredSubmissions?.map((submission: ContactSubmission) => (
                    <tr
                      key={submission.id}
                      onClick={() => handleViewSubmission(submission)}
                      className={`hover:bg-slate-50 cursor-pointer transition-colors group ${
                        !submission.isRead ? "bg-blue-50/30" : ""
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center shadow-sm">
                              <span className="text-sm font-semibold text-white">
                                {(submission.firstName?.[0] || '')}
                                {(submission.lastName?.[0] || '')}
                              </span>
                            </div>
                            {!submission.isRead && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white" />
                            )}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900">
                              {submission.firstName} {submission.lastName}
                            </div>
                            <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <Mail className="w-3 h-3" />
                              {submission.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-slate-400" />
                          <span className="text-sm font-medium text-slate-900">
                            {submission.company}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-slate-600">
                          {submission.description}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {getStatusBadge(submission.status)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-1.5 text-sm text-slate-600">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {new Date(submission.submittedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewSubmission(submission);
                            }}
                            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                          >
                            <Eye className="w-4 h-4 text-slate-600" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(submission.id);
                            }}
                            className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-600" />
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

        {/* Detail Modal */}
        <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-hidden p-0">
            <div className="flex flex-col h-full">
              {/* Modal Header */}
              <div className="px-8 py-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500/10 rounded-xl">
                      <MessageSquare className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">
                        Submission Details
                      </h2>
                      {selectedSubmission && (
                        <p className="text-sm text-slate-600">
                          ID: {selectedSubmission.id}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              {selectedSubmission && (
                <div className="flex-1 overflow-y-auto px-8 py-6">
                  <div className="space-y-6">
                    {/* Contact Info */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          First Name
                        </label>
                        <p className="text-sm font-medium text-slate-900">
                          {selectedSubmission.firstName}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Last Name
                        </label>
                        <p className="text-sm font-medium text-slate-900">
                          {selectedSubmission.lastName}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Email Address
                        </label>
                        <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                          <Mail className="w-4 h-4 text-slate-400" />
                          {selectedSubmission.email}
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                          <Phone className="w-4 h-4 text-slate-400" />
                          {selectedSubmission.phone}
                        </p>
                      </div>
                      <div className="col-span-2 space-y-1">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Company
                        </label>
                        <p className="text-sm font-medium text-slate-900 flex items-center gap-2">
                          <Building className="w-4 h-4 text-slate-400" />
                          {selectedSubmission.company}
                        </p>
                      </div>
                    </div>

                    {/* Description & Message */}
                    <div className="space-y-4 pt-4 border-t border-slate-200">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Description
                        </label>
                        <p className="text-sm text-slate-900 bg-slate-50 px-4 py-3 rounded-xl">
                          {selectedSubmission.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                          Message
                        </label>
                        <div className="bg-slate-50 px-4 py-3 rounded-xl">
                          <p className="text-sm text-slate-900 whitespace-pre-wrap">
                            {selectedSubmission.message}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Status & Date */}
                    <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
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
                        <p className="text-sm text-slate-900 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-slate-400" />
                          {new Date(selectedSubmission.submittedAt).toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-6 border-t border-slate-200">
                      <div className="relative flex-1">
                        <select
                          value={selectedSubmission.status}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                            handleStatusUpdate(
                              selectedSubmission.id,
                              e.target.value as "new" | "in_progress" | "completed" | "archived"
                            )
                          }
                          className="w-full appearance-none pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                        >
                          <option value="new">New</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="archived">Archived</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                      </div>

                      <button
                        onClick={() => handleDelete(selectedSubmission.id)}
                        className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm font-medium text-red-700 hover:bg-red-100 transition-colors flex items-center gap-2"
                      >
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default AdminDashboard;
