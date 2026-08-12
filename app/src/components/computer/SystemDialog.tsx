"use client";
// src/components/computer/SystemDialog.tsx
// Classic OS dialog popup for receipts, warnings, and alerts.

import { ReactNode } from "react";
import styles from "./SystemDialog.module.css";

interface SystemDialogProps {
  title?: string;
  children: ReactNode;
  onClose?: () => void;
}

export default function SystemDialog({
  title = "SESSION_START.EXE",
  children,
  onClose,
}: SystemDialogProps) {
  return (
    <div className={styles.backdrop} role="dialog" aria-modal="true" aria-labelledby="dialog-title">
      <div className={styles.modalBox}>
        {/* Title bar */}
        <div className={styles.modalHeader}>
          <span id="dialog-title" className={styles.modalTitle}>
            {title}
          </span>
          {onClose && (
            <button className={styles.closeBtn} onClick={onClose} aria-label="Close dialog">
              <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>
                close
              </span>
            </button>
          )}
        </div>
        {/* Body */}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
