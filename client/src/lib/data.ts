export const industries = [
  {
    id: "life-sciences",
    name: "Life Sciences",
    description: "Aseptic Manufacturing, Biologics, Validation",
    slug: "life-sciences"
  },
  {
    id: "information-technology",
    name: "Information Technology", 
    description: "Software, Cloud, Data, Cybersecurity",
    slug: "information-technology"
  }
];

export const industryData: { [key: string]: any } = {
  "life-sciences": {
    title: "Life Sciences",
    expertise: [
      "Aseptic Manufacturing: Contamination control, environmental monitoring, and cleanroom validation.",
      "Biologics/Therapeutics & CAR-T Facilities: Process validation, chain-of-identity compliance.",
      "API/Bulk Manufacturing: cGMP compliance, equipment qualification, and process control.",
      "Analytical & Laboratory Instrumentation: End-to-end validation for QC and R&D labs.",
      "Clinical Research Organizations (CROs): Regulatory compliance, computerized system validation.",
      "Microbiology Testing: Method validation for sterility, bioburden, and endotoxin testing."
    ],
    whyUs: [
      "Domain-driven specialists",
      "Audit-ready compliance culture",
      "Agile deployment models",
      "Long-term strategic partnerships"
    ]
  },
  "information-technology": {
    title: "Information Technology",
    mainDescription: "At QvalFocus, we provide end-to-end IT staffing and project-based solutions to help our clients accelerate digital transformation, enhance operational efficiency, and meet evolving technical demands. Whether you're developing a new platform, enhancing cybersecurity, or modernizing legacy systems, we deliver the skilled teams, tools, and oversight needed to ensure success.",
    expertise: [
      { title: "Software Development", description: "We build robust, scalable, and secure applications tailored to your business needs, ensuring high performance, user-friendly interfaces, and efficient workflows across platforms." },
      { title: "Quality Engineering", description: "Our quality engineers design and implement rigorous testing strategies, automation frameworks, and compliance processes to deliver reliable, defect-free software at scale." },
      { title: "Cloud & DevOps", description: "We help modernize your infrastructure with cloud migration, CI/CD pipelines, and automated deployment solutions, enabling rapid delivery and high availability of your applications." },
      { title: "Data & Analytics", description: "We transform raw data into actionable insights with advanced analytics, business intelligence dashboards, and predictive models to drive smarter, data-driven decisions." },
      { title: "Cybersecurity", description: "We secure your digital assets with end-to-end protection, including threat assessments, compliance audits, vulnerability management, and incident response planning." },
      { title: "Infrastructure", description: "We design, deploy, and manage reliable IT infrastructure, from network architecture to servers and storage, ensuring your systems are robust, scalable, and future-ready." }
    ],
    workforceSolutions: [
      "Contract & Contract-to-Hire",
      "Direct Hire & Executive Search",
      "FSP (Functional Service Provider) Teams",
      "Project-Based Outsourcing"
    ],
    whyUsTitle: "Build your Future Workforce with Qval Focus",
    whyUs: "Qval Focus brings experience in Information Technology staffing and project solutions, combining deep industry expertise with a client-centric approach. Our agile and scalable delivery model allows us to quickly ramp up or scale down teams based on project demands. We prioritize quality through rigorously vetted candidates and outcome-driven execution, ensuring solutions that align with your business goals."
  }
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, InnovateTech",
    avatar: "https://images.unsplash.com/photo-1494790108375-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "QvalFocus transformed our hiring process. They understood our culture and technical needs, delivering candidates who weren't just qualified but genuinely excited about our mission.",
    company: "InnovateTech",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Found my dream role through QvalFocus. Their team took time to understand my career goals and connected me with a company that's been the perfect fit for over two years now.",
    company: "DataStream Co.",
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    role: "VP Engineering, MedTech Corp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Their consulting team helped us modernize our entire tech stack. The roadmap they created has been our north star for digital transformation over the past 18 months.",
    company: "MedTech Corp",
  },
  {
    id: 4,
    name: "David Lee",
    role: "Hiring Manager, QuantumLeap",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "The quality of candidates we received was exceptional. QvalFocus saved us countless hours of sourcing and screening, allowing us to focus on finding the perfect cultural fit.",
    company: "QuantumLeap",
  },
  {
    id: 5,
    name: "Jessica Miller",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "The recruiters at QvalFocus were incredibly supportive throughout the entire interview process. They provided valuable insights and feedback that helped me land my current role.",
    company: "NextGen Solutions",
  }
];

export const kpis = [
  { label: "Successful Placements", value: "2,500+", delay: 0 },
  { label: "Client Satisfaction", value: "95%", delay: 0.5 },
  { label: "Avg. Time to Fill", value: "15 Days", delay: 1 },
  { label: "Fortune 500 Partners", value: "Fortune 500", delay: 1.5 }
];

export const services = [
  {
    id: "staffing-solution",
    title: "Staffing Solution",
    description: "Flexible and scalable staffing services tailored to your organization’s goals, from filling critical roles to building long-term hiring strategies.",
    features: [],
    icon: "👥",
    color: "primary",
    link: "/services/staffing-solution"
  },
  {
    id: "project-solution", 
    title: "Project Solution",
    description: "End-to-end project-based solutions to accelerate delivery, improve efficiency, and meet regulatory or technical demands.",
    features: [],
    icon: "📊",
    color: "accent",
    link: "/services/project-solution"
  }
];

export const companyInfo = {
  name: "QvalFocus",
  tagline: "Driving Operational Excellence Through Deep Domain Expertise.",
  description: "QvalFocus, Inc. is a professional services company delivering innovative solutions in Life Sciences and Information Technology.",
  founded: "2018",
  headquarters: "666 Plainsboro Rd #615, Plainsboro Township, NJ 08536",
  offices: ["Hyderabad, India"],
  email: "info@qvalfocus.com",
  phone: "+1 (609) 701-9988",
  linkedin: "https://linkedin.com/company/qvalfocus",
  twitter: "https://twitter.com/qvalfocus"
};

export const leadership = [
  {
    name: "Alex Chen",
    role: "CEO & Founder",
    bio: "Former McKinsey partner with 15+ years in talent strategy and organizational transformation.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "https://linkedin.com/in/alexchen"
  },
  {
    name: "Maya Patel",
    role: "COO",
    bio: "Ex-Google People Operations leader specializing in scaling high-performance teams.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "https://linkedin.com/in/mayapatel"
  },
  {
    name: "James Wilson",
    role: "CTO",
    bio: "Technology executive with expertise in AI/ML platforms and enterprise software architecture.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    linkedin: "https://linkedin.com/in/jameswilson"
  }
];

export const blogs = [
  {
    id: 'blog-1',
    slug: 'the-future-of-ai-in-staffing',
    title: 'The Future of AI in Staffing: Beyond Automation',
    subtitle: 'How AI is Revolutionizing Talent Acquisition',
    author: 'Dr. Emily White',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    publishDate: '2024-07-15',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    category: 'Artificial Intelligence',
    content: `
      The integration of Artificial Intelligence (AI) into the staffing industry is rapidly moving beyond simple automation. While AI has already streamlined tasks like resume screening and initial candidate outreach, its true potential lies in its ability to enhance human decision-making, predict future talent needs, and create more personalized experiences for both candidates and clients.

      One of the most significant shifts is the move towards predictive analytics. AI algorithms can analyze vast datasets of market trends, talent availability, and historical hiring patterns to forecast future staffing demands. This allows companies to proactively build talent pipelines, rather than reactively searching for candidates when a need arises. This foresight is invaluable in competitive markets, ensuring businesses have the right skills at the right time.

      Furthermore, AI is enabling a more nuanced understanding of candidate fit. Beyond keywords and qualifications, advanced AI can assess soft skills, cultural alignment, and even potential for growth within an organization. This is achieved through analyzing communication patterns, project contributions, and even public professional profiles, providing recruiters with a holistic view of a candidate.

      However, it's crucial to remember that AI is a tool to augment, not replace, human expertise. The human element—empathy, negotiation, and complex problem-solving—remains indispensable. AI handles the heavy lifting of data processing and pattern recognition, freeing up recruiters to focus on building relationships and making strategic decisions. The future of staffing is a collaborative ecosystem where human intuition and AI efficiency work hand-in-hand to achieve unparalleled results.
    `,
    tags: ['AI', 'Staffing', 'Recruitment', 'Future of Work'],
    readTimeMinutes: 5,
    featured: true,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'blog-2',
    slug: 'navigating-life-sciences-compliance',
    title: 'Navigating Life Sciences Compliance: A Guide for Startups',
    subtitle: 'Ensuring Regulatory Adherence from Day One',
    author: 'Dr. John Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    publishDate: '2024-06-28',
    imageUrl: 'https://images.unsplash.com/photo-1554435493-93422e822011?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    category: 'Life Sciences',
    content: `
      For life sciences startups, navigating the complex landscape of regulatory compliance can be daunting. From FDA regulations to cGMP guidelines, adherence is not just a legal requirement but a cornerstone of product quality and patient safety. Establishing a robust compliance framework from day one is critical for long-term success and avoiding costly pitfalls.

      One of the first steps is to understand the specific regulatory pathways applicable to your product. Whether it's a new drug, medical device, or diagnostic tool, each has distinct requirements for development, testing, manufacturing, and post-market surveillance. Engaging with regulatory experts early can help map out these pathways and identify potential challenges.

      Implementing a strong Quality Management System (QMS) is paramount. A QMS provides the organizational structure, procedures, processes, and resources needed to implement quality management. This includes document control, change control, deviation management, CAPA (Corrective and Preventive Actions), and internal audits. Digital QMS solutions can significantly streamline these processes, ensuring traceability and efficiency.

      Finally, fostering a culture of quality throughout the organization is essential. Compliance is not just the responsibility of the quality department; it's a collective effort. Regular training, clear communication of policies, and leadership commitment to quality principles will embed compliance into the company's DNA, paving the way for successful product development and market entry.
    `,
    tags: ['Compliance', 'Life Sciences', 'Startups', 'FDA', 'cGMP'],
    readTimeMinutes: 7,
    featured: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: 'blog-3',
    slug: 'cybersecurity-trends-2024',
    title: 'Cybersecurity Trends 2024: Protecting Your Digital Assets',
    subtitle: 'Key Challenges and Strategies for Businesses',
    author: 'Sarah Lee',
    authorAvatar: 'https://images.unsplash.com/photo-1520813792240-56ff4269802a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150',
    publishDate: '2024-06-10',
    imageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    category: 'Cybersecurity',
    content: `
      The digital threat landscape continues to evolve at an alarming pace, making robust cybersecurity more critical than ever for businesses of all sizes. In 2024, several key trends are shaping how organizations approach their digital defense strategies. Understanding these trends is the first step towards protecting valuable digital assets.

      One prominent trend is the rise of AI-powered cyberattacks. Threat actors are leveraging AI and machine learning to create more sophisticated phishing campaigns, automate malware development, and conduct highly targeted attacks. This necessitates a counter-response: businesses must also adopt AI-driven security solutions that can detect and respond to threats faster than traditional methods.

      Another critical area is supply chain security. As organizations become more interconnected, a vulnerability in one vendor's system can expose an entire network. Businesses are increasingly focusing on vetting their third-party partners' security postures and implementing stricter controls over data sharing across the supply chain.

      Finally, the human element remains the weakest link. Despite technological advancements, social engineering attacks continue to be highly effective. Continuous employee training on cybersecurity best practices, recognizing phishing attempts, and understanding data handling protocols is indispensable. A strong security culture, combined with advanced technology, forms the most resilient defense against modern cyber threats.
    `,
    tags: ['Cybersecurity', 'IT Security', 'Data Protection', 'AI', 'Trends'],
    readTimeMinutes: 6,
    featured: true,
    createdAt: new Date().toISOString(),
  },
];