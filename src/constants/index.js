import { people01, people02, revature, facebook, instagram, linkedin, github, send, shield, star, skyview, notecard, shopify, expensereim,jpmc } from "../assets";

export const navLinks = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "/projects",
    title: "Projects",
  },
  {
    link: "/blog",
    title: "Blog",
  },
  {
    link: "/resume",
    title: "Resume",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Integrated Solutions",
    content:
      "Offering a comprehensive suite of services, including website and app development, graphic design, and content creation, all under one roof.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "I take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Collaborative Process",
    content:
      "Engaging clients in a collaborative process throughout the project lifecycle, involving them in design reviews, content creation workshops, and user testing sessions to ensure alignment with their vision and goals.",
  },
];

export const projectss = [
  {
    title: "SkyView – E-commerce Web App (React + Spring Boot + PostgreSQL)",
    description: "Developed full-stack e-commerce site with secure auth, product browsing, and checkout flow.",
    image: skyview,
    link: "https://github.com/Revature-Capstone-1350/e-commerce-frontend"
  },
  {
    title: "Notecard Service API (Java + Spring + AWS + React + TypeScript)",
    description: "Created a scalable note taking service using Java, Spring, AWS, React, TypeScript, HTML, and CSS. Deployed the UI using React and TypeScript, and managed GitHub pull requests.",
    image: notecard,
    link: "https://github.com/jsparks9/notecard-api"
  },
  {
    title: "Expense Reimbursement System (Java + Tomcat + Postman)",
    description: "Built custom servlet-based app for submitting/managing expense requests.",
    image: expensereim,
    link: "https://github.com/220509-web-dev/FoundationProject-Kimani"
  },
  {
    title: "Shopify Freelance Development (2019–2022)",
    description: "Enhanced UX and responsiveness for e-commerce clients by modifying Shopify themes.",
    image: shopify,
    link: "https://shopify.com/"
  }
];

export const blog = [
  {
    title: "Compulsion Games boss: Generative AI usage 'is not mandated' at Xbox",
    date: "May 2, 2025",
    content: "Xbox maker Microsoft has become a vocal proponent of generative AI in recent years, but it seems the company hasn't rolled out a hard mandate across its internal studios. According to the head of Compulsion Games, the studio behind South of Midnight, its parent company has not mandated it make the most of AI tools.",
    link: "https://www.gamedeveloper.com/production/compulsion-games-boss-says-internal-xbox-studios-aren-t-facing-generative-ai-mandate"
  },
  {
    title: "AI Is Already Writing About 30% of Code at Microsoft and Google. Here's What It Means for Software Engineers.",
    date: "APR 30, 2025",
    content: "Big Tech is spending tens of billions of dollars on AI infrastructure in 2025 alone, and now the CEOs of companies like Meta and Microsoft are indicating exactly how they're using the technology.",
    link: "https://www.entrepreneur.com/business-news/ai-is-taking-over-coding-at-microsoft-google-and-meta/490896"
  },
  {
    title: "Air Force Awards Contract for Next Generation Air Dominance (NGAD) Platform, F-47",
    date: "March 21, 2025",
    content: "The Department of the Air Force announced today the contract award for the Engineering and Manufacturing Development (EMD) of the Next Generation Air Dominance (NGAD) Platform, marking a major milestone in the advancement of air superiority. The contract, awarded to Boeing, will lead to the development of the F-47, the world’s first sixth-generation fighter aircraft.",
    link: "https://www.af.mil/News/Article-Display/Article/4131345/air-force-awards-contract-for-next-generation-air-dominance-ngad-platform-f-47/"
  },
  {
    title: "Starbucks: ordering and store locator progressive web app",
    date: "Febuary 23, 2025",
    content: "Using React, GraphQL, and server-side rendering for faster load times, improved SEO, more conversions for orders, and a better user experience",
    link: "https://nearform.com/work/starbucks-progressive-web-app/"
  },
];

export const academicAchievements = [
  {
    title: "Bachelor of Science in Computer Science",
    institution: "Southern New Hampshire University",
    date: "2024 - 2026 (Expected Graduation)",
    description: "Concentration in software engineering."
  }
];

export const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    institution: "AWS",
    date: "2024",
    description: "Completed a the certififed cloud practitioner exam from AWS."
  },
  {
    title: "Java Certification",
    institution: "Sololearn",
    date: "2022",
    description: "Completed an advanced Java course demonstrating theoretical and practical understanding of Java."
  },
  {
    title: "React + Redux",
    institution: "Sololearn",
    date: "2022",
    description: "Completed an advanced Java course demonstrating theoretical and practical understanding of React + Redux."
  },
  {
    title: "Responsive Web Design ",
    institution: "Sololearn",
    date: "2022",
    description: "Completed approximately 300 hours of work demonstrating theoretical and practical understanding of Responsive Web Design."
  },
  {
    title: "JavaScript",
    institution: "Sololearn",
    date: "2022",
    description: "Completed an advanced Java course demonstrating theoretical and practical understanding of JavaScript."
  },
  {
    title: "HTML",
    institution: "Sololearn",
    date: "2017",
    description: "Completed an advanced Java course demonstrating theoretical and practical understanding of HTML."
  },
  {
    title: "CSS",
    institution: "Sololearn",
    date: "2017",
    description: "Completed an advanced Java course demonstrating theoretical and practical understanding of CSS."
  }
];

export const experience = [
  
  {
    title: "Full Stack Software Developer",
    institution: "Revature (Contracted to J. P. Morgan Chase)",
    date: "May 2022 - September 2023",
    description1: "Developed backend API systems using Java Spring, crafting modularized services using an OOP design for scalable architecture. Enabled seamless expansion of new endpoints without service disruption.",
    description2: "Designed and managed PostgreSQL and Oracle databases for high-volume applications. Optimized data retrieval with relational ID-linked tables, boosting performance and UX." ,
    description3: "Collaborated with designers on React interfaces, adding dark mode and accessibility features that raised usability satisfaction by 25% in testing.",
    description4: "Contributed across all phases of the SDLC using Agile. Increased sprint completion rate by 15%, accelerating delivery timelines."
  },
  {
    title: "Full Stack Software Developer",
    institution: "J. P. Morgan Chase",
    date: "August 2022 - May 2024",
    description1: "Spearheaded microservice migration project, designing Java Spring services used as blueprints for legacy system decomposition; enabled smoother AWS cloud migration.",
    description2: "Built automated Selenium testing suite on Kubernetes with Grafana monitoring; increased system uptime to 99%." ,
    description3: "Developed and deployed secure REST APIs with JWT-based authentication for customer account management.",
    description4: "Maintained CI/CD pipelines using Jenkins and Git; improved deployment reliability across teams.",
    description5: "Conducted code reviews and testing (JUnit, Postman) to maintain high-quality, scalable codebase."
  }
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Kimani was hands down one of the SMARTEST PEOPLE ON STAFF. He had everyone, managers, product managers, sr lvl execs, etc. coming to him for help. Kimani was extremely dedicated..Sometimes being on calls at 1am or later to communicate with teams in India and London. He was a quick study. There was seemingly nothing he couldn't figure out. He was the go to for solving unsolvable problems. Any firm would be LUCKY to have him. He is a walking answer.",
    name: "Caleb Stennis",
    title: "Ex-Int. Pro Athlete | Author of 'So You Want to Be A Pro?' | Mainframe DB2 DBA, CSM, AWS |",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "I'm happy to recommend Kimani for any role or project. He consistently demonstrates responsiveness, helpfulness, and a proactive attitude. He excels in getting tasks done efficiently and asking insightful questions, showing a dedication to continuous improvement. Kimani's professionalism and competence make him a valuable asset to any team.",
    name: "Yasin Abdus-Sabur",
    title: "Software Engineer",
    img: people02,
  }
];

export const footerLinks = [
  {
    title: "Quick Links",
    links: [
      {
        name: "Home",
        url: "/",
      },
      {
        name: "Projects",
        url: "/projects",
      },
      {
        name: "Blog",
        url: "/blog",
      },
      {
        name: "Resume",
        url: "/resume",
      },
      {
        name: "Contact",
        url: "/contact",
      },
    ],
  },
  {
    title: "Social Media",
    links: [
      {
        name: "FaceBook",
        url: "https://www.facebook.com/deshawn.muhammad",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/_goal_digger___/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D",
      },
      {
        name: "GitHub",
        url: "https://github.com/m-kimani/",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kimani-muhammad-engineer/",
      },
      {
        name: "YouTube",
        url: "",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "LinkedIn",
        url: "#",
      },
      {
        name: "FaceBook",
        url: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/_goal_digger___/profilecard/?igsh=NTc4MTIwNjQ2YQ%3D%3D",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/deshawn.muhammad",
  },
  {
    id: "social-media-3",
    icon: github,
    link: "https://github.com/m-kimani/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kimani-muhammad-engineer/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: jpmc,
  },
  {
    id: "client-2",
    logo: revature,
  },
];

export const skills = [
  {skill: "Java"},
  {skill: "React"},
  {skill: "AWS"},
  {skill: "JavaScript"},
  {skill: "TypeScript"},
  {skill: "Python"},
  {skill: "Spring Boot"},
  {skill: "Selenium"},
  {skill: "Git"},
  {skill: "SQL"},
  {skill: "Postgres"},
  {skill: "Docker"},
  {skill: "Kubernetes"},
  {skill: "Linux"},
  {skill: "Postman"},
  {skill: "Grafana"},
  {skill: "Splunk"},
  {skill: "JUnit"},
  {skill: "Agile"},
  {skill: "Scrum"}
];