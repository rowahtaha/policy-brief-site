// Internet Shutdowns Map · data for shutdowns.html
// One entry per country, keyed by ISO 3166-1 numeric code (matches world-atlas ids).
// Each incident: when (display text), start (YYYY-MM or YYYY-MM-DD, used for sorting
// and map shading), reason (one of shutdownReasons ids), scope, what happened.
// Scope: network-level shutdowns only (full blackouts, mobile data cuts, regional cuts,
// heavy throttling). Single-app bans (e.g. the US TikTok pause, Nepal's 2025 social
// media ban) are deliberately left out. Sources: Access Now #KeepItOn / STOP,
// NetBlocks, IODA, Internet Society Pulse, plus the per-incident links below.
// Last updated: 2026-10-22.

window.shutdownReasons = [
  { id: "protest",  label: "Protests" },
  { id: "election", label: "Elections" },
  { id: "conflict", label: "War & conflict" },
  { id: "coup",     label: "Coups & political crisis" },
  { id: "exams",    label: "School exams" },
  { id: "other",    label: "Other" }
];

window.shutdownData = {
  // ---------------- Africa ----------------
  "012": { name: "Algeria", incidents: [
    { when: "Feb–Mar 2019", start: "2019-02", reason: "protest", scope: "Nationwide disruptions", text: "Connectivity was repeatedly cut and throttled on Fridays as the Hirak protest movement pushed President Bouteflika out." },
    { when: "Every June since 2016", start: "2025-06", reason: "exams", scope: "Nationwide", text: "Internet or messaging apps are cut during the national baccalaureate exams to stop cheating. Access Now recorded it again in 2025.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "024": { name: "Angola", incidents: [
    { when: "July 19, 2025", start: "2025-07-19", reason: "protest", scope: "Nationwide, ~3 hours", text: "Internet was cut ahead of planned protests against rising fuel prices. Angola's first recorded shutdown.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "204": { name: "Benin", incidents: [
    { when: "April 28, 2019", start: "2019-04-28", reason: "election", scope: "Nationwide", text: "Internet went dark on the day of parliamentary elections that opposition parties had been blocked from." }
  ]},
  "854": { name: "Burkina Faso", incidents: [
    { when: "November 2021", start: "2021-11-20", reason: "protest", scope: "Mobile data, ~8 days", text: "Mobile internet was cut amid protests over the government's failure to stop jihadist attacks. A court later ordered it restored." },
    { when: "January 2022", start: "2022-01-23", reason: "coup", scope: "Mobile data", text: "Mobile internet was cut again during the unrest and military takeover that toppled President Kaboré." }
  ]},
  "120": { name: "Cameroon", incidents: [
    { when: "Jan 17 – Apr 20, 2017", start: "2017-01-17", reason: "protest", scope: "Anglophone regions, 93 days", text: "Internet was cut in the English-speaking Northwest and Southwest regions after protests against marginalization." },
    { when: "Oct 2017 – Mar 2018", start: "2017-10", reason: "conflict", scope: "Anglophone regions", text: "A second, longer shutdown in the same regions as the crisis turned into armed conflict." },
    { when: "October 2025", start: "2025-10", reason: "election", scope: "Nationwide disruptions", text: "Connectivity was disrupted during protests over the disputed presidential election that kept Paul Biya in power.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "148": { name: "Chad", incidents: [
    { when: "April 2016", start: "2016-04", reason: "election", scope: "Nationwide internet and SMS", text: "Internet and text messaging were cut around the presidential election that extended Idriss Déby's rule." },
    { when: "Mar 2018 – Jul 2019", start: "2018-03", reason: "coup", scope: "Social media, ~16 months", text: "Social media was blocked nationwide for about 16 months during a constitutional change that let Déby stay in office." }
  ]},
  "178": { name: "Republic of the Congo", incidents: [
    { when: "March 2016", start: "2016-03-20", reason: "election", scope: "Nationwide, ~4 days", text: "Internet, SMS and calls were cut during and after the presidential vote." },
    { when: "March 2021", start: "2021-03-21", reason: "election", scope: "Nationwide", text: "Internet was cut again on presidential election day." },
    { when: "March 15–17, 2026", start: "2026-03-15", reason: "election", scope: "Nationwide internet and SMS, ~2 days", text: "Connectivity fell to around 3% of normal on election day as Denis Sassou Nguesso sought a fifth term.", src: "https://pulse.internetsociety.org/en/shutdowns/shutdown-in-congo-along-presidential-elections/" }
  ]},
  "180": { name: "DR Congo", incidents: [
    { when: "Dec 31, 2018 – Jan 20, 2019", start: "2018-12-31", reason: "election", scope: "Nationwide, ~20 days", text: "Internet and SMS were cut the day after the presidential vote while results were counted." },
    { when: "January 23, 2025", start: "2025-01-23", reason: "conflict", scope: "Goma, North Kivu", text: "Internet went dark during the M23 offensive on Goma, blocking humanitarian work as hundreds were killed.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "818": { name: "Egypt", incidents: [
    { when: "Jan 28 – Feb 2, 2011", start: "2011-01-28", reason: "protest", scope: "Nationwide, ~5 days", text: "About 93% of networks went offline during the revolution against Hosni Mubarak. The shutdown that made the whole world notice the tactic.", src: "https://en.wikipedia.org/wiki/Internet_shutdown" }
  ]},
  "226": { name: "Equatorial Guinea", incidents: [
    { when: "Aug 2024 – ongoing", start: "2024-08", reason: "protest", scope: "Annobón island", text: "Internet was cut on Annobón after residents protested environmental damage, and the island has been effectively offline since.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "748": { name: "Eswatini", incidents: [
    { when: "June 29, 2021", start: "2021-06-29", reason: "protest", scope: "Nationwide", text: "Internet was shut down during pro-democracy protests against Africa's last absolute monarchy." }
  ]},
  "231": { name: "Ethiopia", incidents: [
    { when: "June 2019", start: "2019-06-22", reason: "coup", scope: "Nationwide, ~1 week", text: "Internet was cut after an attempted coup in the Amhara region (it had also been cut earlier that month for national exams)." },
    { when: "Jun 30 – Jul 2020", start: "2020-06-30", reason: "protest", scope: "Nationwide, ~3 weeks", text: "Internet was cut after the killing of Oromo singer Hachalu Hundessa sparked protests." },
    { when: "Nov 4, 2020 – Dec 2022", start: "2020-11-04", reason: "conflict", scope: "Tigray region, ~2 years", text: "Tigray was cut off for about two years during the war, hiding massacres and famine from the world." },
    { when: "August 2023 onward", start: "2023-08", reason: "conflict", scope: "Amhara region", text: "Internet was cut in Amhara as fighting broke out between the army and Fano militias." }
  ]},
  "266": { name: "Gabon", incidents: [
    { when: "January 7, 2019", start: "2019-01-07", reason: "coup", scope: "Nationwide", text: "Internet was cut during a failed coup attempt." },
    { when: "August 26, 2023", start: "2023-08-26", reason: "election", scope: "Nationwide", text: "Internet was cut on election night. Days later, the military overthrew President Ali Bongo." }
  ]},
  "270": { name: "The Gambia", incidents: [
    { when: "November 30, 2016", start: "2016-11-30", reason: "election", scope: "Nationwide", text: "Internet and international calls were cut on the eve of the election that Yahya Jammeh went on to lose." }
  ]},
  "324": { name: "Guinea", incidents: [
    { when: "October 2020", start: "2020-10", reason: "election", scope: "Nationwide", text: "Internet and international calls were cut around the disputed presidential election that gave Alpha Condé a third term." },
    { when: "2025", start: "2025-09", reason: "election", scope: "Nationwide", text: "Access Now recorded two election-related shutdowns during the constitutional referendum and presidential vote held under the military government.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "404": { name: "Kenya", incidents: [
    { when: "June 25, 2024", start: "2024-06-25", reason: "protest", scope: "Nationwide disruption", text: "Connectivity dropped sharply as protesters stormed Parliament over the Finance Bill. Rights groups have challenged Kenya's shutdowns in the High Court." },
    { when: "November 2023, 2024, 2025", start: "2025-11", reason: "exams", scope: "Telegram blocked", text: "Telegram was blocked for three years in a row during national secondary school exams.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "434": { name: "Libya", incidents: [
    { when: "February 2011", start: "2011-02", reason: "protest", scope: "Nationwide", text: "Gaddafi's government cut the internet as the uprising spread." },
    { when: "May 16, 2025", start: "2025-05-16", reason: "protest", scope: "Tripoli", text: "Six carriers cut internet in Tripoli as protests broke out against the Government of National Unity amid armed clashes.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "478": { name: "Mauritania", incidents: [
    { when: "June most years, 2017–2019", start: "2019-06", reason: "exams", scope: "Nationwide", text: "Mobile internet was cut during baccalaureate exams." },
    { when: "July 2024", start: "2024-07-02", reason: "election", scope: "Mobile data, ~3 weeks", text: "Mobile internet was cut after deadly protests over the presidential election result." }
  ]},
  "508": { name: "Mozambique", incidents: [
    { when: "Oct – Nov 2024", start: "2024-10-25", reason: "election", scope: "Mobile data, repeated", text: "Mobile internet was repeatedly cut during deadly protests over the disputed October election." }
  ]},
  "686": { name: "Senegal", incidents: [
    { when: "June 2023", start: "2023-06-04", reason: "protest", scope: "Mobile data", text: "Mobile data was cut during protests after opposition leader Ousmane Sonko was convicted." },
    { when: "February 2024", start: "2024-02-04", reason: "election", scope: "Mobile data", text: "Mobile data was cut after President Macky Sall postponed the presidential election. The ECOWAS Court later ruled Senegal's shutdowns unlawful." }
  ]},
  "694": { name: "Sierra Leone", incidents: [
    { when: "August 10, 2022", start: "2022-08-10", reason: "protest", scope: "Nationwide, ~2 hours", text: "Internet was cut during deadly protests over the cost of living." }
  ]},
  "729": { name: "Sudan", incidents: [
    { when: "Jun 3 – Jul 9, 2019", start: "2019-06-03", reason: "protest", scope: "Nationwide, ~36 days", text: "Mobile internet was cut the day of the Khartoum sit-in massacre and stayed off for over a month, until a court ordered it back." },
    { when: "Oct 25 – Nov 18, 2021", start: "2021-10-25", reason: "coup", scope: "Nationwide, ~25 days", text: "Internet was cut as the military seized power from the transitional government." },
    { when: "February 2024", start: "2024-02", reason: "conflict", scope: "Nationwide", text: "All major networks went down during the war between the army and the Rapid Support Forces, cutting off millions in the world's worst humanitarian crisis." },
    { when: "2025", start: "2025-07", reason: "exams", scope: "Nationwide mobile data", text: "Three nationwide shutdowns in 2025, including mobile internet cut during school exams in July, in the middle of the war.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "834": { name: "Tanzania", incidents: [
    { when: "Oct 29 – Nov 3, 2025", start: "2025-10-29", reason: "election", scope: "Nationwide, 5 days", text: "A complete blackout during the general election as police opened fire on protesters. The African Commission on Human and Peoples' Rights condemned it.", src: "https://www.accessnow.org/campaign/2026-elections-and-internet-shutdowns-watch/" }
  ]},
  "768": { name: "Togo", incidents: [
    { when: "September 2017", start: "2017-09", reason: "protest", scope: "Nationwide, ~1 week", text: "Internet was cut during mass protests demanding term limits on President Faure Gnassingbé." },
    { when: "Jul 1 – Sep 5, 2025", start: "2025-07-01", reason: "protest", scope: "Daily throttling, 9am–midnight", text: "After protests against a new constitution, internet was throttled every day during waking hours for two months, and major platforms were blocked.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "800": { name: "Uganda", incidents: [
    { when: "January 13–18, 2021", start: "2021-01-13", reason: "election", scope: "Nationwide, ~5 days", text: "Internet was cut on the eve of the election between Yoweri Museveni and Bobi Wine." },
    { when: "January 13–18, 2026", start: "2026-01-13", reason: "election", scope: "Nationwide, 5 days", text: "A full blackout two days before the general election. Starlink was ordered blocked and VPN users were threatened.", src: "https://www.accessnow.org/campaign/2026-elections-and-internet-shutdowns-watch/" }
  ]},
  "716": { name: "Zimbabwe", incidents: [
    { when: "January 2019", start: "2019-01-15", reason: "protest", scope: "Nationwide", text: "Internet was cut step by step, first social media then everything, during protests over a fuel price hike. A court later ruled it illegal." }
  ]},

  // ---------------- Middle East ----------------
  "048": { name: "Bahrain", incidents: [
    { when: "Jun 2016 – Mar 2017", start: "2016-06", reason: "protest", scope: "Village of Duraz, nightly", text: "Mobile internet was cut every night for months around a sit-in supporting Shia cleric Isa Qassim." }
  ]},
  "364": { name: "Iran", incidents: [
    { when: "November 16–23, 2019", start: "2019-11-16", reason: "protest", scope: "Nationwide, ~1 week", text: "Around 96% of networks went offline during fuel price protests. Hundreds were killed under the cover of the blackout." },
    { when: "Sep – Dec 2022", start: "2022-09", reason: "protest", scope: "Mobile 'curfews' and regional cuts", text: "Daily mobile shutdowns during the Woman, Life, Freedom protests after Mahsa Amini died in custody." },
    { when: "June 2025", start: "2025-06-13", reason: "conflict", scope: "Nationwide", text: "Internet was almost fully cut during the twelve-day war with Israel." },
    { when: "Jan 8 – May 26, 2026", start: "2026-01-08", reason: "protest", scope: "Nationwide, record length", text: "The longest nationwide blackout ever recorded, during protests and a deadly crackdown, renewed after the February 28 strikes. Even Starlink was targeted.", src: "https://www.al-monitor.com/originals/2026/05/iran-partially-restores-internet-after-88-day-blackout-what-know" }
  ]},
  "368": { name: "Iraq", incidents: [
    { when: "October 2019", start: "2019-10-02", reason: "protest", scope: "Nationwide", text: "Internet was cut during the Tishreen protests against corruption, as security forces killed hundreds." },
    { when: "Every exam season", start: "2026-08-26", reason: "exams", scope: "Nationwide, mornings", text: "Iraq cuts the internet nationwide on exam mornings, most recently August 26–31, 2026. It had 36 nationwide exam cuts in 2025 alone.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "275": { name: "Palestine (Gaza)", incidents: [
    { when: "Oct 2023 – ongoing", start: "2025-01", reason: "conflict", scope: "Gaza Strip, repeated blackouts", text: "Repeated near-total communications blackouts in Gaza caused by Israeli strikes on infrastructure, fuel cuts and network controls. Access Now counted 7 more in 2025.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "760": { name: "Syria", incidents: [
    { when: "November 29, 2012", start: "2012-11-29", reason: "conflict", scope: "Nationwide", text: "About 92% of networks went dark during the civil war." },
    { when: "Every exam season since 2016", start: "2025-06", reason: "exams", scope: "Nationwide", text: "Syria cuts internet nationwide during school exams, a habit of the Assad era that continued even after his fall.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "792": { name: "Türkiye", incidents: [
    { when: "September 2016", start: "2016-09", reason: "conflict", scope: "Kurdish-majority southeast", text: "Internet was cut in about a dozen southeastern cities after the government removed elected Kurdish mayors." }
  ]},
  "887": { name: "Yemen", incidents: [
    { when: "January 21–25, 2022", start: "2022-01-21", reason: "conflict", scope: "Nationwide, ~4 days", text: "The whole country went offline after a Saudi-led coalition airstrike hit a telecom building in Hodeidah." }
  ]},

  // ---------------- Asia ----------------
  "004": { name: "Afghanistan", incidents: [
    { when: "Sep 29 – Oct 1, 2025", start: "2025-09-29", reason: "other", scope: "Nationwide, ~48 hours", text: "The Taliban cut the internet nationwide, saying it was to stop 'immoral activities', after banning fiber internet in northern provinces on September 17.", src: "https://www.cbsnews.com/news/afghanistan-taliban-internet-crackdown/" }
  ]},
  "031": { name: "Azerbaijan", incidents: [
    { when: "Sep 27 – Nov 2020", start: "2020-09-27", reason: "conflict", scope: "Nationwide restrictions", text: "Internet was heavily restricted during the war with Armenia over Nagorno-Karabakh." }
  ]},
  "050": { name: "Bangladesh", incidents: [
    { when: "July 18–28, 2024", start: "2024-07-18", reason: "protest", scope: "Nationwide, ~5 days full, ~10 days mobile", text: "Internet was cut as police cracked down on the student quota protests that later toppled Sheikh Hasina." },
    { when: "August 5, 2024", start: "2024-08-05", reason: "protest", scope: "Nationwide", text: "Cut again on the day Hasina resigned and fled. Lawmakers have since proposed banning shutdowns.", src: "https://en.wikipedia.org/wiki/2024_Bangladesh_internet_blackouts" }
  ]},
  "116": { name: "Cambodia", incidents: [
    { when: "June 13, 2025", start: "2025-06-13", reason: "conflict", scope: "Links from Thailand", text: "Cambodia cut internet coming in through Thai providers during border tensions with Thailand.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "156": { name: "China", incidents: [
    { when: "Jul 2009 – May 2010", start: "2009-07-05", reason: "protest", scope: "Xinjiang, ~10 months", text: "Xinjiang was cut off for about ten months after unrest in Ürümqi." }
  ]},
  "356": { name: "India", incidents: [
    { when: "Aug 4, 2019 – Feb 5, 2021", start: "2019-08-04", reason: "conflict", scope: "Jammu & Kashmir, 552 days", text: "Internet was cut as the government revoked Kashmir's special status. 4G came back only after 18 months." },
    { when: "December 2019", start: "2019-12", reason: "protest", scope: "Several states", text: "Shutdowns in Assam, Uttar Pradesh, West Bengal and more during protests against the Citizenship Amendment Act." },
    { when: "May 3 – Dec 2023", start: "2023-05-03", reason: "conflict", scope: "Manipur, ~7 months", text: "Internet was cut as ethnic violence broke out in Manipur." },
    { when: "July 20–25, 2026", start: "2026-07-20", reason: "protest", scope: "Central Delhi (1.5 km radius)", text: "Mobile internet was cut five times around Jantar Mantar during protests over leaked NEET exam papers.", src: "https://lawchakra.in/high-court/jantar-mantar-protest-internet-shutdown/" },
    { when: "October 10, 2026", start: "2026-10-10", reason: "protest", scope: "Central Delhi", text: "Cut again ahead of a Jantar Mantar protest. Delhi now has the most shutdowns of anywhere in India this year, and the Supreme Court has ordered unhindered access.", src: "https://www.medianama.com/2026/10/223-supreme-court-internet-shutdown-delhi/" }
  ]},
  "360": { name: "Indonesia", incidents: [
    { when: "Aug – Sep 2019", start: "2019-08-21", reason: "protest", scope: "Papua and West Papua", text: "Internet was cut in Papua during anti-racism protests. A Jakarta court later ruled it unlawful." }
  ]},
  "398": { name: "Kazakhstan", incidents: [
    { when: "January 5–10, 2022", start: "2022-01-05", reason: "protest", scope: "Nationwide, ~5 days", text: "Internet was cut during the protests over fuel prices that turned into deadly unrest." }
  ]},
  "104": { name: "Myanmar", incidents: [
    { when: "Jun 2019 – Feb 2021", start: "2019-06-21", reason: "conflict", scope: "Rakhine & Chin states, ~19 months", text: "Mobile internet was cut in conflict areas in one of the world's longest shutdowns." },
    { when: "February 2021", start: "2021-02-01", reason: "coup", scope: "Nationwide, then nightly", text: "Internet was cut on the day of the military coup, then switched off every night for over two months." },
    { when: "2025", start: "2025-12", reason: "conflict", scope: "95 shutdowns", text: "The world's top offender for the second year running, mostly by the military, including during its December 2025 election.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "586": { name: "Pakistan", incidents: [
    { when: "May 9–12, 2023", start: "2023-05-09", reason: "protest", scope: "Nationwide mobile data", text: "Mobile internet was cut after former PM Imran Khan was arrested and protests broke out." },
    { when: "February 8, 2024", start: "2024-02-08", reason: "election", scope: "Nationwide mobile service", text: "Mobile service was suspended on general election day, citing security." },
    { when: "Jun 5, 2026 – ongoing", start: "2026-06-05", reason: "protest", scope: "Pakistan-administered Kashmir, 100+ days", text: "Mobile data and broadband cut after protests for electoral reform. Still restricted past 100 days, with 50+ reported dead.", src: "https://www.aljazeera.com/news/2026/9/15/internet-shutdown-crosses-100-days-in-pakistan-administered-kashmir" },
    { when: "October 12, 2026", start: "2026-10-12", reason: "coup", scope: "Parts of Khyber Pakhtunkhwa", text: "Major disruptions in Peshawar and other cities as the federal government imposed emergency and governor's rule on the province.", src: "https://www.arabnews.pk/pakistan/northwestern-pakistani-province-sees-internet-disruptions-after-president-imposes-emergency-monitor-3003891" }
  ]},
  "762": { name: "Tajikistan", incidents: [
    { when: "Nov 2021 – Mar 2022", start: "2021-11-25", reason: "protest", scope: "Gorno-Badakhshan, ~4 months", text: "Internet was cut in the autonomous Pamir region after protests over a man killed by security forces." }
  ]},
  "860": { name: "Uzbekistan", incidents: [
    { when: "July 2022", start: "2022-07-01", reason: "protest", scope: "Karakalpakstan, ~3 weeks", text: "Internet was cut during protests against plans to strip Karakalpakstan of its autonomy." }
  ]},

  // ---------------- Europe & Eurasia ----------------
  "112": { name: "Belarus", incidents: [
    { when: "August 9–12, 2020", start: "2020-08-09", reason: "election", scope: "Nationwide, ~61 hours", text: "Internet was cut after the disputed election that kept Lukashenko in power, then mobile data was cut every Sunday during protests for months." }
  ]},
  "643": { name: "Russia", incidents: [
    { when: "October 2018", start: "2018-10-04", reason: "protest", scope: "Ingushetia, ~2 weeks", text: "Mobile internet was cut during protests over a border deal with Chechnya." },
    { when: "May 2025 – ongoing", start: "2025-05", reason: "conflict", scope: "Mobile internet in many regions", text: "Regional mobile internet shutdowns became routine, justified as protection against Ukrainian drones. 19 recorded in 2025.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "804": { name: "Ukraine", incidents: [
    { when: "Feb 2022 – ongoing", start: "2025-01", reason: "conflict", scope: "Occupied and frontline areas", text: "Russian forces have cut or rerouted internet in occupied areas and knocked out connectivity with strikes on power and telecom infrastructure.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},

  // ---------------- Americas ----------------
  "192": { name: "Cuba", incidents: [
    { when: "July 11–14, 2021", start: "2021-07-11", reason: "protest", scope: "Nationwide disruptions", text: "Internet was cut and social media blocked during the largest anti-government protests in decades." }
  ]},
  "591": { name: "Panama", incidents: [
    { when: "June 20 – early July 2025", start: "2025-06-20", reason: "protest", scope: "Bocas del Toro province, ~2 weeks", text: "Internet and mobile phones were suspended during protests over pension and social security reforms.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]}
};
