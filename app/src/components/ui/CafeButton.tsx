"use client";
// src/components/ui/CafeButton.tsx
// Physical bevel-style button — matches Stitch design system.
// Simulates molded plastic with a 1-2px press on click.

import { ButtonHTMLAttributes, forwardRef } from "react";
import styles from "./CafeButton.module.css";

interface CafeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const CafeButton = forwardRef<HTMLButtonElement, CafeButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const variantClass = styles[variant];
    const sizeClass = styles[`size-${size}`];

    return (
      <button
        ref={ref}
        className={`${styles.base} ${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

CafeButton.displayName = "CafeButton";
export default CafeButton;
