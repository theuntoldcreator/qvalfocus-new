import { 
  type User, 
  type InsertUser, 
  type Job, 
  type InsertJob,
  type Application,
  type InsertApplication,
  type Contact,
  type InsertContact,
  type Newsletter,
  type InsertNewsletter,
  type CaseStudy,
  type InsertCaseStudy
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Jobs
  getJobs(filters?: { location?: string; type?: string; industry?: string; search?: string }): Promise<Job[]>;
  getJob(id: string): Promise<Job | undefined>;
  getJobBySlug(slug: string): Promise<Job | undefined>;
  createJob(job: InsertJob): Promise<Job>;
  getFeaturedJobs(): Promise<Job[]>;

  // Applications
  createApplication(application: InsertApplication): Promise<Application>;
  getApplicationsByJob(jobId: string): Promise<Application[]>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;

  // Newsletter
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
  isEmailSubscribed(email: string): Promise<boolean>;

  // Case Studies
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudy(id: string): Promise<CaseStudy | undefined>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  getFeaturedCaseStudies(): Promise<CaseStudy[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private jobs: Map<string, Job>;
  private applications: Map<string, Application>;
  private contacts: Map<string, Contact>;
  private newsletters: Map<string, Newsletter>;
  private caseStudies: Map<string, CaseStudy>;

  constructor() {
    this.users = new Map();
    this.jobs = new Map();
    this.applications = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.caseStudies = new Map();

    // Seed data
    this.seedData();
  }

  private seedData() {
    // Seed jobs
    const sampleJobs: InsertJob[] = [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        companyLogo: "TC",
        location: "San Francisco, CA",
        type: "full-time",
        level: "senior",
        salary: "$140k - $180k",
        description: "Lead development of next-generation cloud platform using React, Node.js, and AWS. Join a team building solutions for Fortune 500 companies.",
        requirements: "5+ years experience in full-stack development, expertise in React and Node.js, AWS experience preferred",
        responsibilities: "Lead technical architecture decisions, mentor junior developers, collaborate with product team",
        benefits: "Health insurance, 401k matching, unlimited PTO, remote work options",
        skills: ["React", "Node.js", "AWS", "TypeScript", "PostgreSQL"],
        remote: false,
        featured: true,
        industry: "Technology",
        recruiterName: "Sarah Johnson",
        recruiterEmail: "sarah@techcorp.com",
        recruiterPhone: "+1-555-0123"
      },
      {
        title: "Senior Product Manager",
        company: "FinanceInnovate",
        companyLogo: "FI",
        location: "New York, NY",
        type: "contract",
        level: "senior",
        salary: "$130k - $160k",
        description: "Drive product strategy for fintech platform serving 2M+ users. Work with ML engineers to build AI-powered financial insights.",
        requirements: "7+ years product management experience, fintech background, experience with AI/ML products",
        responsibilities: "Define product roadmap, work with engineering teams, analyze user metrics",
        benefits: "Competitive hourly rate, flexible schedule, opportunity for full-time conversion",
        skills: ["Strategy", "FinTech", "AI/ML", "Product Management", "Analytics"],
        remote: false,
        featured: true,
        industry: "Financial Services",
        recruiterName: "Michael Chen",
        recruiterEmail: "michael@financeinnovate.com",
        recruiterPhone: "+1-555-0124"
      },
      {
        title: "Lead Data Scientist",
        company: "HealthSight Analytics",
        companyLogo: "HS",
        location: "Remote",
        type: "full-time",
        level: "senior",
        salary: "$150k - $200k",
        description: "Build predictive models for healthcare outcomes using large-scale medical data. Remote-first role with flexible hours and top-tier benefits.",
        requirements: "PhD in Data Science or related field, 5+ years healthcare experience, expertise in Python and ML",
        responsibilities: "Design ML models, collaborate with medical professionals, lead data science initiatives",
        benefits: "Full remote work, comprehensive health coverage, equity participation",
        skills: ["Python", "Machine Learning", "Healthcare", "Statistics", "TensorFlow"],
        remote: true,
        featured: true,
        industry: "Healthcare",
        recruiterName: "Dr. Emily Rodriguez",
        recruiterEmail: "emily@healthsight.com",
        recruiterPhone: "+1-555-0125"
      }
    ];

    sampleJobs.forEach(job => {
      this.createJob(job);
    });

    // Seed case studies
    const sampleCaseStudies: InsertCaseStudy[] = [
      {
        slug: "fintech-scaling-success",
        title: "Scaling Engineering Team 300% in 8 Months",
        subtitle: "FINTECH TRANSFORMATION",
        industry: "Financial Services",
        client: "Series C Fintech Startup",
        challenge: "A rapidly growing fintech startup needed to scale their engineering team from 15 to 60 engineers across backend, frontend, and data science roles while maintaining high code quality and company culture.",
        solution: "We implemented a comprehensive hiring strategy including technical assessments, culture fit interviews, and a structured onboarding program. Our team worked closely with their engineering leadership to identify key skills and cultural attributes.",
        results: [
          { metric: "Engineers Hired", value: "45" },
          { metric: "Months to Scale", value: "8" },
          { metric: "Retention Rate", value: "95%" },
          { metric: "Time to Productivity", value: "3 weeks" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        featured: true
      },
      {
        slug: "healthcare-digital-platform",
        title: "Digital Health Platform Launch Success",
        subtitle: "HEALTHCARE DIGITAL",
        industry: "Healthcare",
        client: "Digital Therapeutics Company",
        challenge: "A healthcare startup needed specialized talent for their digital therapeutics platform, ensuring HIPAA compliance and FDA approval readiness while building a world-class engineering team.",
        solution: "We assembled a specialized team of healthcare IT professionals with experience in regulated environments, including security specialists, compliance officers, and healthcare software engineers.",
        results: [
          { metric: "Specialists Placed", value: "12" },
          { metric: "Weeks to Team", value: "6" },
          { metric: "Compliance Met", value: "100%" },
          { metric: "FDA Readiness", value: "Achieved" }
        ],
        imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
        featured: true
      }
    ];

    sampleCaseStudies.forEach(caseStudy => {
      const id = randomUUID();
      this.caseStudies.set(id, { 
        ...caseStudy, 
        id, 
        createdAt: new Date(),
        subtitle: caseStudy.subtitle ?? null,
        results: caseStudy.results ?? null,
        imageUrl: caseStudy.imageUrl ?? null,
        featured: caseStudy.featured ?? null,
      });
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Jobs
  async getJobs(filters?: { location?: string; type?: string; industry?: string; search?: string }): Promise<Job[]> {
    let jobs = Array.from(this.jobs.values());

    if (filters) {
      if (filters.location && filters.location !== 'All Locations') {
        jobs = jobs.filter(job => job.location.toLowerCase().includes(filters.location!.toLowerCase()));
      }
      if (filters.type && filters.type !== 'All Types') {
        jobs = jobs.filter(job => job.type === filters.type);
      }
      if (filters.industry) {
        jobs = jobs.filter(job => job.industry === filters.industry);
      }
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        jobs = jobs.filter(job => 
          job.title.toLowerCase().includes(searchLower) ||
          job.company.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower) ||
          job.skills?.some(skill => skill.toLowerCase().includes(searchLower))
        );
      }
    }

    return jobs.sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getJob(id: string): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async getJobBySlug(slug: string): Promise<Job | undefined> {
    return Array.from(this.jobs.values()).find(job => 
      job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === slug
    );
  }

  async createJob(job: InsertJob): Promise<Job> {
    const id = randomUUID();
    const newJob: Job = { 
      ...job, 
      id, 
      createdAt: new Date(), 
      updatedAt: new Date(),
      companyLogo: job.companyLogo ?? null,
      salary: job.salary ?? null,
      benefits: job.benefits ?? null,
      skills: job.skills ?? null,
      remote: job.remote ?? null,
      featured: job.featured ?? null,
      recruiterName: job.recruiterName ?? null,
      recruiterEmail: job.recruiterEmail ?? null,
      recruiterPhone: job.recruiterPhone ?? null,
    };
    this.jobs.set(id, newJob);
    return newJob;
  }

  async getFeaturedJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values())
      .filter(job => job.featured)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime())
      .slice(0, 6);
  }

  // Applications
  async createApplication(application: InsertApplication): Promise<Application> {
    const id = randomUUID();
    const newApplication: Application = { 
      ...application, 
      id, 
      status: "pending",
      createdAt: new Date(),
      phone: application.phone ?? null,
      currentRole: application.currentRole ?? null,
      linkedin: application.linkedin ?? null,
      github: application.github ?? null,
      portfolio: application.portfolio ?? null,
      coverLetter: application.coverLetter ?? null,
      resumeUrl: application.resumeUrl ?? null,
    };
    this.applications.set(id, newApplication);
    return newApplication;
  }

  async getApplicationsByJob(jobId: string): Promise<Application[]> {
    return Array.from(this.applications.values())
      .filter(app => app.jobId === jobId)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  // Contacts
  async createContact(contact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const newContact: Contact = { 
      ...contact, 
      id, 
      status: "new",
      createdAt: new Date(),
      company: contact.company ?? null,
      currentRole: contact.currentRole ?? null,
      experienceLevel: contact.experienceLevel ?? null,
      hiringNeed: contact.hiringNeed ?? null,
      message: contact.message ?? null,
      resumeUrl: contact.resumeUrl ?? null,
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values())
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  // Newsletter
  async subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newNewsletter: Newsletter = { 
      ...newsletter, 
      id, 
      subscribed: true,
      createdAt: new Date() 
    };
    this.newsletters.set(id, newNewsletter);
    return newNewsletter;
  }

  async isEmailSubscribed(email: string): Promise<boolean> {
    return Array.from(this.newsletters.values()).some(
      newsletter => newsletter.email === email && newsletter.subscribed
    );
  }

  // Case Studies
  async getCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values())
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime());
  }

  async getCaseStudy(id: string): Promise<CaseStudy | undefined> {
    return this.caseStudies.get(id);
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    return Array.from(this.caseStudies.values()).find(cs => cs.slug === slug);
  }

  async getFeaturedCaseStudies(): Promise<CaseStudy[]> {
    return Array.from(this.caseStudies.values())
      .filter(cs => cs.featured)
      .sort((a, b) => b.createdAt!.getTime() - a.createdAt!.getTime())
      .slice(0, 4);
  }
}

export const storage = new MemStorage();