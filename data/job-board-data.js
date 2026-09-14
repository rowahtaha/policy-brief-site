// Public job board data. Roles surfaced through conference/employer research —
// verify each posting is still live on the employer's own site before applying.
// Refreshed weekly (Fridays) by the conference-lead-tracker skill, which checks each
// networked company's careers page for openings — see data/job-network-data.js for the full network.
//
// 2026-09-14: cleared after Rowa reported most listings were dead or years-stale.
// Re-verifying every company in job-network-data.js against its live careers page
// before repopulating with confirmed-open, entry-level-friendly roles.
const jobBoardData = {
  asOf: "September 14, 2026",
  intro: "This list is being re-verified — several postings had gone stale or dead. Fresh, confirmed-live roles are coming shortly. In the meantime, browse the company directory below.",
  roles: []
};
