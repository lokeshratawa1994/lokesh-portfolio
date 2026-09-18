"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NAV_ITEMS = [
  { label: "ABOUT", id: "about" },
  { label: "EXPERIENCE", id: "experience" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "EDUCATION", id: "education" },
  { label: "CONTACT", id: "contact" }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Check if navigating back from another page with a pending scroll target
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const pendingTarget = sessionStorage.getItem("pendingScrollTarget");
      if (pendingTarget) {
        sessionStorage.removeItem("pendingScrollTarget");
        setTimeout(() => {
          const element = document.getElementById(pendingTarget);
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
          }
        }, 120);
      }
    }
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    if (typeof window !== "undefined") {
      // If currently on /project, redirect to / cleanly and queue scroll
      if (window.location.pathname !== "/") {
        sessionStorage.setItem("pendingScrollTarget", targetId);
        window.location.href = "/";
        return;
      }

      const element = document.getElementById(targetId);
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

        // Ensure URL stays clean as http://localhost:3000 without #hash
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-[999] bg-[#0d1224] py-4 border-b border-[#1e2547] shadow-lg shadow-black/30">
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (window.location.pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              if (window.history && window.history.replaceState) {
                window.history.replaceState(null, '', '/');
              }
            }
          }}
          className="text-[#16f2b3] text-xl sm:text-2xl md:text-3xl font-bold tracking-wider hover:opacity-90 transition-opacity shrink-0"
        >
          LOKESH RATAWA
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-0.5 lg:space-x-2 text-xs lg:text-sm font-medium shrink-0">
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={label} className="shrink-0">
              <a 
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="whitespace-nowrap px-2 lg:px-3 py-1.5 lg:py-2 rounded-md text-gray-300 hover:text-[#16f2b3] transition-colors duration-200 cursor-pointer"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="whitespace-nowrap shrink-0 inline-flex items-center justify-center ml-2 lg:ml-3 px-4 lg:px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-bold uppercase tracking-wider hover:opacity-95 transition-all shadow-md shadow-pink-500/20 cursor-pointer"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 p-4 rounded-xl bg-[#0d1224] border border-[#252a4a] shadow-2xl transition-all">
          <ul className="flex flex-col space-y-2">
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={label}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleNavClick(e, id)}
                  className="block px-3 py-2.5 text-sm font-medium text-gray-200 hover:text-[#16f2b3] hover:bg-[#1a203d] rounded-lg transition-colors cursor-pointer"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="block text-center w-full py-2.5 rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Hire Me / Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
