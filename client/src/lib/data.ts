import {
  LayoutDashboard,
  Users,
  Briefcase,
  FileText,
  Settings,
  MessageSquare,
  LifeBuoy,
  Newspaper,
  Info,
  Contact,
  Building,
  Landmark,
  Plane,
  GraduationCap,
  Computer,
  Palette,
} from "lucide-react";

export const pagesLinks = [
  {
    title: "Blog",
    link: "/blog",
    description: "Read our latest articles and insights.",
  },
  {
    title: "Jobs",
    link: "/jobs",
    description: "Find your next career opportunity.",
  },
  {
    title: "Contact Us",
    link: "/contact",
    description: "Get in touch with our team.",
  },
  {
    title: "About Us",
    link: "/about",
    description: "Learn more about our company.",
  },
  {
    title: "Services",
    link: "/services",
    description: "Explore our recruitment services.",
  },
];

export const recruitmentDropdownServices = [
  {
    title: "Staffing Solution",
    link: "/services/staffing-solution",
    image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/service-1.jpg",
  },
  {
    title: "Executive Search",
    link: "/services/executive-search",
    image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/service-2.jpg",
  },
  {
    title: "Project-Based Hiring",
    link: "/services/project-based-hiring",
    image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/service-3.jpg",
  },
];

export const sectorsData = [
  {
    icon: Briefcase,
    title: "HR, Sales & Marketing",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Operation Managers", "Sales Representatives", "Accountants & Trainers"],
  },
  {
    icon: Building,
    title: "Construction & Design",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Architects", "Project Managers", "Electrical & Mechanical Engineers"],
  },
  {
    icon: Landmark,
    title: "Govt. & Foreign Affairs",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Diplomatic Agents", "Political Consultants", "Bureaucrats & Policy Analysts"],
  },
  {
    icon: Plane,
    title: "Transport & Logistics",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Executives & Misc. Staff", "Customer Service Officers", "Transportation & Freight Managers"],
  },
  {
    icon: GraduationCap,
    title: "Education & Planning",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Teachers & Clerks", "Educational Publishers", "Principals & Administrators"],
  },
  {
    icon: Computer,
    title: "Computer & IT Sector",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Data Scientists", "Cybersecurity Engineers", "Animators, Designers & Programmers"],
  },
];

export const whyChooseUsData = [
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/discover-talent.png",
        title: "Discover The Right Talent",
        description: "Leo ect neque dui. Nunc sed vitae sed tristique nisal dolor tellus aretra. Pretium tellus vestibulum orci ipsum.",
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/award-winning.png",
        title: "Award-Winning Agency",
        description: "Leo ect neque dui. Nunc sed vitae sed tristique nisal dolor tellus aretra. Pretium tellus vestibulum orci ipsum.",
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/recruitment-plans.png",
        title: "Special Recruitment Plans",
        description: "Leo ect neque dui. Nunc sed vitae sed tristique nisal dolor tellus aretra. Pretium tellus vestibulum orci ipsum.",
    }
];

export const newsData = [
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/news-1.jpg",
        date: { day: "20", month: "Nov" },
        category: "Case Study",
        title: "Why Soft Skills Are Key To Career Growth In Today's Market",
        link: "/blog/soft-skills-key-to-career-growth",
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/news-2.jpg",
        category: "Recruitment",
        title: "How Recruitment Agencies Can Help Startups Build Teams",
        author: "Atif",
        readTime: "3.5 min",
        dark: true,
        link: "/blog/how-recruitment-agencies-help-startups",
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/news-3.jpg",
        date: { day: "19", month: "Nov" },
        category: "Talent Strategies",
        title: "Get Recruiter's Insider Tips For Crafting The Perfect Resume",
        link: "/blog/recruiter-insider-tips-for-resume",
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/news-4.jpg",
        category: "Talent Strategies",
        title: "The Future Of Recruitment: Trends To Watch By Job Seekers",
        author: "Atif",
        readTime: "3.5 min",
        dark: true,
        link: "/blog/future-of-recruitment-trends",
        bgColor: "bg-green-800"
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/news-5.jpg",
        date: { day: "20", month: "Nov" },
        category: "For Employers",
        title: "Your Perfect Guide To Navigate Salary Negotiations",
        author: "Atif",
        readTime: "3.5 min",
        link: "/blog/guide-to-salary-negotiations",
    },
    {
        image: "https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/news-6.jpg",
        category: "For Employers",
        title: "Attracting The Top Talent: Strategies For Hiring Executives",
        author: "Atif",
        readTime: "3.5 min",
        dark: true,
        link: "/blog/attracting-top-talent-strategies",
    },
];

export const companyInfo = {
  name: "RecruitPro",
  address: "123 Talent Avenue, Suite 456, Innovation City, 78910",
  phone: "+1 (555) 123-4567",
  email: "contact@recruitpro.com",
  socials: {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
};

export const services = recruitmentDropdownServices;

export const industries = [
    { id: 'hr-sales-marketing', slug: 'hr-sales-marketing', name: 'HR, Sales & Marketing', description: 'Specialized recruitment for HR, sales, and marketing professionals.', icon: 'Briefcase', imageUrl: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-hr.jpg', initialImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-hr.jpg', hoverImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-hr-hover.jpg' },
    { id: 'construction-design', slug: 'construction-design', name: 'Construction & Design', description: 'Connecting talent with construction and design firms.', icon: 'Building', imageUrl: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-construction.jpg', initialImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-construction.jpg', hoverImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-construction-hover.jpg' },
    { id: 'govt-foreign-affairs', slug: 'govt-foreign-affairs', name: 'Govt. & Foreign Affairs', description: 'Recruiting for government and foreign affairs positions.', icon: 'Landmark', imageUrl: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-gov.jpg', initialImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-gov.jpg', hoverImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-gov-hover.jpg' },
    { id: 'transport-logistics', slug: 'transport-logistics', name: 'Transport & Logistics', description: 'Fulfilling roles in the transport and logistics sector.', icon: 'Plane', imageUrl: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-transport.jpg', initialImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-transport.jpg', hoverImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-transport-hover.jpg' },
    { id: 'education-planning', slug: 'education-planning', name: 'Education & Planning', description: 'Staffing solutions for the education sector.', icon: 'GraduationCap', imageUrl: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-education.jpg', initialImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-education.jpg', hoverImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-education-hover.jpg' },
    { id: 'computer-it', slug: 'computer-it', name: 'Computer & IT Sector', description: 'Sourcing top talent for the IT and computer industry.', icon: 'Computer', imageUrl: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-it.jpg', initialImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-it.jpg', hoverImage: 'https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/industry-it-hover.jpg' },
];

export const industryData = industries.reduce((acc, industry) => {
    acc[industry.slug] = {
        ...industry,
        details: `Detailed information about the ${industry.name} sector. We provide top-tier recruitment services to find the best candidates for roles in this industry. Our expertise covers a wide range of positions, ensuring we can meet your specific hiring needs.`,
        relatedJobs: [
            { title: `Lead ${industry.name} Specialist`, link: '/jobs/1' },
            { title: `Junior Associate in ${industry.name}`, link: '/jobs/2' },
        ]
    };
    return acc;
}, {} as Record<string, any>);


export const blogs = newsData.map(news => ({
    ...news,
    id: news.link.split('/').pop() || '',
    slug: news.link.split('/').pop() || '',
    content: `This is the full content for the blog post titled "${news.title}".`,
    publishDate: new Date().toISOString(),
    status: 'published' as 'published' | 'draft',
    readTimeMinutes: 3,
    tags: ['recruitment', 'career'],
    featured: false,
    subtitle: `A subtitle for ${news.title}`,
    authorAvatar: 'https://randomuser.me/api/portraits/men/5.jpg',
    imageUrl: news.image,
    createdAt: new Date().toISOString(),
}));

export const testimonials = [
    {
        id: '1',
        name: 'John Doe',
        role: 'CEO, TechCorp',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        testimonial: 'This recruitment agency is the best! They found us the perfect candidate in just a week.'
    },
    {
        id: '2',
        name: 'Jane Smith',
        role: 'HR Manager, Innovate Ltd.',
        avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
        testimonial: 'A seamless and professional experience. Highly recommended for any company looking to hire top talent.'
    }
];