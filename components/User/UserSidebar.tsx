"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, User, Settings } from "lucide-react";

export default function UserSidebar() {
  const rawPathname = usePathname() || "/";
  const pathname = rawPathname === "/" ? "/" : rawPathname.replace(/\/+$/, "");

  const isActive = (path: string, exact = false) =>
    exact
      ? pathname === path
      : pathname === path || pathname.startsWith(path + "/");

  return (
    <aside className="w-64 bg-[#003B3A] text-[#F3F4F2] h-full p-4">
      <nav className="space-y-2 mt-16">
        <Link
          href="/user"
          aria-current={isActive("/user", true) ? "page" : undefined}
          className={`flex items-center gap-3 px-3 py-2 rounded ${
            isActive("/user", true)
              ? "bg-[#C49A3A] text-[#003B3A]"
              : "hover:bg-white/10"
          }`}
        >
          <Home size={18} />
          Dashboard
        </Link>

        <Link
          href="/user/profile"
          aria-current={isActive("/user/profile") ? "page" : undefined}
          className={`flex items-center gap-3 px-3 py-2 rounded ${
            isActive("/user/profile")
              ? "bg-[#C49A3A] text-[#003B3A]"
              : "hover:bg-white/10"
          }`}
        >
          <User size={18} />
          Profile
        </Link>

        <Link
          href="/user/settings"
          aria-current={isActive("/user/settings") ? "page" : undefined}
          className={`flex items-center gap-3 px-3 py-2 rounded ${
            isActive("/user/settings")
              ? "bg-[#C49A3A] text-[#003B3A]"
              : "hover:bg-white/10"
          }`}
        >
          <Settings size={18} />
          Settings
        </Link>
      </nav>
    </aside>
  );
}
