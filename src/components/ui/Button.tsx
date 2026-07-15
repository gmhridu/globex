"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self';
  animate?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  target,
  animate = true,
}) => {
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold text-center
    border-2 rounded-full
    cursor-pointer
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    text-transform uppercase
    letter-spacing-wide
  `;

  const variantClasses = {
    primary: `
      bg-primary-500 text-black border-primary-500
      hover:bg-white hover:text-black
      focus:ring-primary-500
    `,
    secondary: `
      bg-transparent text-primary-500 border-primary-500
      hover:bg-dark-900 hover:text-white
      focus:ring-primary-500
    `,
    dark: `
      bg-dark-900 text-white border-dark-900
      hover:bg-primary-500 hover:text-black hover:border-primary-500
      focus:ring-dark-900
    `,
    outline: `
      bg-transparent text-gray-900 border-gray-300
      hover:bg-gray-900 hover:text-white hover:border-gray-900
      focus:ring-gray-500
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  const content = (
    <>
      {loading && (
        <svg
          className={`animate-spin -ml-1 mr-3 h-5 w-5 ${
            variant === 'primary' ? 'text-black' : 'text-current'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      )}

      {Icon && iconPosition === 'left' && !loading && (
        <Icon className="w-5 h-5 mr-2" />
      )}

      <span>{children}</span>

      {Icon && iconPosition === 'right' && !loading && (
        <motion.div
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
          className="ml-2"
        >
          <Icon className="w-5 h-5" />
        </motion.div>
      )}
    </>
  );

  const buttonProps = {
    className: classes,
    disabled: disabled || loading,
    onClick,
    type,
  };

  if (href) {
    const Component = animate ? motion.div : 'div';
    const motionProps = animate
      ? {
          whileHover: { scale: 1.02 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.2 },
        }
      : {};

    return (
      <Component {...motionProps} className="inline-block">
        <Link
          href={href}
          {...(target && { target, rel: target === '_blank' ? 'noopener noreferrer' : undefined })}
          className={classes}
        >
          {content}
        </Link>
      </Component>
    );
  }

  const Component = animate ? motion.button : 'button';
  const motionProps = animate
    ? {
        whileHover: { scale: disabled ? 1 : 1.02 },
        whileTap: { scale: disabled ? 1 : 0.98 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <Component {...buttonProps} {...motionProps}>
      {content}
    </Component>
  );
};

export default Button;
