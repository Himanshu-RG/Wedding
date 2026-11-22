"use client";

import { useLanguage } from "./LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return (
    <div className="language-toggle-pill" role="group" aria-label="Language selector">
      <button
        type="button"
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        title="Switch to English"
      >
        <span className="lang-text">English</span>
      </button>
      <div className="lang-divider" aria-hidden="true" />
      <button
        type="button"
        className={`lang-btn ${language === "mai" ? "active" : ""}`}
        onClick={() => setLanguage("mai")}
        aria-pressed={language === "mai"}
        title="मैथिली भाषा मे देखू"
      >
        <span className="lang-text mai-font">मैथिली</span>
      </button>
    </div>
  );
}
