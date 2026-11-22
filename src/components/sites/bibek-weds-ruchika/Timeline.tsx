"use client";

import { EVENTS, TEXTURE_URL } from "./content";
import { useLanguage } from "./LanguageContext";

const CalendarIcon = ({ size, plus }: { size: number; plus?: boolean }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    {plus && (
      <>
        <line x1="12" y1="14" x2="12" y2="18" />
        <line x1="10" y1="16" x2="14" y2="16" />
      </>
    )}
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const PinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MapIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
    <line x1="8" y1="2" x2="8" y2="18" />
    <line x1="16" y1="6" x2="16" y2="22" />
  </svg>
);

export default function Timeline() {
  const { t } = useLanguage();
  return (
    <section
      className="reveal-section timeline"
      id="timeline"
      style={{
        backgroundImage: `linear-gradient(rgba(253, 249, 240, 0.15), rgba(248, 242, 230, 0.3)), url(${TEXTURE_URL})`,
      }}
    >
      <div className="timeline-inner">
        <div className="timeline-header-luxury">
          <div className="timeline-motif-top">
            <img src="/assets/luxury/section-floral-ornament.jpg" alt="" width={180} height={48} className="timeline-header-floral" />
          </div>
          <h2 className="section-title timeline-title">{t.timeline.sectionTitle}</h2>
          <div className="sub">{t.timeline.subTitle}</div>
          <div className="timeline-divider-ornament">
            <img src="/assets/luxury/divider-ornament.jpg" alt="" width={220} height={36} className="timeline-divider-img" />
          </div>
        </div>

        <div className="timeline-cards-list">
          {t.timeline.events.map((ev) => {
            const meta = EVENTS.find((e) => e.id === ev.id);
            const icon = meta?.icon || "/assets/luxury/icon-wedding.png";
            return (
              <article key={ev.id} className={`luxury-event-card ${ev.id === "wedding" ? "main-wedding-event" : ""}`}>
                <div className="event-card-art">
                  <div className="art-circle-frame">
                    <img src={icon} alt={ev.title} className="event-icon-img" />
                  </div>
                </div>
                <div className="event-card-body">
                  <h3 className="event-title">{ev.title}</h3>
                  <div className="event-details-grid">
                    <div className="event-detail-item">
                      <span className="detail-icon" aria-hidden="true">
                        <CalendarIcon size={15} />
                      </span>
                      <span className="detail-text event-date-text">{ev.date}</span>
                    </div>
                    <div className="event-detail-item">
                      <span className="detail-icon" aria-hidden="true">
                        <ClockIcon />
                      </span>
                      <span className="detail-text event-time-text">{ev.time}</span>
                    </div>
                    {ev.theme && (
                      <div className="event-detail-item">
                        <span className="detail-icon" aria-hidden="true">
                          <span className="theme-swatch" style={{ background: meta?.themeColor }} />
                        </span>
                        <span className="detail-text event-theme-text">{ev.theme}</span>
                      </div>
                    )}
                    <div className="event-detail-item event-venue-item">
                      <span className="detail-icon" aria-hidden="true">
                        <PinIcon />
                      </span>
                      <span className="detail-text event-venue-text">
                        <strong>{ev.location}</strong>
                        {ev.addressLines.length > 0 && <span className="event-address-sub">, {ev.addressLines.join(", ")}</span>}
                      </span>
                    </div>
                  </div>
                  <div className="event-card-actions">
                    {meta?.mapUrl && (
                      <a
                        className="btn-event-map"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={meta.mapUrl}
                        title={`Open ${ev.location} on Google Maps`}
                      >
                        <MapIcon />
                        <span>{t.timeline.viewLocation || "View on Maps"}</span>
                      </a>
                    )}
                    {meta?.calendarUrl && (
                      <a
                        className="btn-event-calendar"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={meta.calendarUrl}
                        title={`Add ${ev.title} to Google Calendar`}
                      >
                        <CalendarIcon size={14} plus />
                        <span>{t.timeline.addToCalendar || "Add to Calendar"}</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
