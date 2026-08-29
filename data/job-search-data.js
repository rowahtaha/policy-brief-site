// Data snapshot pulled from Rowa's trackers (jobs_tracker_*.xlsx, rowa_networking_tracker.xlsx).
// To refresh: re-export the trackers to CSV and update the numbers/entries below, then update `asOf`.
const jobSearchData = {
  asOf: "August 11, 2026",
  stats: [
    { num: "75", label: "Companies Researched" },
    { num: "1", label: "Applications Submitted" },
    { num: "5", label: "Strong-Fit Roles Identified" },
    { num: "214", label: "Conference Contacts Mapped" },
    { num: "12", label: "Networking Events on the Calendar" }
  ],
  highlights: [
    {
      company: "Venable LLP",
      role: "Privacy Analyst / Privacy Program & Policy Analyst",
      note: "Non-attorney, business-professional track — matches directly on subject matter (privacy program & policy).",
      status: "good"
    },
    {
      company: "Google",
      role: "Policy Specialist, Policy Enablement and Delivery",
      note: "Confirmed via the posting: JD/bar admission preferred, not required. 5 years policy/legal/tech experience fits.",
      status: "good"
    },
    {
      company: "Hogan Lovells",
      role: "Data Privacy Assessor",
      note: "Live posting; appears to be a compliance/assessment role rather than an attorney-track position — confirming requirements.",
      status: "watch"
    },
    {
      company: "Covington & Burling",
      role: "Information Governance Analyst",
      note: "Strong subject-matter fit (leading DC AI governance practice); role found via aggregator, confirming it's live on Covington's own site.",
      status: "watch"
    },
    {
      company: "Credo AI",
      role: "AI Governance Advisor",
      note: "AI-governance SaaS company — exact subject-matter niche; confirming role requirements directly.",
      status: "watch"
    }
  ],
  events: [
    { date: "Aug 18, 2026", name: "DC Metro KnowledgeNet Meeting", host: "IAPP — Privacy / AI Governance" },
    { date: "Sept 24, 2026", name: "AR/VR Policy Conference", host: "ITIF + XR Association" },
    { date: "Oct 27–31, 2026", name: "AIPLA 2026 Annual Meeting", host: "AIPLA — IP / AI" },
    { date: "Nov 12, 2026", name: "Tech Prom", host: "Center for Democracy & Technology" },
    { date: "Mar 21–24, 2027", name: "IAPP Global Privacy Summit", host: "IAPP — Privacy / AI Governance" }
  ],
  focus: "This round of research focused on mapping conference sponsor companies from the Privacy + Security Forum and the ABA National Security Law conference against live career pages, and narrowing 75 researched companies down to a short list of genuinely strong-fit, non-attorney-track roles in privacy and AI governance."
};
