"use client";

import { Fragment, useEffect, useState } from "react";
import { WEDDING_TARGET_ISO } from "./content";
import { useLanguage } from "./LanguageContext";

const pad = (n: number, len: number) => String(n).padStart(len, "0");

export default function Countdown() {
  const { t } = useLanguage();
  const [left, setLeft] = useState({ days: "000", hours: "00", mins: "00", secs: "00" });

  useEffect(() => {
    const target = new Date(WEDDING_TARGET_ISO).getTime();
    const tick = () => {
      const ms = Math.max(0, target - Date.now());
      setLeft({
        days: pad(Math.floor(ms / 864e5), 3),
        hours: pad(Math.floor((ms % 864e5) / 36e5), 2),
        mins: pad(Math.floor((ms % 36e5) / 6e4), 2),
        secs: pad(Math.floor((ms % 6e4) / 1e3), 2),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { id: "days", value: left.days.replace(/^0+/, "") || "0", label: t.countdown.units.days },
    { id: "hours", value: left.hours, label: t.countdown.units.hours },
    { id: "mins", value: left.mins, label: t.countdown.units.mins },
    { id: "secs", value: left.secs, label: t.countdown.units.secs },
  ];

  return (
    <section className="reveal-section luxury-countdown" id="countdown">
      <div className="countdown-ribbon-border top-ribbon">
        <img src="/assets/luxury/border-top.jpg" alt="" className="ribbon-border-img" />
      </div>
      <div className="royal-count-container">
        <div className="countdown-title-wrap">
          <span className="countdown-gold-flourish">✦</span>
          <h2 className="countdown-heading">{t.countdown.title || "COUNTDOWN TO OUR WEDDING"}</h2>
          <span className="countdown-gold-flourish">✦</span>
        </div>
        <div className="royal-count-grid">
          {units.map((u, i) => (
            <Fragment key={u.id}>
              {i > 0 && <div className="count-separator-gold" aria-hidden="true" />}
              <div className="royal-count-card">
                <div className="royal-num" id={u.id}>
                  {u.value}
                </div>
                <div className="royal-label">{u.label}</div>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="countdown-target-badge">✦ {t.countdown.targetDateDisplay} ✦</div>
      </div>
      <div className="countdown-ribbon-border bottom-ribbon">
        <img src="/assets/luxury/border-bottom.jpg" alt="" className="ribbon-border-img" />
      </div>
    </section>
  );
}
