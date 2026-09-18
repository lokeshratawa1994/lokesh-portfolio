export const skillsData = [
  'React',
  'Next JS',
  'Typescript',
  'Javascript',
  'Redux',
  'Tailwind',
  'MaterialUI',
  'HTML',
  'CSS',
  'Git',
  'Figma',
];

export const skillsCategories = [
  {
    category: "Core Frontend",
    description: "Component-based architecture, SSR, type safety, responsive web apps",
    skills: [
      { name: "React.js", highlight: true },
      { name: "Next.js (App & Pages)", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "HTML5 & CSS3", highlight: false }
    ]
  },
  {
    category: "State Management",
    description: "Predictable, scalable client state for complex web apps",
    skills: [
      { name: "Redux", highlight: true },
      { name: "Redux Toolkit (RTK)", highlight: true },
      { name: "Zustand", highlight: true },
      { name: "React Context API", highlight: false }
    ]
  },
  {
    category: "UI & Design Systems",
    description: "Production-ready, accessible, modular styling",
    skills: [
      { name: "Tailwind CSS", highlight: true },
      { name: "Material-UI (MUI)", highlight: true },
      { name: "Reusable Components", highlight: true },
      { name: "Cross-Browser Compatibility", highlight: false }
    ]
  },
  {
    category: "APIs & Web3 Integration",
    description: "Seamless backend, third-party, and decentralized connectivity",
    skills: [
      { name: "RESTful APIs", highlight: true },
      { name: "Web3 & Blockchain APIs", highlight: true },
      { name: "Axios HTTP Client", highlight: false },
      { name: "Blockchair API", highlight: false }
    ]
  },
  {
    category: "Workflow & Engineering Tools",
    description: "Version control, package management, agile delivery",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "npm / Yarn", highlight: false },
      { name: "VS Code", highlight: false },
      { name: "Agile / Scrum Methodologies", highlight: false },
      { name: "Code Review & Debugging", highlight: false }
    ]
  },
  {
    category: "AI-Assisted Development",
    description: "Modern productivity & AI tooling integration",
    skills: [
      { name: "Claude", highlight: true },
      { name: "Antigravity", highlight: true },
      { name: "GitHub Copilot", highlight: true }
    ]
  }
];
