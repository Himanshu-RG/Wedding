"use client";

import { useEffect, useState } from "react";
import { ENTRY_CORDIAL_LINE } from "./content";
import { useLanguage } from "./LanguageContext";

/** Full-screen palace doors. Clicking the button swings them open, then the layer is removed. */
export default function Entry({ onOpen }: { onOpen: () => void }) {
  const { t } = useLanguage();
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("opened") === "true") {
      setOpening(true);
      setGone(true);
    }
  }, []);

  if (gone) return null;

  const open = () => {
    if (opening) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setOpening(true);
    document.body.classList.remove("locked");
    onOpen();
    setTimeout(() => setGone(true), 2100);
  };

  return (
    <div id="entry" className={opening ? "open" : ""}>
      <div className="palace-arch-backdrop" style={{ backgroundImage: "url(/assets/luxury/palace-doors-arch.jpg)" }} />
      <div className="door-stage">
        <div className="door-half door-left">
          <img src="/assets/luxury/palace-door-left.jpg" alt="" className="door-img-layer" />
          <div className="door-pattern-overlay" />
          <div className="door-crevice-shadow" />
        </div>
        <div className="door-half door-right">
          <img src="/assets/luxury/palace-door-right.jpg" alt="" className="door-img-layer" />
          <div className="door-pattern-overlay" />
          <div className="door-crevice-shadow" />
        </div>
        <div className="door-light-beam" />
        <div className="door-glow-burst" />
        <div className="entry-shade" />
      </div>

      <div className="entry-content">
        <div className="entry-card-royal">
          <div className="entry-ganesh-icon" aria-hidden="true">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#B89552" strokeWidth="1.5">
              <path d="M12 2C9.5 2 7 3.5 7 6.5C7 9.5 9 11 12 11C15 11 17 9.5 17 6.5C17 3.5 14.5 2 12 2Z" />
              <path d="M12 11V21M8 15C8 15 10 17 12 17C14 17 16 15 16 15" strokeLinecap="round" />
              <circle cx="12" cy="6" r="1.5" fill="#B89552" />
            </svg>
          </div>
          <div className="entry-invocation" aria-hidden="true">
            {t.entrance.invocation}
          </div>
          <div className="entry-cordial-line">{ENTRY_CORDIAL_LINE}</div>
          <h1 className="entry-couple-names">
            <span>Ruchika</span>
            <span className="entry-ampersand">&amp;</span>
            <span>Bibek</span>
          </h1>
          <div className="entry-ornament-divider">
            <span className="divider-line" />
            <span className="divider-motif">✦ ॐ ✦</span>
            <span className="divider-line" />
          </div>
          <button className="open-btn" id="openBtn" onClick={open} aria-label="Open wedding invitation">
            <span>{t.entrance.buttonText}</span>
            <span className="open-btn-arrow">→</span>
          </button>
          <div className="entry-hint">{t.entrance.hintText}</div>
        </div>
      </div>
    </div>
  );
}
