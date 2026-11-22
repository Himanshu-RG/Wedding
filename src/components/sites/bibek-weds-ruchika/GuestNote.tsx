"use client";

import type { MouseEvent } from "react";
import { TEXTURE_URL } from "./content";
import { useLanguage } from "./LanguageContext";

const blockMenu = (e: MouseEvent) => e.preventDefault();

export default function GuestNote() {
  const { t } = useLanguage();
  const g = t.guestNote;
  return (
    <section
      className="reveal-section guest luxury-guest-section"
      id="guest"
      style={{
        backgroundImage: `linear-gradient(rgba(245, 235, 221, 0.85), rgba(239, 226, 207, 0.9)), url(${TEXTURE_URL})`,
      }}
    >
      <div className="luxury-guest-card">
        <div className="guest-lotus-top">
          <img src="/assets/luxury/lotus-motif.jpg" alt="" width={68} height={48} className="lotus-motif-img" />
        </div>
        <span className="guest-eyebrow">{g.eyebrow || "A NOTE FROM US"}</span>
        <h2 className="guest-headline">
          {g.title === "Dear Guest" ? "We look forward to celebrating this special occasion with you." : g.title}
        </h2>
        <div className="guest-photo-frame">
          <img
            src="/assets/couple-greenery.jpg"
            alt="Ruchika & Bibek"
            draggable={false}
            onContextMenu={blockMenu}
            className="guest-couple-img protected-photo"
          />
          <div className="photo-protection-shield" onContextMenu={blockMenu} aria-hidden="true" />
          <div className="photo-gold-outline" />
        </div>
        <p className="guest-editorial-message">{g.message}</p>
        <div className="guest-signature-block">
          <span className="signature-salutation">{g.signaturePrefix}</span>
          <span className="signature-couple-name">Ruchika &amp; Bibek</span>
        </div>
        <div className="guest-matsya-footer">
          <div className="matsya-wrap">
            <img src="/assets/luxury/divider-ornament.jpg" alt="" className="matsya-fish-img" />
          </div>
          <div className="matsya-caption">✦ शुभम् भवतु · सदा सर्वदा मङ्गलम् ✦</div>
        </div>
      </div>
    </section>
  );
}
