// Content that is easy to update lives here. Every URL below was either supplied
// directly by Priyanka or already existed in the previous deployed version.

export const careerGraph = {
  title: "CareerGraph",
  status: "Live demo available",
  live: "https://career-graph-ten.vercel.app/",
  github: "https://github.com/PriyankaBagri/CareerGraph",
  chain: ["Career", "Capabilities", "Skills", "Evidence", "Readiness", "Gaps", "Actions"],
  problem:
    "Career advice is usually a list of buzzwords. It rarely shows what a role actually asks for, or how far along you are.",
  users: "Students and early learners deciding what to work on next.",
  helps: [
    "Pick a career, or add your own custom one",
    "See the skills it needs and the evidence that proves them",
    "Check your readiness and find the gaps",
    "Follow a roadmap of actions, with a status for each one per career"
  ],
  idea: "Everything hangs off one chain, from a career down to a concrete action, so each screen has an obvious next step instead of a pile of options.",
  // Real screenshots of the running app. Each one is described only by what it shows.
  // To add another: put the file in public/images/careergraph/ and add an entry here.
  shots: [
    {
      src: "/images/careergraph/dashboard-readiness.png",
      width: 1886, height: 907,
      title: "Dashboard",
      caption: "The dashboard for a chosen target career (Fashion Designer). It shows a career readiness figure of 29%, labelled a rule-based estimate from 7 of 7 rated skills, a suggested next step with the skill gap explained, and roadmap progress.",
      alt: "CareerGraph dashboard with a dark sidebar. Cards show a 29 percent career readiness estimate, a next step to learn the basics of concept development, and a target career of Fashion Designer. A note says the estimate is not a prediction of getting a job."
    },
    {
      src: "/images/careergraph/career-action-graph.png",
      width: 1867, height: 882,
      title: "Career action graph",
      caption: "The career action graph links a career to its capabilities, skills, evidence and ranked next actions, with a Graph and List toggle. No evidence nodes appear because no evidence had been added yet.",
      alt: "CareerGraph career action graph. Nodes run left to right from the Fashion Designer career through capabilities such as Creative Craft and Production, to skills, then to seven numbered next actions. A side panel explains that selecting a node shows its status and evidence."
    },
    {
      src: "/images/careergraph/compare-careers.png",
      width: 1912, height: 902,
      title: "Compare careers",
      caption: "Compare careers puts two career models side by side (here Fashion Designer and Pilot) with their capabilities and expected evidence. A notice flags that the comparison is incomplete because one career has not been assessed.",
      alt: "CareerGraph compare careers page with two dropdowns set to Fashion Designer and Pilot. An amber notice says the comparison is incomplete because Pilot has not been assessed. Below, an overview card lists each career's capabilities and evidence expectations."
    }
  ]
};

export const document2action = {
  title: "Document2Action",
  status: "In progress",
  problem:
    "Notices, circulars and long documents bury the one thing you need to do. People skim, miss a deadline, and find out later.",
  flow: [
    ["Bring a document", "A notice, circular or any text-heavy file."],
    ["AI reads it", "An AI model pulls out what is being asked and by when."],
    ["Get your actions", "A short list of things to do, instead of a wall of text."]
  ],
  note: "This describes the product direction. It is not finished and there is no public demo yet."
};

// Carried over from the previous portfolio. Descriptions kept deliberately modest.
export const earlier = [
  {
    title: "AgriPulse",
    kind: "AI · agriculture",
    text: "An AI-powered advisory experience aimed at making farming guidance easier to reach.",
    github: "https://github.com/PriyankaBagri/agripulse"
  },
  {
    title: "EduBridge",
    kind: "AI · education",
    text: "A concept for a more interactive learning platform. Built with React and TypeScript.",
    github: "https://github.com/PriyankaBagri/edubridge",
    live: "https://edubridge-dusky-phi.vercel.app/"
  }
];

// Only the details Priyanka supplied. Year ranges for schools were not supplied, so none are shown.
export const education = [
  { years: "Classes 1–10", title: "Shatvisha Public School", note: "", current: false },
  { years: "Classes 11–12", title: "Xavier's English School", note: "", current: false },
  { years: "2025 – 2029", title: "B.Tech, Information Technology", note: "Heritage Institute of Technology, Kolkata. Currently in my second year.", current: true }
];

export const achievements = [
  {
    group: "Hackathons",
    note: "Taking part, building under a deadline and learning from other teams. No placements are claimed here.",
    items: [
      { name: "Adobe University Hackathon", date: "Aug 2026" },
      { name: "IEMHACKS 4.0", date: "Aug 2026" },
      { name: "NexBuildOn Hack 2026", date: "Aug 2026" },
      { name: "Logitech Women Who Master Hackathon", date: "" }
    ]
  },
  {
    group: "Competition",
    note: "",
    items: [{ name: "Brain War 2026", detail: "National-level tech quiz, listed on Unstop", date: "Sep 2026" }]
  },
  {
    group: "Certifications",
    note: "Course and skills certificates.",
    items: [
      { name: "HackerRank Problem Solving (Basic)", date: "Jul 2026" },
      { name: "HackerRank Problem Solving (Intermediate)", date: "" },
      { name: "Google certifications", detail: "Completed through Simplilearn", date: "" }
    ]
  }
];

export const skills = [
  { group: "Languages", items: ["C++", "Java", "Python", "JavaScript"] },
  { group: "Frontend", items: ["HTML and CSS", "JavaScript", "React"] },
  { group: "Backend", items: ["Node.js", "Express"] },
  { group: "Databases", items: ["MySQL", "MongoDB"] },
  { group: "Tools", items: ["Git and GitHub", "VS Code"] }
];
