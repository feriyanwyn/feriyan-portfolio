import type {
  ProfileInfo,
  DomainFocus,
  SkillGroup,
  Project,
  ExperienceItem,
  ResearchItem,
  JourneyItem,
  EducationItem,
  CommunityItem,
  CertificationItem
} from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: "Feriyan Eka Nanda",
  status: "Undergraduate Informatics Student at Universitas Gunadarma",
  headline: "Data Entry | Software Developer | AI & Machine Learning",
  location: "Depok, Indonesia",
  shortBio: "Undergraduate Informatics student focused on software development, artificial intelligence, machine learning, data analytics, and cybersecurity.",
  fullBio: "Undergraduate Informatics student at Universitas Gunadarma with experience in software development, data entry, data analysis, artificial intelligence, and cybersecurity. Experienced in developing web applications, REST APIs, database-driven systems, and authentication mechanisms using various programming languages and frameworks. Experienced in data processing, machine learning, classification, regression, and natural language processing. Currently focusing on Artificial Intelligence, Machine Learning, Data Analytics, Software Engineering, and Cybersecurity.",
  socialLinks: {
    github: "https://github.com/feriyanwyn",
    linkedin: "https://linkedin.com/in/feriyan-eka-nanda",
    email: "feriyanekananda@gmail.com",
    portfolio: "https://feriyan-portfolio.vercel.app",
    whatsapp: "+62 821-2449-7842",
    whatsappUrl: "https://wa.me/6282124497842"
  },
  cvUrl: "/CV Feriyan.PDFda_CV.pdf"
};

export const domainFocusData: DomainFocus[] = [
  {
    id: "software-dev",
    title: "Software Development",
    description: "Building web applications, REST APIs, database-driven systems, and authentication mechanisms.",
    iconName: "Code2",
    details: [
      "Full-Stack Web Applications",
      "REST API Development",
      "Database Management",
      "Authentication & Authorization"
    ]
  },
  {
    id: "ai-ml",
    title: "Artificial Intelligence & ML",
    description: "Exploring machine learning, NLP transformers, LLMs, and intelligent data-driven systems.",
    iconName: "BrainCircuit",
    details: [
      "Natural Language Processing (NLP)",
      "Transformer Models (IndoBERT)",
      "Classification & Regression",
      "Large Language Models (LLMs)"
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transforming raw data into insights through preprocessing, EDA, and predictive modeling.",
    iconName: "BarChart3",
    details: [
      "Data Preprocessing & Cleaning",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Predictive Modeling"
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Understanding application security fundamentals, secure coding, and defensive practices.",
    iconName: "ShieldCheck",
    details: [
      "Authentication & Access Control",
      "Secure Web Application Development",
      "Security Awareness & Best Practices",
      "Cybersecurity Fundamentals"
    ]
  }
];

export const skillGroupsData: SkillGroup[] = [
  {
    category: "Programming Languages",
    description: "Languages used across web development, scripting, and system-level programming.",
    skills: ["Python", "JavaScript", "Go", "PHP", "C#"]
  },
  {
    category: "Frontend Development",
    description: "Frameworks and tools for building responsive user interfaces.",
    skills: ["React.js", "HTML5", "CSS3"]
  },
  {
    category: "Backend Development",
    description: "Server-side frameworks for scalable APIs and web applications.",
    skills: ["Node.js", "Express.js", "Laravel", "CodeIgniter"]
  },
  {
    category: "Database & Tools",
    description: "Relational database systems and version control tools.",
    skills: ["PostgreSQL", "MySQL", "Git"]
  },
  {
    category: "AI & Data",
    description: "Technologies for machine learning, NLP, and data science workflows.",
    skills: ["Python", "Scikit-learn", "IndoBERT", "Hugging Face", "Pandas", "NumPy"]
  },
  {
    category: "Game Development",
    description: "Platforms and languages for interactive game creation.",
    skills: ["Unity", "C#", "Roblox Studio", "Lua"]
  }
];

export const projectsData: Project[] = [
  {
    id: "ai-content-assistant",
    title: "AI Content Assistant",
    category: "AI / ML",
    description: "Web-based AI content assistant that provides content recommendations based on current trends and relevance. Uses AI-based analysis to help users identify relevant content ideas for planning and decision-making.",
    technologies: ["Python", "JavaScript", "AI/ML"],
    overview: "A web-based tool that leverages AI analysis to provide content recommendations based on current trends and relevance, helping users plan and make informed content decisions.",
    keyFeatures: [
      "AI-based content trend analysis",
      "Content idea recommendations",
      "Relevance scoring for content planning",
      "Web-based user interface"
    ]
  },
  {
    id: "chicken-detection",
    title: "Chicken Detection and Tracking",
    category: "Computer Vision",
    description: "Computer vision system for detecting and tracking chickens from video or image input. Implements object detection and tracking techniques to monitor chicken movement and maintain object identities.",
    technologies: ["Python", "Computer Vision", "Object Detection"],
    overview: "A computer vision system that detects and tracks chickens across video frames, maintaining individual object identities to monitor movement patterns.",
    keyFeatures: [
      "Real-time chicken detection from video/image input",
      "Multi-object tracking with identity preservation",
      "Movement monitoring and analysis",
      "Object identity maintenance across frames"
    ]
  },
  {
    id: "social-media-hoax",
    title: "Social Media Hoax Detection",
    category: "AI / ML",
    description: "System for detecting potential hoax news distributed through the social media platform X. Applies text processing and machine learning techniques to classify and analyze information shared through social media.",
    technologies: ["Python", "Machine Learning", "NLP", "Text Processing"],
    overview: "A machine learning-powered system that analyzes content shared on social media platform X to identify and classify potential hoax information.",
    keyFeatures: [
      "Hoax detection for social media content",
      "Text preprocessing and feature extraction",
      "Machine learning classification pipeline",
      "Analysis of content from platform X"
    ]
  },
  {
    id: "voting-system",
    title: "Web-Based Voting System",
    category: "Web",
    description: "Web-based voting platform for managing voting processes and user participation. Implements database management, user authentication, voting functionality, and result processing.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
    overview: "A complete web-based voting platform that manages the full voting lifecycle including user authentication, vote casting, and result tabulation.",
    keyFeatures: [
      "User authentication and session management",
      "Secure vote casting and validation",
      "Real-time result processing and display",
      "Database-driven voting record management"
    ]
  },
  {
    id: "unity-adventure-game",
    title: "Unity 3D Adventure Game",
    category: "Game Development",
    description: "3D adventure game developed using Unity with player movement, camera control, animation, and interactive gameplay elements. Implements gameplay mechanics using C# and Unity's built-in physics and animation systems.",
    technologies: ["Unity", "C#", "3D Game Development"],
    overview: "A 3D adventure game built in Unity featuring complete player control systems, camera management, character animations, and interactive environmental elements.",
    keyFeatures: [
      "Player movement and control systems",
      "Third-person camera control",
      "Character animation integration",
      "Unity physics and collision systems",
      "Interactive gameplay elements"
    ]
  },
  {
    id: "roblox-game",
    title: "Roblox Game",
    category: "Game Development",
    description: "Interactive game developed using Roblox Studio and Lua scripting. Implements gameplay mechanics, player interactions, and in-game systems.",
    technologies: ["Roblox Studio", "Lua"],
    overview: "An interactive Roblox game featuring custom gameplay mechanics and player interaction systems built with Lua scripting.",
    keyFeatures: [
      "Custom gameplay mechanics via Lua scripting",
      "Player interaction systems",
      "In-game event handling",
      "Roblox Studio environment design"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "satpol-pp",
    title: "Data Entry Technician",
    organization: "SATPOL PP Jakarta Pusat",
    period: "September 2023 – August 2026",
    type: "Work",
    responsibilities: [
      "Managed and entered administrative data accurately according to operational requirements.",
      "Verified and updated records to maintain data accuracy and consistency.",
      "Organized and maintained data-related documents and administrative records.",
      "Utilized computer applications and digital tools to support daily data management processes."
    ]
  },
  {
    id: "hima-ti",
    title: "Member",
    organization: "Himpunan Mahasiswa Teknik Informatika Gunadarma",
    period: "September 2024 – September 2025",
    type: "Organization",
    responsibilities: [
      "Participated in organizational programs and student activities within the Informatics Student Association.",
      "Collaborated with team members in planning and executing student events.",
      "Supported event coordination and administrative activities."
    ]
  },
  {
    id: "cnc-operator",
    title: "Computer Numerical Control Operator",
    organization: "PT Argatama Multi Agung",
    period: "June 2021 – September 2021",
    type: "Work",
    responsibilities: [
      "Operated CNC machinery according to established work procedures.",
      "Assisted production processes and ensured work was carried out according to technical instructions.",
      "Inspected work results and maintained accuracy throughout production activities.",
      "Followed workplace safety procedures and maintained discipline in an industrial environment."
    ]
  }
];

export const researchData: ResearchItem[] = [
  {
    id: "hoax-detection-research",
    institution: "Gunadarma University",
    level: "Undergraduate Research",
    period: "2025 – Present",
    title: "Implementation of Transformer-Based Indonesian Hoax News Detection Using IndoBERT, Machine Learning, and Large Language Models (LLM)",
    description: [
      "Researching the implementation of Transformer-based models for Indonesian hoax news detection.",
      "Developing a multi-layer detection framework integrating IndoBERT, machine learning classifiers, GPT-3.5 Turbo, and domain credibility analysis.",
      "Processing and analyzing 5,040 Indonesian news articles for factual and hoax classification.",
      "Evaluating SVM, Random Forest, and Naive Bayes models using IndoBERT-based 768-dimensional semantic embeddings."
    ],
    dataset: "5,040 Indonesian news articles",
    evaluationNote: "Linear-kernel SVM achieved 99.80% accuracy and 0.9980 weighted F1-score on the research evaluation dataset.",
    technologies: ["IndoBERT", "SVM", "Random Forest", "Naive Bayes", "GPT-3.5 Turbo", "NLP", "Machine Learning", "Domain Credibility Analysis"]
  }
];

export const journeyData: JourneyItem[] = [
  {
    year: "2020 – 2023",
    title: "SMK PGRI 2 Cibinong",
    roleOrField: "Computer & Network Engineering",
    description: "Studied Computer Networking, Web Technologies, Server Administration, and Hardware Maintenance. Built foundational knowledge in networking and software basics.",
    highlights: ["Computer and Network Engineering program", "Vocational technical education", "Networking and web technology fundamentals"],
    isCurrent: false
  },
  {
    year: "2021",
    title: "CNC Operator Internship",
    roleOrField: "Industrial Experience",
    description: "Hands-on industrial experience as a CNC Operator at PT Argatama Multi Agung, learning production workflows and workplace discipline.",
    highlights: ["Industrial operations experience", "CNC machinery operation", "Production quality assurance"]
  },
  {
    year: "2023 – Present",
    title: "Universitas Gunadarma",
    roleOrField: "Bachelor of Informatics",
    description: "Pursuing a degree in Informatics with focus on software engineering, artificial intelligence, machine learning, database systems, and cybersecurity.",
    highlights: ["GPA: 3.78", "Active in academic technology projects", "AI & ML research focus"],
    isCurrent: true
  },
  {
    year: "2023 – Present",
    title: "Data Entry Technician",
    roleOrField: "SATPOL PP Jakarta Pusat",
    description: "Professionally managing administrative data, verifying records, and maintaining data accuracy using digital tools.",
    highlights: ["Administrative data management", "Record verification and accuracy", "Digital document management"]
  },
  {
    year: "2025 – Present",
    title: "Undergraduate Research",
    roleOrField: "AI / NLP — Hoax Detection",
    description: "Conducting research on Transformer-based Indonesian hoax detection using IndoBERT, machine learning classifiers, GPT-3.5 Turbo, and domain credibility analysis.",
    highlights: ["IndoBERT Transformer research", "5,040 article dataset analysis", "SVM with 99.80% accuracy on evaluation set"],
    isCurrent: true
  }
];

export const educationData: EducationItem[] = [
  {
    institution: "Universitas Gunadarma",
    degree: "Bachelor of Informatics",
    period: "2023 – Present",
    gpa: "3.78",
    location: "Depok, Indonesia",
    details: [
      "Focusing on Software Engineering, Artificial Intelligence, Machine Learning, Database Systems, and Cybersecurity.",
      "Consistently maintaining strong academic performance with a GPA of 3.78.",
      "Actively involved in research, organizational activities, and technology projects."
    ]
  },
  {
    institution: "SMK PGRI 2 Cibinong",
    degree: "Computer and Network Engineering (TKJ)",
    period: "2020 – 2023",
    location: "Bogor, Indonesia",
    details: [
      "Studied Computer Networking, Web Technologies, Server Administration, and Hardware Maintenance.",
      "Developed foundational knowledge in TCP/IP, Linux environments, and software basics.",
      "Completed vocational competency certification in Computer & Network Engineering."
    ]
  }
];

export const communityData: CommunityItem[] = [
  {
    id: "hut-ri-secretary",
    title: "Secretary",
    organization: "HUT RI Celebration Committee",
    period: "2025 & 2026",
    responsibilities: [
      "Managed administrative tasks and event documentation throughout the committee's activities.",
      "Assisted in preparing schedules, coordination materials, and event documentation.",
      "Supported coordination between committee members during event preparation and execution."
    ]
  },
  {
    id: "rekrut-04-docs",
    title: "Documentation Team",
    organization: "Rekrut 04",
    period: "2023 – 2026",
    responsibilities: [
      "Handled photo and video documentation for organizational activities and events.",
      "Organized event documentation for archival and publication purposes.",
      "Participated in organizational activities, community programs, and tournaments."
    ]
  },
  {
    id: "semak-docs",
    title: "Documentation Team",
    organization: "SEMAK (Sedekah Maksimal)",
    period: "2026",
    responsibilities: [
      "Handled photo and video documentation during community activities.",
      "Organized and maintained event documentation for archival and publication purposes.",
      "Supported the documentation needs of the event team throughout the activities."
    ]
  },
  {
    id: "entrepreneur-secretary",
    title: "Secretary",
    organization: "Entrepreneurship Division, Student Association",
    period: "2026",
    responsibilities: [
      "Managed administrative activities and documentation for the Entrepreneurship Division.",
      "Assisted in planning and executing fundraising and business activities.",
      "Coordinated with division members to support organizational programs and activities."
    ]
  }
];

export const certificationsData: CertificationItem[] = [
  {
    title: "Introduction to Financial Literacy",
    issuer: "Dicoding Indonesia",
    year: "2026",
    category: "Education"
  },
  {
    title: "Belajar Dasar AI",
    issuer: "Dicoding Indonesia",
    year: "2026",
    category: "AI & Data"
  },
  {
    title: "Database for Beginner",
    issuer: "Training",
    year: "2025",
    category: "Database"
  },
  {
    title: "Fundamental DBMS",
    issuer: "Training",
    year: "2024",
    category: "Database"
  },
  {
    title: "Web Programming",
    issuer: "Training",
    year: "2024",
    category: "Software"
  },
  {
    title: "Web Programming for Beginner",
    issuer: "Training",
    year: "2024",
    category: "Software"
  },
  {
    title: "Kompetensi Keahlian Teknik Komputer & Jaringan",
    issuer: "Vocational Certification",
    year: "2023",
    category: "Technical"
  },
  {
    title: "Data Entry Operator",
    issuer: "Certification",
    year: "2023",
    category: "Technical"
  },
  {
    title: "English Language Proficiency Test",
    issuer: "Language Assessment",
    year: "2023",
    category: "Language"
  }
];
