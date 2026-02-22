"use client";

import { useRouter } from "@/i18n/navigation";

const BackButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="mt-5 rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
    >
      {children}
    </button>
  );
};

export default BackButton;
