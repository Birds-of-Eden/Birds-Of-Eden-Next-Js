"use client";

import { useSession, signOut } from "next-auth/react";
import { Menu } from "lucide-react";

interface Props {
  onMenuClick: () => void;
}

export default function UserHeader({ onMenuClick }: Props) {
  const { data: session } = useSession();

  return (
    <header className="h-14 w-full text-[#003B3A] border-1 border-[#C49A3A] flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded hover:bg-white/10"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-medium">User Dashboard</h1>
      </div>

      <div className="flex items-center gap-3 text-sm">
        <span className="hidden sm:block">
          {session?.user?.name || session?.user?.email}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="px-3 py-1 rounded bg-[#b68b28] text-[#ffffff] hover:opacity-90"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
