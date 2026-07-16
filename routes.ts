/**
 * An Array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes: string[] = [
  "/",
  "/about",
  "/contact",
  "/careers",
  "/our-markets",
  "/industries",
  "/tailored-solutions"
];

/**
 * An Array of routes that are protected
 * These routes require authentication
 * @type {string[]}
 */

export const protectedRoutes: string[] = ["/admin/*"];

/**
 * An Array of routes that are accessible to the public
 * Routes that start with this (/api/auth) prefix do not require authentication
 * @type {string[]}
 */

export const authRoutes: string[] = [
  "/admin/login", // Added leading slash
];

/**
 * An Array of routes that are accessible to the public
 * Routes that start with this (/api/auth) prefix do not require authentication
 * @type {string}
 */

export const apiAuthPrefix: string = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/admin/dashboard"; // Changed to redirect to home page after login
