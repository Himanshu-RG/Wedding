"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { useLanguage } from "./LanguageContext";

const blockMenu = (e: MouseEvent) => e.preventDefault();

export default function CoupleStory() {
  const { t } = useLanguage();
  const c = t.coupleStory;
  return (
    <section className="reveal-section couple-story-section" id="story" aria-label="Meet the Couple and Our Story">
      <div className="couple-story-container">
        <div className="couple-story-header">
          <span className="editorial-kicker">{c.meetHeading}</span>
          <h2 className="couple-story-names">{c.coupleNames}</h2>
          <div className="story-divider-motif">
            <Image src="/assets/luxury/divider-ornament.jpg" alt="" width={220} height={38} className="editorial-divider-img" />
          </div>
        </div>

        <div className="couple-editorial-frame">
          <div className="editorial-frame-inner">
            <Image
              src="/assets/couple-portrait.jpg"
              alt="Ruchika & Bibek"
              width={1086}
              height={1448}
              sizes="(max-width: 760px) 92vw, 680px"
              priority
              draggable={false}
              onContextMenu={blockMenu}
              className="couple-main-photo protected-photo"
            />
            <div className="photo-protection-shield" onContextMenu={blockMenu} aria-hidden="true" />
            <div className="frame-gold-border" />
            <div className="frame-corner corner-tl" />
            <div className="frame-corner corner-tr" />
            <div className="frame-corner corner-bl" />
            <div className="frame-corner corner-br" />
          </div>
          <p className="couple-union-caption">{c.unionLine}</p>
        </div>

        <div className="our-story-card">
          <div className="story-card-top-motif">
            <Image src="/assets/luxury/lotus-motif.jpg" alt="Mithila Lotus" width={72} height={52} className="story-lotus-icon" />
          </div>
          <span className="story-eyebrow">{c.storyEyebrow}</span>
          <h3 className="story-headline">{c.storyHeading}</h3>
          <p className="story-narrative-text">{c.storyText}</p>
          <div className="story-mithila-artwork">
            <Image
              src="/assets/luxury/mithila-couple-illustration.jpg"
              alt="Traditional Mithila Couple Artwork"
              width={340}
              height={190}
              className="story-artwork-img"
            />
            <div className="artwork-caption">✦ परम्परा · संस्कार · प्रेम ✦</div>
          </div>
        </div>
      </div>
    </section>
  );
}
