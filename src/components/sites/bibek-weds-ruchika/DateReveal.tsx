"use client";

import { forwardRef, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { EVENTS, TEXTURE_URL } from "./content";
import { useLanguage } from "./LanguageContext";
import { showerPetals } from "./Petals";

// One-time reveal, 3.2s in total: grow to the centre, petals, then shrink back.
const GROW_MS = 900;
const HOLD_MS = 1400;
const SHRINK_MS = 900;
/** Largest zoom for the card at the centre of the screen. */
const MAX_SCALE = 1.6;
/** Share of the card that must be on screen before the reveal starts. */
const START_AT = 0.7;

const DateCard = forwardRef<HTMLDivElement, { className?: string; style?: CSSProperties; children?: ReactNode }>(
  function DateCard({ className = "", style, children }, ref) {
    const { t } = useLanguage();
    const d = t.specialDate;
    const wedding = EVENTS.find((e) => e.id === "wedding");
    return (
      <div ref={ref} className={`scratch-box luxury-gold-card revealed date-card ${className}`} style={style}>
        {children}
        <div className="card-corner corner-tl" aria-hidden="true" />
        <div className="card-corner corner-tr" aria-hidden="true" />
        <div className="card-corner corner-bl" aria-hidden="true" />
        <div className="card-corner corner-br" aria-hidden="true" />
        <div className="scratch-reveal-text luxury-reveal">
          <div className="reveal-badge">{d.auspiciousBadge}</div>
          <div className="scratch-day">{d.dayOfWeek}</div>
          <div className="scratch-date">{d.formattedDate}</div>
          {d.auspiciousSubtext && <div className="reveal-subtext">{d.auspiciousSubtext}</div>}
          {d.auspiciousTime && (
            <div className="reveal-time-badge">
              <span>⏰</span> {d.auspiciousTime}
            </div>
          )}
          {wedding?.calendarUrl && (
            <a className="reveal-cal-btn" href={wedding.calendarUrl} target="_blank" rel="noopener noreferrer">
              {d.calendarBtn}
            </a>
          )}
        </div>
      </div>
    );
  },
);

/**
 * The wedding date card. The first time it comes into view after the doors open,
 * a copy zooms to the centre of the screen, petals fall, and it shrinks back into place.
 */
export default function DateReveal({ opened }: { opened: boolean }) {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const played = useRef(false);
  const [from, setFrom] = useState<DOMRect | null>(null);
  const [flash, setFlash] = useState(false);

  // Wait for the card to be mostly on screen, once.
  useEffect(() => {
    const card = cardRef.current;
    if (!opened || !card || played.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (played.current || entry.intersectionRatio < START_AT) return;
        played.current = true;
        io.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) showerPetals();
        else setFrom(card.getBoundingClientRect());
      },
      { threshold: START_AT },
    );
    io.observe(card);
    return () => io.disconnect();
  }, [opened]);

  // Run the zoom on the fixed copy, so scrolling during it doesn't move it off centre.
  useLayoutEffect(() => {
    const card = cardRef.current;
    const clone = cloneRef.current;
    const backdrop = backdropRef.current;
    if (!from || !card || !clone || !backdrop) return;

    card.style.visibility = "hidden";
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const scale = Math.max(1, Math.min(MAX_SCALE, (vw * 0.94) / from.width, (vh * 0.8) / from.height));
    const dx = vw / 2 - (from.left + from.width / 2);
    const dy = vh / 2 - (from.top + from.height / 2);
    const centre = `translate(${dx}px, ${dy}px) scale(${scale})`;
    // A small overshoot makes the grow read clearly even on phones, where there is little room to grow.
    const overshoot = `translate(${dx}px, ${dy}px) scale(${scale * 1.05})`;

    backdrop.animate([{ opacity: 0 }, { opacity: 1 }], { duration: GROW_MS, fill: "forwards" });
    clone.animate(
      [
        { transform: "none", offset: 0 },
        { transform: overshoot, offset: 0.7 },
        { transform: centre, offset: 1 },
      ],
      { duration: GROW_MS, easing: "cubic-bezier(.2, .8, .2, 1)", fill: "forwards" },
    );

    const timers = [
      window.setTimeout(() => {
        // Short shower so the whole moment ends in about 4s.
        showerPetals({ minSeconds: 2, spreadSeconds: 0.8, delaySeconds: 0.3 });
        setFlash(true);
      }, GROW_MS),
      window.setTimeout(() => {
        // Aim for where the card sits now, in case the page scrolled.
        const home = card.getBoundingClientRect();
        const back = `translate(${home.left - from.left}px, ${home.top - from.top}px)`;
        backdrop.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SHRINK_MS, fill: "forwards" });
        clone.animate([{ transform: centre }, { transform: back }], {
          duration: SHRINK_MS,
          easing: "cubic-bezier(.6, 0, .3, 1)",
          fill: "forwards",
        });
      }, GROW_MS + HOLD_MS),
      window.setTimeout(() => {
        setFrom(null);
        setFlash(false);
      }, GROW_MS + HOLD_MS + SHRINK_MS),
    ];

    return () => {
      timers.forEach(clearTimeout);
      card.style.visibility = "";
    };
  }, [from]);

  const d = t.specialDate;

  return (
    <section
      className="reveal-section date-section"
      id="date"
      style={{
        backgroundImage: `linear-gradient(rgba(253, 249, 242, 0.15), rgba(247, 239, 228, 0.3)), url(${TEXTURE_URL})`,
      }}
    >
      <div className="date-inner">
        <div className="date-header-card">
          <div className="date-header-motif">
            <img src="/assets/luxury/divider-ornament.jpg" alt="" width={180} height={30} className="date-header-ornament" />
          </div>
          <h2 className="section-title">{d.sectionTitle}</h2>
          <div className="sub">{d.subTitle}</div>
        </div>

        <div className="scratch-box-wrap">
          <DateCard ref={cardRef} />
        </div>
      </div>

      {from &&
        createPortal(
          <div aria-hidden="true">
            <div ref={backdropRef} className="date-reveal-backdrop" />
            <DateCard
              ref={cloneRef}
              className="date-reveal-clone"
              style={{ left: from.left, top: from.top, width: from.width, height: from.height }}
            >
              {flash && <div className="reveal-flash" />}
              <div className="gold-shimmer-sweep" />
            </DateCard>
          </div>,
          document.body,
        )}
    </section>
  );
}
