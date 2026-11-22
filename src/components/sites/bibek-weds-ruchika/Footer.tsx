import { SITE_CONFIG } from "./content";

export default function Footer() {
  if (SITE_CONFIG.showCredits) {
    return (
      <footer className="reveal-section footer">
        {SITE_CONFIG.creditText && <div className="footer-love">{SITE_CONFIG.creditText}</div>}
      </footer>
    );
  }
  return (
    <footer className="reveal-section footer luxury-footer">
      <div className="footer-ribbon">
        <img src="/assets/luxury/border-top.jpg" alt="" className="footer-ribbon-img" />
      </div>
      <div className="footer-inner">
        <div className="footer-palace-wrap">
          <img src="/assets/luxury/footer-palace-landscape.jpg" alt="Janakpur Palace Heritage" className="footer-palace-img" />
        </div>
        <div className="footer-names">Ruchika &amp; Bibek</div>
        <div className="footer-date-line">30 November 2026 · Biratnagar, Nepal</div>
        <div className="footer-love">✦ जनकनन्दिनी जानकी आ प्रभु श्री रामक आशीर्वादेँ ✦</div>
        <div className="footer-sub-blessing">With warmest gratitude from the Karn &amp; Das Families</div>
      </div>
    </footer>
  );
}
