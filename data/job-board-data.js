// Public job board data. Roles surfaced through conference/employer research —
// verify each posting is still live on the employer's own site before applying.
// Refreshed weekly (Fridays) by the conference-lead-tracker skill, which checks each
// networked company's careers page for openings — see data/job-network-data.js for the full network.
const jobBoardData = {
  asOf: "September 11, 2026",
  intro: "Open roles in tech policy, privacy, and AI governance — sourced by tracking companies with a presence at DC conferences and events. Refreshed weekly. Always confirm a posting is still open directly on the employer's site before applying.",
  roles: [
    {
      company: "Hogan Lovells",
      role: "Paralegal — Privacy & Cybersecurity (PaC)",
      location: "Washington, DC",
      link: "https://www.linkedin.com/jobs/view/privacy-cybersecurity-pac-paralegal-at-hogan-lovells-3761363323",
      note: "Non-attorney paralegal role in Hogan Lovells' Privacy & Cybersecurity practice group.",
      barRequired: "not required",
      experience: null,
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Hogan Lovells",
      role: "Junior Compliance Analyst",
      location: "Denver, CO",
      link: "https://hoganlovells.wd3.myworkdayjobs.com/en-US/Search/job/Junior-Compliance-Officer_R257493-1",
      note: "Entry-level AML/client-due-diligence compliance analyst role.",
      barRequired: "not required",
      experience: "Entry level",
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Venable LLP",
      role: "Privacy Program & Policy Analyst",
      location: "Washington, DC (also LA / NY / SF)",
      link: "https://jobbank.mcca.com/jobs?job=15453558",
      note: "Non-attorney analyst role in Venable's Privacy & Data Security practice.",
      barRequired: "not required",
      experience: "~2 years preferred",
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Arnold & Porter",
      role: "Trust & Estates/Tax Case Assistant",
      location: "New York, NY",
      link: "https://www.linkedin.com/jobs/view/trust-estates-tax-case-assistant-at-arnold-porter-3922402373",
      note: "Entry-level, non-attorney case assistant/paralegal role.",
      barRequired: "not required",
      experience: "Entry level",
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Wilson Sonsini",
      role: "Corporate Paralegal",
      location: "Not specified",
      link: "https://careers.wsgr.com/openings/corporate-paralegal-8/",
      note: "Non-attorney paralegal role covering incorporations, financings, and corporate filings.",
      barRequired: "not required",
      experience: null,
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "National Security Institute (Antonin Scalia Law School, GMU)",
      role: "Policy Associate",
      location: "Arlington, VA",
      link: "https://listings.jobs.gmu.edu/jobs/policy-associate-national-security-institute-arlington-va-virginia-united-states",
      note: "Non-attorney research/policy-support role supporting NSI publications and Congressional/Executive engagement.",
      barRequired: "not required",
      experience: "1-2 years",
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Troutman Pepper Locke",
      role: "Legal Data Analyst — Privacy, Cyber & AI",
      location: "Not specified",
      link: "https://troutman.wd5.myworkdayjobs.com/en-US/TPRecruit1/job/Legal-Data-Analyst---Privacy--Cyber---AI_R4071",
      note: "Non-attorney analyst role supporting the Privacy+Cyber and RISE practice groups.",
      barRequired: "not required",
      experience: "2 years",
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "ZG Subpoena Solutions",
      role: "Legal Analyst — Law Enforcement Response",
      location: "Remote (IL, CA, NY, TN, TX, DC, MD, WA listed as eligible work states)",
      link: "https://www.linkedin.com/jobs/view/legal-analyst-law-enforcement-response-at-zg-subpoena-solutions-4428400435",
      note: "Non-attorney compliance/legal-analyst role. Virginia is not listed as an eligible work state — confirm remote eligibility before applying.",
      barRequired: "not required",
      experience: "2+ years",
      workMode: "remote",
      firstSeen: "2026-09-11"
    },
    {
      company: "Filevine",
      role: "Paralegal (in-house legal team)",
      location: "Salt Lake City, UT",
      link: "https://jobs.lever.co/filevine/ba34f952-d53e-4ef2-86cf-381cfe88671f",
      note: "In-house paralegal role at a legal-tech SaaS company, covering compliance/data privacy/contracts work.",
      barRequired: "not required",
      experience: "2+ years paralegal experience",
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Davis Wright Tremaine",
      role: "Paralegal — Privacy & Security",
      location: "Washington, DC",
      link: "https://careers.dwt.com/paralegal-privacy-and-security/job/12374360",
      note: "Non-attorney paralegal role in DWT's Privacy & Security group, supporting PIAs and compliance work product.",
      barRequired: "not required",
      experience: null,
      workMode: null,
      firstSeen: "2026-09-11"
    },
    {
      company: "Ropes & Gray",
      role: "Information Governance Compliance Analyst, DC (JR 2026-9276)",
      location: "Washington, DC",
      link: "https://careers-ropesgray.icims.com/jobs/9276/information-governance-compliance-analyst/job",
      note: "Non-attorney compliance/governance analyst role — no bar admission required.",
      barRequired: "not required",
      experience: "3-5 years",
      workMode: "hybrid",
      firstSeen: "2026-09-01"
    },
    {
      company: "Google",
      role: "Policy Specialist, Data Disclosure",
      location: "Washington, DC",
      link: "https://www.google.com/about/careers/applications/jobs/results/138789152731603654-policy-specialist/",
      note: "2 years of experience preferred, not required. No JD/bar admission required.",
      barRequired: "not required",
      experience: "2 years (preferred)",
      workMode: null,
      firstSeen: "2026-09-01"
    },
    {
      company: "Credo AI",
      role: "AI Governance Advisor",
      location: "Remote (one India-specific opening)",
      link: "https://jobs.ashbyhq.com/credo.ai/6ff04afe-a887-4f47-bcfa-4561b7af98da",
      note: "AI-governance SaaS company; role focuses on delivering AI-governance training and industry engagement.",
      barRequired: "not required",
      experience: null,
      workMode: "remote",
      firstSeen: "2026-09-01"
    }
  ]
};
