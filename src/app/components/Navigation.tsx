"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from '/public/bestAutoLogo.png';

type NavLink = { name: string; href: string; external?: boolean };

const navLinks: NavLink[] = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "ABOUT", href: "/about" },
  { name: "OUR WORK", href: "/reviews" },
  { name: "CONTACT", href: "/contact" },
  { name: "BLOG", href: "/blog" },
];

export default function Navigation() {
  const pathname = usePathname();
  const logoContainerRef = useRef<HTMLAnchorElement>(null);
  const sheenRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const wrapper = logoContainerRef.current;
    const sheen = sheenRef.current;

    if (wrapper && sheen) {
      const handleMouseEnter = () => {
        wrapper.classList.add("hovered");
        sheen.style.left = "120%";
      };

      const handleMouseLeave = () => {
        wrapper.classList.remove("hovered");
        sheen.style.left = "-80%";
      };

      wrapper.addEventListener("mouseenter", handleMouseEnter);
      wrapper.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        wrapper.removeEventListener("mouseenter", handleMouseEnter);
        wrapper.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <div className="relative w-full">
      <nav
        className="fixed top-0 left-0 w-full h-[100px] flex items-end justify-center overflow-visible"
        style={{ background: "#f4f1ec", zIndex: 3000 }}
      >
        <div className="flex items-end justify-between w-full max-w-3xl mx-auto px-6">
          {/* Logo — overhangs below nav */}
          <a
            href="/"
            className="logo-container nav-logo relative block shrink-0"
            ref={logoContainerRef}
          >
            <Image
              src={logo}
              alt="Best Auto Repair PDX"
              priority={true}
              className="nav-logo-img"
              style={{ width: 'auto' }}
            />
            <div className="masked-overlay absolute inset-0">
              <div className="sheen" ref={sheenRef}></div>
            </div>
          </a>

          {/* Desktop nav links — centered in nav bar */}
          <div
            className="nav-desktop-gt-950 gap-6 flex-nowrap whitespace-nowrap"
            style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translateX(calc(-50% + 100px)) translateY(-50%)' }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`nav-link-flag uppercase font-bold tracking-widest text-[1.3125rem] text-gray-800 hover:text-gray-500 transition-colors${pathname === link.href ? ' nav-link-active' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="nav-hamburger nav-mobile-lte-950 flex-col justify-center gap-[6px] self-center ml-auto p-2 border-none outline-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-7 h-[3px] bg-gray-800 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block w-7 h-[3px] bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-7 h-[3px] bg-gray-800 transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="nav-mobile-lte-950 fixed left-0 right-0 flex-col overflow-hidden transition-all duration-300"
        style={{
          top: 100,
          zIndex: 2999,
          background: '#f4f1ec',
          maxHeight: menuOpen ? '400px' : '0px',
          boxShadow: menuOpen ? '0 8px 25px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`nav-link-flag uppercase font-bold tracking-widest text-base text-gray-800 hover:text-gray-500 transition-colors px-6 py-4 border-b border-gray-200${pathname === link.href ? ' nav-link-active' : ''}`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
