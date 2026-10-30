export const LOCALES = [
  { code: "et", label: "Eesti", short: "ET" },
  { code: "en", label: "English", short: "EN" },
  { code: "ru", label: "Русский", short: "RU" },
];

const sharedPrices = {
  sofas: {
    rows: [
      { a: "15 €", b: "20 €" },
      { a: "30 €", b: "40 €" },
      { a: "45 €", b: "60 €" },
    ],
  },
  mattresses: {
    rows: [
      { a: "25 €", b: "50 €" },
      { a: "40 €", b: "80 €" },
      { a: "50 €", b: "100 €" },
    ],
  },
  chairs: {
    rows: [{ a: "5 €" }, { a: "10 €" }],
  },
};

export const translations = {
  et: {
    nav: {
      home: "Avaleht",
      about: "Meist",
      services: "Teenused",
      prices: "Hinnakiri",
      contact: "Kontakt",
      cta: "Küsige pakkumist",
    },
    hero: {
      titleLine1: "Puhas kodu.",
      titleLine2: "Värske mööbel.",
      subtitle: "Diivanite, madratsite ja toolide puhastus Tallinnas.",
      selectService: "Valige teenus",
      location: "Teie asukoht",
      cta: "Küsige pakkumist",
      services: {
        sofas: "Diivanid",
        mattresses: "Madratsid",
        chairs: "Toolid",
      },
    },
    trust: {
      clean: "Värskem kodu",
      reliable: "Professionaalne puhastus",
      daily: "Selge hinnakiri",
    },
    homeServices: {
      title: "Meie teenused",
    },
    homeAbout: {
      eyebrow: "Meist",
      title: "Puhas Kodu Tallinn",
      text: "Puhastame diivaneid, madratseid ja toole Tallinnas. Selged hinnad, hoolikas töö.",
      cta: "Lugege lähemalt",
    },
    process: {
      title: "Kuidas see käib?",
      steps: [
        { title: "Valige teenus", text: "Diivan, madrats või tool." },
        { title: "Saage pakkumine", text: "Anname selge hinna." },
        { title: "Nautige puhtust", text: "Tuleme kohale ja puhastame." },
      ],
    },
    services: {
      sofas: {
        title: "Diivanid",
        short: "Värskendav puhastus või süvapuhastus.",
        long: "Puhastame ühe-, kahe- ja kolmekohalisi diivaneid.",
        includes: ["Ühekohaline istekoht", "Kahekohaline diivan", "Kolmekohaline diivan"],
      },
      mattresses: {
        title: "Madratsid",
        short: "Ühe või mõlema poole puhastus.",
        long: "Sobib erinevatele madratsimõõtudele.",
        includes: ["90/160 cm", "160/200 cm", "200/220 cm"],
      },
      chairs: {
        title: "Toolid",
        short: "Pehme istmega ja polsterdatud toolid.",
        long: "Kiire ja korralik toolide puhastus.",
        includes: ["Pehme istmega tool", "Täielikult polsterdatud tool"],
      },
    },
    servicesPage: {
      eyebrow: "Teenused",
      title: "Diivanid, madratsid ja toolid",
      subtitle: "Professionaalne pehme mööbli puhastus Tallinnas.",
      ask: "Küsige pakkumist",
    },
    aboutPage: {
      eyebrow: "Meist",
      title: "Puhas kodu, meeldiv igapäev.",
      subtitle: "Diivanite, madratsite ja toolide puhastus Tallinnas.",
      whoTitle: "Kes me oleme",
      whoP1: "Oleme Tallinnas tegutsev pehme mööbli puhastusettevõte.",
      whoP2: "Töötame hoolikalt — alates värskendusest kuni sügavamate plekkideni.",
      valuesTitle: "Mille eest seisame",
      values: [
        { title: "Selged hinnad", text: "Hinnakiri on lihtne ja arusaadav." },
        { title: "Hoolikas töö", text: "Kaitseme teie mööblit ja kodu." },
        { title: "Aus suhtlus", text: "Tugevama määrdumise korral ütleme selle ausalt." },
      ],
      teamTitle: "Kuidas töö käib",
      team: [
        { name: "Planeerimine", role: "Aeg ja pakkumine", text: "Lepime kokku aja ja hinna." },
        { name: "Puhastustiim", role: "Töö objektil", text: "Puhastame diivanid, madratsid ja toolid." },
        { name: "Klienditugi", role: "Küsimused", text: "Vastame päringutele kiiresti." },
      ],
    },
    pricesPage: {
      eyebrow: "Hinnakiri",
      title: "Hinnakiri",
      subtitle: "Alghinnad — lõplik hind võib sõltuda määrdumisest.",
      categories: [
        {
          id: "sofas",
          title: "Diivanid",
          colA: "Värskendav puhastus",
          colB: "Süvapuhastus",
          rows: [
            { item: "Ühekohaline istekoht", a: `alates ${sharedPrices.sofas.rows[0].a}`, b: `alates ${sharedPrices.sofas.rows[0].b}` },
            { item: "Kahekohaline diivan", a: `alates ${sharedPrices.sofas.rows[1].a}`, b: `alates ${sharedPrices.sofas.rows[1].b}` },
            { item: "Kolmekohaline diivan", a: `alates ${sharedPrices.sofas.rows[2].a}`, b: `alates ${sharedPrices.sofas.rows[2].b}` },
          ],
        },
        {
          id: "mattresses",
          title: "Madratsid",
          colA: "Üks pool",
          colB: "Mõlemad pooled",
          rows: [
            { item: "90/160 cm", a: `alates ${sharedPrices.mattresses.rows[0].a}`, b: `alates ${sharedPrices.mattresses.rows[0].b}` },
            { item: "160/200 cm", a: `alates ${sharedPrices.mattresses.rows[1].a}`, b: `alates ${sharedPrices.mattresses.rows[1].b}` },
            { item: "200/220 cm", a: `alates ${sharedPrices.mattresses.rows[2].a}`, b: `alates ${sharedPrices.mattresses.rows[2].b}` },
          ],
        },
        {
          id: "chairs",
          title: "Toolid",
          colA: "Hind",
          singleColumn: true,
          rows: [
            { item: "Pehme istmega tool", a: `alates ${sharedPrices.chairs.rows[0].a}` },
            { item: "Täielikult polsterdatud tool", a: `alates ${sharedPrices.chairs.rows[1].a}` },
          ],
        },
      ],
      warning:
        "Hind võib olla kõrgem sõltuvalt määrdumisest (veri, uriin, viltpliiatsijäljed, loomakarvad).",
      footnote: "Kõik hinnad on alates-hinnad.",
      faqTitle: "Küsimused",
      faqs: [
        { q: "Kas vahendid on hinna sees?", a: "Jah — toome kõik vajalikud vahendid kaasa." },
        { q: "Kas tulete Tallinnas kohale?", a: "Jah, teenindame Tallinnas ja ümbruses." },
      ],
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Võtke ühendust",
      subtitle: "Kirjeldage mööblit ja koostame pakkumise.",
      asideEyebrow: "Kontakt",
      asideTitle: "Aitame teid hea meelega.",
      asideText: "Kirjutage, helistage või saatke vorm.",
      email: "E-post",
      phone: "Telefon",
      area: "Piirkond",
      areaValue: "Tallinn ja ümbrus",
      hours: "Tööaeg",
      hoursValue: "E–R, 9:00–17:00",
      formTitle: "Küsige pakkumist",
      formHint: "* kohustuslikud väljad",
      name: "Täisnimi *",
      namePh: "Teie nimi",
      emailLabel: "E-post *",
      emailPh: "teie@email.com",
      phoneLabel: "Telefon",
      phonePh: "+372 …",
      service: "Teenus *",
      selectService: "Valige teenus",
      other: "Muu",
      location: "Asukoht *",
      locationPh: "Tänav või linnaosa",
      message: "Sõnum",
      messagePh: "Mööbli tüüp, suurus, erisoovid…",
      send: "Saatke päring",
      replyNote: "Vastame tavaliselt ühe tööpäeva jooksul.",
    },
    footer: {
      tagline: "Diivanite, madratsite ja toolide puhastus Tallinnas.",
    },
    common: {
      requestQuote: "Küsige pakkumist",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      prices: "Prices",
      contact: "Contact",
      cta: "Request a quote",
    },
    hero: {
      titleLine1: "A cleaner home.",
      titleLine2: "Fresher furniture.",
      subtitle: "Sofa, mattress, and chair cleaning in Tallinn.",
      selectService: "Select service",
      location: "Your location",
      cta: "Request a quote",
      services: {
        sofas: "Sofas",
        mattresses: "Mattresses",
        chairs: "Chairs",
      },
    },
    trust: {
      clean: "A fresher home",
      reliable: "Professional cleaning",
      daily: "Clear price list",
    },
    homeServices: {
      title: "Our services",
    },
    homeAbout: {
      eyebrow: "About us",
      title: "Puhas Kodu Tallinn",
      text: "We clean sofas, mattresses, and chairs in Tallinn. Clear prices, careful work.",
      cta: "Read more",
    },
    process: {
      title: "How does it work?",
      steps: [
        { title: "Choose a service", text: "Sofa, mattress, or chair." },
        { title: "Get a quote", text: "We give a clear price." },
        { title: "Enjoy the result", text: "We come and clean on site." },
      ],
    },
    services: {
      sofas: {
        title: "Sofas",
        short: "Refreshing clean or deep clean.",
        long: "We clean one-, two-, and three-seater sofas.",
        includes: ["Single seat", "Two-seater sofa", "Three-seater sofa"],
      },
      mattresses: {
        title: "Mattresses",
        short: "One side or both sides.",
        long: "Available for different mattress sizes.",
        includes: ["90/160 cm", "160/200 cm", "200/220 cm"],
      },
      chairs: {
        title: "Chairs",
        short: "Soft-seat and fully upholstered chairs.",
        long: "Quick and careful chair cleaning.",
        includes: ["Soft-seat chair", "Fully upholstered chair"],
      },
    },
    servicesPage: {
      eyebrow: "Services",
      title: "Sofas, mattresses, and chairs",
      subtitle: "Professional soft furniture cleaning in Tallinn.",
      ask: "Request a quote",
    },
    aboutPage: {
      eyebrow: "About us",
      title: "A cleaner home every day.",
      subtitle: "Sofa, mattress, and chair cleaning in Tallinn.",
      whoTitle: "Who we are",
      whoP1: "We are a Tallinn-based soft furniture cleaning company.",
      whoP2: "We work carefully — from refreshing cleans to deeper stain treatment.",
      valuesTitle: "What we stand for",
      values: [
        { title: "Clear prices", text: "A simple price list you can understand." },
        { title: "Careful work", text: "We protect your furniture and home." },
        { title: "Honest communication", text: "If soiling is heavier, we say so clearly." },
      ],
      teamTitle: "How we work",
      team: [
        { name: "Planning", role: "Time & quote", text: "We agree on the time and price." },
        { name: "Cleaning team", role: "On site", text: "We clean sofas, mattresses, and chairs." },
        { name: "Support", role: "Questions", text: "We reply to requests quickly." },
      ],
    },
    pricesPage: {
      eyebrow: "Prices",
      title: "Price list",
      subtitle: "Starting prices — the final price may depend on soiling.",
      categories: [
        {
          id: "sofas",
          title: "Sofas",
          colA: "Refreshing clean",
          colB: "Deep clean",
          rows: [
            { item: "Single seat", a: `from ${sharedPrices.sofas.rows[0].a}`, b: `from ${sharedPrices.sofas.rows[0].b}` },
            { item: "Two-seater sofa", a: `from ${sharedPrices.sofas.rows[1].a}`, b: `from ${sharedPrices.sofas.rows[1].b}` },
            { item: "Three-seater sofa", a: `from ${sharedPrices.sofas.rows[2].a}`, b: `from ${sharedPrices.sofas.rows[2].b}` },
          ],
        },
        {
          id: "mattresses",
          title: "Mattresses",
          colA: "One side",
          colB: "Both sides",
          rows: [
            { item: "90/160 cm", a: `from ${sharedPrices.mattresses.rows[0].a}`, b: `from ${sharedPrices.mattresses.rows[0].b}` },
            { item: "160/200 cm", a: `from ${sharedPrices.mattresses.rows[1].a}`, b: `from ${sharedPrices.mattresses.rows[1].b}` },
            { item: "200/220 cm", a: `from ${sharedPrices.mattresses.rows[2].a}`, b: `from ${sharedPrices.mattresses.rows[2].b}` },
          ],
        },
        {
          id: "chairs",
          title: "Chairs",
          colA: "Price",
          singleColumn: true,
          rows: [
            { item: "Soft-seat chair", a: `from ${sharedPrices.chairs.rows[0].a}` },
            { item: "Fully upholstered chair", a: `from ${sharedPrices.chairs.rows[1].a}` },
          ],
        },
      ],
      warning:
        "Price may be higher depending on soiling (blood, urine, felt-tip marks, pet hair).",
      footnote: "All prices are starting prices.",
      faqTitle: "FAQ",
      faqs: [
        { q: "Is equipment included?", a: "Yes — we bring everything needed." },
        { q: "Do you come to Tallinn?", a: "Yes, we serve Tallinn and nearby areas." },
      ],
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Get in touch",
      subtitle: "Describe your furniture and we will prepare an offer.",
      asideEyebrow: "Contact",
      asideTitle: "Happy to help.",
      asideText: "Write, call, or send the form.",
      email: "Email",
      phone: "Phone",
      area: "Area",
      areaValue: "Tallinn & nearby",
      hours: "Hours",
      hoursValue: "Mon–Fri, 9:00–17:00",
      formTitle: "Request a quote",
      formHint: "* required fields",
      name: "Full name *",
      namePh: "Your name",
      emailLabel: "Email *",
      emailPh: "you@email.com",
      phoneLabel: "Phone",
      phonePh: "+372 …",
      service: "Service *",
      selectService: "Select service",
      other: "Other",
      location: "Location *",
      locationPh: "Street or district",
      message: "Message",
      messagePh: "Furniture type, size, notes…",
      send: "Send request",
      replyNote: "We usually reply within one business day.",
    },
    footer: {
      tagline: "Sofa, mattress, and chair cleaning in Tallinn.",
    },
    common: {
      requestQuote: "Request a quote",
    },
  },

  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      prices: "Цены",
      contact: "Контакты",
      cta: "Запросить цену",
    },
    hero: {
      titleLine1: "Чистый дом.",
      titleLine2: "Свежая мебель.",
      subtitle: "Чистка диванов, матрасов и стульев в Таллинне.",
      selectService: "Выберите услугу",
      location: "Ваш адрес",
      cta: "Запросить цену",
      services: {
        sofas: "Диваны",
        mattresses: "Матрасы",
        chairs: "Стулья",
      },
    },
    trust: {
      clean: "Более свежий дом",
      reliable: "Профессиональная чистка",
      daily: "Понятный прайс",
    },
    homeServices: {
      title: "Наши услуги",
    },
    homeAbout: {
      eyebrow: "О нас",
      title: "Puhas Kodu Tallinn",
      text: "Чистим диваны, матрасы и стулья в Таллинне. Понятные цены, аккуратная работа.",
      cta: "Подробнее",
    },
    process: {
      title: "Как это работает?",
      steps: [
        { title: "Выберите услугу", text: "Диван, матрас или стул." },
        { title: "Получите цену", text: "Назовем понятную стоимость." },
        { title: "Наслаждайтесь чистотой", text: "Приедем и почистим на месте." },
      ],
    },
    services: {
      sofas: {
        title: "Диваны",
        short: "Освежающая или глубокая чистка.",
        long: "Чистим одно-, двух- и трехместные диваны.",
        includes: ["Одноместное сиденье", "Двухместный диван", "Трехместный диван"],
      },
      mattresses: {
        title: "Матрасы",
        short: "Одна сторона или обе стороны.",
        long: "Подходит для разных размеров матрасов.",
        includes: ["90/160 см", "160/200 см", "200/220 см"],
      },
      chairs: {
        title: "Стулья",
        short: "С мягким сиденьем и полностью обитые.",
        long: "Быстрая и аккуратная чистка стульев.",
        includes: ["Стул с мягким сиденьем", "Полностью обитый стул"],
      },
    },
    servicesPage: {
      eyebrow: "Услуги",
      title: "Диваны, матрасы и стулья",
      subtitle: "Профессиональная чистка мягкой мебели в Таллинне.",
      ask: "Запросить цену",
    },
    aboutPage: {
      eyebrow: "О нас",
      title: "Чистый дом каждый день.",
      subtitle: "Чистка диванов, матрасов и стульев в Таллинне.",
      whoTitle: "Кто мы",
      whoP1: "Мы компания в Таллинне, специализирующаяся на чистке мягкой мебели.",
      whoP2: "Работаем аккуратно — от освежающей чистки до удаления сильных загрязнений.",
      valuesTitle: "Наши принципы",
      values: [
        { title: "Понятные цены", text: "Простой и понятный прайс." },
        { title: "Аккуратная работа", text: "Бережем вашу мебель и дом." },
        { title: "Честное общение", text: "При сильном загрязнении скажем об этом прямо." },
      ],
      teamTitle: "Как мы работаем",
      team: [
        { name: "Планирование", role: "Время и цена", text: "Согласуем время и стоимость." },
        { name: "Команда чистки", role: "На объекте", text: "Чистим диваны, матрасы и стулья." },
        { name: "Поддержка", role: "Вопросы", text: "Быстро отвечаем на заявки." },
      ],
    },
    pricesPage: {
      eyebrow: "Цены",
      title: "Прайс-лист",
      subtitle: "Цены от — итоговая стоимость может зависеть от загрязнения.",
      categories: [
        {
          id: "sofas",
          title: "Диваны",
          colA: "Освежающая чистка",
          colB: "Глубокая чистка",
          rows: [
            { item: "Одноместное сиденье", a: `от ${sharedPrices.sofas.rows[0].a}`, b: `от ${sharedPrices.sofas.rows[0].b}` },
            { item: "Двухместный диван", a: `от ${sharedPrices.sofas.rows[1].a}`, b: `от ${sharedPrices.sofas.rows[1].b}` },
            { item: "Трехместный диван", a: `от ${sharedPrices.sofas.rows[2].a}`, b: `от ${sharedPrices.sofas.rows[2].b}` },
          ],
        },
        {
          id: "mattresses",
          title: "Матрасы",
          colA: "Одна сторона",
          colB: "Обе стороны",
          rows: [
            { item: "90/160 см", a: `от ${sharedPrices.mattresses.rows[0].a}`, b: `от ${sharedPrices.mattresses.rows[0].b}` },
            { item: "160/200 см", a: `от ${sharedPrices.mattresses.rows[1].a}`, b: `от ${sharedPrices.mattresses.rows[1].b}` },
            { item: "200/220 см", a: `от ${sharedPrices.mattresses.rows[2].a}`, b: `от ${sharedPrices.mattresses.rows[2].b}` },
          ],
        },
        {
          id: "chairs",
          title: "Стулья",
          colA: "Цена",
          singleColumn: true,
          rows: [
            { item: "Стул с мягким сиденьем", a: `от ${sharedPrices.chairs.rows[0].a}` },
            { item: "Полностью обитый стул", a: `от ${sharedPrices.chairs.rows[1].a}` },
          ],
        },
      ],
      warning:
        "Цена может быть выше в зависимости от загрязнения (кровь, моча, следы фломастера, шерсть животных).",
      footnote: "Все цены указаны «от».",
      faqTitle: "Вопросы",
      faqs: [
        { q: "Средства входят в цену?", a: "Да — всё необходимое привозим с собой." },
        { q: "Вы приезжаете в Таллинн?", a: "Да, работаем в Таллинне и ближайших районах." },
      ],
    },
    contactPage: {
      eyebrow: "Контакты",
      title: "Свяжитесь с нами",
      subtitle: "Опишите мебель — подготовим предложение.",
      asideEyebrow: "Контакты",
      asideTitle: "С радостью поможем.",
      asideText: "Напишите, позвоните или отправьте форму.",
      email: "Эл. почта",
      phone: "Телефон",
      area: "Район",
      areaValue: "Таллинн и окрестности",
      hours: "Часы работы",
      hoursValue: "Пн–Пт, 9:00–17:00",
      formTitle: "Запросить цену",
      formHint: "* обязательные поля",
      name: "Имя *",
      namePh: "Ваше имя",
      emailLabel: "Эл. почта *",
      emailPh: "you@email.com",
      phoneLabel: "Телефон",
      phonePh: "+372 …",
      service: "Услуга *",
      selectService: "Выберите услугу",
      other: "Другое",
      location: "Адрес *",
      locationPh: "Улица или район",
      message: "Сообщение",
      messagePh: "Тип мебели, размер, пожелания…",
      send: "Отправить",
      replyNote: "Обычно отвечаем в течение одного рабочего дня.",
    },
    footer: {
      tagline: "Чистка диванов, матрасов и стульев в Таллинне.",
    },
    common: {
      requestQuote: "Запросить цену",
    },
  },
};

export const SERVICE_IDS = ["sofas", "mattresses", "chairs"];

export const SERVICE_IMAGES = {
  sofas: "/images/service-common.jpg",
  mattresses: "/images/service-stairwell.jpg",
  chairs: "/images/service-windows.jpg",
};

export const TEAM_IMAGES = [
  "/images/team-operations.jpg",
  "/images/team-specialists.jpg",
  "/images/team-support.jpg",
];

export const IMAGES = {
  aboutTeam: "/images/about-team.jpg",
  aboutStory: "/images/about-story.jpg",
};
