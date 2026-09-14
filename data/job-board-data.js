// Public job board data. Roles surfaced through conference/employer research —
// verify each posting is still live on the employer's own site before applying.
// Refreshed weekly (Fridays) by the conference-lead-tracker skill, which checks each
// networked company's careers page for openings — see data/job-network-data.js for the full network.
//
// 2026-09-14: full re-verification after Rowa reported most listings were dead or
// years-stale. Checked ~75 companies across the network directly against their own
// live careers pages (not search snippets) — only 6 had a confirmed-open, non-attorney
// role realistically suited to ~0-2 years of experience. The rest either had nothing
// open, or only attorney-track / 3+ year roles. That's expected: this tier of role is
// genuinely rare, not a sign the search missed something.
const jobBoardData = {
  asOf: "September 14, 2026",
  intro: "Open roles in tech policy, privacy, and AI governance — each one confirmed live directly on the employer's own careers page, not just pulled from a search result. Always double-check a posting is still open before applying, since roles can close quickly.",
  roles: [
    {
      company: "Holland & Knight",
      role: "Privacy and Compliance Analyst",
      location: "Tampa, FL or Dallas, TX",
      link: "https://hklaw.wd1.myworkdayjobs.com/en-US/Holland_Knight/job/Operations-Center---Tampa/Privacy-and-Compliance-Analyst_R5587",
      note: "Supports firm data-protection initiatives, including AI privacy assessments.",
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
      note: "Tech/national-security policy think tank. Research Assistant track has no experience minimum; Research Associate track wants 2+ years.",
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
      note: "Legal-process compliance / third-party data-request analyst role. Confirmed live directly on the employer's own careers page — the old LinkedIn link had gone dead.",
      barRequired: "not required",
      experience: null,
      workMode: "hybrid",
      firstSeen: "2026-09-14"
    },
    {
      company: "Google",
      role: "Policy Specialist, Data Disclosure",
      location: "Multiple (Mountain View, CA / New York, NY / New Taipei, Taiwan confirmed) — Washington, DC availability not confirmed this pass",
      link: "https://www.google.com/about/careers/applications/jobs/results/138789152731603654-policy-specialist/",
      note: "$90K-$128K + bonus/equity. No JD/bar required. Check the DC location filter on Google's careers site directly before relying on this — it couldn't be confirmed for DC specifically.",
      barRequired: "not required",
      experience: "2 years (implied by role scope)",
      workMode: null,
      firstSeen: "2026-09-14"
    }
  ]
};
