"use client";

import { useEffect } from "react";

/** Adds "in-view" to each .reveal-section the first time it nears the viewport. */
export default function RevealObserver() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      sections.forEach((s) => s.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "200px 0px 100px 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);
  return null;
}
