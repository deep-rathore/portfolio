export const portfolioData = {
  personal: {
    name: "Gagandeep Singh Rathore",
    shortName: "Deep",
    title: "Full-Stack Developer | MERN • Django • Next.js",
    tagline: "Building real-world web experiences — clean code, bold design.",
    description: "I design and build fast, beautiful web apps — from local Punjab businesses to global freelance clients.",
    location: "Sirhind, Punjab, India",
    email: "gxcodewhisperers@hotmail.com",
    availability: "Available for freelance projects 🟢",
    social: {
      github: "https://github.com/deep-rathore",
      linkedin: "https://linkedin.com/in/deep-rathore",
      fiverr: "#", // Add Fiverr link when available
      upwork: "#"  // Add Upwork link when available
    }
  },
  about: {
    intro: "BCA final year, started freelancing June 2026",
    journey: "From college projects → real client work → global freelancing",
    education: "BCA, University College Chunni Kalan, Punjabi University, Patiala",
    goals: "Canada/Germany migration path, remote senior dev role long-term",
    interests: "Himalayan trekker, investor, AI explorer",
    clients: ["Dr. Navpreet Singh (PhysioDesk)", "Lumière Soaps", "Sidhu Pub-Bar"]
  },
  skills: {
    frontend: ["React", "Next.js 14/15", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "TypeScript (learning)", "Three.js", "GSAP"],
    backend: ["Node.js", "Express.js", "Django 5", "PHP", "REST APIs"],
    database: ["MongoDB", "PostgreSQL", "MySQL"],
    cloud: ["Vercel", "Cloudinary", "Git/GitHub"],
    ai: ["Google Stitch", "Antigravity/Gemini Pro", "Claude AI"],
    tools: ["Postman", "VS Code", "Figma", "Obsidian", "Google Stitch"]
  },
  projects: [
    {
      id: "physioelite",
      title: "PhysioElite (PhysioDesk)",
      description: "Patient Management System for Dr. Navpreet Singh. Features: Appointments, records, role-based access.",
      image: "/images/physio.jpg",
      tags: ["Django", "MongoDB", "React", "REST API"],
      featured: true,
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "sidhu-pub",
      title: "Sidhu Pub-Bar & Restaurant",
      description: "Real client project — menu, reservations, gallery.",
      image: "/images/pub.jpg",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      featured: true,
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "lumiere",
      title: "Lumière Soaps",
      description: "E-commerce site for luxury soap brand. Live on Vercel.",
      image: "/images/soaps.jpg",
      tags: ["HTML", "CSS", "JS", "Vercel"],
      featured: true,
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "eduspark",
      title: "EduSpark",
      description: "Education platform concept.",
      image: "/images/edu.jpg",
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      featured: true,
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "arcviz",
      title: "ArcViz Studio",
      description: "3D visualization concept.",
      image: "/images/arcviz.jpg",
      tags: ["Three.js", "React Three Fiber"],
      featured: false,
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: "zaika",
      title: "Zaika Restaurant",
      description: "Food ordering UI.",
      image: "/images/zaika.jpg",
      tags: ["React", "Tailwind"],
      featured: false,
      demoLink: "#",
      githubLink: "#"
    }
  ],
  services: [
    {
      title: "Full-Stack Web Development",
      description: "Building scalable web apps using MERN and Django stacks.",
      icon: "zap"
    },
    {
      title: "UI/UX Design & Prototyping",
      description: "Crafting modern, intuitive, and premium interfaces.",
      icon: "palette"
    },
    {
      title: "Business Websites",
      description: "Helping local Punjab/Chandigarh businesses go online.",
      icon: "shopping-cart"
    },
    {
      title: "AI Integration",
      description: "LLM-powered features and automated workflows.",
      icon: "bot"
    },
    {
      title: "Performance Optimization",
      description: "Blazing fast deployments and SEO-friendly architectures.",
      icon: "wrench"
    }
  ],
  experience: [
    {
      period: "June 2026 – Present",
      role: "Full-Stack Freelancer",
      company: "Fiverr + Upwork + Local",
      description: "Building web apps for global and local clients."
    },
    {
      period: "2024 – 2026",
      role: "Freelance Web Developer",
      company: "Real Client Projects",
      description: "Delivered PhysioDesk, Lumière Soaps, and Sidhu Pub-Bar."
    },
    {
      period: "2023 – 2026",
      role: "BCA Student",
      company: "University College Chunni Kalan",
      description: "Graduated from Punjabi University, Patiala."
    }
  ],
  stats: {
    projects: 4,
    clients: 3,
    years: 2,
    technologies: 12
  },
  testimonials: [
    {
      name: "Dr. Navpreet Singh",
      role: "Physiotherapist, PhysioDesk",
      text: "Deep delivered an incredible patient management system. It's fast, reliable, and exactly what my clinic needed."
    },
    {
      name: "Founder",
      role: "Lumière Soaps",
      text: "Our e-commerce site looks premium and elegant, matching our luxury brand perfectly. Highly recommend Gagandeep."
    }
  ]
};
