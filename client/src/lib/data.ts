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

export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CTO, InnovateTech",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "QvalFocus transformed our hiring process. They understood our culture and technical needs, delivering candidates who weren't just qualified but genuinely excited about our mission.",
    rating: 5
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Senior Developer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Found my dream role through QvalFocus. Their team took time to understand my career goals and connected me with a company that's been the perfect fit for over two years now.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Aisha Patel",
    role: "VP Engineering, MedTech Corp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    content: "Their consulting team helped us modernize our entire tech stack. The roadmap they created has been our north star for digital transformation over the past 18 months.",
    rating: 5
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

export const caseStudies = [
  {
    id: '1',
    slug: 'tech-giant-cloud-migration',
    title: 'Cloud Migration for a Tech Giant',
    subtitle: 'Modernizing Infrastructure',
    client: 'InnovateCorp',
    industry: 'Technology',
    challenge: 'InnovateCorp was struggling with a legacy on-premise infrastructure that was costly to maintain and slow to scale. They needed to migrate their entire platform to a modern cloud architecture without disrupting their 24/7 operations.',
    solution: 'QvalFocus deployed a team of cloud architects and DevOps engineers who designed and executed a phased migration strategy to AWS. We automated infrastructure provisioning using Terraform and implemented a robust CI/CD pipeline with Kubernetes to ensure seamless deployments.',
    results: [
      { metric: 'Time to Deploy', value: '-80%' },
      { metric: 'Infrastructure Costs', value: '-40%' },
      { metric: 'System Uptime', value: '99.99%' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    slug: 'biotech-validation-acceleration',
    title: 'Accelerating Validation for a Biotech Startup',
    subtitle: 'Ensuring Compliance and Speed',
    client: 'BioGenetics Inc.',
    industry: 'Life Sciences',
    challenge: 'BioGenetics Inc. needed to validate their new manufacturing facility to meet FDA regulations. Their in-house team lacked the specialized expertise to complete the complex validation process on an aggressive timeline.',
    solution: 'QvalFocus provided a team of CQV specialists who developed and executed a comprehensive validation master plan. Our experts managed everything from equipment qualification (IQ/OQ/PQ) to process validation, ensuring full cGMP compliance.',
    results: [
      { metric: 'Validation Timeline', value: '-50%' },
      { metric: 'Audit Findings', value: '0' },
      { metric: 'Time to Market', value: 'Faster' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    createdAt: new Date().toISOString(),
  },
];