"use client";
// src/components/ui/CafeInput.tsx
// OS-style inset input field — matches classic browser form style.

import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./CafeInput.module.css";

interface CafeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CafeInput = forwardRef<HTMLInputElement, CafeInputProps>(
  ({ label, id, className = "", ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`${styles.input} ${className}`}
          {...props}
        />
      </div>
    );
  }
);

CafeInput.displayName = "CafeInput";
export default CafeInput;
