// Public job board data. Roles surfaced through conference/employer research —
// verify each posting is still live on the employer's own site before applying.
// Refreshed weekly (Fridays) by the conference-lead-tracker skill, which checks each
// networked company's careers page for openings — see data/job-network-data.js for the full network.
const jobBoardData = {
  asOf: "August 13, 2026",
  intro: "Open roles in tech policy, privacy, and AI governance — surfaced from research into companies Rowa has networked with at DC conferences and events. Refreshed weekly. Always confirm a posting is still open directly on the employer's site before applying.",
  roles: [
    {
      company: "Ropes & Gray",
      role: "Information Governance Compliance Analyst, DC (JR 2026-9276)",
      location: "Washington, DC",
      link: "https://careers-ropesgray.icims.com/jobs/9276/information-governance-compliance-analyst/job",
      note: "Non-attorney compliance/governance analyst role — no bar admission required."
    },
    {
      company: "Venable LLP",
      role: "Privacy Analyst / Privacy Program & Policy Analyst",
      location: "Washington, DC / Los Angeles, CA",
      link: "https://www.linkedin.com/jobs/view/privacy-analyst-at-venable-llp-3369799225",
      note: "Non-attorney, business-professional track on Venable's own privacy team."
    },
    {
      company: "Google",
      role: "Policy Specialist, Policy Enablement and Delivery",
      location: "Washington, DC (per listing)",
      link: "https://www.google.com/about/careers/applications/jobs/results/87479764016603846-policy-specialist-policy-enablement-and-delivery",
      note: "JD/bar admission preferred, not required. Sits on Google's Trust & Safety team scaling generative-AI policy."
    },
    {
      company: "Hogan Lovells",
      role: "Data Privacy Assessor",
      location: "United States",
      link: "https://hoganlovells.wd3.myworkdayjobs.com/en-US/Search/job/Data-Privacy-Assessor_R257239-1",
      note: "A compliance/assessment role rather than an attorney-track position."
    },
    {
      company: "Covington & Burling",
      role: "Information Governance Analyst",
      location: "Washington, DC / Baltimore area",
      link: "https://bebee.com/us/jobs/information-governance-analyst-covington-burling-llp-washington-dc-baltimore-area--theirstack-664285787",
      note: "Business-professional track, not attorney. Confirm it's live on cov.com before applying."
    },
    {
      company: "Credo AI",
      role: "AI Governance Advisor",
      location: "Remote (one India-specific opening)",
      link: "https://jobs.ashbyhq.com/credo.ai/6ff04afe-a887-4f47-bcfa-4561b7af98da",
      note: "AI-governance SaaS company; role focuses on delivering AI-governance training and industry engagement."
    }
  ]
};
