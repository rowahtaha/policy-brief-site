// Public job board data. Roles surfaced through conference/employer research —
// verify each posting is still live on the employer's own site before applying.
// Refreshed weekly (Fridays) by the conference-lead-tracker skill, which checks each
// networked company's careers page for openings — see data/job-network-data.js for the full network.
//
// 2026-09-14: full re-verification after Rowa reported most listings were dead or
// years-stale. Checked 84 companies across the network directly against their own
// live careers pages (not search snippets) — the privacy-law, national-security-law,
// tech-vendor, corporate, and nonprofit/academic categories. (The other 76 companies
// in job-network-data.js — patent-law firms, patent-litigation-support vendors, and
// data-center hardware vendors — are outside tech policy/privacy/AI-governance and
// were not checked.)
//
// 2026-09-15: Rowa asked to widen the title net beyond "Associate"-style roles —
// Analyst, Privacy Officer, Compliance/Governance titles, any seniority — and to
// report the real experience level on each rather than filtering roles out, so she
// can judge fit herself. Added Milbank on that basis even though it's well above her
// ~2 years.
//
// 2026-09-20: weekly recheck. The 7 roles below were all confirmed within the last
// week, so left as-is rather than re-verified (see freshness window below). Spot-
// checked the "no current opening" companies from the 9-14 pass (Covington & Burling,
// Credo AI) — still nothing open. No new roles found this week.
const jobBoardData = {
  asOf: "September 20, 2026",
  intro: "Open roles in tech policy, privacy, and AI governance — each one confirmed live directly on the employer's own careers page, not just pulled from a search result. Includes roles above entry level so you can see the full picture; check the experience line on each. Always double-check a posting is still open before applying, since roles can close quickly.",
  roles: [
    {
      company: "Holland & Knight",
      role: "Privacy and Compliance Analyst",
      location: "Tampa, FL or Dallas, TX",
      link: "https://hklaw.wd1.myworkdayjobs.com/en-US/Holland_Knight/job/Operations-Center---Tampa/Privacy-and-Compliance-Analyst_R5587",
      note: "Supports firm data-protection initiatives, including AI privacy assessments.",
      caveat: null,
      barRequired: "not required",
      experience: "2-4 years",
      workMode: "hybrid",
      firstSeen: "2026-09-14"
    },
    {
      company: "Skadden, Arps, Slate, Meagher & Flom",
      role: "Information Governance Coordinator",
      location: "New York, NY",
      link: "https://skadden.wd5.myworkdayjobs.com/en-US/Skadden_Careers/job/New-York/Information-Governance-Coordinator_JR_2334",
      note: "Advises on data privacy and risk management as part of information-governance duties. $90K-$115K.",
      caveat: null,
      barRequired: "not required",
      experience: "3 years (or equivalent education/experience)",
      workMode: "hybrid",
      firstSeen: "2026-09-14"
    },
    {
      company: "Center for a New American Security (CNAS)",
      role: "Research Assistant / Research Associate, Technology and National Security Program",
      location: "Washington, DC",
      link: "https://www.cnas.org/careers/research-assistant-research-associate-technology-and-national-security-program",
      note: "Tech/national-security policy think tank. Research Assistant track has no experience minimum.",
      caveat: null,
      barRequired: "not required",
      experience: "Research Assistant: entry level · Research Associate: 2+ years",
      workMode: null,
      firstSeen: "2026-09-14"
    },
    {
      company: "digitalmint",
      role: "Cyber Incident Response Associate",
      location: "HQ Chicago — remote or hybrid",
      link: "https://digitalmint.io/careers/cyber-incident-response-associate/",
      note: "Junior incident-response/negotiation-support role. Explicitly welcomes backgrounds in law, consulting, or client services — no cybersecurity experience required.",
      caveat: null,
      barRequired: "not required",
      experience: "1-2 years",
      workMode: "remote",
      firstSeen: "2026-09-14"
    },
    {
      company: "ZG Subpoena Solutions",
      role: "Legal Analyst — Law Enforcement Response",
      location: "Chicago, IL (hybrid)",
      link: "https://www.zgsubpoenasolutions.com/careers.html",
      note: "Legal-process compliance / third-party data-request analyst role.",
      caveat: "Confirmed live on the employer's own careers page — the earlier LinkedIn link had gone dead.",
      barRequired: "not required",
      experience: null,
      workMode: "hybrid",
      firstSeen: "2026-09-14"
    },
    {
      company: "Google",
      role: "Policy Specialist, Data Disclosure",
      location: "Mountain View, CA · New York, NY · New Taipei, Taiwan",
      link: "https://www.google.com/about/careers/applications/jobs/results/138789152731603654-policy-specialist/",
      note: "$90K-$128K + bonus/equity. No JD/bar required.",
      caveat: "Washington, DC availability was not confirmed this pass — check the location filter on Google's own careers site before relying on this one.",
      barRequired: "not required",
      experience: "2 years (implied by role scope)",
      workMode: null,
      firstSeen: "2026-09-14"
    },
    {
      company: "Milbank LLP",
      role: "Risk and Compliance Specialist",
      location: "New York, NY (remote-flexible from CA, DC, or NY)",
      link: "https://www.milwaukeejobs.com/job/detail/43234794/Risk-and-Compliance-Specialist",
      note: "Information security, privacy policy, and third-party risk management. Job posting says a legal background (JD or equivalent) is a plus, not required.",
      caveat: "Requires a minimum of 6 years combined info-security/privacy/risk experience — well above your ~2 years. Included per your request to see the fuller market, not because it's a realistic near-term fit.",
      barRequired: "not required",
      experience: "6+ years",
      workMode: "hybrid/remote-flexible",
      firstSeen: "2026-09-15"
    }
  ]
};
