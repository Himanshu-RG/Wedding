// Content for the Ruchika & Bibek invitation.

export type Language = "en" | "mai";

export const MUSIC_ENABLED = true;
export const MUSIC_SRC = "/assets/maithili-aaju-mithila.mp3";
/** Restart the song when it ends. */
export const MUSIC_LOOP = true;
/** Seconds into the track where playback jumps back to the start. */
export const MUSIC_LOOP_END = 92;
export const ENTRY_CORDIAL_LINE =
  "We joyfully invite you to celebrate the wedding of";
/** 5:00 PM in Biratnagar (Nepal time, UTC+5:45). */
export const WEDDING_TARGET_ISO = "2026-11-30T17:00:00+05:45";
/** Picture shown when the invitation link is shared (WhatsApp, Facebook, etc.). */
export const OG_IMAGE = "/assets/luxury/og-image-ruchika-bibek.jpg";
export const TEXTURE_URL = "/assets/luxury/bg-texture-ivory.jpg";
export const SITE_CONFIG: { showCredits: boolean; creditText?: string } = {
  showCredits: false,
};

export interface EventMeta {
  id: string;
  title: string;
  date: string;
  time: string;
  isoDateStart: string;
  isoDateEnd: string;
  location: string;
  addressLines: string[];
  mapUrl: string;
  calendarUrl: string;
  icon: string;
  /** Dress-code colour shown as a swatch next to the theme line. */
  themeColor?: string;
}

const HOME_VENUE = "Nij Niwas (B.F.M)";
const HOME_ADDRESS = ["Biratnagar, Morang, Nepal"];
/** Plus code F76F+2RC, Biratnagar (full code 7MR9F76F+2RC). */
const HOME_MAP = "https://www.google.com/maps/search/?api=1&query=7MR9F76F%2B2RC";
const HALL_VENUE = "Kanchanjunga Hotel & Party Palace";
const HALL_ADDRESS = ["Panchali Road", "Biratnagar, Nepal"];
const HALL_MAP = "https://maps.app.goo.gl/gYtHkmd4in6WnoAg8";

/** Google Calendar link. Times are Nepal local time (YYYYMMDDTHHMMSS). */
const gcal = (text: string, start: string, end: string, location: string, map: string) =>
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  `&text=${encodeURIComponent(`${text} – Ruchika & Bibek`)}` +
  `&dates=${start}%2F${end}&ctz=Asia%2FKathmandu` +
  `&details=${encodeURIComponent(`${text} of Ruchika and Bibek. Map: ${map}`)}` +
  `&location=${encodeURIComponent(location)}`;

const homeLocation = `${HOME_VENUE}, F76F+2RC, ${HOME_ADDRESS.join(", ")}`;
const hallLocation = `${HALL_VENUE}, ${HALL_ADDRESS.join(", ")}`;

export const EVENTS: EventMeta[] = [
  {
    id: "haldi",
    title: "Haldi Ceremony",
    date: "Saturday • 28th November 2026",
    time: "11:00 AM – 1:00 PM",
    isoDateStart: "2026-11-28T11:00:00+05:45",
    isoDateEnd: "2026-11-28T13:00:00+05:45",
    location: HOME_VENUE,
    addressLines: HOME_ADDRESS,
    mapUrl: HOME_MAP,
    calendarUrl: gcal("Haldi Ceremony", "20261128T110000", "20261128T130000", homeLocation, HOME_MAP),
    icon: "/assets/luxury/haldi-icon.jpg",
    themeColor: "#f4c430",
  },
  {
    id: "mehendi",
    title: "Mehendi Ceremony",
    date: "Saturday • 28th November 2026",
    time: "6:00 PM",
    isoDateStart: "2026-11-28T18:00:00+05:45",
    isoDateEnd: "2026-11-28T21:00:00+05:45",
    location: HOME_VENUE,
    addressLines: HOME_ADDRESS,
    mapUrl: HOME_MAP,
    calendarUrl: gcal("Mehendi Ceremony", "20261128T180000", "20261128T210000", homeLocation, HOME_MAP),
    icon: "/assets/luxury/mehendi-icon.jpg",
  },
  {
    id: "kumran",
    title: "Kumran Ritual",
    date: "Sunday • 29th November 2026",
    time: "6:00 PM onwards",
    isoDateStart: "2026-11-29T18:00:00+05:45",
    isoDateEnd: "2026-11-29T22:00:00+05:45",
    location: HOME_VENUE,
    addressLines: HOME_ADDRESS,
    mapUrl: HOME_MAP,
    calendarUrl: gcal("Kumran Ritual", "20261129T180000", "20261129T220000", homeLocation, HOME_MAP),
    icon: "/assets/luxury/lotus-motif.jpg",
  },
  {
    id: "wedding",
    title: "Marriage Ceremony",
    date: "Monday • 30th November 2026",
    time: "5:00 PM onwards",
    isoDateStart: "2026-11-30T17:00:00+05:45",
    isoDateEnd: "2026-11-30T23:59:00+05:45",
    location: HALL_VENUE,
    addressLines: HALL_ADDRESS,
    mapUrl: HALL_MAP,
    calendarUrl: gcal("Wedding Ceremony", "20261130T170000", "20261130T235900", hallLocation, HALL_MAP),
    icon: "/assets/luxury/wedding-fire-icon.jpg",
  },
];

export const TRANSLATIONS = {
  en: {
    seo: {
      title: "Ruchika weds Bibek — Wedding Invitation",
      description:
        "Together with their families, Ruchika Das & Bibek Karn cordially invite you to celebrate their sacred wedding ceremony and auspicious festivities on 30th November 2026 in Biratnagar, Nepal. Inspired by ancient Mithila heritage.",
    },
    entrance: {
      invocation: "॥ श्री गणेशाय नमः ॥ ✦ ॥ श्री जानकी-वल्लभो विजयते ॥",
      kicker: "WITH ALL OUR HEARTS",
      title: "You are invited",
      subtitle: "to celebrate with us",
      buttonText: "OPEN INVITATION",
      hintText: "✦ Tap to open the palace doors ✦",
    },
    hero: {
      shubhBadge: "॥ श्री गणेशाय नमः ॥ ✦ ॥ शुभ विवाह ॥",
      eyebrow: "TOGETHER WITH OUR FAMILIES",
      invitationLine:
        "We cordially invite you to celebrate the sacred union & wedding ceremony of",
      groomName: "Bibek Karna",
      groomFullName: "Bibek Karna",
      groomParents: "S/o Suresh Karn & Sunita Karn",
      brideName: "Ruchika Das",
      brideFullName: "Ruchika Das",
      brideParents: "D/o Anuj Kumar Lal Das & Kamini Das",
      weds: "weds",
      tagline:
        "Two souls, one sacred journey · In the eternal grace of Sita-Ram",
      scrollPrompt: "✦ SCROLL TO EXPLORE ✦",
      mithilaVerse:
        "मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः । मङ्गलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः ॥",
    },
    coupleStory: {
      meetHeading: "MEET THE COUPLE",
      coupleNames: "Ruchika & Bibek",
      unionLine:
        "Together with our families, we invite you to celebrate our union.",
      storyEyebrow: "OUR STORY",
      storyHeading: "Two Families. One Beautiful Beginning.",
      storyText:
        "From shared values to a shared future, our journey has been one of friendship, understanding, and growing together. Now, with the blessings of our families, we are excited to begin a new chapter as life partners.",
    },
    specialDate: {
      sectionTitle: "Our Special Date",
      subTitle: "Mark your calendar for our sacred wedding day",
      dayOfWeek: "MONDAY",
      formattedDate: "30 · NOVEMBER · 2026",
      auspiciousBadge: "✦ AUSPICIOUS WEDDING CEREMONY ✦",
      auspiciousSubtext: "Sacred Pheras & Auspicious Lagna",
      auspiciousTime: "5:00 PM Onwards",
      calendarBtn: "♡ Add to Calendar",
    },
    timeline: {
      sectionTitle: "Wedding Timeline",
      subTitle: "Sacred ceremonies and joyous celebrations across Mithila",
      viewLocation: "⌖ View Location",
      addToCalendar: "♡ Add to Calendar",
      events: [
        {
          id: "haldi",
          title: "Haldi Ceremony",
          subtitle: "Auspicious Turmeric Blessings",
          date: "Saturday • 28th November 2026",
          time: "11:00 AM – 1:00 PM",
          theme: "Theme: Yellow",
          location: "Nij Niwas (B.F.M)",
          addressLines: ["Biratnagar, Morang, Nepal"],
          badge: "💛 Auspicious Haldi",
        },
        {
          id: "mehendi",
          title: "Mehendi Ceremony",
          subtitle: "Colors of Love",
          date: "Saturday • 28th November 2026",
          time: "6:00 PM",
          location: "Nij Niwas (B.F.M)",
          addressLines: ["Biratnagar, Morang, Nepal"],
          badge: "🌿 Mehendi Celebration",
        },
        {
          id: "kumran",
          title: "Kumran (Kuldevta Poojan)",
          subtitle: "Sacred Pre-Wedding Mithila Rituals",
          date: "Sunday • 29th November 2026",
          time: "6:00 PM onwards",
          location: "Nij Niwas (B.F.M)",
          addressLines: ["Biratnagar, Morang, Nepal"],
          badge: "🪔 Sacred Pre-Wedding Rituals",
        },
        {
          id: "wedding",
          title: "Marriage Ceremony (Saat Phera)",
          subtitle: "Sacred Vedic Vows & Sindoor Daan",
          date: "Monday • 30th November 2026",
          time: "5:00 PM onwards",
          location: "Kanchanjunga Hotel & Party Palace",
          addressLines: ["Panchali Road", "Biratnagar, Nepal"],
          badge: "🌸 Auspicious Wedding Day · Sacred Pheras",
        },
      ],
    },
    countdown: {
      eyebrow: "THE BIG DAY IS GETTING CLOSER",
      title: "Counting Down to Forever",
      note: "Every passing second brings us closer to celebrating with you.",
      targetDateDisplay: "30 NOVEMBER 2026 · 5:00 PM",
      units: {
        days: "DAYS",
        hours: "HOURS",
        mins: "MINUTES",
        secs: "SECONDS",
      },
    },
    guestNote: {
      eyebrow: "A SACRED NOTE FROM OUR HEARTS",
      title: "Dear Guest",
      message:
        "We found our moment, and now we’re making it a lifetime. Inspired by the eternal love and timeless heritage of ancient Mithila, we step into this sacred chapter together. Your presence, warm blessings, and love will make our wedding day truly unforgettable and fill our hearts with joy.",
      signaturePrefix: "With deepest love & respect,",
      coupleNames: "Ruchika & Bibek",
    },
    wishes: {
      motif: "✦ ॐ शुभ आशीर्वाद ✦",
      title: "Send Your Blessings",
      sub: "Share your heartfelt love & wishes directly with Ruchika & Bibek via WhatsApp",
      nameLabel: "Your Name (Optional):",
      namePlaceholder: "e.g. Anand & Family",
      actionBadge: "Tap to Send 💌",
      actionBadgeSent: "Opening WhatsApp... ✓",
      quickWishes: [
        {
          icon: "💐",
          label: "Lifetime of Love & Joy",
          message:
            "Heartiest Congratulations Ruchika & Bibek! 💖 Wishing you both a lifetime of unconditional love, boundless laughter, and endless happiness on your wedding!",
        },
        {
          icon: "🪔",
          label: "Divine Blessings of Sita-Ram",
          message:
            "May Lord Rama & Goddess Sita shower their divine grace and blessings upon your sacred union. Subh Vivah Ruchika & Bibek! 🪔✨",
        },
        {
          icon: "🎉",
          label: "Counting Days to Celebrate!",
          message:
            "So thrilled and excited to celebrate with you both on 30th November 2026 in Biratnagar! Congratulations Ruchika & Bibek! 🥳🥂",
        },
        {
          icon: "✨",
          label: "Eternal Companionship",
          message:
            "Two souls, one sacred journey. Wishing Ruchika & Bibek eternal love, peace, and beautiful companionship forever! 💍🌸",
        },
      ],
      customHeading: "Or write your own personalized message:",
      customPlaceholder: "Write a heartfelt message for Ruchika & Bibek...",
      sendBtn: "Send via WhatsApp",
    },
    dock: {
      venues: "Venues",
      calendar: "Calendar",
      blessings: "Blessings",
      bless: "Bless",
    },
    music: {
      title: "Aaju Mithila Nagariya",
      artist: "Priya Mallick · Mithila Folk Anthem",
      play: "Play Song",
      pause: "Pause Song",
      tapToListen: "Tap to listen",
    },
    footer: {
      foreverText: "Forever & Always · 30 NOVEMBER 2026",
    },
    langSwitcher: {
      enLabel: "EN",
      maiLabel: "मैथिली",
    },
  },
  mai: {
    seo: {
      title: "रुचिका परिणय विवेक — पावन विवाह निमन्त्रण",
      description:
        "सपरिवार, रुचिका दास एवं विवेक कर्ण अहाँ सभ केँ अपन पावन वैवाहिक अनुष्ठान एवं मांगलिक उत्सव (३० नवम्बर २०२६, विराटनगर, नेपाल) मे सादर आमन्त्रित करैत छथि। प्राचीन मिथिलाक परम्परा सँ सुसज्जित डिजिटल निमन्त्रण पत्र।",
    },
    entrance: {
      invocation: "॥ श्री गणेशाय नमः ॥ ✦ ॥ श्री जानकी-वल्लभो विजयते ॥",
      kicker: "॥ सस्नेह निमन्त्रण ॥",
      title: "अहाँ सादर आमन्त्रित छी",
      subtitle: "मिथिलाक पावन वैवाहिक उत्सव मे",
      buttonText: "द्वार उद्‍घाटन (निमन्त्रण पत्र)",
      hintText: "✦ राजमहल द्वार खोलबाक लेल स्पर्श करू ✦",
    },
    hero: {
      shubhBadge: "॥ श्री गणेशाय नमः ॥ ✦ ॥ शुभ विवाह ॥",
      eyebrow: "॥ सपरिवार सादर निमन्त्रण ॥",
      invitationLine:
        "माता जानकी आ प्रभु श्री रामक पावन भूमि पर आयोजित ई वैवाहिक अनुष्ठान मे सादर आमन्त्रित छी",
      groomName: "विवेक",
      groomFullName: "विवेक कर्ण",
      groomParents: "सुपुत्र: श्री सुरेश कर्ण एवं श्रीमती सुनीता कर्ण",
      brideName: "रुचिका",
      brideFullName: "रुचिका दास",
      brideParents: "सुपुत्री: श्री अनुज कुमार लाल दास एवं श्रीमती कामिनी दास",
      weds: "सङ्ग",
      tagline:
        "जनकनन्दिनी सीता आ प्रभु श्री रामक पावन साक्षी मे · नव दाम्पत्य जीवनक आरम्भ",
      scrollPrompt: "✦ विवाह उत्सव विवरणी ✦",
      mithilaVerse:
        "मङ्गलम् भगवान विष्णुः मङ्गलम् गरुडध्वजः । मङ्गलम् पुण्डरीकाक्षः मङ्गलाय तनो हरिः ॥",
    },
    coupleStory: {
      meetHeading: "वर-वधू परिचय",
      coupleNames: "रुचिका एवं विवेक",
      unionLine:
        "अपन परिवारक संग, हम अहाँ सबहकें अपन पावन परिणयक साक्षी बनबाक लेल सादर आमन्त्रित करैत छी।",
      storyEyebrow: "हमर यात्रा",
      storyHeading: "दू परिवार, एक पावन शुरुआत",
      storyText:
        "पारस्परिक विश्वास आ स्नेह सँ सजल ई यात्रा अब कुलदेवता आ परिवारक आशीर्वादेँ सात फेराक पावन बन्धन दिशि बढ़ि रहल अछि। अहाँक उपस्थिति आ शुभाशीर्वाद हमर नव जीवनक पावन आधार बनत।",
    },
    specialDate: {
      sectionTitle: "पावन विवाह तिथि",
      subTitle: "हमर पावन विवाहक शुभ तिथि आ लगन",
      dayOfWeek: "सोमवार",
      formattedDate: "३० · नवम्बर · २०२६",
      auspiciousBadge: "✦ पावन शुभ विवाह संस्कार ✦",
      auspiciousSubtext: "शुभ लग्न, सिन्दूरदान आ पावन सात फेरा",
      auspiciousTime: "साँझ ५:०० बजे सँ आरम्भ",
      calendarBtn: "♡ पंचांग मे सुरक्षित करू",
    },
    timeline: {
      sectionTitle: "वैवाहिक उत्सव विवरणी",
      subTitle: "मिथिलाक पावन परम्परानुसार समस्त मांगलिक अनुष्ठानक समय",
      viewLocation: "⌖ स्थान (गुगल म्याप)",
      addToCalendar: "♡ पंचांग मे सुरक्षित करू",
      events: [
        {
          id: "haldi",
          title: "हल्दी",
          subtitle: "मांगलिक हल्दी आ उबटन",
          date: "शनिवार • २८ नवम्बर २०२६",
          time: "पूर्वाह्न ११:०० सँ अपराह्न १:०० बजे",
          theme: "परिधानक रङ्ग: पीयर",
          location: "निज निवास (बी.एफ.एम)",
          addressLines: ["विराटनगर, मोरङ्ग, नेपाल"],
          badge: "💛 मांगलिक हल्दी",
        },
        {
          id: "mehendi",
          title: "मेहन्दी",
          subtitle: "सनेहक रङ्ग",
          date: "शनिवार • २८ नवम्बर २०२६",
          time: "साँझ ६:०० बजे",
          location: "निज निवास (बी.एफ.एम)",
          addressLines: ["विराटनगर, मोरङ्ग, नेपाल"],
          badge: "🌿 मेहन्दी उत्सव",
        },
        {
          id: "kumran",
          title: "कुमरान (देवपूजन)",
          subtitle: "कुलदेवता आ मातृका पूजन अनुष्ठान",
          date: "रविवार • २९ नवम्बर २०२६",
          time: "साँझ ६:०० बजे सँ",
          location: "निज निवास (बी.एफ.एम)",
          addressLines: ["विराटनगर, मोरङ्ग, नेपाल"],
          badge: "🪔 कुलदेवता पूजन आ कुमरान",
        },
        {
          id: "wedding",
          title: "पावन विवाह संस्कार (सात फेरा)",
          subtitle: "शुभ विवाह, कन्यादान, सिन्दूरदान आ सात फेरा",
          date: "सोमवार • ३० नवम्बर २०२६",
          time: "साँझ ५:०० बजे सँ",
          location: "कञ्चनजङ्घा होटल एवं पार्टी पैलेस",
          addressLines: ["पाञ्चाली रोड", "विराटनगर, नेपाल"],
          badge: "🌸 मुख्य विवाह उत्सव · पावन सात फेरा",
        },
      ],
    },
    countdown: {
      eyebrow: "पावन विवाहक दिन नजीक अछि",
      title: "दिन गणना (शुभ आगमन)",
      note: "प्रत्येक पल अहाँ सभक स्वागत आ मिलनक उत्कण्ठा बढ़ा रहल अछि।",
      targetDateDisplay: "३० नवम्बर २०२६ · साँझ ५:०० बजे",
      units: {
        days: "दिन",
        hours: "घण्टा",
        mins: "मिनट",
        secs: "सेकेण्ड",
      },
    },
    guestNote: {
      eyebrow: "पाहुन लेल विशेष सन्देश",
      title: "सादर स्नेही जन,",
      message:
        "हृदयक अगाध स्नेहक संग अहाँक उपस्थिति हमरा सभक ई पावन वैवाहिक अनुष्ठान मे प्रार्थित अछि। जनकपुरधामक पवित्र परम्परा आ मिथिलाक संस्कारक साक्षी बनि जेना माता जानकी आ प्रभु श्री रामक मिलन भेल छल, तहिना हमरा दुनू गोटे अपन नव जीवनक आरम्भ कऽ रहल छी। अहाँक पावन चरणक आगमन, सनेह आ शुभाशीर्वाद हमर परिवारक मान आ आनंदक द्विगुणित करत।",
      signaturePrefix: "सस्नेह दर्शनाभिलाषी,",
      coupleNames: "रुचिका आ विवेक",
    },
    wishes: {
      motif: "✦ ॐ शुभ आशीर्वाद ✦",
      title: "अपन शुभाशीर्वाद पठाउ",
      sub: "रुचिका आ विवेक लेल अपन मंगलकामना आ आशीर्वाद सोझे व्हाट्सएप पर पठाउ",
      nameLabel: "अहाँक शुभ नाम (ऐच्छिक):",
      namePlaceholder: "जहिना: आनन्द जी एवं परिवार",
      actionBadge: "व्हाट्सएप पर पठाउ 💌",
      actionBadgeSent: "व्हाट्सएप खुजि रहल अछि... ✓",
      quickWishes: [
        {
          icon: "💐",
          label: "सुखी दाम्पत्य जीवनक कामना",
          message:
            "रुचिका आ विवेक केँ पावन विवाहक कोटि-कोटि शुभकामना! 💖 अहाँ दुनू गोटे केँ आजीवन प्रेम, सुख आ समृद्धिक शुभाशीर्वाद!",
        },
        {
          icon: "🪔",
          label: "सिया-रामक दिव्य आशीर्वाद",
          message:
            "माता सीता आ प्रभु श्री रामचन्द्र जीक दिव्य कृपा अहाँक युगल जोड़ी पर सदति बरसैत रहय। शुभ विवाह रुचिका आ विवेक! 🪔✨",
        },
        {
          icon: "🎉",
          label: "विवाह मे उपस्थितिक उत्कण्ठा",
          message:
            "३० नवम्बर २०२६ केँ विराटनगर मे अहाँ दुनू गोटे सङ्ग विवाहक आनंद लेबय लेल हम सभ उत्सुक छी! बधाई रुचिका आ विवेक! 🥳🥂",
        },
        {
          icon: "✨",
          label: "अमर प्रेम आ अखण्ड सौभाग्य",
          message:
            "मिथिलाक पावन माटि पर बंधायल ई सात फेराक बन्धन सदिखन अमर रहय। नव दाम्पत्य जीवनक असीम मंगलकामना! 💍🌸",
        },
      ],
      customHeading: "अथवा अपन हार्दिक सन्देश लिखू:",
      customPlaceholder: "रुचिका आ विवेक लेल अपन शुभाशीर्वाद लिखू...",
      sendBtn: "व्हाट्सएप पर पठाउ",
    },
    dock: {
      venues: "स्थान",
      calendar: "पंचांग",
      blessings: "आशीर्वाद",
      bless: "पुष्प वर्षा",
    },
    music: {
      title: "आजु मिथिला नगरिया",
      artist: "प्रिया मल्लिक · मिथिला विवाह गान",
      play: "सङ्गीत बजाउ",
      pause: "विराम",
      tapToListen: "स्पर्श करू",
    },
    footer: {
      foreverText: "अखण्ड सनेह एवं समर्पण · ३० नवम्बर २०२६",
    },
    langSwitcher: {
      enLabel: "EN",
      maiLabel: "मैथिली",
    },
  },
};

export type Translation = (typeof TRANSLATIONS)["en"];
