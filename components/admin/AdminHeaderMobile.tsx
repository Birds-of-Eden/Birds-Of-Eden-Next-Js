'use client';

// components/admin/AdminHeaderMobile.tsx
import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

interface AdminHeaderMobileProps {
  toggleSidebar: () => void;
  title: string;
  user?: {
    name: string;
    role: string;
    image?: string;
  };
}

const AdminHeaderMobile = ({ toggleSidebar, title, user }: AdminHeaderMobileProps) => {
  const roleLabel = user?.role
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1).toLowerCase()
    : 'Admin';

  return (
    <header className="md:hidden sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="flex items-center justify-between px-3 py-2">

        {/* Left */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-muted transition"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>

          <div className="leading-tight">
            <h1 className="text-sm font-semibold text-foreground">
              {title}
            </h1>
            <p className="text-[11px] text-muted-foreground">
              {roleLabel}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-muted transition">
            <Search size={18} />
          </button>

          <button className="relative p-2 rounded-lg hover:bg-muted transition">
            <Bell size={18} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div
            className="ml-1 w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--chart-2)))',
            }}
          >
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User size={16} className="text-white" />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeaderMobile;
