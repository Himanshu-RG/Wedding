"use client";

import { useEffect, useRef, useState } from "react";
import CoupleStory from "./CoupleStory";
import Countdown from "./Countdown";
import Entry from "./Entry";
import FloatingDock from "./FloatingDock";
import Footer from "./Footer";
import GuestNote from "./GuestNote";
import Hero from "./Hero";
import type { Language } from "./content";
import { LanguageProvider } from "./LanguageContext";
import LanguageToggle from "./LanguageToggle";
import MusicPlayer, { type MusicPlayerHandle } from "./MusicPlayer";
import Petals from "./Petals";
import RevealObserver from "./RevealObserver";
import DateReveal from "./DateReveal";
import Timeline from "./Timeline";

/**
 * The whole invitation. Query options carried over from the source:
 *   ?opened=true      skip the palace doors
 *   ?section=<id>     (or #<id>) jump to a section on load
 */
function InvitationPage() {
  const music = useRef<MusicPlayerHandle>(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    const params = new URLSearchParams(window.location.search);
    if (params.get("opened") === "true") {
      setOpened(true);
      document.body.classList.remove("locked");
    }
    const target = params.get("section") || (window.location.hash ? window.location.hash.slice(1) : null);
    if (target) {
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: "instant" });
          el.classList.add("in-view");
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <Entry
        onOpen={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          music.current?.playMusic();
          setOpened(true);
        }}
      />
      <LanguageToggle />
      <MusicPlayer ref={music} />
      <Petals />
      <RevealObserver />
      <main id="main" className={opened ? "visible" : ""}>
        <Hero />
        <CoupleStory />
        <DateReveal opened={opened} />
        <Timeline />
        <Countdown />
        <GuestNote />
        <Footer />
      </main>
      <FloatingDock isVisible={opened} />
    </>
  );
}

export default function Invitation({ initialLanguage }: { initialLanguage: Language }) {
  return (
    <LanguageProvider initialLanguage={initialLanguage}>
      <InvitationPage />
    </LanguageProvider>
  );
}
