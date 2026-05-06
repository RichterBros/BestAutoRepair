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
        className="fixed top-0 left-0 w-full h-[100px] flex items-end justify-center overflow-visible"
        style={{
          background: "#f4f1ec",
          zIndex: 3000,
        }}
      >
        <div className="flex items-end justify-between w-full max-w-3xl mx-auto px-6">
          {/* Logo — half overhangs below nav */}
          <a
            href="/"
            className="logo-container relative block shrink-0"
            ref={logoContainerRef}
            style={{ transform: 'translateX(-150px) translateY(calc(50% - 25px))', zIndex: 3100 }}
          >
            <Image
              src={logo}
              alt="Best Auto Repair PDX"
              priority={true}
              style={{ maxHeight: '140px', width: 'auto' }}
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
                className="nav-link-flag uppercase font-bold tracking-widest text-[1.3125rem] text-gray-800 hover:text-gray-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile nav links */}
          <div className="flex flex-wrap gap-4 nav-mobile-lte-950 justify-end self-center ml-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="nav-link-flag uppercase font-bold tracking-widest text-sm text-gray-800 hover:text-gray-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
