// Privremeni (izmišljeni) sadržaj za pokretanje sajta.
// Zamenite stvarnim podacima kroz CMS panel na /studio, ovo su samo razumne
// početne vrednosti da sajt ne bude prazan.

// Helperi za pisanje dugačkog sadržaja u Portable Text formatu (isti format
// koji koristi Sanity), bez ručnog kucanja pune strukture bloka za svaki red.
function h2(text: string) {
  return { _type: "block", style: "h2", children: [{ _type: "span", text }] };
}
function h3(text: string) {
  return { _type: "block", style: "h3", children: [{ _type: "span", text }] };
}
function p(text: string) {
  return { _type: "block", style: "normal", children: [{ _type: "span", text }] };
}
function bullets(items: string[]) {
  return items.map((text) => ({
    _type: "block",
    style: "normal",
    listItem: "bullet" as const,
    level: 1,
    children: [{ _type: "span", text }],
  }));
}

export const siteSettings = {
  title: "Moler Pro Niš",
  tagline: "Molerski radovi i fasade u Nišu, uredno i po dogovorenom roku",
  phone: "065 781 4923",
  phoneSecondary: "018 452 990",
  email: "info@molernis.rs",
  address: "Bulevar Nemanjića 44, Niš",
  city: "Niš",
  serviceAreas: ["Niš", "Niška Banja", "Medijana", "Pantelej", "Crveni Krst"],
  foundedYear: 2015,
  workingHours: "Pon–Sub: 07–19h",
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "19:00",
    },
  ],
  // Približne koordinate centra Niša — zameniti tačnom geo-lokacijom adrese firme.
  geo: { lat: 43.3209, lng: 21.8958 },
  trustBadges: [
    "Čist i uredan rad",
    "Kvalitetne boje provere marke",
    "Garancija na izvedene radove",
    "Prekrivamo i štitimo nameštaj",
    "Poštujemo dogovoreni rok",
  ],
  paintBrands: ["Jub", "Zvezda Helios", "Caparol", "Beckers", "Djordjevic Boje"],
};

export type ServiceItem = {
  slug: string;
  title: string;
  category: "unutrasnji-radovi" | "fasadni-radovi" | "dekorativni-premazi" | "sanacija-renoviranje";
  unit: "m2" | "kom" | "fiksno" | "dm";
  shortDescription: string;
  priceFrom: number;
  priceTo?: number;
  priceNote?: string;
  featured?: boolean;
};

export const services: ServiceItem[] = [
  // Unutrašnji molerski radovi
  {
    slug: "gletovanje-zidova",
    title: "Gletovanje zidova (dvoslojno)",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Bandažiranje spojeva, dvoslojno gletovanje i fino brušenje do glatke površine.",
    priceFrom: 380,
    priceTo: 480,
    priceNote: "zavisi od stanja postojeće podloge",
    featured: true,
  },
  {
    slug: "gletovanje-plafona",
    title: "Gletovanje plafona",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Gletovanje plafona uključujući sanaciju manjih pukotina pre nanošenja mase.",
    priceFrom: 420,
    priceTo: 520,
  },
  {
    slug: "farbanje-zidova-jedan-sloj",
    title: "Farbanje zidova, jedan sloj",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Bojenje već pripremljenih, gletovanih zidova jednim slojem kvalitetne disperzivne boje.",
    priceFrom: 160,
    featured: true,
  },
  {
    slug: "farbanje-zidova-dva-sloja",
    title: "Farbanje zidova, dva sloja",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Dvoslojno bojenje za ujednačen ton i bolju pokrivnost, preporučeno kod promene boje.",
    priceFrom: 260,
    featured: true,
  },
  {
    slug: "farbanje-plafona",
    title: "Farbanje plafona",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Bojenje plafona belom ili tonom po izboru, jedan ili dva sloja po dogovoru.",
    priceFrom: 200,
  },
  {
    slug: "kompletna-obrada-soba",
    title: "Kompletna obrada sobe (gletovanje + farbanje)",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Gletovanje, brušenje i dvoslojno farbanje zidova i plafona, sve u jednoj ceni.",
    priceFrom: 620,
    priceTo: 750,
    priceNote: "obračunato po m² poda prostorije, standardna visina plafona",
    featured: true,
  },
  {
    slug: "impregnacija-podloge",
    title: "Impregnacija (temeljni premaz) podloge",
    category: "unutrasnji-radovi",
    unit: "m2",
    shortDescription: "Nanošenje temeljnog premaza pre gletovanja radi boljeg prijanjanja i manje potrošnje mase.",
    priceFrom: 90,
  },
  // Fasadni radovi
  {
    slug: "priprema-fasade",
    title: "Priprema fasade (čišćenje i sanacija pukotina)",
    category: "fasadni-radovi",
    unit: "m2",
    shortDescription: "Skidanje starih, oljuštenih slojeva, sanacija pukotina i čišćenje podloge pre bojenja.",
    priceFrom: 250,
    priceTo: 400,
    priceNote: "zavisi od stanja postojeće fasade",
  },
  {
    slug: "hidrofobizacija-fasade",
    title: "Hidrofobizacija fasade",
    category: "fasadni-radovi",
    unit: "m2",
    shortDescription: "Nanošenje hidrofobnog premaza koji odbija vodu i sprečava prodor vlage u zid.",
    priceFrom: 180,
  },
  {
    slug: "farbanje-fasade-jedan-sloj",
    title: "Farbanje fasade, jedan sloj",
    category: "fasadni-radovi",
    unit: "m2",
    shortDescription: "Bojenje pripremljene fasadne podloge fasadnom bojom otpornom na UV i vremenske uslove.",
    priceFrom: 320,
    featured: true,
  },
  {
    slug: "farbanje-fasade-dva-sloja",
    title: "Farbanje fasade, dva sloja",
    category: "fasadni-radovi",
    unit: "m2",
    shortDescription: "Dvoslojno bojenje fasade za bolju pokrivnost i trajniji rezultat, preporuka za termo-fasadu.",
    priceFrom: 480,
    priceTo: 560,
    featured: true,
  },
  {
    slug: "zavrsni-sloj-termo-fasade",
    title: "Završni dekorativni sloj termo-fasade",
    category: "fasadni-radovi",
    unit: "m2",
    shortDescription: "Nanošenje završne dekorativne žbuke (silikatna, silikonska ili akrilna) preko termo-izolacije.",
    priceFrom: 650,
    priceTo: 820,
    priceNote: "zavisi od granulacije i tipa žbuke",
  },
  {
    slug: "skela-za-fasadu",
    title: "Postavljanje i iznajmljivanje skele",
    category: "fasadni-radovi",
    unit: "m2",
    shortDescription: "Cevasta fasadna skela, obračunata po m² fasadne površine, uključuje montažu i demontažu.",
    priceFrom: 220,
    priceNote: "za objekte do prizemlja i sprata, veće visine se dogovaraju posebno",
  },
  // Dekorativni premazi i tapete
  {
    slug: "dekorativna-tekstura-zida",
    title: "Dekorativna tekstura zida (venecijanski, betonski izgled i sl.)",
    category: "dekorativni-premazi",
    unit: "m2",
    shortDescription: "Nanošenje dekorativne tehnike po izboru, uključujući probni uzorak pre početka rada.",
    priceFrom: 900,
    priceTo: 1600,
    priceNote: "zavisi od izabrane tehnike",
    featured: true,
  },
  {
    slug: "postavljanje-tapeta",
    title: "Postavljanje tapeta",
    category: "dekorativni-premazi",
    unit: "m2",
    shortDescription: "Priprema podloge, sečenje i lepljenje tapeta uz usklađivanje šare na spojevima.",
    priceFrom: 380,
    priceTo: 520,
    priceNote: "zavisi od tipa tapete (papirna, vinilna, netkani tekstil)",
  },
  {
    slug: "skidanje-starih-tapeta",
    title: "Skidanje starih tapeta i priprema zida",
    category: "dekorativni-premazi",
    unit: "m2",
    shortDescription: "Uklanjanje postojećih tapeta, čišćenje ostataka lepka i priprema površine za dalju obradu.",
    priceFrom: 160,
  },
  // Sanacija i renoviranje
  {
    slug: "sanacija-vlaznih-mrlja",
    title: "Sanacija vlažnih mrlja na plafonu ili zidu",
    category: "sanacija-renoviranje",
    unit: "m2",
    shortDescription: "Tretman izolacionim premazom protiv proboja mrlje, uz gletovanje i farbanje sanirane površine.",
    priceFrom: 450,
    priceTo: 600,
    priceNote: "cena ne uključuje otklanjanje uzroka curenja",
  },
  {
    slug: "tretman-protiv-buđi",
    title: "Tretman protiv buđi i gljivica",
    category: "sanacija-renoviranje",
    unit: "m2",
    shortDescription: "Nanošenje antifungalnog premaza nakon mehaničkog uklanjanja zaražene površine.",
    priceFrom: 380,
    featured: true,
  },
  {
    slug: "kompletno-renoviranje-stana",
    title: "Kompletno renoviranje stana (moleraj)",
    category: "sanacija-renoviranje",
    unit: "m2",
    shortDescription: "Sanacija oštećenja, gletovanje i farbanje svih prostorija, obračunato po m² stambenog prostora.",
    priceFrom: 700,
    priceTo: 900,
    priceNote: "orijentaciono, tačna cena posle obilaska",
    featured: true,
  },
  {
    slug: "demontaza-i-montaza-radijatora",
    title: "Demontaža i montaža radijatora",
    category: "sanacija-renoviranje",
    unit: "kom",
    shortDescription: "Skidanje radijatora radi lakšeg farbanja iza njega i vraćanje na mesto po završetku.",
    priceFrom: 2200,
    priceNote: "po radijatoru, bez ispuštanja vode iz sistema",
  },
  {
    slug: "prekrivanje-namestaja",
    title: "Prekrivanje i zaštita nameštaja i podova",
    category: "sanacija-renoviranje",
    unit: "fiksno",
    shortDescription: "Folija i krep traka preko nameštaja, podova i stolarije pre početka radova.",
    priceFrom: 3000,
    priceTo: 6000,
    priceNote: "zavisi od veličine prostora",
  },
];

export type BlogPostItem = {
  slug: string;
  title: string;
  category: "priprema" | "unutrasnji" | "fasada" | "saveti";
  excerpt: string;
  summary: string;
  keyTakeaways: string[];
  publishedAt: string;
  body: unknown[];
  faq: { question: string; answer: string }[];
};

export const blogPosts: BlogPostItem[] = [
  {
    slug: "koliko-boje-i-dana-treba-za-sobu",
    title: "Koliko boje i koliko dana treba za farbanje jedne sobe",
    category: "priprema",
    excerpt:
      "Najčešće pitanje koje čujem na prvom obilasku stana. Evo kako računam kvadraturu, potrošnju boje i realan broj dana za jednu prosečnu sobu.",
    summary:
      "Za sobu od 15-18 m² poda, uz standardnu visinu plafona, računajte oko 8-10 litara boje za dva sloja i dva do tri radna dana ako se radi i gletovanje. Potrošnja boje zavisi od podloge, boje i broja slojeva, ne samo od kvadrature poda.",
    keyTakeaways: [
      "Za obračun potrebne boje množi se kvadratura zidova i plafona, ne kvadratura poda",
      "Prosečna potrošnja je oko 1 litar boje na 6-8 m² po sloju, zavisno od upojnosti podloge",
      "Gletovana i sveže impregnisana površina troši manje boje od stare, upojne žbuke",
      "Realan rok za sobu sa gletovanjem: 2-3 radna dana, samo farbanje: 1 dan plus sušenje",
    ],
    publishedAt: "2026-02-14",
    body: [
      p("Kad dođem na prvi obilazak, posle pozdrava skoro uvek čujem isto pitanje: koliko će mi trebati boje i za koliko dana ćete završiti. Ljudi obično pitaju iz dva razloga, žele da unapred znaju budžet, i žele da isplaniraju kad mogu ponovo da uđu u prostoriju. Oba pitanja imaju jasan odgovor ako se pravilno računa, pa evo kako ja to radim na terenu."),
      h2("Prvo, zaboravite kvadraturu poda"),
      p("Najčešća greška koju vidim kod ljudi koji sami pokušavaju da isplaniraju kupovinu boje jeste računanje po kvadraturi poda. To je pogrešna osnova. Boja se nanosi na zidove i plafon, ne na pod, pa je prava osnova za računanje zbir površine svih zidova plus plafon, umanjen za prozore i vrata."),
      p("Za orijentaciju, kod prosečne sobe sa podom od 15 m² i standardnom visinom plafona od 2,6 do 2,7 metra, površina zidova i plafona zajedno obično iznosi između 45 i 55 m², u zavisnosti od broja i veličine otvora."),
      h2("Koliko boje troši jedan sloj"),
      p("Potrošnja zavisi od tri stvari: same boje (gušće, kvalitetnije boje često bolje pokrivaju), upojnosti podloge i tehnike nanošenja. Kao praktično pravilo koje koristim, jedan litar kvalitetne disperzivne boje pokrije između 6 i 8 m² po sloju na već impregnisanoj, gletovanoj podlozi. Na staroj, neimpregnisanoj žbuci ta potrošnja može biti i duplo veća, jer podloga jednostavno upija boju."),
      p("Zato uvek preporučujem impregnaciju pre gletovanja i farbanja, ne samo zbog boljeg prianjanja, nego i zato što se ta investicija brzo vrati kroz manju potrošnju boje u završnim slojevima."),
      h2("Praktičan primer računice"),
      bullets([
        "Soba 15 m² poda, zidovi i plafon zajedno oko 48 m²",
        "Dva sloja boje (preporučeno za ujednačen ton): 96 m² ukupne površine za pokrivanje",
        "Uz potrošnju od 1 litar na 7 m²: potrebno je oko 13-14 litara boje",
        "Zaokruženo naviše zbog gubitka pri valjku i uglovima: računajte 15 litara",
      ]),
      p("Ovo je orijentaciona računica za standardnu belu ili svetlu boju. Tamniji tonovi, posebno kad se prelazi sa svetle na tamnu boju, često zahtevaju treći sloj ili boju sa boljom pigmentacijom, što menja i cenu i vreme rada."),
      h2("Koliko dana realno treba"),
      h3("Samo farbanje, bez gletovanja"),
      p("Ako su zidovi već u dobrom stanju i samo se menja boja, jedna soba se realno završi za jedan radni dan, uz dva sloja boje koja se suše između nanošenja. Sušenje između slojeva traje minimum 4 do 6 sati na sobnoj temperaturi, pa je dinamika obično: prvi sloj ujutru, drugi sloj popodne."),
      h3("Gletovanje pa farbanje"),
      p("Kad se radi i gletovanje, računica se menja. Prvi dan ide nanošenje gletmase, drugi dan brušenje i eventualno drugi sloj mase ako je potreban, treći dan impregnacija i farbanje. Za prosečnu sobu to je realno 2 do 3 radna dana, uz napomenu da gletmasa mora dobro da se osuši pre brušenja, obično prenoć."),
      h3("Plafon sa vlažnim mrljama ili pukotinama"),
      p("Ako plafon ima pukotine ili tragove starog prokišnjavanja, dodajte još pola do jedan dan za sanaciju pre standardnog postupka gletovanja, jer se te površine moraju posebno obraditi da mrlja ne probije kroz nove slojeve."),
      h2("Zašto se moja procena razlikuje od procene suseda"),
      p("Često čujem: „komšinica je platila manje za istu kvadraturu”. Skoro uvek je razlog u razlici stanja podloge, broju slojeva ili tipu boje. Soba u novogradnji sa ravnim zidovima i soba u staroj kući sa neravninama i starim slojevima boje nisu isti posao, iako mogu imati identičnu kvadraturu poda. Zato uvek insistiram na obilasku pre nego što dam konačnu cenu, procena na osnovu same kvadrature bez viđenja prostora skoro nikad nije precizna."),
      h2("Savet za kraj"),
      p("Kad planirate budžet, uvek dodajte 10 do 15 posto rezerve na boju, bolje je da vam ostane pola litra nego da čekate dodatnu turu do prodavnice usred posla, pogotovo ako je boja mešana po nalogu i teško je pogoditi identičan ton naknadno."),
    ],
    faq: [
      { question: "Kako da sam izračunam koliko mi je boje potrebno?", answer: "Saberite površinu svih zidova i plafona (ne poda), pomnožite sa brojem slojeva, pa podelite sa 7 (prosečna pokrivnost po litru na pripremljenoj podlozi)." },
      { question: "Da li tamnija boja troši više materijala?", answer: "Da, posebno kad se prelazi sa svetlog na tamni ton. Često je potreban treći sloj ili boja sa jačom pigmentacijom." },
    ],
  },
  {
    slug: "mrlja-na-plafonu-farbati-ili-prvo-popraviti-curenje",
    title: "Mrlja na plafonu: da li prvo farbati ili rešiti curenje",
    category: "sanacija" as any,
    excerpt:
      "Redovno me zovu da prefarbam mrlju na plafonu, a curenje iznad još nije rešeno. Evo zašto to skoro nikad nije dobra ideja, i šta stvarno treba uraditi.",
    summary:
      "Farbanje preko aktivnog curenja samo privremeno sakriva mrlju, koja se vraća čim zid ponovo navuče vlagu. Uzrok curenja mora prvo da se otkloni, tek onda ima smisla saniranje mrlje izolacionim premazom i farbanje.",
    keyTakeaways: [
      "Obična boja ne zaustavlja mrlju, vlaga probija kroz nju za nekoliko nedelja",
      "Prvo se mora utvrditi i otkloniti izvor curenja (krov, instalacija, susedni stan)",
      "Tek posle sušenja zida se nanosi izolacioni premap, pa gletovanje i farbanje",
      "Farbanje preko aktivne vlage može dodatno zarobiti vlagu i pogoršati buđ ispod površine",
    ],
    publishedAt: "2026-03-05",
    body: [
      p("Ovaj poziv dobijam gotovo svake nedelje, pogotovo posle kišnih perioda. Neko primeti žućkastu ili mrku mrlju na plafonu i prva reakcija je logična: pozvati molera da je prefarba. Problem je što u dobrom delu tih slučajeva mrlja nije završena priča, nego tek prvi vidljivi znak nečega što se dešava iznad plafona ili unutar zida."),
      h2("Zašto obično farbanje ne rešava problem"),
      p("Standardna disperzivna boja nije napravljena da bude barijera za vlagu. Kad se prefarba mrlja bez rešavanja uzroka, boja privremeno prekrije tamnu površinu, izgleda odlično prvih nekoliko nedelja, a onda vlaga iz zida ili plafona ponovo probije kroz sloj boje i mrlja se vrati, često veća nego pre. Ovo nije loše urađen posao, nego pogrešan redosled koraka."),
      h2("Prvi korak: utvrditi da li je curenje aktivno"),
      p("Pre nego što uopšte razmišljam o materijalu za sanaciju, uvek proveravam da li je mrlja stara i suva, ili je izvor curenja i dalje aktivan. Praktičan test koji predlažem klijentima: prelepite komad providne folije preko mrlje i ostavite par dana. Ako se ispod folije pojavi kondenzacija ili vlaga, curenje je aktivno i mora prvo da se reši."),
      h2("Odakle najčešće dolazi curenje"),
      bullets([
        "Oštećena hidroizolacija na krovu ili terasi iznad prostorije",
        "Neispravna ili stara instalacija vodovoda unutar zida ili plafona",
        "Kondenzacija usled lošeg provetravanja, čest slučaj u kupatilima bez ventilacije",
        "Prokišnjavanje kroz oštećenu fasadu ili lošu obradu oko prozora",
        "Curenje od suseda iznad, posebno u zgradama sa starijim instalacijama",
      ]),
      p("Za prve dve stavke potreban je majstor druge struke, vodoinstalater ili krovopokrivač, ja kao moler ne mogu i ne treba da rešavam sam izvor curenja. Moj posao počinje tek kad je taj deo završen."),
      h2("Šta se dešava ako se farba pre nego što se zid osuši"),
      p("Ovo je greška koju viđam često kod hitnih renoviranja pred useljenje ili prodaju stana. Zid izgleda suvo spolja, ali unutrašnjost žbuke i dalje zadržava vlagu. Kad se prefarba prerano, vlaga nema kuda da izađe i ostaje zarobljena ispod novog sloja, što stvara idealne uslove za razvoj buđi koja se ne vidi dok se ne pojavi miris ili dok se boja ponovo ne počne ljuštiti."),
      h2("Kako izgleda pravilan redosled sanacije"),
      h3("1. Otklanjanje uzroka"),
      p("Bez ovog koraka sve ostalo je privremeno rešenje. Ako curenje dolazi spolja ili iz instalacije, taj deo mora prvo da se popravi."),
      h3("2. Sušenje zida"),
      p("Zavisno od veličine zahvaćene površine i vremena, zidu je potrebno od nekoliko dana do nekoliko nedelja da se prirodno osuši. Ovde nema prečice, veštačko ubrzavanje grejanjem može pomoći, ali ne zamenjuje vreme."),
      h3("3. Mehaničko čišćenje površine"),
      p("Uklanjaju se svi slojevi zahvaćeni vlagom ili buđi, do zdrave podloge, jer farbanje preko oštećenog sloja ne drži dugoročno."),
      h3("4. Izolacioni (blokirajući) premaz"),
      p("Nanosi se specijalizovani premap koji sprečava da eventualni ostaci mrlje probiju kroz nove slojeve. Ovo je ključna razlika u odnosu na običnu boju."),
      h3("5. Gletovanje i farbanje"),
      p("Tek na kraju se radi standardna obrada, gletovanje ako je potrebno i završno farbanje, sada na zdravoj i suvoj podlozi."),
      h2("Šta radim kad me pozovu samo da prefarbam mrlju"),
      p("Iskreno kažem klijentu šta vidim. Ako procenim da je curenje aktivno, ne prihvatam posao dok se uzrok ne reši, jer bih inače naplatio uslugu koja neće trajati, a to nikome ne koristi, ni meni ni klijentu. Ako je mrlja stara, suva i uzrok je odavno otklonjen, onda mirne duše radim standardnu sanaciju i farbanje."),
    ],
    faq: [
      { question: "Da li mogu samo da prefarbam mrlju bez sanacije?", answer: "Možete, ali ako je uzrok vlage i dalje prisutan, mrlja će se vratiti za nekoliko nedelja ili meseci." },
      { question: "Koliko treba da se zid osuši pre farbanja?", answer: "Zavisi od veličine oštećenja, od nekoliko dana do nekoliko nedelja prirodnog sušenja." },
      { question: "Kako da proverim da li je curenje još uvek aktivno?", answer: "Prelepite providnu foliju preko mrlje na par dana. Ako se ispod pojavi kondenzacija, curenje je i dalje aktivno." },
    ],
  },
  {
    slug: "mat-satin-ili-sjaj-koja-zavrsna-obrada",
    title: "Mat, satin ili sjaj: koju završnu obradu boje izabrati",
    category: "unutrasnji",
    excerpt:
      "Klijenti često biraju boju po tonu, a zaborave na sjaj, iako sjaj podjednako utiče na izgled i na to koliko će se zid lako održavati.",
    summary:
      "Mat boje najbolje kriju nepravilnosti zida ali se teže peru, satin je kompromis pogodan za većinu prostorija, a sjaj se koristi tamo gde se traži lakoća čišćenja i izdržljivost, poput kuhinja i hodnika, po cenu isticanja svake neravnine zida.",
    keyTakeaways: [
      "Mat sakriva neravnine zida najbolje, ali se teže čisti i lakše ostavlja fleke od dodira",
      "Satin (polumat) je najčešći izbor za dnevne boravke i spavaće sobe, dobar balans",
      "Sjaj i polusjaj se koriste u kuhinjama, kupatilima i hodnicima zbog lakšeg pranja",
      "Na neravnom zidu, sjajnija boja ističe svaku manu podloge, mat je uvek sigurniji izbor",
    ],
    publishedAt: "2026-03-22",
    body: [
      p("Kad klijent bira boju, skoro uvek prva odluka je ton, bela, siva, bež, ili neka smelija nijansa. Sjaj završne obrade se često spomene tek na kraju razgovora, kao usputna napomena. A zapravo, sjaj utiče na izgled prostorije, na to koliko će zid izdržati svakodnevno korišćenje, i na to koliko će se lako održavati, često i više nego sam ton."),
      h2("Šta uopšte znači stepen sjaja"),
      p("Boje se prodaju u nekoliko nivoa sjaja, od potpuno mat, preko satin (ili polumat), do polusjaja i punog sjaja. Razlika nije samo estetska, sjajnija boja stvara glatkiju, tvrđu površinu koja bolje odbija prljavštinu i lakše se briše, dok mat boja upija svetlost i deluje mekše, ali je poroznija i osetljivija na dodir i brisanje."),
      h2("Mat: najčešći izbor, i zašto"),
      p("Mat boja je i dalje najprodavanija završna obrada za zidove u stambenom prostoru, iz jednog jednostavnog razloga: najbolje prikriva sitne neravnine, tragove gletovanja i manje nesavršenosti podloge. Difuzna, nesjajna površina ne reflektuje svetlost pod uglom, pa se nepravilnosti jednostavno manje vide."),
      p("Nedostatak je što je mat boja osetljivija na mrlje i teže se čisti bez ostavljanja traga, pogotovo jeftinije mat boje. Ako planirate mat završnu obradu u prostoriji sa decom ili kućnim ljubimcima, vredi investirati u kvalitetniju, takozvanu „periva mat” boju, koja podnosi blago brisanje vlažnom krpom bez gubitka teksture."),
      h2("Satin (polumat): kompromis koji preporučujem najčešće"),
      p("Za dnevne boravke, spavaće sobe i hodnike, satin završna obrada je moj najčešći predlog klijentima koji nisu sigurni šta žele. Ima blagi, prigušen sjaj koji ne ističe neravnine podloge kao pravi sjaj, a istovremeno je znatno otporniji na brisanje i habanje od čistog mata. Ovo je izbor koji najmanje razočara, bez obzira na tip prostorije."),
      h2("Sjaj i polusjaj: gde imaju smisla"),
      p("Sjajnije završne obrade rezervišem za prostore gde se zid često dodiruje, prlja ili vlaži: kuhinje, kupatila, hodnici, ivice oko vrata i prekidača. Ovde je prioritet lakoća čišćenja, a ne savršena glatkoća zida, pa se manja izraženost neravnina toleriše u zamenu za praktičnost."),
      p("Bitna napomena: ako je zid neravan ili sa vidljivim tragovima gletovanja, sjajna boja će te nedostatke doslovno osvetliti pod bilo kojim uglom svetla. Zato pre biranja sjaja uvek proveravam kvalitet i ravnost podloge, na lošije pripremljenom zidu jednostavno ne preporučujem visok sjaj, bez obzira na želju klijenta, jer rezultat neće zadovoljiti ni njih ni mene."),
      h2("Praktičan vodič po prostorijama"),
      bullets([
        "Dnevni boravak i spavaća soba: satin ili mat, u zavisnosti od kvaliteta zida",
        "Kuhinja: satin do polusjaj, radi lakšeg čišćenja masnih mrlja",
        "Kupatilo: polusjaj ili sjaj, otporniji na vlagu i lakši za brisanje",
        "Hodnik i dečja soba: satin, dobar balans izdržljivosti i estetike",
        "Plafon: uvek mat, sjaj na plafonu naglašava svaku neravninu i deluje neprirodno",
      ]),
      h2("Da li se sjaj menja tokom vremena"),
      p("Da, kvalitetne boje duže zadržavaju originalni sjaj, dok jeftinije varijante mogu vremenom da izgube sjajnost i postanu mutnije, posebno na mestima izloženim direktnom suncu. Ovo je još jedan razlog zašto preporučujem provere marke boje umesto isključivo najjeftinije opcije, razlika u ceni po litru je mala u odnosu na ukupan trošak rada, ali razlika u trajnosti može biti velika."),
      h2("Kako ja pomažem pri izboru"),
      p("Kad klijent nije siguran, uvek predlažem da vidimo probni uzorak na samom zidu, ne na kartici u prodavnici. Svetlo u prostoriji, boja nameštaja i ugao gledanja menjaju utisak više nego što ljudi očekuju, i ono što izgleda odlično na maloj kartici može izgledati sasvim drugačije na celom zidu."),
    ],
    faq: [
      { question: "Koja završna obrada je najbolja za dnevni boravak?", answer: "Satin (polumat) je najčešći i najsigurniji izbor, kombinuje dobar izgled sa lakšim održavanjem." },
      { question: "Da li sjajna boja ističe neravnine zida?", answer: "Da, što je boja sjajnija, to više ističe svaku nepravilnost podloge. Na neravnom zidu bolje je koristiti mat ili satin." },
      { question: "Da li se mat boja može prati?", answer: "Kvalitetnija „periva” mat boja podnosi blago brisanje vlažnom krpom, ali generalno je osetljivija na mrlje od satin ili sjajnih boja." },
    ],
  },
  {
    slug: "najbolje-doba-godine-za-farbanje-fasade",
    title: "Koje je najbolje doba godine za farbanje fasade u Srbiji",
    category: "fasada",
    excerpt:
      "Fasada nije unutrašnji zid, vremenski uslovi direktno određuju kad sme, a kad ne sme da se radi. Evo kako planiram sezonu fasadnih radova.",
    summary:
      "Fasadno farbanje u Srbiji najbolje se izvodi od aprila do oktobra, kada je temperatura stabilno iznad 5°C i nema učestalih kiša. Ekstremna vrućina preko 30°C i direktno sunce takođe otežavaju rad jer boja presuši prebrzo.",
    keyTakeaways: [
      "Idealna temperatura za fasadno farbanje je između 10°C i 25°C, bez kiše u narednih 24-48h",
      "Ne radi se ispod 5°C niti kad se noću očekuje mraz, boja se ne suši pravilno",
      "Direktno podnevno sunce leti takođe nije idealno, boja presuši prebrzo i ostavljaju se tragovi",
      "Najbolji meseci u Nišu: maj, jun, septembar i prva polovina oktobra",
    ],
    publishedAt: "2026-04-10",
    body: [
      p("Za razliku od unutrašnjih radova, koje mogu da radim praktično cele godine, fasada zavisi od vremena u doslovnom smislu. Boja koja se nanosi na spoljni zid mora da se osuši pod kontrolisanim uslovima da bi vezala kako treba, i tu klima igra veliku ulogu, veću nego što većina ljudi pretpostavlja."),
      h2("Zašto temperatura toliko utiče na fasadnu boju"),
      p("Fasadne boje su najčešće na vodenoj bazi (akrilne, silikatne ili silikonske disperzije). Proces sušenja nije samo isparavanje vode, nego i hemijsko vezivanje veziva u boji, koje zahteva odgovarajuću temperaturu i vlažnost vazduha. Ako je prehladno, to vezivanje se usporava ili potpuno zaustavi, a ako je prevruće ili prisutan jak vetar, površina boje presuši spolja pre nego što unutrašnji sloj stigne pravilno da veže, što dovodi do slabijeg prijanjanja i ranijeg pucanja ili ljuštenja."),
      h2("Donja granica: kad je prehladno za fasadu"),
      p("Kao opšte pravilo koje sledim, ne počinjem fasadne radove ako je temperatura vazduha ispod 5°C, ili ako se te noći očekuje mraz. Čak i ako je danju dovoljno toplo, pad temperature ispod nule tokom noći može oštetiti sloj boje koji se još nije potpuno stvrdnuo. Ovo je čest razlog zašto ne prihvatam fasadne radove kasno u novembru ili tokom zime, bez obzira na dnevnu temperaturu."),
      h2("Gornja granica: kad je prevruće"),
      p("Manje se o ovome priča, ali ekstremna vrućina je jednako problematična. Kad temperatura pređe 30°C, posebno na direktnom suncu, površina zida se toliko zagreje da boja presuši za nekoliko minuta, umesto da postepeno veže. Rezultat su vidljivi tragovi valjka ili četke, neujednačen sjaj i, u gorim slučajevima, slabije dugoročno prianjanje boje na podlogu."),
      p("Zato leti, kad moramo da radimo, uvek planiram raspored tako da se direktno osunčane strane fasade rade rano ujutru ili predveče, a hladovita strana zgrade tokom dana."),
      h2("Vlaga i kiša"),
      p("Fasada ne sme da se farba ako se u narednih 24 do 48 sati očekuje kiša, jer sveža, još nevezana boja jednostavno spira sa zida. Isto tako, ne radi se odmah posle kiše dok zid nije potpuno suv, jer zarobljena vlaga u podlozi sprečava pravilno prianjanje sledećeg sloja."),
      h2("Zašto preporučujem maj, jun, septembar i prvu polovinu oktobra"),
      p("U Nišu i okolini, ovi meseci najčešće nude kombinaciju stabilnih temperatura između 10 i 25 stepeni, umerenu vlažnost i manje ekstremnih vremenskih epizoda u odnosu na jul-avgust vrućine ili novembarske hladnoće. Jul i avgust nisu isključeni, ali zahtevaju pažljivije planiranje dnevnog rasporeda zbog vrućine, dok su april i kraj oktobra rizičniji zbog mogućih naglih padova temperature, posebno noću."),
      h2("Šta ako se rok poklopi sa lošim periodom"),
      p("Ako klijent ima hitnu potrebu (na primer prodaja nekretnine ili useljenje) van idealnog perioda, iskreno objašnjavam rizike, i ako vremenska prognoza dozvoljava par uzastopnih stabilnih dana, radimo, uz produženo vreme sušenja između slojeva. Ono što ne radim je farbanje fasade na kišu, mraz ili u najavljenoj oluji, jer bih tako samo garantovao da će posao morati da se ponovi za par sezona, na trošak klijenta."),
      h2("Planiranje unapred"),
      bullets([
        "Zakažite fasadne radove nekoliko nedelja unapred u vrhuncu sezone (maj-jun), jer je to period najveće tražnje",
        "Ostavite fleksibilnost od par dana oko dogovorenog termina zbog moguće promene vremena",
        "Ako planirate termo-fasadu i završni sloj, računajte da se prvo mora završiti izolacija, pa tek onda dekorativni premaz",
        "Pitajte izvođača kako planira raspored rada tokom vrućih letnjih dana",
      ]),
    ],
    faq: [
      { question: "Da li se fasada može farbati zimi?", answer: "Ne preporučuje se. Ispod 5°C i uz rizik od mraza boja se ne suši pravilno i sloj neće dobro prijanjati." },
      { question: "Koji je najbolji mesec za fasadu u Nišu?", answer: "Maj, jun, septembar i prva polovina oktobra obično nude najstabilnije uslove." },
      { question: "Da li se sme farbati fasada na punom suncu leti?", answer: "Nije idealno, boja prebrzo presuši. Bolje je raditi osunčane strane rano ujutru ili predveče." },
    ],
  },
  {
    slug: "sta-je-gletovanje-i-zasto-je-vazno",
    title: "Šta tačno znači gletovanje i zašto se ne preskače",
    category: "priprema",
    excerpt:
      "Gletovanje je korak koji klijenti najčešće žele da preskoče da bi uštedeli, a upravo je taj korak koji pravi razliku između urednog i osrednjeg rezultata.",
    summary:
      "Gletovanje je nanošenje tanke sloja glet mase na zid ili plafon radi izravnavanja podloge pre farbanja. Bez njega, boja samo prekriva postojeće neravnine, umesto da ih otkloni, pa se svaka mana zida vidi i posle farbanja.",
    keyTakeaways: [
      "Gletovanje izravnava zid, ne služi samo za popunjavanje rupa ili pukotina",
      "Preskakanje gletovanja je najčešći razlog nezadovoljstva rezultatom farbanja",
      "Standardno se radi u dva tanka sloja, sa brušenjem između, ne jedan debeo sloj",
      "Sveže gletovana površina mora da se osuši pre brušenja, obično preko noći",
    ],
    publishedAt: "2026-05-02",
    body: [
      p("Kad procenjujem posao i predložim gletovanje, dobar deo klijenata prva reakcija je pitanje da li je to zaista neophodno, ili se boja može naneti direktno na postojeći zid da bi se uštedelo i na vremenu i na ceni. Odgovor zavisi od stanja zida, ali u većini slučajeva, posebno kod promene boje ili kod starijih zidova, gletovanje pravi vidljivu razliku, i to ne malu."),
      h2("Šta gletovanje zapravo radi"),
      p("Glet masa je fina, gusta smesa koja se nanosi tankim slojem preko zida ili plafona. Njena svrha nije samo da popuni vidljive rupe ili pukotine, nego da izravna celu površinu, uključujući sitne neravnine koje se golim okom jedva primete na sirovom zidu, ali postanu vidljive čim se nanese boja, pogotovo pod bočnim svetlom lampe ili sunca kroz prozor."),
      p("Zamislite zid kao papir za crtanje: farbanje bez gletovanja je kao crtanje na izgužvanom papiru, boja prekriva boju podloge, ali ne menja teksturu ispod nje. Gletovanje je korak koji tu teksturu stvarno ispravlja."),
      h2("Zašto se ovaj korak najčešće preskače"),
      p("Razumem zašto klijenti razmišljaju o preskakanju, gletovanje dodaje i vreme (obično jedan do dva dana više) i trošak materijala i rada. Kod zidova u odličnom stanju, potpuno ravnih i bez oštećenja od prethodnih radova, ponekad je opravdano preskočiti puno gletovanje i uraditi samo lokalne popravke. Ali ovo je izuzetak, ne pravilo, i realno procenjujem to tek kad vidim zid uživo, ne unapred po telefonu."),
      h2("Kako izgleda proces korak po korak"),
      h3("Priprema podloge"),
      p("Zid se prvo čisti od prašine i starih, labavih slojeva boje. Ako postoje veće pukotine, one se prvo saniraju posebnom masom pre opšteg gletovanja."),
      h3("Prvi sloj glet mase"),
      p("Nanosi se tanak, ravnomeran sloj preko cele površine. Ovaj sloj hvata najveće neravnine i mora da se potpuno osuši, obično preko noći, pre nastavka rada."),
      h3("Brušenje"),
      p("Nakon sušenja, površina se brusi finim brusnim papirom da se uklone tragovi alata i sitne neravnine iz prvog sloja."),
      h3("Drugi sloj i finalno brušenje"),
      p("Kod zahtevnijih podloga nanosi se i drugi, još tanji sloj, koji se ponovo suši i fino brusi. Rezultat treba da bude glatka, ujednačena površina bez vidljivih prelaza."),
      h3("Impregnacija pre farbanja"),
      p("Pre nanošenja boje, sveže gletovana površina se impregnira temeljnim premazom, koji smanjuje upojnost i poboljšava prijanjanje boje."),
      h2("Šta se dešava ako se gletovanje preskoči na lošem zidu"),
      p("Rezultat je gotovo uvek isti: boja izgleda u redu prvog dana, ali čim se prostorija osvetli pod uglom, na primer uveče kad se upali lampa blizu zida, iskrsnu sve neravnine koje su ranije bile prikrivene starim slojem boje ili jednostavno neprimećene. Ovo je najčešći razlog reklamacija koje čujem od kolega u struci, ne loša boja, nego preskočena priprema."),
      h2("Koliko dugo traje i da li se isplati"),
      p("Za prosečnu sobu, puno gletovanje sa dva sloja i brušenjem dodaje otprilike dan do dan i po u odnosu na samo farbanje. U odnosu na ukupnu vrednost renoviranja prostorije, ovo je mala investicija za rezultat koji izgleda profesionalno i drži duže, jer ravnija podloga takođe znači da će buduće farbanje (kad god se ponovo bude radilo) biti brže i jeftinije."),
    ],
    faq: [
      { question: "Da li gletovanje moram uvek da radim pre farbanja?", answer: "Ne uvek, ako je zid već ravan i u dobrom stanju može se preskočiti, ali to je izuzetak. Kod većine starijih ili neravnih zidova gletovanje značajno poboljšava rezultat." },
      { question: "Koliko dugo se suši glet masa?", answer: "Standardno preko noći, tačno vreme zavisi od debljine sloja, temperature i vlažnosti prostorije." },
      { question: "Da li se gletovanje radi i na plafonu?", answer: "Da, plafon se gletuje na isti način kao zid, često je i važnije jer se neravnine na plafonu ističu pod direktnim osvetljenjem." },
    ],
  },
  {
    slug: "priprema-sobe-pre-dolaska-molera",
    title: "Kako da pripremite sobu pre nego što dođe moler",
    category: "saveti",
    excerpt:
      "Dobra priprema prostorije pre početka radova štedi vreme svima i smanjuje rizik od štete na stvarima koje ne idu na farbanje.",
    summary:
      "Pre dolaska molerske ekipe, prostoriju treba isprazniti od sitnih predmeta, pomeriti nameštaj na sredinu i prekriti ga, skinuti zavese i slike sa zidova i osigurati pristup struji i vodi. Dobro pripremljena prostorija ubrzava rad i za pola do jednog dana.",
    keyTakeaways: [
      "Uklonite sve sitne predmete, slike i zavese sa zidova unapred",
      "Pomerite nameštaj ka sredini prostorije i po mogućnosti ga sami prekrijte folijom",
      "Obezbedite pristup utičnici za alat i, ako je moguće, blizinu vode za pranje alata",
      "Najavite unapred ako imate osetljive površine (parket, mermer) radi dodatne zaštite",
    ],
    publishedAt: "2026-05-27",
    body: [
      p("Deo posla koji retko ko pominje, a koji stvarno utiče na to koliko će radovi trajati, jeste stanje prostorije u trenutku kad ekipa stigne. Dobro pripremljena soba znači da mi odmah krećemo sa poslom, dok loše pripremljena soba znači da prvih sat ili dva prolazi u premeštanju stvari i improvizovanoj zaštiti, vreme koje se moglo iskoristiti za sam rad."),
      h2("Šta je dovoljno da uradite sami"),
      p("Ne očekujem da klijenti kompletno isprazne stan, to nije ni realno ni potrebno. Ono što stvarno pomaže je nekoliko jednostavnih koraka koji svakom mogu da se urade za sat vremena."),
      bullets([
        "Skinite slike, ogledala i sitne dekoracije sa zidova koji se farbaju",
        "Skinite zavese i, ako je moguće, karniše (ili nam recite da to uradimo mi)",
        "Pomerite nameštaj ka sredini prostorije, dalje od zidova, ostavljajući prostor za rad",
        "Ispraznite police i ormane koji su direktno uz zid koji se obrađuje",
        "Uklonite sitne predmete sa podnih površina koje bi mogle da smetaju ili da se oštete",
      ]),
      h2("Šta mi radimo na licu mesta"),
      p("Prekrivanje nameštaja folijom, lepljenje krep trake oko ivica, podova, prekidača i utičnica, to je standardni deo naše pripreme i ne treba da brinete o tome unapred. Jedina razlika je što, ako je nameštaj već pomeren i prostor oslobođen, taj deo pripreme ide brže, umesto da se vreme troši na premeštanje teških komada nameštaja pre nego što uopšte možemo da počnemo sa zaštitom."),
      h2("Osetljive površine zaslužuju posebnu napomenu"),
      p("Ako prostorija ima parket, mermer, ili neku drugu površinu koju smatrate osetljivom, recite nam unapred, čak i ako mislite da je to očigledno. Standardno prekrivamo sve podove folijom i kartonom u zonama gde se radi, ali dodatna informacija (na primer, sveže lakiran parket ili prirodni kamen koji lako upija fleke) nam pomaže da prilagodimo zaštitu, umesto da to otkrijemo tek kad je kasno."),
      h2("Pristup struji i vodi"),
      p("Za mešanje boje, pranje valjaka i alata i korišćenje eventualne mešalice ili brusilice, potreban nam je pristup barem jednoj utičnici u prostoriji i, po mogućnosti, blizina vode (kupatilo ili kuhinja) radi pranja alata između poslova. Ovo retko predstavlja problem, ali je dobro unapred znati gde je najbliža utičnica ako je prostorija specifično raspoređena."),
      h2("Kućni ljubimci i deca tokom radova"),
      p("Iz iskustva, najbolje je da deca i kućni ljubimci ne budu u prostoriji dok se radi, ne samo zbog mirisa sveže boje, nego i zbog otvorenih posuda sa materijalom i alata koji leži po prostoriji. Ako imate radoznalog psa ili mačku, zatvorena vrata prostorije u kojoj se radi (i susednih prostorija dok se suši) štede i njima i nama nepotreban stres."),
      h2("Šta pripremiti ako se radi cela stambena jedinica"),
      p("Kod kompletnog renoviranja, gde se radi više prostorija odjednom, dobro je unapred dogovoriti redosled, na primer, jedna spavaća soba ostaje potpuno funkcionalna dok se rade ostale, tako da imate gde da smestite stvari i gde da boravite dok traju radovi. Ovaj dogovor pravimo zajedno na početku, pre nego što bilo šta počne."),
      h2("Koliko vremena realno štedi dobra priprema"),
      p("Na osnovu iskustva, dobro pripremljena prostorija (nameštaj pomeren, zidovi oslobođeni) ubrza početak rada za pola do jednog radnog dana u poređenju sa prostorijom koju zatičemo punu stvari. Kod manjih poslova to može biti razlika između završetka istog dana i produžetka na sutra, pa se isplati taj sat pripreme uložiti unapred."),
    ],
    faq: [
      { question: "Da li treba sami da isprazim celu sobu?", answer: "Ne u potpunosti, dovoljno je pomeriti nameštaj ka sredini i ukloniti sitne predmete i slike sa zidova. Prekrivanje i zaštitu radimo mi." },
      { question: "Da li mogu da ostanem u stanu dok se radi?", answer: "Da, ali preporučujemo da deca i kućni ljubimci ne budu u prostoriji u kojoj se trenutno radi, zbog mirisa i otvorenog materijala." },
      { question: "Šta ako imam osetljiv pod, na primer sveže lakiran parket?", answer: "Recite nam unapred, prilagodićemo zaštitu poda tom specifičnom slučaju, pored standardnog prekrivanja folijom i kartonom." },
    ],
  },
];

export type ServicePageItem = {
  slug: string;
  title: string;
  heroSubtitle: string;
  body: unknown[];
  checklist: { title: string; description: string }[];
  ctaBandTitle: string;
  ctaBandText: string;
  ctaBandBullets: string[];
  whyUs: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
};

export const servicePages: ServicePageItem[] = [
  {
    slug: "unutrasnji-radovi",
    title: "Unutrašnji molerski radovi",
    heroSubtitle:
      "Gletovanje, farbanje zidova i plafona, priprema podloge, uredno i po dogovorenom roku, sa zaštitom nameštaja i podova.",
    body: [
      h2("Šta obuhvataju unutrašnji molerski radovi"),
      p("Unutrašnji molerski radovi su najčešći posao koji radim, i obuhvataju sve od male doterivanja jedne prostorije do kompletne obrade celog stana. U osnovi, reč je o tri koraka koji se, u zavisnosti od stanja zida, kombinuju u različitom obimu: priprema podloge, gletovanje i farbanje."),
      p("Svaki od ova tri koraka ima svoju svrhu, i preskakanje bilo kog od njih na neodgovarajućoj podlozi gotovo uvek dovede do rezultata koji izgleda dobro prve nedelje, a onda počne da pokazuje nedostatke, bilo kroz vidljive neravnine, bilo kroz pucanje ili ljuštenje boje."),
      h2("Priprema površine, korak koji se ne vidi ali se oseti"),
      p("Pre gletovanja, zid se mora osloboditi starih, labavih slojeva boje, prašine i, ako je potrebno, sanirati veće pukotine posebnom masom. Kod starijih stanova, ovaj korak često otkrije probleme koji nisu bili vidljivi na prvi pogled, na primer, sloj kreča ispod nekoliko slojeva kasnije nanesene disperzivne boje, koji se mora potpuno ukloniti jer slabo drži nove slojeve."),
      p("Na sveže malterisanim, novim zidovima priprema je jednostavnija, ali se ipak preporučuje impregnacija pre gletovanja, radi ujednačene upojnosti podloge i bolje ekonomičnosti materijala u narednim koracima."),
      h2("Gletovanje: izravnavanje, ne samo popunjavanje rupa"),
      p("Gletovanje se radi u jednom ili dva tanka sloja, u zavisnosti od stanja zida, sa brušenjem između slojeva. Cilj je potpuno ravna, glatka površina bez vidljivih prelaza, jer svaka neravnina koja ostane posle gletovanja postaje vidljivija, a ne manje vidljiva, nakon farbanja, pogotovo pod bočnim osvetljenjem."),
      p("Za detaljno objašnjenje ovog koraka i zašto se ne preporučuje preskakanje, pogledajte tekst na blogu posvećen isključivo gletovanju."),
      h2("Farbanje: izbor boje i broj slojeva"),
      p("Za farbanje koristim isključivo proverene marke disperzivnih boja, prilagođene nameni prostorije (mat za dnevne boravke i spavaće sobe, otpornije, perive varijante za kuhinje, hodnike i dečje sobe). Standardno se radi u dva sloja radi ujednačenog tona i bolje pokrivnosti, jedan sloj je opcija samo kod manjih, lokalnih doterivanja iste boje."),
      h2("Koliko traje kompletna obrada sobe"),
      p("Za prosečnu sobu, računajte na dva do tri radna dana ako se radi puno gletovanje, ili jedan dan ako se samo menja boja na već ravnom zidu. Tačan rok uvek dajem tek posle obilaska prostorije, jer stanje podloge više utiče na vreme rada nego sama kvadratura."),
    ],
    checklist: [
      { title: "Priprema i čišćenje podloge", description: "Uklanjanje starih slojeva, sanacija pukotina, impregnacija pre gletovanja." },
      { title: "Gletovanje zidova i plafona", description: "Jedan ili dva sloja glet mase, sa finim brušenjem između slojeva." },
      { title: "Farbanje", description: "Dvoslojno farbanje kvalitetnom disperzivnom bojom, ton i sjaj po dogovoru." },
      { title: "Zaštita prostora", description: "Prekrivanje nameštaja, podova i stolarije folijom i krep trakom pre početka rada." },
    ],
    ctaBandTitle: "Radimo i vikendom, po dogovoru",
    ctaBandText:
      "Znam da renoviranje često mora da se uklopi u radnu nedelju ili selidbu, zato po potrebi organizujemo rad i subotom.",
    ctaBandBullets: [
      "Besplatna procena i obilazak pre početka radova",
      "Fiksna cena posle obilaska, bez naknadnih iznenađenja",
      "Zaštita nameštaja i podova uključena u svaki posao",
      "Čišćenje prostora nakon završetka radova",
    ],
    whyUs: [
      { title: "Preciznost u proceni", description: "Ne dajem cenu preko telefona, uvek prvo pogledam prostor da bi ponuda bila tačna." },
      { title: "Provereni materijali", description: "Radim isključivo sa proverenim markama boja, prilagođenim nameni svake prostorije." },
      { title: "Uredan rad", description: "Prekrivamo i štitimo sve što ne ide na farbanje, i čistimo za sobom po završetku." },
      { title: "Garancija na rad", description: "Dajem garanciju na izvedene radove, ne samo na materijal koji koristim." },
    ],
    faq: [
      { question: "Koliko unapred treba zakazati unutrašnje molerske radove?", answer: "U sezoni renoviranja (proleće i jesen) preporučujem zakazivanje bar 1-2 nedelje unapred, van sezone obično mogu brže." },
      { question: "Da li radite i vikendom?", answer: "Da, po dogovoru radimo i subotom, posebno kad je potrebno uklopiti se u nečiji radni raspored." },
      { question: "Da li je gletovanje uvek obavezno?", answer: "Ne uvek, ako je zid već ravan i u dobrom stanju može se preskočiti, ali to procenjujem tek nakon obilaska." },
    ],
  },
  {
    slug: "fasadni-radovi",
    title: "Fasadni radovi",
    heroSubtitle:
      "Priprema, hidrofobizacija i farbanje fasada, uključujući završne slojeve termo-fasade, prilagođeno vremenskim uslovima.",
    body: [
      h2("Zašto je fasada zahtevniji posao od unutrašnjeg farbanja"),
      p("Fasadni radovi izloženi su suncu, kiši, mrazu i promenama temperature na način na koji unutrašnji zidovi nikad nisu, pa materijal i tehnika moraju biti prilagođeni tim uslovima. Dobra fasada ne štiti samo izgled zgrade, nego i sam zid od prodora vlage, što direktno utiče na toplotnu izolaciju i trajnost objekta."),
      p("Zato fasadni radovi zahtevaju drugačije planiranje od unutrašnjih, počev od vremenske prognoze, preko izbora odgovarajućeg premaza, do organizacije skele za veće objekte."),
      h2("Priprema fasade pre farbanja"),
      p("Stara fasada se prvo pregleda za pukotine, oljuštene delove i mesta gde je prethodni sloj izgubio prijanjanje. Svi labavi delovi se mehanički uklanjaju, pukotine se saniraju odgovarajućom masom, a površina se pere od prljavštine i eventualnih algi ili mahovine pre nanošenja bilo kakvog premaza."),
      h2("Hidrofobizacija: nevidljiva zaštita koja pravi razliku"),
      p("Hidrofobni premaz je proziran ili gotovo neprimetan sloj koji se nanosi pre ili posle bojenja (u zavisnosti od proizvoda) i koji sprečava upijanje vode u zid, dok istovremeno dozvoljava zidu da „diše”, odnosno da propušta vodenu paru iznutra. Ovo značajno produžava vek trajanja fasadne boje i smanjuje rizik od pucanja usled smrzavanja vode unutar zida tokom zime."),
      h2("Farbanje fasade: jedan ili dva sloja"),
      p("Standardno preporučujem dva sloja fasadne boje za bolju, ujednačenu pokrivnost i duže trajanje, pogotovo na svetlijim tonovima gde jedan sloj retko postiže ravnomeran izgled. Boja se bira otporna na UV zračenje i vremenske uslove, sa dobrom paropropustljivošću."),
      h2("Termo-fasada i završni dekorativni sloj"),
      p("Kod objekata koji dobijaju termo-izolaciju, moj deo posla počinje nakon što je izolacioni sloj (stiropor ili mineralna vuna) postavljen i armiran mrežicom. Nanosim završni dekorativni sloj, silikatnu, silikonsku ili akrilnu žbuku, u granulaciji i boji po izboru klijenta. Ovaj sloj je i estetski završetak i zaštitna barijera izolacije, pa se posebno pazi na ravnomernu debljinu i teksturu nanošenja."),
      h2("Kad se fasada radi, a kad se čeka"),
      p("Fasadno farbanje zavisi od vremenskih uslova više nego bilo koji drugi deo posla. Detaljno sam pisao o ovome na blogu, ali kratko: idealno je između aprila i oktobra, uz temperature između 10 i 25 stepeni i bez najavljene kiše u naredna dva dana."),
    ],
    checklist: [
      { title: "Pregled i sanacija pukotina", description: "Mehaničko uklanjanje oštećenih delova i sanacija pre nanošenja novih slojeva." },
      { title: "Hidrofobizacija", description: "Zaštitni premaz protiv prodora vlage, uz očuvanje paropropustljivosti zida." },
      { title: "Farbanje u dva sloja", description: "Fasadna boja otporna na UV zračenje i vremenske uslove." },
      { title: "Skela i bezbednost", description: "Postavljanje odgovarajuće skele za objekte sa spratom, uz poštovanje mera bezbednosti." },
    ],
    ctaBandTitle: "Planiramo fasadu prema vremenskoj prognozi",
    ctaBandText:
      "Ne počinjemo radove ako vreme ne dozvoljava kvalitetno sušenje, radije pomerimo termin nego da rizikujemo trajnost posla.",
    ctaBandBullets: [
      "Besplatna procena stanja fasade pre ponude",
      "Rad sa proverenim markama fasadnih boja i žbuka",
      "Organizacija skele uključena u ponudu za veće objekte",
      "Garancija na izvedene fasadne radove",
    ],
    whyUs: [
      { title: "Praćenje vremenske prognoze", description: "Radove planiramo prema stabilnim vremenskim uslovima, ne po fiksnom kalendaru." },
      { title: "Iskustvo sa termo-fasadom", description: "Redovno radimo završne slojeve na već postavljenoj termo-izolaciji." },
      { title: "Bezbedan rad na visini", description: "Fasadna skela se postavlja i koristi u skladu sa pravilima bezbednosti." },
      { title: "Dugoročna zaštita zida", description: "Hidrofobizacija i kvalitetna boja produžavaju vek trajanja fasade." },
    ],
    faq: [
      { question: "Koje je najbolje doba godine za farbanje fasade?", answer: "Od aprila do oktobra, sa idealnim uslovima u maju, junu, septembru i početkom oktobra." },
      { question: "Da li hidrofobizacija zamenjuje farbanje?", answer: "Ne, to je dodatni zaštitni sloj koji se kombinuje sa bojenjem, ne zamenjuje ga." },
      { question: "Ko obezbeđuje skelu za fasadne radove?", answer: "Mi organizujemo postavljanje i iznajmljivanje skele, uračunato u ponudu za fasadne radove." },
    ],
  },
  {
    slug: "dekorativni-premazi",
    title: "Dekorativni premazi i tapete",
    heroSubtitle:
      "Venecijanski i betonski dekorativni premazi, tekstura zidova i profesionalno postavljanje tapeta svih tipova.",
    body: [
      h2("Kad ima smisla razmišljati o dekorativnom premazu"),
      p("Dekorativni premazi i tapete su izbor za one koji žele nešto više od jednobojnog zida, akcentni zid u dnevnom boravku, teksturu u hodniku, ili celu prostoriju obloženu tapetom po ukusu. Ovo je posao koji zahteva drugačiju veštinu od standardnog farbanja, jer se svaka tehnika izvodi ručno i rezultat direktno zavisi od iskustva izvođača."),
      h2("Vrste dekorativnih tehnika koje radim"),
      p("Najtraženije tehnike su venecijanski premaz (imitacija glačanog kamena ili mermera, sa karakterističnim sjajem), betonski izgled (mat, industrijska tekstura popularna u modernim enterijerima) i razne varijante teksturiranih premaza sa efektom peska, platna ili nepravilnih mrlja. Svaka tehnika ima svoj proces nanošenja, broj slojeva i alat, pa se cena i vreme razlikuju od tehnike do tehnike."),
      h2("Zašto uvek radim probni uzorak prvo"),
      p("Za razliku od standardnog farbanja, gde je rezultat prilično predvidljiv na osnovu kartice boje, dekorativne tehnike zavise od ugla nanošenja, pritiska alata i osvetljenja prostorije, pa se konačan izgled ne može sa sigurnošću predvideti samo iz kataloga. Zato pre svakog većeg dekorativnog posla radim probni uzorak na komadu ploče ili u neupadljivom delu prostorije, kako bi klijent video stvaran rezultat pre nego što se obaveže na celu površinu."),
      h2("Postavljanje tapeta"),
      p("Kod tapeta, najveći deo kvaliteta rezultata zavisi od pripreme zida, koji mora biti potpuno ravan i suv, i od preciznog usklađivanja šare na spojevima traka, pogotovo kod tapeta sa izraženim, ponavljajućim dezenom. Radim sa papirnim, vinilnim i netkanim tekstilnim tapetama, svaka od njih ima nešto drugačiji postupak lepljenja i vreme sušenja."),
      h2("Skidanje starih tapeta"),
      p("Ako prostorija već ima staru tapetu, ona se mora u potpunosti ukloniti, uključujući ostatke starog lepka, pre bilo kakve nove obrade zida, bilo da se postavlja nova tapeta ili se prelazi na farbanje. Ovaj korak često zna da potraje duže nego što klijenti očekuju, posebno kod starijih, čvrsto zalepljenih tapeta."),
      h2("Održavanje dekorativnih premaza i tapeta"),
      p("Dekorativni premazi na bazi veziva otporni su na blago brisanje vlažnom krpom, ali ne preporučujem agresivno ribanje. Vinilne tapete se lakše čiste od papirnih, ovo je nešto o čemu razgovaramo unapred u zavisnosti od namene prostorije, na primer da li je u pitanju hodnik sa čestim dodirom ili spavaća soba sa manje habanja."),
    ],
    checklist: [
      { title: "Probni uzorak pre početka", description: "Testiranje izabrane tehnike na maloj površini pre nanošenja na ceo zid." },
      { title: "Priprema zida", description: "Zid mora biti potpuno ravan i suv, posebno važno kod tapeta sa šarom." },
      { title: "Nanošenje dekorativne tehnike ili tapete", description: "Ručni rad prilagođen izabranoj tehnici, uz pažljivo usklađivanje detalja." },
      { title: "Skidanje starih slojeva po potrebi", description: "Uklanjanje postojećih tapeta ili premaza pre nove obrade." },
    ],
    ctaBandTitle: "Dogovorimo tehniku uz probni uzorak",
    ctaBandText:
      "Pre nego što se obavežete na celu prostoriju, napravimo probni uzorak izabrane tehnike, tako da tačno znate šta dobijate.",
    ctaBandBullets: [
      "Prikaz nekoliko tehnika i uzoraka na licu mesta",
      "Rad sa papirnim, vinilnim i netkanim tapetama",
      "Precizno usklađivanje šare na spojevima",
      "Savet o održavanju izabranog premaza ili tapete",
    ],
    whyUs: [
      { title: "Iskustvo sa ručnim tehnikama", description: "Dekorativni premazi zahtevaju uvežbanu ruku, ne samo dobar materijal." },
      { title: "Probni uzorak pre odluke", description: "Nema iznenađenja, vidite rezultat pre nego što se obavežete." },
      { title: "Preciznost kod tapeta", description: "Pažljivo usklađivanje šare, posebno kod tapeta sa izraženim dezenom." },
      { title: "Savet o izboru", description: "Pomažemo da izaberete tehniku ili tapetu prema nameni prostorije." },
    ],
    faq: [
      { question: "Da li mogu unapred da vidim kako će izgledati dekorativni premaz?", answer: "Da, radim probni uzorak na maloj površini ili ploči pre nego što se posao proširi na ceo zid." },
      { question: "Koja tapeta je najizdržljivija?", answer: "Vinilne tapete su generalno otpornije na vlagu i habanje od papirnih, dobar izbor za hodnike i prostorije sa čestim dodirom." },
      { question: "Da li se dekorativni premaz može prefarbati kasnije?", answer: "Da, ali obično zahteva dodatnu pripremu podloge u odnosu na standardan ravan zid, o čemu razgovaramo pre početka." },
    ],
  },
  {
    slug: "sanacija-renoviranje",
    title: "Sanacija i renoviranje",
    heroSubtitle:
      "Sanacija vlažnih mrlja, tretman protiv buđi i kompletno renoviranje stambenog prostora, sa pravim redosledom radova.",
    body: [
      h2("Kad je potrebna sanacija, ne samo farbanje"),
      p("Sanacija se razlikuje od standardnog farbanja po tome što prvo mora da se reši uzrok problema, bilo da je u pitanju vlaga, buđ ili oštećenje od prethodnih radova, pre nego što se pređe na uobičajen postupak gletovanja i farbanja. Ovo je posao koji zahteva strpljenje i pravilan redosled, jer preskakanje koraka gotovo uvek dovede do toga da se problem vrati za nekoliko meseci."),
      h2("Sanacija vlažnih mrlja"),
      p("Vlažne mrlje na plafonu ili zidu prvo zahtevaju potvrdu da je izvor curenja otklonjen, o čemu detaljno pišem na blogu. Tek nakon što se zid osuši, nanosi se izolacioni premap koji sprečava da ostatak mrlje probije kroz nove slojeve, a zatim standardno gletovanje i farbanje sanirane površine."),
      h2("Tretman protiv buđi i gljivica"),
      p("Buđ se prvo mehanički uklanja sa zaražene površine, uz odgovarajuću zaštitu (masku i rukavice) zbog spora koje se oslobađaju tokom čišćenja. Nakon toga se nanosi antifungalni (biocidni) premaz, koji sprečava ponovni razvoj gljivica ispod novih slojeva boje. Ovaj korak je posebno čest u kupatilima bez adekvatne ventilacije i u prostorijama sa hroničnom vlagom."),
      p("Važna napomena: tretman protiv buđi rešava simptom na površini, ali ako je uzrok hronična vlaga (loša ventilacija, kondenzacija), preporučujem i savetujem trajno rešenje problema (ventilator, redovno provetravanje), inače se buđ vremenom vraća bez obzira na kvalitet premaza."),
      h2("Kompletno renoviranje stana"),
      p("Kod kompletnog renoviranja, radovi se organizuju po prostorijama, sa unapred dogovorenim redosledom kako bi bar jedan deo stana ostao funkcionalan tokom radova. Ovo uključuje sanaciju svih oštećenja, gletovanje, farbanje, i po potrebi demontažu i montažu radijatora radi bojenja zida iza njih."),
      p("Za veće poslove uvek pravim detaljan plan sa fazama i okvirnim rokovima za svaku prostoriju, kako bi klijent znao šta da očekuje i kada."),
      h2("Zaštita nameštaja tokom sanacije i renoviranja"),
      p("Kod sanacije i renoviranja, zaštita postojećeg nameštaja i podova je posebno važna jer se često radi u više faza i duže traje nego standardno farbanje. Sav nameštaj koji ostaje u prostoriji se pažljivo prekriva folijom, a podovi kartonom i zaštitnom trakom na ivicama."),
    ],
    checklist: [
      { title: "Utvrđivanje uzroka problema", description: "Provera da li je curenje ili vlaga i dalje aktivna pre početka sanacije." },
      { title: "Mehaničko uklanjanje oštećenja", description: "Uklanjanje zaražene ili oštećene površine do zdrave podloge." },
      { title: "Izolacioni ili antifungalni premaz", description: "Zaštitni sloj protiv ponovnog probijanja mrlje ili razvoja buđi." },
      { title: "Standardna obrada (gletovanje i farbanje)", description: "Finalna obrada sanirane površine, usklađena sa ostatkom prostorije." },
    ],
    ctaBandTitle: "Prvo rešavamo uzrok, tek onda farbamo",
    ctaBandText:
      "Ne prihvatamo posao sanacije ako je izvor vlage i dalje aktivan, jer to nikome ne koristi. Recite nam stanje, dogovorićemo pravi redosled.",
    ctaBandBullets: [
      "Procena da li je problem aktivan ili sanovan",
      "Antifungalni i izolacioni premazi proverenih proizvođača",
      "Organizacija kompletnog renoviranja po fazama",
      "Demontaža i montaža radijatora po potrebi",
    ],
    whyUs: [
      { title: "Iskren pristup", description: "Kažemo jasno ako problem zahteva rešavanje uzroka pre nego što možemo da počnemo sanaciju." },
      { title: "Pravilan redosled radova", description: "Ne prekrivamo problem farbom, prvo se rešava uzrok, pa tek onda estetika." },
      { title: "Organizacija za veće projekte", description: "Kompletno renoviranje planiramo po fazama, uz jasan raspored." },
      { title: "Pažljiva zaštita prostora", description: "Nameštaj i podovi su zaštićeni tokom celog trajanja radova." },
    ],
    faq: [
      { question: "Da li sanirate mrlju ako ne znam uzrok curenja?", answer: "Prvo zajedno proveravamo da li je curenje i dalje aktivno. Ako jeste, preporučujemo da se prvo pozove odgovarajući majstor za taj deo." },
      { question: "Koliko traje tretman protiv buđi?", answer: "Zavisi od veličine zahvaćene površine, ali sam tretman uz standardnu obradu obično traje jedan do dva dana." },
      { question: "Da li demontirate radijatore sami?", answer: "Da, radijator skidamo bez ispuštanja vode iz sistema i vraćamo ga po završetku farbanja zida iza njega." },
    ],
  },
];
