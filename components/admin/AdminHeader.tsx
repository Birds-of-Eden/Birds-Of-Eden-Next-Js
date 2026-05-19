"use client";

import React from "react";
import { Bell, Menu, Search, UserCog, ExternalLink } from "lucide-react";
import Link from "next/link";

interface AdminHeaderProps {
  title?: string;
  toggleSidebar?: () => void;
  user?: {
    name: string;
    role: string;
    image?: string;
  };
}

const AdminHeader = ({
  title = "Admin Dashboard",
  toggleSidebar,
  user,
}: AdminHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90">
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:px-6">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <button
            onClick={toggleSidebar}
            className="flex size-10 items-center justify-center rounded-lg bg-slate-100 text-zinc-700 transition hover:bg-slate-200 md:hidden dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700"
          >
            <Menu size={22} />
          </button>

          {/* Title */}
          <div>
            <h1 className="text-lg font-bold text-zinc-900 dark:text-white md:text-xl">
              {title}
            </h1>

            <p className="hidden text-sm text-zinc-500 dark:text-zinc-400 sm:block">
              Birds Of Eden Admin Panel
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden max-w-md flex-1 items-center rounded-full bg-slate-100 px-4 py-2 md:flex dark:bg-zinc-800">
          <Search size={18} className="text-zinc-500" />

          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-zinc-400 dark:text-white"
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          {/* View Site */}
          <Link
            href="/"
            target="_blank"
            className="hidden items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 md:flex"
          >
            <ExternalLink size={16} />
            View Site
          </Link>

          {/* Notification */}
          <button className="relative flex size-10 items-center justify-center rounded-full bg-slate-100 text-zinc-700 transition hover:bg-slate-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">
            <Bell size={20} />

            <span className="absolute right-2 top-2 size-2 rounded-full bg-primary" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3 rounded-full bg-slate-100 px-2 py-1.5 dark:bg-zinc-800">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="size-9 rounded-full object-cover"
              />
            ) : (
              <div className="flex size-9 items-center justify-center rounded-full bg-primary text-white">
                <UserCog size={18} />
              </div>
            )}

            <div className="hidden pr-2 sm:block">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">
                {user?.name || "Admin User"}
              </p>

              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {user?.role || "Admin"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
