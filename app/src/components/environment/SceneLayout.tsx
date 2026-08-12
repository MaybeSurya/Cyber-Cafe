"use client";

import { ReactNode, useMemo } from "react";
import { useScene } from "./SceneProvider";
import styles from "./SceneLayout.module.css";

interface SceneLayoutProps {
  children: ReactNode;
  header?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
  bottomNav?: ReactNode;
}

export function SceneLayout({
  children,
  header,
  sidebar,
  footer,
  bottomNav,
}: SceneLayoutProps) {
  const { viewport, currentView } = useScene();

  const layoutClass = useMemo(() => {
    if (viewport.isMobile) return styles.mobile;
    if (viewport.isTablet) return styles.tablet;
    if (viewport.isWideDesktop) return styles.wideDesktop;
    return styles.desktop;
  }, [viewport]);

  return (
    <div className={`${styles.container} ${layoutClass}`}>
      {/* Header - always present */}
      <header className={styles.header} role="banner">
        {header}
      </header>

      <div className={styles.mainWrapper}>
        {/* Sidebar - desktop/tablet only, collapsible on tablet */}
        {(sidebar && !viewport.isMobile) && (
          <aside className={styles.sidebar} role="complementary" aria-label="Station controls">
            {sidebar}
          </aside>
        )}

        {/* Main content area */}
        <main className={styles.main} role="main">
          {children}
        </main>
      </div>

      {/* Footer - desktop/tablet only */}
      {(footer && !viewport.isMobile) && (
        <footer className={styles.footer} role="contentinfo">
          {footer}
        </footer>
      )}

      {/* Mobile bottom navigation */}
      {(bottomNav && viewport.isMobile) && (
        <nav className={styles.bottomNav} role="navigation" aria-label="Mobile navigation">
          {bottomNav}
        </nav>
      )}
    </div>
  );
}

export default SceneLayout;