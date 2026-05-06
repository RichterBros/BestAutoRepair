"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/slideShow/consultation.png",
  "/slideShow/happy_customer.png",
  "/slideShow/happy_customer2.png",
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (animating) return;
      const next = (current + 1) % slides.length;
      setPrev(current);
      setCurrent(next);
      setAnimating(true);
      setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 650);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, animating]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <style>{`
        @keyframes slideOutLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      {/* Exiting slide — animates out to the left */}
      {prev !== null && (
        <div className="absolute inset-0" style={{ animation: 'slideOutLeft 0.6s ease-in-out forwards' }}>
          <Image
            src={slides[prev]}
            alt="Best Auto Repair"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 0px' }}
          />
        </div>
      )}

      {/* Entering slide — animates in from the right */}
      <div
        key={current}
        className="absolute inset-0"
        style={{ animation: animating ? 'slideInRight 0.6s ease-in-out forwards' : 'none' }}
      >
        <Image
          src={slides[current]}
          alt="Best Auto Repair"
          fill
          className="object-cover"
          style={{ objectPosition: 'center 0px' }}
          priority={current === 0}
        />
      </div>
    </div>
  );
}
