// Digital Policy Atlas — Africa & Americas
// Compiled from public reporting (law firm client alerts, government/ministry sources, OECD.AI, etc.), August 2026.
// To add a country: append an object with the same keys to the array below.
const atlasData = {
  asOf: "August 29, 2026",
  countries: [
    {
      country: "United States",
      region: "Americas",
      privacy_law: "No comprehensive federal privacy law; sectoral federal laws (COPPA, HIPAA, GLBA) plus a patchwork of state comprehensive privacy laws (California CCPA/CPRA, 2018/2020, is the model).",
      ai_regulation: "No federal AI law; federal proposals (American Privacy Rights Act, Kids Online Safety Act) remain stalled. AI governance is proceeding at the state level — e.g., the Colorado AI Act and California's 2026 AI companion-chatbot disclosure requirements.",
      regulator: "FTC (Section 5); state Attorneys General; California Privacy Protection Agency (CPPA) for California",
      notable_development: "As of May 2026, twenty states have comprehensive consumer privacy laws; California's AI companion-chatbot safety/disclosure law took effect Jan. 1, 2026; FTC has prioritized COPPA enforcement (Epic Games, Microsoft Xbox, Disney, and others, 2024–2026).",
      summary: "No comprehensive federal privacy or AI statute; fragmented state-by-state regulation with FTC/state AG enforcement filling the gap.",
      sources: [
        { title: "U.S. Data Privacy Laws and Regulations in 2026 — Smarsh", url: "https://www.smarsh.com/blog/thought-leadership/data-privacy-laws/" },
        { title: "2026 Compliance Checklist — O'Melveny", url: "https://www.omm.com/insights/alerts-publications/2026-data-security-and-privacy-compliance-checklist-key-us-state-law-updates-ai-rules-coppa-changes-and-global-data-protection-risks/" }
      ]
    },
    {
      country: "Canada",
      region: "Americas",
      privacy_law: "Personal Information Protection and Electronic Documents Act (PIPEDA), 2000 (federal); Quebec's Law 25 (2021) is the most stringent provincial regime.",
      ai_regulation: "No dedicated federal AI law. The Artificial Intelligence and Data Act (AIDA, part of Bill C-27) died on the Order Paper when Parliament was prorogued Jan. 6, 2025, and has not been reintroduced. AI is governed instead through privacy law, a voluntary generative-AI code of conduct, and sector directives.",
      regulator: "Office of the Privacy Commissioner of Canada (OPC); Commission d'accès à l'information (Quebec)",
      notable_development: "Bill C-15 (passed third reading Feb. 26, 2026) amends PIPEDA to add Canada's first federal data-portability right; a Feb. 2026 federal AI strategy consultation flagged safety testing, traceability, and liability as themes for a possible future AI law.",
      summary: "Comprehensive federal privacy law in force, but its dedicated AI statute collapsed in 2025, leaving AI governed by a patchwork while a new framework is debated.",
      sources: [
        { title: "Canada's 2026 privacy priorities — Osler", url: "https://www.osler.com/en/insights/reports/2025-legal-outlook/canadas-2026-privacy-priorities-data-sovereignty-open-banking-and-ai/" },
        { title: "There Is No Canadian AI Act — ComplianceHub.Wiki", url: "https://compliancehub.wiki/canada-ai-regulation-2026-no-ai-act-what-actually-applies/" }
      ]
    },
    {
      country: "Brazil",
      region: "Americas",
      privacy_law: "General Data Protection Law (LGPD), 2018.",
      ai_regulation: "No enacted dedicated AI law; a comprehensive AI Bill (PL 2338/2023) passed the Senate Dec. 10, 2024 and remains under review in the Chamber of Deputies. LGPD Art. 20 (right to review of automated decisions) governs AI-driven processing meanwhile.",
      regulator: "Autoridade Nacional de Proteção de Dados (ANPD)",
      notable_development: "Provisional Measure 1.317/2025 made the ANPD an independent regulatory agency with power to order a business to cease operations; new children's-data Law 15.211/2025 (in force March 2026) imposes fresh obligations on platforms and AI systems reaching minors.",
      summary: "Mature, GDPR-style privacy law with an increasingly powerful regulator; dedicated AI legislation is advanced but still pending enactment.",
      sources: [
        { title: "Brazil's New Data Protection Roadmap — INPLP", url: "https://inplp.com/latest-news/article/brazils-new-data-protection-roadmap-a-closer-look-at-the-anpds-2025-2026-regulatory-agenda-and-its-global-relevance/" },
        { title: "Brazil AI Regulation: Bill 2338, ANPD, Current Status (2026)", url: "https://nathalycalixto.com/brazil-ai-regulation-complete-analysis-2026/" }
      ]
    },
    {
      country: "Mexico",
      region: "Americas",
      privacy_law: "Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP), reformed March 2025, plus a new public-sector law (LFPDPPSO).",
      ai_regulation: "No enacted dedicated AI law; a proposed Federal AI Law would create a risk-based framework and a National Commission for Artificial Intelligence (CONAIA), under Senate discussion with approval expected sometime in 2026.",
      regulator: "Formerly INAI (dissolved 2025); enforcement is now centralized under the Ministry of Anti-Corruption and Good Governance (SABG)",
      notable_development: "On March 20, 2025, Mexico dissolved the autonomous INAI and transferred data-protection enforcement to the executive-branch SABG — criticized by privacy advocates as reducing regulatory independence; the reformed law also codifies a right to object to AI-driven decisions in hiring and credit.",
      summary: "Recently overhauled privacy framework moved enforcement from an independent watchdog into a government ministry, even as a dedicated AI law awaits passage.",
      sources: [
        { title: "Data Protection & Privacy 2026: Mexico — Chambers and Partners", url: "https://practiceguides.chambers.com/practice-guides/data-protection-privacy-2026/mexico/trends-and-developments" },
        { title: "AI Regulation in Mexico — Adner Valle", url: "https://www.adnervalle.com/en/mexico-ai-global-scenario" }
      ]
    },
    {
      country: "Argentina",
      region: "Americas",
      privacy_law: "Personal Data Protection Law, Law No. 25,326 (2000).",
      ai_regulation: "No dedicated AI law in force. Several AI bills are pending (e.g., transparency/AI-registry Bill 4243-D-2025), alongside bills to fully replace Law 25,326 (including Bill 1751-D-2026, introduced April 2026); none enacted as of mid-2026.",
      regulator: "Agencia de Acceso a la Información Pública (AAIP)",
      notable_development: "AAIP Resolution 161/2023 established a 'Program for Transparency and Personal Data Protection in the Use of AI,' including a planned AI Observatory; AAIP is positioned as the likely lead authority under a future national AI framework still in Congress.",
      summary: "One of Latin America's oldest comprehensive privacy laws is now dated for the AI era; reform and dedicated AI legislation are both pending but not yet enacted.",
      sources: [
        { title: "Why Argentina's Pioneering Privacy Law Is Now Playing Defense Against AI — JURIST", url: "https://www.jurist.org/commentary/2025/12/why-argentinas-pioneering-privacy-law-is-now-playing-defense-against-ai/" },
        { title: "New Bills for a Data Protection Law in Argentina — Lexology", url: "https://www.lexology.com/library/detail.aspx?g=d696be0e-4476-4c8c-83f9-6360dd701d70" }
      ]
    },
    {
      country: "Colombia",
      region: "Americas",
      privacy_law: "Statutory Law 1581 of 2012 (Habeas Data), implementing the constitutional habeas data right.",
      ai_regulation: "No dedicated AI statute; the Superintendence of Industry and Commerce (SIC) issued Circular 002 of 2024, binding guidance requiring AI privacy impact assessments before AI-based personal data collection. Two modernization bills (214/2025, 274/2025) were consolidated and approved by a House committee in late Oct. 2025.",
      regulator: "Superintendencia de Industria y Comercio (SIC)",
      notable_development: "In 2025 the SIC fined an e-commerce company roughly USD 214 million for making facial recognition mandatory for account access — among the most vigorous DPA enforcement actions in Latin America.",
      summary: "Longstanding habeas data framework with an unusually active enforcer; GDPR-style modernization and AI-specific guidance are underway but not yet fully codified.",
      sources: [
        { title: "Colombia Data Protection Law: Compliance Guide — Secure Privacy", url: "https://secureprivacy.ai/blog/colombia-data-protection-law" },
        { title: "Development of Data Protection Regulation in Colombia — ACC", url: "https://www.acc.com/resource-library/development-data-protection-regulation-colombia" }
      ]
    },
    {
      country: "Nigeria",
      region: "Africa",
      privacy_law: "Nigeria Data Protection Act (NDPA), 2023.",
      ai_regulation: "No dedicated AI law; NDPA provisions (impact assessments, right to object to automated decisions) govern AI use. A National AI Strategy was expected to be finalized late 2025/early 2026. The General Application and Implementation Directive (GAID) 2025 took effect Sept. 19, 2025.",
      regulator: "Nigeria Data Protection Commission (NDPC)",
      notable_development: "In Feb. 2025 the NDPC fined Meta Platforms USD 32.8 million with eight corrective orders for NDPA violations (behavioral advertising without consent, unlawful cross-border transfers); it also fined MultiChoice Nigeria and opened investigations into TikTok and Truecaller.",
      summary: "Young but assertively enforced data protection law, with a well-resourced regulator fining Big Tech directly while a dedicated AI framework is still in development.",
      sources: [
        { title: "Nigeria Data Protection Law: NDPA Compliance Guide 2025 — Secure Privacy", url: "https://secureprivacy.ai/blog/nigeria-data-protection-law" },
        { title: "AI Regulation in Nigeria 2025 — Nemko Digital", url: "https://digital.nemko.com/regulations/ai-regulation-in-nigeria" }
      ]
    },
    {
      country: "Kenya",
      region: "Africa",
      privacy_law: "Data Protection Act, 2019.",
      ai_regulation: "No AI-specific law yet in force; the Kenya National AI Strategy 2025-2030 (launched March 27, 2025) sets out a gradual path toward standalone AI legislation, and a Data Protection (Amendment) Bill 2025 proposes new AI-related obligations.",
      regulator: "Office of the Data Protection Commissioner (ODPC)",
      notable_development: "In 2025 the ODPC determined 96 complaints — nearly double the prior year — with penalties up to KES 5 million or 1% of annual turnover, moving from awareness-building into structured audits and compensation orders.",
      summary: "GDPR-modeled privacy law with a regulator now shifting decisively into active enforcement, alongside a phased national AI strategy expected to graduate into dedicated legislation.",
      sources: [
        { title: "Kenya's AI Strategy 2025-2030 — Lexology", url: "https://www.lexology.com/library/detail.aspx?g=e0e6ec12-e4a5-4f38-b5aa-9db706d53bb7" },
        { title: "Kenya's Data Protection Enforcement Turn — Global Law Experts", url: "https://globallawexperts.com/kenyas-dataprotection-enforcement-turn-2026-audits/" }
      ]
    },
    {
      country: "South Africa",
      region: "Africa",
      privacy_law: "Protection of Personal Information Act (POPIA), 2013 (fully in force since 2021).",
      ai_regulation: "No dedicated AI Act; a Draft National AI Policy opened for public comment April 10, 2026, adopting a sector-specific model under which existing regulators retain jurisdiction over AI, with finalization expected by end of 2026.",
      regulator: "Information Regulator (South Africa)",
      notable_development: "Data breach reporting surged 60% in April–September 2025 (1,607 breaches reported) versus 2024; the Information Regulator launched a mandatory security-compromise reporting tool on April 1, 2025.",
      summary: "Comprehensive, GDPR-style privacy law with a regulator focused on breach-reporting enforcement; AI governance is being built as a sector-specific policy layered on top rather than a standalone statute.",
      sources: [
        { title: "South Africa's Data, AI and Cybersecurity Shift — Werksmans Attorneys", url: "https://werksmans.com/code-red-to-code-regulated-south-africas-data-ai-and-cybersecurity-shift-in-2025-and-whats-to-come-in-2026/" },
        { title: "Draft South Africa National AI Policy 2026 — Wikipedia", url: "https://en.wikipedia.org/wiki/Draft_South_Africa_National_Artificial_Intelligence_(AI)_Policy_2026" }
      ]
    },
    {
      country: "Ghana",
      region: "Africa",
      privacy_law: "Data Protection Act, 2012 (Act 843).",
      ai_regulation: "No dedicated AI law yet. Ghana launched its National AI Strategy 2025-2035 on April 24, 2026, and announced a forthcoming Emerging Technologies Bill to regulate AI, blockchain, and robotics — currently without enforcement teeth absent implementing legislation.",
      regulator: "Data Protection Commission (DPC)",
      notable_development: "A Data Protection Bill 2025 to replace Act 843 has been drafted and publicly consulted; the DPC also launched a voluntary 'Privacy Seal' program in December 2025 factoring into 2026 compliance monitoring.",
      summary: "Established but aging data protection law now being modernized, paired with a newly launched national AI strategy that still lacks binding legislative teeth.",
      sources: [
        { title: "Analysis of Ghana's Data Protection Bill 2025 — Sustineri Attorneys", url: "https://sustineriattorneys.com/2026/04/01/comparative-analysis-of-ghanas-data-protection-bill-2025-and-the-data-protection-act-2012-act-843-changes-and-additions/" },
        { title: "Ghana Launches National AI Strategy — Ministry of Communication, Digital Technology and Innovations", url: "https://moc.gov.gh/2026/04/24/ghana-launches-national-ai-strategy-to-drive-digital-transformation-and-economic-growth/" }
      ]
    },
    {
      country: "Egypt",
      region: "Africa",
      privacy_law: "Personal Data Protection Law No. 151 of 2020 (PDPL).",
      ai_regulation: "No enacted dedicated AI law; Egypt is drafting AI and Data Exchange Regulations building on the voluntary Egyptian Charter for Responsible AI (2023). The National AI Strategy, Second Edition (2025-2030), unveiled Jan. 2025, includes a governance pillar prioritizing a future AI Law.",
      regulator: "Personal Data Protection Centre (PDPC)",
      notable_development: "The PDPL's Executive Regulations were finally issued Nov. 1, 2025 — five years after the law took force — formally establishing the PDPC and starting a one-year implementation/licensing grace period to Oct. 31, 2026. No public enforcement actions had been issued as of mid-2026, pending the end of that grace period.",
      summary: "Long-dormant privacy law only became operational in late 2025 with new executive regulations; active enforcement and a dedicated AI law are both still on the near-term horizon.",
      sources: [
        { title: "Egypt's PDPL — the compliance countdown has begun — Kennedys Law", url: "https://www.kennedyslaw.com/en/thought-leadership/article/2026/egypt-s-personal-data-protection-law-the-compliance-countdown-has-begun/" },
        { title: "Egypt: Important Data Protection Update — Baker McKenzie", url: "https://www.bakermckenzie.com/en/insight/publications/2026/01/egypt-important-data-protection-update" }
      ]
    },
    {
      country: "Rwanda",
      region: "Africa",
      privacy_law: "Law No. 058/2021 Relating to the Protection of Personal Data and Privacy (2021).",
      ai_regulation: "No binding AI-specific law; Rwanda's National AI Policy, approved by Cabinet April 20, 2023, made it the first African country with a dedicated national AI policy, built around six pillars including ethical governance.",
      regulator: "National Cyber Security Authority (NCSA)",
      notable_development: "Rwanda established a new National AI Agency to implement the 2023 policy, reportedly the first standalone national AI institution in Africa; the NCSA's Data Protection Office continues to require controller/processor registration under the 2021 law.",
      summary: "Modern, GDPR-influenced data protection law paired with Africa's first dedicated national AI policy and a standalone implementation agency, though binding AI legislation has not yet been enacted.",
      sources: [
        { title: "Cabinet of Rwanda approves National AI Policy — The Future Society", url: "https://thefuturesociety.org/cabinet-of-rwanda-approves-national-ai-policy/" },
        { title: "Overview of Rwanda's Data Protection Law — Securiti", url: "https://securiti.ai/rwanda-data-protection-law/" }
      ]
    }
  ]
};
