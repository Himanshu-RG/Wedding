"use client";

import { useEffect, useState } from "react";
import { EVENTS } from "./content";
import { useLanguage } from "./LanguageContext";
import { showerPetals } from "./Petals";

/** Bottom quick-action bar. Appears once the visitor scrolls past 180px. */
export default function FloatingDock({ isVisible }: { isVisible: boolean }) {
  const { t } = useLanguage();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    const onScroll = () => setShown(window.scrollY > 180);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isVisible]);

  if (!isVisible) return null;

  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const wedding = EVENTS.find((e) => e.id === "wedding");

  return (
    <aside className={`floating-dock ${shown ? "visible" : ""}`} aria-label="Quick action navigation">
      <div className="dock-container">
        <button type="button" className="dock-item" onClick={() => jump("timeline")} title="Jump to Ceremony Timeline & Venues">
          <span className="dock-icon" aria-hidden="true">
            📍
          </span>
          <span className="dock-label">{t.dock.venues}</span>
        </button>
        <button
          type="button"
          className="dock-item"
          onClick={() => {
            if (wedding?.calendarUrl) window.open(wedding.calendarUrl, "_blank", "noopener,noreferrer");
            else jump("date");
          }}
          title="Add Wedding to Calendar"
        >
          <span className="dock-icon" aria-hidden="true">
            📅
          </span>
          <span className="dock-label">{t.dock.calendar}</span>
        </button>
        <button type="button" className="dock-item" onClick={() => showerPetals()} title="Shower Celebration Petals">
          <span className="dock-icon" aria-hidden="true">
            🌸
          </span>
          <span className="dock-label">{t.dock.bless}</span>
        </button>
      </div>
    </aside>
  );
}
