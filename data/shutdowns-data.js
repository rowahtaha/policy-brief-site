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
    { when: "Feb 22 – Mar 2019", start: "2019-02-22", reason: "protest", scope: "Regional cuts and throttling", text: "Parts of the country, including Algiers, were cut off on Friday protest days as the Hirak movement opposed Bouteflika's bid for a fifth term.", src: "https://netblocks.org/reports/algeria-internet-disruptions-amid-mass-demonstrations-WJBZjMB6" },
    { when: "Every June since 2016", start: "2025-06", reason: "exams", scope: "Nationwide", text: "Internet or messaging apps are cut during the national baccalaureate exams to stop cheating. Access Now recorded it again in 2025.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "024": { name: "Angola", incidents: [
    { when: "July 19, 2025", start: "2025-07-19", reason: "protest", scope: "Nationwide, ~3 hours", text: "Internet was cut ahead of planned protests against rising fuel prices. Angola's first recorded shutdown.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "204": { name: "Benin", incidents: [
    { when: "April 28, 2019", start: "2019-04-28", reason: "election", scope: "Nationwide", text: "Internet went dark on the day of parliamentary elections that opposition parties had been blocked from.", src: "https://en.wikipedia.org/wiki/2019_Beninese_parliamentary_election" }
  ]},
  "854": { name: "Burkina Faso", incidents: [
    { when: "November 2021", start: "2021-11-20", reason: "protest", scope: "Mobile data, ~8 days", text: "Mobile internet was cut amid protests over the government's failure to stop jihadist attacks. It came back about a week later, as opposition and business groups protested the cut.", src: "https://netblocks.org/reports/mobile-internet-disrupted-in-burkina-faso-after-shooting-of-protesters-gBLg9jA4" },
    { when: "January 23, 2022", start: "2022-01-23", reason: "coup", scope: "Mobile data, ~35 hours", text: "Mobile internet was cut amid army mutinies and banned protests, the day before soldiers arrested President Kaboré.", src: "https://monitor.civicus.org/explore/military-coup-clashes-protests-and-press-freedom-violations/" }
  ]},
  "120": { name: "Cameroon", incidents: [
    { when: "Jan 17 – Apr 20, 2017", start: "2017-01-17", reason: "protest", scope: "Anglophone regions, 93 days", text: "Internet was cut in the English-speaking Northwest and Southwest regions after protests against marginalization.", src: "https://en.wikipedia.org/wiki/Anglophone_Crisis" },
    { when: "Oct 2017 – Mar 2018", start: "2017-10", reason: "conflict", scope: "Anglophone regions", text: "A second, longer shutdown in the same regions as the crisis turned into armed conflict.", src: "https://en.wikipedia.org/wiki/Anglophone_Crisis" },
    { when: "October 2025", start: "2025-10", reason: "election", scope: "Nationwide disruptions", text: "Connectivity was disrupted during protests over the disputed presidential election that kept Paul Biya in power.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "148": { name: "Chad", incidents: [
    { when: "April 2016", start: "2016-04", reason: "election", scope: "Nationwide internet and SMS", text: "Internet and text messaging were cut around the presidential election that extended Idriss Déby's rule.", src: "https://en.wikipedia.org/wiki/2016_Chadian_presidential_election" },
    { when: "Mar 2018 – Jul 2019", start: "2018-03", reason: "coup", scope: "Social media blocked, ~16 months", text: "Social media was blocked nationwide for about 16 months during a constitutional change that let Déby stay in office.", src: "https://internetwithoutborders.org/victory-in-chad-access-to-social-media-restored/" }
  ]},
  "178": { name: "Republic of the Congo", incidents: [
    { when: "March 2016", start: "2016-03-20", reason: "election", scope: "Nationwide, ~4 days", text: "Internet, SMS and calls were cut during and after the presidential vote.", src: "https://en.wikipedia.org/wiki/2016_Republic_of_the_Congo_presidential_election" },
    { when: "March 2021", start: "2021-03-21", reason: "election", scope: "Nationwide", text: "Internet was cut again on presidential election day.", src: "https://en.wikipedia.org/wiki/2021_Republic_of_the_Congo_presidential_election" },
    { when: "March 15–17, 2026", start: "2026-03-15", reason: "election", scope: "Nationwide internet and SMS, ~2 days", text: "Connectivity fell to around 3% of normal on election day as Denis Sassou Nguesso sought a fifth term.", src: "https://pulse.internetsociety.org/en/shutdowns/shutdown-in-congo-along-presidential-elections/" }
  ]},
  "180": { name: "DR Congo", incidents: [
    { when: "January 20, 2015", start: "2015-01-20", reason: "protest", scope: "Nationwide internet and SMS", text: "Internet and text messages were cut after deadly protests against a law that could have kept Joseph Kabila in power past his term.", src: "https://cpj.org/2015/01/drc-halts-internet-access-and-cellphone-services-a/" },
    { when: "Dec 31, 2018 – Jan 20, 2019", start: "2018-12-31", reason: "election", scope: "Nationwide, ~20 days", text: "Internet and SMS were cut the day after the presidential vote while results were counted.", src: "https://en.wikipedia.org/wiki/2018_Democratic_Republic_of_the_Congo_general_election" },
    { when: "January 23, 2025", start: "2025-01-23", reason: "conflict", scope: "Goma, North Kivu", text: "Internet went dark during the M23 offensive on Goma, blocking humanitarian work as hundreds were killed.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "818": { name: "Egypt", incidents: [
    { when: "Jan 28 – Feb 2, 2011", start: "2011-01-28", reason: "protest", scope: "Nationwide, ~5 days", text: "About 93% of networks went offline during the revolution against Hosni Mubarak. The shutdown that made the whole world notice the tactic.", src: "https://en.wikipedia.org/wiki/Internet_shutdown" }
  ]},
  "226": { name: "Equatorial Guinea", incidents: [
    { when: "Aug 2024 – ongoing", start: "2024-08", reason: "protest", scope: "Annobón island", text: "Internet was cut on Annobón after residents protested environmental damage, and the island has been effectively offline since.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "748": { name: "Eswatini", incidents: [
    { when: "June 29, 2021", start: "2021-06-29", reason: "protest", scope: "Nationwide", text: "Internet was shut down during pro-democracy protests against Africa's last absolute monarchy.", src: "https://en.wikipedia.org/wiki/2021%E2%80%932023_Eswatini_protests" }
  ]},
  "231": { name: "Ethiopia", incidents: [
    { when: "July 2016", start: "2016-07", reason: "exams", scope: "Nationwide", text: "Internet was cut during national exams after the papers leaked online, during a year of mass protests in Oromia and Amhara.", src: "https://en.wikipedia.org/wiki/Internet_in_Ethiopia" },
    { when: "June 2019", start: "2019-06-22", reason: "coup", scope: "Nationwide, ~1 week", text: "Internet was cut after an attempted coup in the Amhara region (it had also been cut earlier that month for national exams).", src: "https://en.wikipedia.org/wiki/Internet_in_Ethiopia" },
    { when: "Jun 30 – Jul 2020", start: "2020-06-30", reason: "protest", scope: "Nationwide, ~3 weeks", text: "Internet was cut after the killing of Oromo singer Hachalu Hundessa sparked protests.", src: "https://en.wikipedia.org/wiki/Hachalu_Hundessa_riots" },
    { when: "Nov 4, 2020 – Dec 2022", start: "2020-11-04", reason: "conflict", scope: "Tigray region, ~2 years", text: "Tigray was cut off for about two years during the war, hiding massacres and famine from the world.", src: "https://en.wikipedia.org/wiki/Tigray_war" },
    { when: "Aug 3, 2023 – mid-2024", start: "2023-08-03", reason: "conflict", scope: "Amhara region, ~11 months", text: "Internet was cut in Amhara as fighting broke out between the army and Fano militias and a state of emergency was declared.", src: "https://www.accessnow.org/event/keepiton-amhara-ethiopia/" }
  ]},
  "266": { name: "Gabon", incidents: [
    { when: "Aug 31 – Sep 2016", start: "2016-08-31", reason: "election", scope: "Nationwide, ~4 days", text: "Internet was cut as protests broke out over Ali Bongo's disputed re-election.", src: "https://rsf.org/en/gabon-post-election-unrest-leads-news-blackout" },
    { when: "January 7, 2019", start: "2019-01-07", reason: "coup", scope: "Nationwide", text: "Internet was cut during a failed coup attempt.", src: "https://en.wikipedia.org/wiki/2019_Gabonese_coup_attempt" },
    { when: "August 26, 2023", start: "2023-08-26", reason: "election", scope: "Nationwide", text: "Internet was cut on election night. Days later, the military overthrew President Ali Bongo.", src: "https://pulse.internetsociety.org/blog/gabon-cuts-internet-imposes-curfew-amid-election-voting-delays" }
  ]},
  "270": { name: "The Gambia", incidents: [
    { when: "November 30, 2016", start: "2016-11-30", reason: "election", scope: "Nationwide", text: "Internet and international calls were cut on the eve of the election that Yahya Jammeh went on to lose.", src: "https://en.wikipedia.org/wiki/2016_Gambian_presidential_election" }
  ]},
  "324": { name: "Guinea", incidents: [
    { when: "October 23–27, 2020", start: "2020-10-23", reason: "election", scope: "Nationwide, ~4 days", text: "Internet was cut as results were due from the disputed presidential election that gave Alpha Condé a third term.", src: "https://netblocks.org/reports/internet-disrupted-in-guinea-ahead-of-presidential-election-result-announcement-DA3lQ3BW" },
    { when: "2025", start: "2025-09", reason: "election", scope: "Nationwide", text: "Access Now recorded two election-related shutdowns during the constitutional referendum and presidential vote held under the military government.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "404": { name: "Kenya", incidents: [
    { when: "June 25, 2024", start: "2024-06-25", reason: "protest", scope: "Nationwide disruption", text: "Connectivity dropped sharply as protesters stormed Parliament over the Finance Bill. Rights groups have challenged Kenya's shutdowns in the High Court.", src: "https://en.wikipedia.org/wiki/Kenya_Finance_Bill_protests" },
    { when: "November 2023, 2024, 2025", start: "2025-11", reason: "exams", scope: "Telegram blocked", text: "Telegram was blocked for three years in a row during national secondary school exams.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "434": { name: "Libya", incidents: [
    { when: "February 18–19, 2011", start: "2011-02-18", reason: "protest", scope: "Nationwide, twice", text: "Gaddafi's government took Libya off the internet for about 7 hours, then again the next night, as the uprising spread.", src: "https://en.wikipedia.org/wiki/Internet_censorship_in_the_Arab_Spring" },
    { when: "May 16, 2025", start: "2025-05-16", reason: "protest", scope: "Tripoli", text: "Six carriers cut internet in Tripoli as protests broke out against the Government of National Unity amid armed clashes.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "478": { name: "Mauritania", incidents: [
    { when: "Exam seasons, 2018–2024", start: "2024-08-12", reason: "exams", scope: "Nationwide", text: "Internet is cut during baccalaureate exams to stop cheating, most recently on August 12–13, 2024.", src: "https://pulse.internetsociety.org/en/shutdowns/internet-suspended-in-mauritania-13-august-2024/" },
    { when: "July 2024", start: "2024-07-02", reason: "election", scope: "Mobile data, ~3 weeks", text: "Mobile internet was cut after deadly protests over the presidential election result.", src: "https://en.wikipedia.org/wiki/2024_Mauritanian_presidential_election" }
  ]},
  "508": { name: "Mozambique", incidents: [
    { when: "Oct – Nov 2024", start: "2024-10-25", reason: "election", scope: "Mobile data, repeated", text: "Mobile internet was repeatedly cut during deadly protests over the disputed October election.", src: "https://en.wikipedia.org/wiki/2024%E2%80%932025_Mozambican_protests" }
  ]},
  "686": { name: "Senegal", incidents: [
    { when: "June 2023", start: "2023-06-04", reason: "protest", scope: "Mobile data", text: "Mobile data was cut in a curfew-style pattern for three days during deadly protests after opposition leader Ousmane Sonko was convicted. In 2025 the ECOWAS Court ruled Senegal's 2023 shutdowns violated human rights.", src: "https://www.voanews.com/a/senegal-government-cuts-mobile-internet-access-amid-deadly-rioting-/7122399.html" },
    { when: "February 5 & 13, 2024", start: "2024-02-05", reason: "election", scope: "Mobile data", text: "Mobile data was cut twice, on February 5 and 13, after President Macky Sall postponed the presidential election and protests broke out.", src: "https://cpj.org/2024/02/senegal-delays-election-authorities-cut-mobile-internet-revoke-walf-tvs-license-harass-journalists/" }
  ]},
  "694": { name: "Sierra Leone", incidents: [
    { when: "August 10, 2022", start: "2022-08-10", reason: "protest", scope: "Nationwide, ~2 hours", text: "Internet was cut during deadly protests over the cost of living.", src: "https://en.wikipedia.org/wiki/2022_Sierra_Leone_protests" }
  ]},
  "729": { name: "Sudan", incidents: [
    { when: "September 25, 2013", start: "2013-09-25", reason: "protest", scope: "Nationwide, ~24 hours", text: "Sudan dropped almost completely off the internet as protests over the end of fuel subsidies spread and dozens were killed.", src: "https://cpj.org/2013/09/sudan-must-restore-internet-access-immediately/" },
    { when: "Jun 3 – Jul 9, 2019", start: "2019-06-03", reason: "protest", scope: "Nationwide, ~36 days", text: "Mobile internet was cut the day of the Khartoum sit-in massacre and stayed off for over a month, until a court ordered it back.", src: "https://en.wikipedia.org/wiki/Khartoum_massacre" },
    { when: "Oct 25 – Nov 18, 2021", start: "2021-10-25", reason: "coup", scope: "Nationwide, ~25 days", text: "Internet was cut as the military seized power from the transitional government.", src: "https://en.wikipedia.org/wiki/2021_Sudanese_coup_d%27%C3%A9tat" },
    { when: "Feb 2 – Mar 2024", start: "2024-02-02", reason: "conflict", scope: "Nationwide, over a month", text: "All three networks went down across most of the country during the war. The army and the Rapid Support Forces blamed each other. Nearly 30 million people lost internet and phone service.", src: "https://cpj.org/2024/02/cpj-alarmed-by-extended-communications-blackout-in-sudan/" },
    { when: "2025", start: "2025-07", reason: "exams", scope: "Nationwide mobile data", text: "Three nationwide shutdowns in 2025, including mobile internet cut during school exams in July, in the middle of the war.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "834": { name: "Tanzania", incidents: [
    { when: "Oct 29 – Nov 3, 2025", start: "2025-10-29", reason: "election", scope: "Nationwide, 5 days", text: "A complete blackout during the general election as police opened fire on protesters. The African Commission on Human and Peoples' Rights condemned it.", src: "https://www.accessnow.org/campaign/2026-elections-and-internet-shutdowns-watch/" }
  ]},
  "768": { name: "Togo", incidents: [
    { when: "September 2017", start: "2017-09", reason: "protest", scope: "Nationwide, ~1 week", text: "Internet was cut during mass protests demanding term limits on President Faure Gnassingbé.", src: "https://en.wikipedia.org/wiki/2017%E2%80%932018_Togolese_protests" },
    { when: "Jul 1 – Sep 5, 2025", start: "2025-07-01", reason: "protest", scope: "Daily throttling, 9am–midnight", text: "After protests against a new constitution, internet was throttled every day during waking hours for two months, and major platforms were blocked.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "800": { name: "Uganda", incidents: [
    { when: "January 13–18, 2021", start: "2021-01-13", reason: "election", scope: "Nationwide, ~5 days", text: "Internet was cut on the eve of the election between Yoweri Museveni and Bobi Wine.", src: "https://en.wikipedia.org/wiki/2021_Ugandan_general_election" },
    { when: "January 13–18, 2026", start: "2026-01-13", reason: "election", scope: "Nationwide, 5 days", text: "A full blackout two days before the general election. Starlink was ordered blocked and VPN users were threatened.", src: "https://www.accessnow.org/campaign/2026-elections-and-internet-shutdowns-watch/" }
  ]},
  "716": { name: "Zimbabwe", incidents: [
    { when: "January 2019", start: "2019-01-15", reason: "protest", scope: "Nationwide", text: "Internet was cut step by step, first social media then everything, during protests over a fuel price hike. A court later ruled it illegal.", src: "https://en.wikipedia.org/wiki/Zimbabwe_fuel_protests" }
  ]},

  // ---------------- Middle East ----------------
  "048": { name: "Bahrain", incidents: [
    { when: "Jun 2016 – Mar 2017", start: "2016-06", reason: "protest", scope: "Village of Duraz, nightly", text: "Mobile internet was cut every night for months around a sit-in supporting Shia cleric Isa Qassim.", src: "https://www.accessnow.org/coalition-calls-bahrain-sneakily-shutting-internet/" }
  ]},
  "364": { name: "Iran", incidents: [
    { when: "June 2009", start: "2009-06-13", reason: "election", scope: "Nationwide slowdown, SMS cut", text: "Text messaging was cut and the internet slowed to a crawl after the disputed re-election of Mahmoud Ahmadinejad set off the Green Movement protests.", src: "https://en.wikipedia.org/wiki/2009_Iranian_presidential_election_protests" },
    { when: "November 16–23, 2019", start: "2019-11-16", reason: "protest", scope: "Nationwide, ~1 week", text: "Around 96% of networks went offline during fuel price protests. Hundreds were killed under the cover of the blackout.", src: "https://en.wikipedia.org/wiki/2019_Internet_blackout_in_Iran" },
    { when: "Sep – Dec 2022", start: "2022-09", reason: "protest", scope: "Mobile 'curfews' and regional cuts", text: "Daily mobile shutdowns during the Woman, Life, Freedom protests after Mahsa Amini died in custody.", src: "https://en.wikipedia.org/wiki/Mahsa_Amini_protests" },
    { when: "June 2025", start: "2025-06-13", reason: "conflict", scope: "Nationwide", text: "Internet was almost fully cut during the twelve-day war with Israel.", src: "https://en.wikipedia.org/wiki/2025_Internet_blackout_in_Iran" },
    { when: "Jan 8 – May 26, 2026", start: "2026-01-08", reason: "protest", scope: "Nationwide, record length", text: "The longest nationwide blackout ever recorded, during protests and a deadly crackdown, renewed after the February 28 strikes. Even Starlink was targeted.", src: "https://www.al-monitor.com/originals/2026/05/iran-partially-restores-internet-after-88-day-blackout-what-know" }
  ]},
  "368": { name: "Iraq", incidents: [
    { when: "June 15, 2014", start: "2014-06-15", reason: "conflict", scope: "Five provinces", text: "The government ordered internet cut in Nineveh, Anbar, Salahuddin, Kirkuk and Diyala as ISIS advanced, two days after blocking social media nationwide.", src: "https://thenetmonitor.org/blog/posts/iraqi-government-shuts-down-internet-access-in-five-provinces" },
    { when: "October 2019", start: "2019-10-02", reason: "protest", scope: "Nationwide", text: "Internet was cut during the Tishreen protests against corruption, as security forces killed hundreds.", src: "https://en.wikipedia.org/wiki/2019%E2%80%932021_Iraqi_protests" },
    { when: "Every exam season", start: "2026-08-26", reason: "exams", scope: "Nationwide, mornings", text: "Iraq cuts the internet nationwide on exam mornings, most recently August 26–31, 2026. It had 36 nationwide exam cuts in 2025 alone.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "275": { name: "Palestine (Gaza)", incidents: [
    { when: "Oct 2023 – ongoing", start: "2025-01", reason: "conflict", scope: "Gaza Strip, repeated blackouts", text: "Repeated near-total communications blackouts in Gaza caused by Israeli strikes on infrastructure, fuel cuts and network controls. Access Now counted 7 more in 2025.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "760": { name: "Syria", incidents: [
    { when: "June 3, 2011", start: "2011-06-03", reason: "protest", scope: "Most of the country", text: "Most of Syria's networks went offline on a Friday of big protests early in the uprising.", src: "https://www.theregister.com/2011/06/03/syrian_net_cutoff/" },
    { when: "November 29, 2012", start: "2012-11-29", reason: "conflict", scope: "Nationwide", text: "About 92% of networks went dark during the civil war.", src: "https://en.wikipedia.org/wiki/Internet_shutdown" },
    { when: "Every exam season since 2016", start: "2025-06", reason: "exams", scope: "Nationwide", text: "Syria cuts internet nationwide during school exams, a habit of the Assad era that continued even after his fall.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "792": { name: "Türkiye", incidents: [
    { when: "September 11, 2016", start: "2016-09-11", reason: "conflict", scope: "10 southeastern cities, ~6 hours", text: "Internet and phones were cut for about 12 million people after the government removed 28 elected Kurdish mayors. A longer cut followed in October.", src: "https://turkeyblocks.org/2016/09/11/internet-shutdown-turkey-southeast" }
  ]},
  "887": { name: "Yemen", incidents: [
    { when: "January 21–25, 2022", start: "2022-01-21", reason: "conflict", scope: "Nationwide, ~4 days", text: "The whole country went offline after a Saudi-led coalition airstrike hit a telecom building in Hodeidah.", src: "https://www.aljazeera.com/news/2022/1/25/yemens-internet-returns-after-airstrike-causes-4-day-blackout" }
  ]},

  // ---------------- Asia ----------------
  "004": { name: "Afghanistan", incidents: [
    { when: "Sep 29 – Oct 1, 2025", start: "2025-09-29", reason: "other", scope: "Nationwide, ~48 hours", text: "The Taliban cut the internet nationwide, saying it was to stop 'immoral activities', after banning fiber internet in northern provinces on September 17.", src: "https://www.cbsnews.com/news/afghanistan-taliban-internet-crackdown/" }
  ]},
  "031": { name: "Azerbaijan", incidents: [
    { when: "Sep 27 – Nov 2020", start: "2020-09-27", reason: "conflict", scope: "Nationwide restrictions", text: "Internet was heavily restricted during the war with Armenia over Nagorno-Karabakh.", src: "https://en.wikipedia.org/wiki/Second_Nagorno-Karabakh_War" }
  ]},
  "050": { name: "Bangladesh", incidents: [
    { when: "July 18–28, 2024", start: "2024-07-18", reason: "protest", scope: "Nationwide, ~5 days full, ~10 days mobile", text: "Internet was cut as police cracked down on the student quota protests that later toppled Sheikh Hasina.", src: "https://en.wikipedia.org/wiki/2024_Bangladesh_internet_blackouts" },
    { when: "August 5, 2024", start: "2024-08-05", reason: "protest", scope: "Nationwide", text: "Cut again on the day Hasina resigned and fled. Lawmakers have since proposed banning shutdowns.", src: "https://en.wikipedia.org/wiki/2024_Bangladesh_internet_blackouts" }
  ]},
  "116": { name: "Cambodia", incidents: [
    { when: "June 13, 2025", start: "2025-06-13", reason: "conflict", scope: "Links from Thailand", text: "Cambodia cut internet coming in through Thai providers during border tensions with Thailand.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "156": { name: "China", incidents: [
    { when: "Jul 2009 – May 2010", start: "2009-07-05", reason: "protest", scope: "Xinjiang, ~10 months", text: "Xinjiang was cut off for about ten months after unrest in Ürümqi.", src: "https://en.wikipedia.org/wiki/July_2009_%C3%9Cr%C3%BCmqi_riots" }
  ]},
  "356": { name: "India", incidents: [
    { when: "August 2015", start: "2015-08-26", reason: "protest", scope: "Gujarat, ~1 week", text: "Mobile internet was cut across Gujarat during the Patidar reservation protests.", src: "https://www.ibtimes.co.in/gujarat-government-continue-mobile-internet-whatsapp-ban-ahmedabad-till-28-august-report-644491" },
    { when: "Jul – Nov 2016", start: "2016-07-08", reason: "protest", scope: "Kashmir Valley, 133 days", text: "Mobile internet was cut after militant commander Burhan Wani was killed and mass protests followed. Prepaid phones waited until January 2017.", src: "https://internetshutdowns.in/india-shutdowns/643/jammu-and-kashmir-2016/" },
    { when: "Aug 4, 2019 – Feb 5, 2021", start: "2019-08-04", reason: "conflict", scope: "Jammu & Kashmir, 552 days", text: "Internet was cut as the government revoked Kashmir's special status. 4G came back only after 18 months.", src: "https://www.deccanherald.com/india/high-speed-4g-internet-restored-in-all-parts-of-jammu-and-kashmir-after-18-months-947934.html" },
    { when: "December 2019", start: "2019-12", reason: "protest", scope: "Several states", text: "Shutdowns in Assam, Uttar Pradesh, West Bengal and more during protests against the Citizenship Amendment Act.", src: "https://en.wikipedia.org/wiki/Citizenship_Amendment_Act_protests" },
    { when: "May 3 – Dec 3, 2023", start: "2023-05-03", reason: "conflict", scope: "Manipur, ~7 months on and off", text: "Internet was cut as ethnic violence broke out in Manipur.", src: "https://internetshutdowns.in/india-shutdowns/1357/manipur-2023/" },
    { when: "July 20–25, 2026", start: "2026-07-20", reason: "protest", scope: "Central Delhi (1.5 km radius)", text: "Mobile internet was cut five times around Jantar Mantar during protests over leaked NEET exam papers.", src: "https://lawchakra.in/high-court/jantar-mantar-protest-internet-shutdown/" },
    { when: "October 10, 2026", start: "2026-10-10", reason: "protest", scope: "Central Delhi", text: "Cut again ahead of a Jantar Mantar protest. Delhi now has the most shutdowns of anywhere in India this year, and the Supreme Court has ordered unhindered access.", src: "https://www.medianama.com/2026/10/223-supreme-court-internet-shutdown-delhi/" }
  ]},
  "360": { name: "Indonesia", incidents: [
    { when: "Aug – Sep 2019", start: "2019-08-21", reason: "protest", scope: "Papua and West Papua", text: "Internet was cut in Papua during anti-racism protests. A Jakarta court later ruled it unlawful.", src: "https://en.wikipedia.org/wiki/2019_Papua_protests" }
  ]},
  "398": { name: "Kazakhstan", incidents: [
    { when: "December 2011", start: "2011-12-16", reason: "protest", scope: "Zhanaozen", text: "Phone and internet links to Zhanaozen were cut after police shot striking oil workers.", src: "https://rsf.org/en/western-province-cut-government-cracks-down-protests" },
    { when: "January 5–10, 2022", start: "2022-01-05", reason: "protest", scope: "Nationwide, ~5 days", text: "Internet was cut during the protests over fuel prices that turned into deadly unrest.", src: "https://en.wikipedia.org/wiki/2022_Kazakh_unrest" }
  ]},
  "104": { name: "Myanmar", incidents: [
    { when: "Sep 28 – mid-Oct 2007", start: "2007-09-28", reason: "protest", scope: "Nationwide, ~2 weeks", text: "The junta cut the internet during the monk-led Saffron Revolution, after photos of the crackdown leaked out. One of the first shutdowns aimed at stopping protests.", src: "https://opennet.net/node/147" },
    { when: "Jun 2019 – Feb 2021", start: "2019-06-21", reason: "conflict", scope: "Rakhine & Chin states, ~19 months", text: "Mobile internet was cut in conflict areas in one of the world's longest shutdowns.", src: "https://www.ifj.org/media-centre/news/detail/category/press-releases/article/myanmar-a-year-of-internet-shutdowns-in-rakhine-and-chin-state" },
    { when: "February 2021", start: "2021-02-01", reason: "coup", scope: "Nationwide, then nightly", text: "Internet was cut on the day of the military coup, then switched off every night for over two months.", src: "https://ooni.org/post/2021-myanmar-internet-blocks-and-outages/" },
    { when: "2025", start: "2025-12", reason: "conflict", scope: "95 shutdowns", text: "The world's top offender for the second year running, mostly by the military, including during its December 2025 election.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "524": { name: "Nepal", incidents: [
    { when: "February 1–8, 2005", start: "2005-02-01", reason: "coup", scope: "Nationwide internet and phones", text: "King Gyanendra seized full power, declared a state of emergency, and cut the internet, phones and mobile service. The earliest widely documented national internet shutdown.", src: "https://rsf.org/en/king-imposes-state-emergency-and-cuts-communications-outside-world" }
  ]},
  "586": { name: "Pakistan", incidents: [
    { when: "May 9–12, 2023", start: "2023-05-09", reason: "protest", scope: "Nationwide mobile data", text: "Mobile internet was cut after former PM Imran Khan was arrested and protests broke out.", src: "https://en.wikipedia.org/wiki/May_9_riots" },
    { when: "February 8, 2024", start: "2024-02-08", reason: "election", scope: "Nationwide mobile service", text: "Mobile service was suspended on general election day, citing security.", src: "https://en.wikipedia.org/wiki/2024_Pakistani_general_election" },
    { when: "Jun 5, 2026 – ongoing", start: "2026-06-05", reason: "protest", scope: "Pakistan-administered Kashmir, 100+ days", text: "Mobile data and broadband cut after protests for electoral reform. Still restricted past 100 days, with 50+ reported dead.", src: "https://www.aljazeera.com/news/2026/9/15/internet-shutdown-crosses-100-days-in-pakistan-administered-kashmir" },
    { when: "October 12, 2026", start: "2026-10-12", reason: "coup", scope: "Parts of Khyber Pakhtunkhwa", text: "Major disruptions in Peshawar and other cities as the federal government imposed emergency and governor's rule on the province.", src: "https://www.arabnews.pk/pakistan/northwestern-pakistani-province-sees-internet-disruptions-after-president-imposes-emergency-monitor-3003891" }
  ]},
  "762": { name: "Tajikistan", incidents: [
    { when: "Nov 2021 – Mar 2022", start: "2021-11-25", reason: "protest", scope: "Gorno-Badakhshan, ~4 months", text: "Internet was cut in the autonomous Pamir region after protests over a man killed by security forces.", src: "https://www.hrw.org/news/2022/02/07/tajikistan-restore-internet-autonomous-region" }
  ]},
  "860": { name: "Uzbekistan", incidents: [
    { when: "July 2022", start: "2022-07-01", reason: "protest", scope: "Karakalpakstan, ~3 weeks", text: "Internet was cut during protests against plans to strip Karakalpakstan of its autonomy.", src: "https://en.wikipedia.org/wiki/2022_Karakalpak_protests" }
  ]},

  // ---------------- Europe & Eurasia ----------------
  "112": { name: "Belarus", incidents: [
    { when: "August 9–12, 2020", start: "2020-08-09", reason: "election", scope: "Nationwide, ~61 hours", text: "Internet was cut after the disputed election that kept Lukashenko in power, then mobile data was cut every Sunday during protests for months.", src: "https://en.wikipedia.org/wiki/2020%E2%80%932021_Belarusian_protests" }
  ]},
  "643": { name: "Russia", incidents: [
    { when: "October 2018", start: "2018-10-04", reason: "protest", scope: "Ingushetia, ~2 weeks", text: "Mobile internet was cut during protests over a border deal with Chechnya.", src: "https://en.wikipedia.org/wiki/2018%E2%80%932019_Ingushetia_protests" },
    { when: "May 2025 – ongoing", start: "2025-05", reason: "conflict", scope: "Mobile internet in many regions", text: "Regional mobile internet shutdowns became routine, justified as protection against Ukrainian drones. 19 recorded in 2025.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},
  "804": { name: "Ukraine", incidents: [
    { when: "Feb 2022 – ongoing", start: "2025-01", reason: "conflict", scope: "Occupied and frontline areas", text: "Russian forces have cut or rerouted internet in occupied areas and knocked out connectivity with strikes on power and telecom infrastructure.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]},

  // ---------------- Americas ----------------
  "192": { name: "Cuba", incidents: [
    { when: "July 11–14, 2021", start: "2021-07-11", reason: "protest", scope: "Nationwide disruptions", text: "Internet was cut and social media blocked during the largest anti-government protests in decades.", src: "https://en.wikipedia.org/wiki/2021_Cuban_protests" }
  ]},
  "862": { name: "Venezuela", incidents: [
    { when: "February 20–21, 2014", start: "2014-02-20", reason: "protest", scope: "Táchira state, ~36 hours", text: "Internet went dark in Táchira, where the student protest wave began. The state telecom company had already blocked the walkie-talkie app protesters used.", src: "https://advox.globalvoices.org/2014/02/22/blackout-in-venezuela-the-internet-goes-dark-in-tachira-censorship-access/" }
  ]},
  "591": { name: "Panama", incidents: [
    { when: "June 20 – early July 2025", start: "2025-06-20", reason: "protest", scope: "Bocas del Toro province, ~2 weeks", text: "Internet and mobile phones were suspended during protests over pension and social security reforms.", src: "https://www.accessnow.org/wp-content/uploads/2026/03/KeepItOn-Internet-Shutdowns-2025-Annual-Report.pdf" }
  ]}
};
