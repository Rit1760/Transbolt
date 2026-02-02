'use client';

import { useEffect } from "react";
import gsap from "gsap";

export default function CursorWrapper({ children }) {
  useEffect(() => {
    const crsr = document.querySelector("#crsr");

    const moveCursor = (e) => {
      gsap.to(crsr, {
        x: e.clientX - 15,
        y: e.clientY - 15,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div id="crsr"></div>
      {children}
    </>
  );
}