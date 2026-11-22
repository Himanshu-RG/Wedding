"use client";

import { useLanguage } from "./LanguageContext";

const GOLD = "#c99a3e";
const LIGHT_GOLD = "#e6bc54";

/** Kalash-and-peacock ornament under the shloka banner. */
function MithilaMotif() {
  return (
    <svg viewBox="0 0 260 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M130 10C127 10 125 12 125 15C125 18 127 20 130 20C133 20 135 18 135 15C135 12 133 10 130 10Z" fill={GOLD} />
      <path d="M130 5C130 5 128 7.5 128 9C128 10 129 11 130 11C131 11 132 10 132 9C132 7.5 130 5 130 5Z" fill={LIGHT_GOLD} />
      <path
        d="M124 20H136L138 27C138 30 135 32 130 32C125 32 122 30 122 27L124 20Z"
        stroke={GOLD}
        strokeWidth="1.2"
        fill="rgba(201, 154, 62, 0.15)"
      />
      <path d="M125 18C121 15 119 12 120 9C123 9 125 13 126 17" stroke={GOLD} strokeWidth="1" />
      <path d="M135 18C139 15 141 12 140 9C137 9 135 13 134 17" stroke={GOLD} strokeWidth="1" />
      <path
        d="M112 28C108 26 105 22 106 18C107 14 110 13 111 11C111 9 109 8 108 8M108 8C108 6.5 106 6 105 6M108 8L104 10"
        stroke={GOLD}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="106" cy="10" r="1.5" fill={GOLD} />
      <path
        d="M106 18C100 17 92 19 86 24C80 29 72 30 64 30M102 21C94 22 86 26 80 32M98 24C90 27 84 32 78 36"
        stroke={GOLD}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="86" cy="24" r="2" fill={GOLD} />
      <circle cx="72" cy="30" r="2" fill={GOLD} />
      <circle cx="80" cy="32" r="1.8" fill={LIGHT_GOLD} />
      <path
        d="M148 28C152 26 155 22 154 18C153 14 150 13 149 11C149 9 151 8 152 8M152 8C152 6.5 154 6 155 6M152 8L156 10"
        stroke={GOLD}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle cx="154" cy="10" r="1.5" fill={GOLD} />
      <path
        d="M154 18C160 17 168 19 174 24C180 29 188 30 196 30M158 21C166 22 174 26 180 32M162 24C170 27 176 32 182 36"
        stroke={GOLD}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="174" cy="24" r="2" fill={GOLD} />
      <circle cx="188" cy="30" r="2" fill={GOLD} />
      <circle cx="180" cy="32" r="1.8" fill={LIGHT_GOLD} />
      <path
        d="M120 34C124 37 127 38 130 38C133 38 136 37 140 34M114 36C122 41 138 41 146 36"
        stroke={GOLD}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path d="M58 30C48 30 40 28 32 24C24 20 16 20 8 22" stroke={GOLD} strokeWidth="1" strokeDasharray="2 3" strokeLinecap="round" />
      <circle cx="8" cy="22" r="2" fill={GOLD} />
      <path
        d="M202 30C212 30 220 28 228 24C236 20 244 20 252 22"
        stroke={GOLD}
        strokeWidth="1"
        strokeDasharray="2 3"
        strokeLinecap="round"
      />
      <circle cx="252" cy="22" r="2" fill={GOLD} />
    </svg>
  );
}

export default function Hero() {
  const { t, language } = useLanguage();
  const h = t.hero;
  return (
    <section className="hero" aria-label="Wedding invitation">
      <div className="hero-inner">
        <div className="shubh-vivah-badge" aria-label="Shree Ganeshaya Namaha - Shubh Vivah">
          <span className="shubh-invocation">॥ श्री गणेशाय नमः ॥</span>
          <span className="shubh-vivah-dot">✦</span>
          <span className="shubh-title">॥ शुभ विवाह ॥</span>
        </div>
        <div className="mithila-shloka-banner" aria-label="Auspicious Vedic Mangalam Shloka">
          {h.mithilaVerse}
        </div>
        <div className="hero-motif mithila-motif" aria-hidden="true">
          <MithilaMotif />
        </div>
        <div className="eyebrow">{h.eyebrow}</div>
        <div className="hero-invite-line">{h.invitationLine}</div>
        <div className={`names ${language === "mai" ? "names-mai" : ""}`}>
          <span className="name-bride">{h.brideName}</span>
          <span className="weds">{h.weds}</span>
          <span className="name-groom">{h.groomName}</span>
        </div>
        <div className="hero-tagline">{h.tagline}</div>
        <div className="parents">
          <div className="parent-row">
            <b>{h.brideFullName}</b> — {h.brideParents}
          </div>
          <div className="parent-row">
            <b>{h.groomFullName}</b> — {h.groomParents}
          </div>
        </div>
        <div className="discover">{h.scrollPrompt}</div>
      </div>
    </section>
  );
}
