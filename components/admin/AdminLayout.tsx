"use client";

import React, { useMemo, useState, type ReactNode } from "react";
import AdminSidebar, {
  SIDEBAR_COLLAPSED,
  SIDEBAR_EXPANDED,
} from "./AdminSidebar";
import AdminHeader from "./AdminHeader";
import { AnimatePresence, motion } from "framer-motion";

interface AdminLayoutProps {
  children: ReactNode;
  pageTitle?: string;
  user?: {
    name: string;
    role: string;
    image?: string;
  };
}

const AdminLayout = ({ children, pageTitle, user }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const desktopSidebarWidth = useMemo(
    () => (sidebarCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED),
    [sidebarCollapsed],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="md:flex">
        {/* Desktop Sidebar */}
        <div className="hidden md:block">
          <AdminSidebar
            collapsed={sidebarCollapsed}
            onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
          />
        </div>

        {/* Mobile Sidebar Drawer */}
        <AnimatePresence>
          {sidebarOpen && (
            <>
              <motion.div
                className="fixed inset-0 z-40 bg-black/50 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSidebarOpen(false)}
              />

              <motion.div
                className="fixed left-0 top-0 z-50 h-full md:hidden"
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              >
                <AdminSidebar
                  onNavigate={() => setSidebarOpen(false)}
                  collapsed={false}
                  onToggleCollapse={() => {}}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <div
          className="min-h-screen flex-1 transition-all duration-300 md:pl-[var(--sidebar-width)]"
          style={
            {
              "--sidebar-width": `${desktopSidebarWidth}px`,
            } as React.CSSProperties
          }
        >
          <AdminHeader
            toggleSidebar={() => setSidebarOpen(true)}
            title={pageTitle || "Admin Dashboard"}
            user={user}
          />

          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
