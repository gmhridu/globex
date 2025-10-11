"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LockKeyhole, Mail, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import Button from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { signInAdminAction } from "@/app/(admin)/admin/login/action";

// ✅ Enhanced validation schema using Zod
const formSchema = z.object({
  identifier: z
    .string()
    .min(1, "Email or phone is required")
    .refine(
      (value) => {
        // Check if it's a valid email or phone number
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return emailRegex.test(value) || phoneRegex.test(value.replace(/[\s\-\(\)]/g, ""));
      },
      "Please enter a valid email address or phone number"
    ),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(50, "Password too long")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  rememberMe: z.boolean().optional(),
});

type FormValues = z.infer<typeof formSchema>;

// Type guard to safely check if error is an Error instance
const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

const AdminLoginForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
      rememberMe: false,
    },
    mode: "onChange",
  });

  // Load remembered credentials on mount
  useEffect(() => {
    const rememberMe = localStorage.getItem("adminRememberMe");
    const savedIdentifier = localStorage.getItem("adminIdentifier");

    if (rememberMe === "true" && savedIdentifier) {
      form.setValue("identifier", savedIdentifier);
      form.setValue("rememberMe", true);
    }
  }, [form]);

  const onSubmit = async (values: FormValues) => {
    setError(null);
    setLoading(true);
    setIsSuccess(false);

    try {
      // Handle remember me functionality
      if (values.rememberMe) {
        localStorage.setItem("adminRememberMe", "true");
        localStorage.setItem("adminIdentifier", values.identifier);
      } else {
        localStorage.removeItem("adminRememberMe");
        localStorage.removeItem("adminIdentifier");
      }

      await signInAdminAction(values.identifier, values.password);

      // If we reach here, login was successful and redirect happened
      setIsSuccess(true);
      toast.success("Login successful!");

    } catch (error: unknown) {
      console.error("Login error:", error);

      // Don't show error for redirect
      if (isError(error) && error.message.includes("NEXT_REDIRECT")) {
        return; // Redirect is happening, don't show error
      }

      let errorMessage = "Login failed. Please check your credentials.";

      if (isError(error)) {
        // Handle specific error types
        if (error.message.includes("Invalid credentials")) {
          errorMessage = "Invalid email/phone or password. Please try again.";
        } else if (error.message.includes("Account not found")) {
          errorMessage = "Account not found. Please check your email/phone.";
        } else if (error.message.includes("Account disabled")) {
          errorMessage = "Account is disabled. Please contact support.";
        } else if (!error.message.includes("NEXT_REDIRECT")) {
          errorMessage = error.message;
        }
      }

      if (!errorMessage.includes("NEXT_REDIRECT")) {
        setError(errorMessage);
        toast.error("Authentication Failed");
      }
    } finally {
      if (!error || (isError(error) && !error.message.includes("NEXT_REDIRECT"))) {
        setLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-orange-400/20 to-amber-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <Card className="relative w-full max-w-md shadow-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl border-0 ring-1 ring-black/5 dark:ring-white/10">
        <CardHeader className="space-y-1 pb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur opacity-75 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 p-3 rounded-full">
                <LockKeyhole className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
          <CardTitle className="text-center text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-200 dark:to-slate-400 bg-clip-text text-transparent">
            Welcome Back
          </CardTitle>
          <p className="text-center text-slate-600 dark:text-slate-400 text-sm">
            Sign in to access your admin dashboard
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <Form {...form}>
            {/* Enhanced Error Display */}
            {error && (
              <div className={`p-4 rounded-xl border transition-all duration-300 ${
                error
                  ? "bg-red-50/80 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                  : "bg-green-50/80 dark:bg-green-900/20 border-green-200 dark:border-green-800"
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                    error ? "bg-red-100 dark:bg-red-800" : "bg-green-100 dark:bg-green-800"
                  }`}>
                    {error ? (
                      <AlertCircle className="w-3 h-3 text-red-600 dark:text-red-400" />
                    ) : (
                      <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  <p className={`text-sm font-medium ${
                    error ? "text-red-800 dark:text-red-200" : "text-green-800 dark:text-green-200"
                  }`}>
                    {error}
                  </p>
                </div>
              </div>
            )}

            {/* Success State */}
            {isSuccess && !error && (
              <div className="p-4 rounded-xl bg-green-50/80 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-green-600 dark:text-green-400" />
                  </div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-200">
                    Login successful! Redirecting...
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Email/Phone Field */}
              <FormField
                control={form.control}
                name="identifier"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className={`transition-all duration-200 ${
                      focusedField === "identifier" || field.value
                        ? "text-amber-600 dark:text-amber-400 text-sm -translate-y-1"
                        : "text-slate-600 dark:text-slate-400"
                    }`}>
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200 ${
                          focusedField === "identifier" || field.value
                            ? "text-amber-600 dark:text-amber-400"
                            : "text-slate-400 dark:text-slate-500"
                        }`} />
                        <Input
                          placeholder="admin@example.com"
                          type="text"
                          className={`pl-11 h-12 bg-white/50 dark:bg-slate-800/50 border-2 transition-all duration-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 ${
                            fieldState.error
                              ? "border-red-300 dark:border-red-600 bg-red-50/50 dark:bg-red-900/20"
                              : focusedField === "identifier"
                                ? "border-amber-500 bg-amber-50/50 dark:bg-amber-900/20"
                                : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                          }`}
                          {...field}
                          onFocus={() => setFocusedField("identifier")}
                          onBlur={() => setFocusedField(null)}
                          disabled={loading}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600 dark:text-red-400 text-sm mt-1" />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className={`transition-all duration-200 ${
                      focusedField === "password" || field.value
                        ? "text-amber-600 dark:text-amber-400 text-sm -translate-y-1"
                        : "text-slate-600 dark:text-slate-400"
                    }`}>
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your password"
                          type={showPassword ? "text" : "password"}
                          className={`pr-11 h-12 bg-white/50 dark:bg-slate-800/50 border-2 transition-all duration-200 focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 ${
                            fieldState.error
                              ? "border-red-300 dark:border-red-600 bg-red-50/50 dark:bg-red-900/20"
                              : focusedField === "password"
                                ? "border-amber-500 bg-amber-50/50 dark:bg-amber-900/20"
                                : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
                          }`}
                          {...field}
                          onFocus={() => setFocusedField("password")}
                          onBlur={() => setFocusedField(null)}
                          disabled={loading}
                        />
                        <button
                          type="button"
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
                          onClick={() => setShowPassword(!showPassword)}
                          disabled={loading}
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-600 dark:text-red-400 text-sm mt-1" />
                  </FormItem>
                )}
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          disabled={loading}
                          className="w-4 h-4 text-blue-600 bg-white/50 border-slate-300 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                        />
                      </FormControl>
                      <FormLabel className="text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                        Remember me
                      </FormLabel>
                    </FormItem>
                  )}
                />
              </div>

              {/* Enhanced Submit Button */}
              <Button
                type="submit"
                disabled={loading || isSuccess}
                className="w-full h-12 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:scale-100 disabled:opacity-70"
              >
                {loading ? (
                  <div className="flex items-center space-x-3">
                    <Spinner className="w-5 h-5" />
                    <span>Signing in...</span>
                  </div>
                ) : isSuccess ? (
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5" />
                    <span>Success!</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLoginForm;

