// Public job board data. Roles surfaced through conference/employer research —
// verify each posting is still live on the employer's own site before applying.
// Refreshed weekly (Fridays) by the conference-lead-tracker skill, which checks each
// networked company's careers page for openings — see data/job-network-data.js for the full network.
const jobBoardData = {
  asOf: "September 1, 2026",
  intro: "Open roles in tech policy, privacy, and AI governance — sourced by tracking companies with a presence at DC conferences and events. Refreshed weekly. Always confirm a posting is still open directly on the employer's site before applying.",
  roles: [
    {
      company: "Ropes & Gray",
      role: "Information Governance Compliance Analyst, DC (JR 2026-9276)",
      location: "Washington, DC",
      link: "https://careers-ropesgray.icims.com/jobs/9276/information-governance-compliance-analyst/job",
      note: "Non-attorney compliance/governance analyst role — no bar admission required.",
      barRequired: "not required",
      experience: "3-5 years",
      workMode: "hybrid"
    },
    {
      company: "Google",
      role: "Policy Specialist, Data Disclosure",
      location: "Washington, DC",
      link: "https://www.google.com/about/careers/applications/jobs/results/138789152731603654-policy-specialist/",
      note: "2 years of experience preferred, not required. No JD/bar admission required.",
      barRequired: "not required",
      experience: "2 years (preferred)",
      workMode: null
    },
    {
      company: "Credo AI",
      role: "AI Governance Advisor",
      location: "Remote (one India-specific opening)",
      link: "https://jobs.ashbyhq.com/credo.ai/6ff04afe-a887-4f47-bcfa-4561b7af98da",
      note: "AI-governance SaaS company; role focuses on delivering AI-governance training and industry engagement.",
      barRequired: "not required",
      experience: null,
      workMode: "remote"
    }
  ]
};
