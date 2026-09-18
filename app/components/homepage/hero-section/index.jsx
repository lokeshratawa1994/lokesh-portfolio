"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin, BsCheckCircleFill, BsLightningChargeFill } from "react-icons/bs";
import { MdDownload, MdEmail } from "react-icons/md";
import { RiContactsFill, RiSparklingFill } from "react-icons/ri";
import { FaReact, FaLayerGroup } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiRedux, SiJavascript, SiTypescript } from "react-icons/si";

const socialLinks = [
  { href: personalData.github, icon: <BsGithub size={22} />, label: "GitHub" },
  { href: personalData.linkedIn, icon: <BsLinkedin size={22} />, label: "LinkedIn" },
  { href: `mailto:${personalData.email}`, icon: <MdEmail size={24} />, label: "Email" }
];

function HeroSection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-between py-6 lg:py-14 w-full overflow-hidden">
      <Image
        src="/hero.svg"
        alt="Hero Background"
        width={1572}
        height={795}
        priority
        className="absolute -top-[98px] -z-10 select-none pointer-events-none opacity-80"
      />

      <div className="grid grid-cols-1 items-center lg:grid-cols-2 lg:gap-12 gap-y-10 w-full">
        {/* Left Section: Copy & Actions */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#16f2b3]/10 border border-[#16f2b3]/30 text-[#16f2b3] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#16f2b3] animate-pulse"></span>
            Available for Frontend Roles
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight text-white lg:text-[2.85rem] lg:leading-[3.6rem]">
            Hi, I&apos;m <span className="text-pink-500">{personalData.name}</span>
            <br />
            <span className="text-[#16f2b3] text-2xl sm:text-3xl lg:text-[2.35rem]">
              Frontend Developer • React &amp; TypeScript
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base mt-4 leading-relaxed max-w-xl">
            Specializing in <span className="text-white font-medium">React.js</span>, <span className="text-white font-medium">Next.js</span>, <span className="text-white font-medium">TypeScript</span>, and modern state architectures (<span className="text-white font-medium">Redux, Zustand</span>). 3+ years building responsive, production-ready web and mobile platforms.
          </p>

          {/* Social Links */}
          <div className="my-6 flex items-center gap-3">
            {socialLinks.map(({ href, icon, label }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                title={label}
                className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#11162d] border border-[#23284a] text-pink-500 hover:text-[#16f2b3] hover:border-[#16f2b3] hover:scale-105 transition-all duration-300 shadow-md"
              >
                {icon}
              </Link>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToContact}
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 cursor-pointer"
            >
              <span className="px-5 md:px-7 py-3 bg-[#0d1224] rounded-full text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2 hover:bg-[#131936] transition-colors">
                <span>Contact Me</span>
                <RiContactsFill size={16} />
              </span>
            </button>

            <a
              href={personalData.resume}
              download="Lokesh_Ratawa_Frontend_Developer_Resume.docx"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-7 py-3 text-center text-xs md:text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-violet-600/30 cursor-pointer"
            >
              <span>Download Resume</span>
              <MdDownload size={18} />
            </a>
          </div>

          {/* Impact Stats Strip */}
          <div className="mt-8 pt-6 border-t border-[#1e2345] grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-lg">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-[#16f2b3]">3+ Years</p>
              <p className="text-xs text-gray-400">Frontend Exp.</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-pink-500">5+ Apps</p>
              <p className="text-xs text-gray-400">Commercial Work</p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl font-bold text-violet-400">100%</p>
              <p className="text-xs text-gray-400">Component Driven</p>
            </div>
          </div>
        </div>

        {/* Right Section: Modern UI Developer Profile Showcase (Replaces raw code snippet) */}
        <div className="order-1 lg:order-2 w-full">
          <div className="relative rounded-2xl border border-[#232b57] bg-gradient-to-br from-[#0e1329] via-[#0d1224] to-[#0a0e21] shadow-2xl p-4 sm:p-6 lg:p-7 overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-violet-600/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-[#16f2b3]/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Window Header */}
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#1c2448]">
              <div className="flex items-center space-x-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141c3d] border border-[#263162] text-[11px] font-medium text-[#16f2b3]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3] animate-ping"></span>
                <span>Active • Available for Hire</span>
              </div>
            </div>

            {/* Profile Header Block */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-[#16f2b3] p-0.5 shadow-lg">
                <div className="w-full h-full bg-[#0d1224] rounded-2xl flex items-center justify-center">
                  <span className="font-extrabold text-lg text-white tracking-wider">LR</span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white">Lokesh Ratawa</h3>
                  <RiSparklingFill className="text-amber-400" size={16} />
                </div>
                <p className="text-xs sm:text-sm text-gray-300 font-medium">
                  Frontend Specialist • React & Next.js
                </p>
                <div className="flex flex-wrap gap-2 mt-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131b3e] text-[#16f2b3] border border-[#16f2b3]/30">
                    3.5+ Years Exp
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#131b3e] text-gray-300 border border-[#252f59]">
                    Ahmedabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Core Tech Stack Visual Grid */}
            <div className="space-y-3.5 mb-6">
              <div>
                <p className="text-[11px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                  Primary Frameworks &amp; Core
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-semibold text-white">
                    <FaReact className="text-[#61DAFB]" size={15} />
                    <span>React.js</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-semibold text-white">
                    <SiNextdotjs className="text-white" size={15} />
                    <span>Next.js 15</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-semibold text-white">
                    <SiTypescript className="text-[#3178C6]" size={14} />
                    <span>TypeScript</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-semibold text-white">
                    <SiJavascript className="text-[#F7DF1E]" size={14} />
                    <span>JavaScript (ES6+)</span>
                  </span>
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase font-mono tracking-wider text-gray-400 mb-2">
                  State Architecture &amp; Styling
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-medium text-pink-400">
                    <SiRedux size={14} />
                    <span>Redux Toolkit</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-medium text-amber-300">
                    <FaLayerGroup size={13} />
                    <span>Zustand</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141b3a] border border-[#263263] text-xs font-medium text-[#38BDF8]">
                    <SiTailwindcss size={15} />
                    <span>Tailwind CSS</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Key Strengths & Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#1c2448]">
              <div className="p-3 rounded-xl bg-[#111733] border border-[#222a50]">
                <div className="flex items-center gap-1.5 text-[#16f2b3] mb-1">
                  <BsCheckCircleFill size={13} />
                  <span className="text-xs font-bold">Reusable Systems</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-tight">
                  Design-system grade modular UI components.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-[#111733] border border-[#222a50]">
                <div className="flex items-center gap-1.5 text-pink-400 mb-1">
                  <BsLightningChargeFill size={13} />
                  <span className="text-xs font-bold">Performance</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-tight">
                  SSR &amp; sub-second page loads across devices.
                </p>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="mt-5 pt-4 border-t border-[#1c2448] flex items-center justify-between">
              <span className="text-xs text-gray-400 font-mono">
                Looking for a Frontend Dev?
              </span>
              <button
                onClick={scrollToContact}
                className="text-xs font-semibold text-[#16f2b3] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Get in touch &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
