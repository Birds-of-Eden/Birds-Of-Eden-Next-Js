import Link from "next/link";
import {
  ArrowLeft,
  Compass,
  Facebook,
  Headphones,
  Home,
  Instagram,
  Linkedin,
  Mail,
  Rocket,
  Twitter,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#020617] text-white">
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.22),transparent_45%),linear-gradient(180deg,#020617_0%,#020617_70%,#061024_100%)]">
        {/* stars */}
        <div className="pointer-events-none absolute inset-0">
          {[
            "left-[13%] top-[26%]",
            "left-[27%] top-[6%]",
            "left-[35%] top-[12%]",
            "left-[56%] top-[5%]",
            "left-[73%] top-[16%]",
            "left-[88%] top-[27%]",
            "left-[14%] top-[57%]",
            "left-[84%] top-[61%]",
            "left-[46%] top-[48%]",
            "left-[63%] top-[35%]",
          ].map((pos) => (
            <span
              key={pos}
              className={`absolute ${pos} h-1 w-1 rounded-full bg-white/70 shadow-[0_0_8px_white]`}
            />
          ))}
        </div>

        {/* Header */}
        <header className="relative z-10 mx-auto flex max-w-[1320px] items-center justify-between px-6 py-7">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-4xl">🕊️</span>
            <span className="text-2xl font-bold">
              Birds<span className="text-[#6C63FF]">of Eden</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-12 text-sm font-medium text-white md:flex">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>

          <Link
            href="/"
            className="hidden items-center gap-2 rounded-2xl border border-white/15 px-5 py-3 text-sm font-medium text-white/90 md:flex"
          >
            <Home size={16} />
            Go Home
          </Link>
        </header>

        {/* Hero */}
        <section className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-center px-6 text-center">
          <h1 className="mt-8 bg-gradient-to-r from-[#D66CFF] via-[#8B5CF6] to-[#60A5FA] bg-clip-text text-[110px] font-black leading-none text-transparent drop-shadow-[0_0_35px_rgba(124,58,237,0.45)] md:text-[170px]">
            404
          </h1>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Oops!{" "}
            <span className="bg-gradient-to-r from-[#A855F7] to-[#60A5FA] bg-clip-text text-transparent">
              Page Not Found
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            The page you’re looking for seems to have flown away
            <br />
            or doesn’t exist anymore.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] px-7 py-3.5 text-sm font-semibold shadow-[0_0_30px_rgba(124,58,237,0.35)]"
            >
              <ArrowLeft size={17} />
              Back to Home
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white/90 backdrop-blur"
            >
              Explore Services
            </Link>
          </div>

          {/* planets */}
          <div className="absolute left-[8%] top-[390px] hidden h-16 w-16 rounded-full bg-purple-500/30 blur-[1px] md:block" />
          <div className="absolute right-[10%] top-[400px] hidden h-20 w-20 rounded-full bg-blue-500/30 blur-[1px] md:block" />

          {/* astronaut + moon */}
          <div className="relative mt-10 w-full max-w-[980px]">
            <div className="mx-auto flex h-[260px] w-[260px] flex-col items-center justify-center rounded-full border border-white/10 bg-white/5 shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-sm">
              <div className="text-[112px] leading-none">👨‍🚀</div>
              <div className="-mt-5 rounded-md bg-[#E9D5FF] px-4 py-2 text-xs font-black uppercase leading-4 text-black shadow-lg">
                I Think
                <br />
                I Took A
                <br />
                Wrong Turn
                <br />☹
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 h-[145px] w-[1100px] -translate-x-1/2 rounded-t-[100%] bg-[radial-gradient(circle_at_center,#2c2942_0%,#141827_55%,transparent_72%)]" />

            <div className="absolute right-[17%] top-[95px] hidden md:block">
              <div className="rounded-md bg-[#8B5E3C] px-5 py-2 text-xl font-black text-black">
                HOME →
              </div>
              <div className="mx-auto h-20 w-3 bg-[#6B442C]" />
            </div>
          </div>

          {/* info card */}
          <div className="relative z-20 -mt-2 grid w-full max-w-[800px] grid-cols-1 rounded-[2rem] border border-white/5 bg-[#0B1024]/90 px-8 py-7 shadow-2xl backdrop-blur-xl md:grid-cols-3">
            <div className="px-8">
              <Compass className="mx-auto text-[#A855F7]" size={34} />
              <h3 className="mt-3 font-bold">Explore</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                Discover amazing
                <br />
                things on our website
              </p>
            </div>

            <div className="border-y border-white/10 px-8 py-6 md:border-x md:border-y-0 md:py-0">
              <Rocket className="mx-auto text-[#A855F7]" size={34} />
              <h3 className="mt-3 font-bold">Innovate</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                We build innovative
                <br />
                digital solutions
              </p>
            </div>

            <div className="px-8">
              <Headphones className="mx-auto text-[#A855F7]" size={34} />
              <h3 className="mt-3 font-bold">Support</h3>
              <p className="mt-2 text-sm leading-6 text-white/65">
                We’re here to help
                <br />
                you succeed
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 mt-5 border-t border-white/10 bg-[#061024]/70">
          <div className="mx-auto flex max-w-[1320px] flex-col items-center justify-between gap-7 px-6 py-9 md:flex-row">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🕊️</span>
              <h2 className="text-2xl font-bold">
                Birds<span className="text-[#6C63FF]">of Eden</span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-6 text-white/55">
              Transforming ideas into reality through innovative software
              solutions.
            </p>

            <div className="flex items-center gap-4">
              {[Facebook, Linkedin, Instagram, Twitter].map((Icon, index) => (
                <span
                  key={index}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white"
                >
                  <Icon size={18} />
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-xl border border-[#7C3AED] px-6 py-3 text-sm text-[#A78BFA]"
            >
              <Mail size={16} />
              Contact Us
            </Link>

            <p className="text-sm text-white/55">
              © 2024 Birds of Eden. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
