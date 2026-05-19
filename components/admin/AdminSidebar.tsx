"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  Home,
  LogOut,
  ChevronLeft,
  ChevronRight,
  UserCog,
  Shield,
  BookOpen,
} from "lucide-react";

interface Props {
  onNavigate?: () => void;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const SIDEBAR_EXPANDED = 260;
export const SIDEBAR_COLLAPSED = 80;

const AdminSidebar = ({ onNavigate, collapsed, onToggleCollapse }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [internalCollapsed, setInternalCollapsed] = useState(false);

  const isControlled = typeof collapsed === "boolean";
  const isCollapsed = isControlled ? collapsed : internalCollapsed;

  const isActive = (href: string) => {
    if (href === "/admin") return pathname === "/admin";
    return pathname.startsWith(href);
  };

  const handleNavigate = () => {
    onNavigate?.();
  };

  const navItems = [
    { name: "Dashboard", href: "/admin", icon: Home },
    { name: "Blog", href: "/admin/blog", icon: BookOpen },
  ];

  return (
    <aside
      className="md:fixed md:left-0 md:top-0 md:z-50 flex h-screen flex-col border-r border-slate-200 bg-white text-zinc-900 shadow-sm transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white w-full md:w-auto"
      style={{
        width: isCollapsed ? SIDEBAR_COLLAPSED : SIDEBAR_EXPANDED,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 p-4 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          {!isCollapsed && (
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow">
              <Shield size={20} />
            </div>
          )}

          {!isCollapsed && (
            <div>
              <h2 className="text-lg font-bold leading-none">Admin Panel</h2>
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                Birds Of Eden
              </p>
            </div>
          )}
        </div>

        <button
          onClick={() => {
            if (isControlled) onToggleCollapse?.();
            else setInternalCollapsed((c) => !c);
          }}
          className="flex size-8 items-center justify-center rounded-full border border-slate-200 bg-slate-100 text-zinc-700 transition hover:bg-slate-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto p-3">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleNavigate}
              title={isCollapsed ? item.name : undefined}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                active
                  ? "bg-primary text-white shadow-sm"
                  : "text-zinc-700 hover:bg-zinc-200 hover:text-primary dark:text-white/80 dark:hover:bg-zinc-700/50 dark:hover:text-primary"
              }`}
            >
              <Icon size={20} className="shrink-0" />
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          {!isCollapsed && (
            <div className="flex size-10 items-center justify-center rounded-full bg-primary text-white shadow">
              <UserCog size={20} />
            </div>
          )}

          {!isCollapsed && (
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-zinc-900 dark:text-white">
                Admin User
              </p>
              <p className="truncate text-sm text-zinc-500 dark:text-zinc-400">
                admin@example.com
              </p>
            </div>
          )}

          <button
            onClick={async () => {
              try {
                await signOut({ callbackUrl: "/auth/signin" });
              } catch {
                router.push("/auth/signin");
              }
            }}
            className="flex size-9 items-center justify-center rounded-full bg-slate-100 text-zinc-700 transition hover:bg-red-100 hover:text-red-600 dark:bg-zinc-800 dark:text-white dark:hover:bg-red-500/20 dark:hover:text-red-400"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AdminSidebar;
