"use client";
import React, { useEffect, useRef } from "react";
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
        className="fixed top-0 left-0 w-full text-white py-4 px-2 flex flex-col items-center min-h-[120px] md:min-h-[140px]"
        style={{
          background: "#f4f1ec",
          zIndex: 3000,
        }}
      >
      {/* Logo and Text Section */}
      <div className="relative flex items-center justify-center w-full max-w-6xl mx-auto gap-[55px] mb-4 md:mb-0 px-4 md:px-6">
        {/* Left Navigation Links - Hidden on mobile */}
        <div className="relative z-10 nav-desktop-gt-950 gap-6">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="uppercase font-bold tracking-widest text-[1.3125rem] text-gray-800 hover:text-gray-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Center Logo and Text */}
        <div className="relative z-10 flex flex-col items-center md:px-0">
          <div className="flex flex-col items-center gap-2">
            {/* Main logo */}
            <div className="relative flex items-center justify-center">
              <a
                href="/"
                className="logo-container z-10 logo-scale-100 relative block"
                ref={logoContainerRef}
              >
                <Image
                  src={logo}
                  alt="Best Auto Repair PDX"
                  priority={true}
                  style={{ maxHeight: '120px', width: 'auto' }}
                />
                <div className="masked-overlay absolute inset-0">
                  <div className="sheen" ref={sheenRef}></div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Right Navigation Links - Hidden on mobile */}
        <div className="relative z-10 nav-desktop-gt-950 gap-6">
          {navLinks.slice(3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="uppercase font-bold tracking-widest text-[1.3125rem] text-gray-800 hover:text-gray-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className="flex flex-wrap gap-4 nav-mobile-lte-950 justify-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="uppercase font-bold tracking-widest text-sm text-gray-800 hover:text-gray-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
      </nav>
    </div>
  );
}
