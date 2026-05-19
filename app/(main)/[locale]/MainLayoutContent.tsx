"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/main/navbar";
import Particles from "@/components/ui/particles";
import Footer from "@/components/main/footer";

export default function MainLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || "";

  const hideChrome = pathname.includes("/admin") || pathname.includes("/user");

  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <div className="pointer-events-none fixed inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {!hideChrome && <Navbar />}
      {children}
      {!hideChrome && <Footer />}
    </div>
  );
}

