import { useParams } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { industries } from "@/lib/data";
import { 
  Cpu, 
  DollarSign, 
  Heart, 
  ShoppingBag, 
  Factory, 
  Building,
  CheckCircle,
  TrendingUp,
  Users,
  Star
} from "lucide-react";

const iconMap = {
  technology: Cpu,
  "financial-services": DollarSign,
  healthcare: Heart,
  retail: ShoppingBag,
  manufacturing: Factory,
  "public-sector": Building,
};

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
          <Link href="/industries">
            <Button>Back to Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[industry.id as keyof typeof iconMap];

  // Industry-specific data
  const industryData = {
    technology: {
      title: "Technology & Software",
      description: "Driving innovation through cutting-edge technology solutions and exceptional talent.",
      challenges: [
        "Rapid technology evolution and skill gaps",
        "Fierce competition for top engineering talent",
        "Scaling teams while maintaining code quality",
        "Cybersecurity and data protection requirements"
      ],
      solutions: [
        "AI/ML and cloud-native development expertise",
        "Full-stack engineering teams",
        "DevOps and automation specialists",
        "Cybersecurity and compliance experts"
      ],
      roles: [
        "Software Engineers (Frontend, Backend, Full-stack)",
        "Data Scientists and ML Engineers",
        "DevOps and Site Reliability Engineers",
        "Product Managers and UX/UI Designers",
        "Security Engineers and Architects"
      ],
      stats: {
        placements: "800+",
        avgSalary: "$145k",
        satisfaction: "96%",
        timeToFill: "18 days"
      },
      caseStudy: {
        title: "Scaling Engineering Team 300% in 8 Months",
        company: "Series C Fintech Startup",
        result: "45 engineers hired with 95% retention rate"
      }
    },
    "financial-services": {
      title: "Financial Services & FinTech",
      description: "Transforming financial services through technology and regulatory compliance expertise.",
      challenges: [
        "Strict regulatory compliance requirements",
        "Legacy system modernization needs",
        "FinTech disruption and competition",
        "Risk management and security concerns"
      ],
      solutions: [
        "RegTech and compliance specialists",
        "Financial software developers",
        "Risk management experts",
        "Digital banking platform architects"
      ],
      roles: [
        "FinTech Developers and Engineers",
        "Compliance Officers and Risk Analysts",
        "Quantitative Analysts and Researchers",
        "Product Managers for Financial Products",
        "Blockchain and Cryptocurrency Specialists"
      ],
      stats: {
        placements: "450+",
        avgSalary: "$135k",
        satisfaction: "94%",
        timeToFill: "22 days"
      },
      caseStudy: {
        title: "Digital Banking Platform Implementation",
        company: "Regional Bank",
        result: "50% faster customer onboarding"
      }
    },
    healthcare: {
      title: "Healthcare & Life Sciences",
      description: "Advancing healthcare through digital innovation and specialized medical technology talent.",
      challenges: [
        "HIPAA compliance and data privacy",
        "Interoperability between systems",
        "Patient engagement and experience",
        "Clinical workflow optimization"
      ],
      solutions: [
        "Healthcare IT specialists",
        "HIPAA-compliant system architects",
        "Telemedicine platform developers",
        "Medical device software engineers"
      ],
      roles: [
        "Healthcare IT Specialists",
        "Clinical Informatics Engineers",
        "Medical Device Developers",
        "Bioinformatics Specialists",
        "Healthcare Data Analysts"
      ],
      stats: {
        placements: "300+",
        avgSalary: "$125k",
        satisfaction: "98%",
        timeToFill: "25 days"
      },
      caseStudy: {
        title: "Digital Health Platform Launch",
        company: "Digital Therapeutics Company",
        result: "100% FDA compliance achieved"
      }
    },
    retail: {
      title: "Retail & E-commerce",
      description: "Creating seamless omnichannel experiences and driving digital commerce innovation.",
      challenges: [
        "Omnichannel customer experience",
        "Inventory and supply chain optimization",
        "Personalization at scale",
        "Mobile-first commerce solutions"
      ],
      solutions: [
        "E-commerce platform specialists",
        "Mobile app developers",
        "Data analytics experts",
        "Customer experience designers"
      ],
      roles: [
        "E-commerce Developers",
        "Mobile App Developers",
        "UX/UI Designers",
        "Data Scientists",
        "Supply Chain Technologists"
      ],
      stats: {
        placements: "250+",
        avgSalary: "$110k",
        satisfaction: "92%",
        timeToFill: "20 days"
      },
      caseStudy: {
        title: "Omnichannel Commerce Platform",
        company: "Fashion Retailer",
        result: "35% increase in online sales"
      }
    },
    manufacturing: {
      title: "Manufacturing & Industry 4.0",
      description: "Modernizing manufacturing through IoT, automation, and smart factory technologies.",
      challenges: [
        "Industry 4.0 digital transformation",
        "IoT integration and connectivity",
        "Predictive maintenance systems",
        "Quality control automation"
      ],
      solutions: [
        "IoT and sensor specialists",
        "Industrial automation engineers",
        "Predictive analytics experts",
        "Smart factory architects"
      ],
      roles: [
        "IoT Engineers",
        "Industrial Automation Specialists",
        "Manufacturing Software Developers",
        "Data Engineers",
        "Systems Integration Specialists"
      ],
      stats: {
        placements: "200+",
        avgSalary: "$115k",
        satisfaction: "95%",
        timeToFill: "28 days"
      },
      caseStudy: {
        title: "Smart Factory Implementation",
        company: "Automotive Manufacturer",
        result: "30% reduction in downtime"
      }
    },
    "public-sector": {
      title: "Public Sector & Government",
      description: "Modernizing government services through digital transformation and citizen-centric solutions.",
      challenges: [
        "Legacy system modernization",
        "Citizen service digitization",
        "Security clearance requirements",
        "Budget and procurement constraints"
      ],
      solutions: [
        "Government IT specialists",
        "Digital service designers",
        "Legacy system modernization experts",
        "Security-cleared professionals"
      ],
      roles: [
        "Government IT Specialists",
        "Digital Service Designers",
        "System Architects",
        "Project Managers",
        "Cybersecurity Specialists"
      ],
      stats: {
        placements: "150+",
        avgSalary: "$105k",
        satisfaction: "91%",
        timeToFill: "35 days"
      },
      caseStudy: {
        title: "Digital Citizen Services Portal",
        company: "State Government",
        result: "80% reduction in processing time"
      }
    }
  };

  const data = industryData[industry.id as keyof typeof industryData];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Industry Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                {data.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Discuss Your Needs</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <Link href="/jobs">View Open Positions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{data.stats.placements}</div>
                <div className="text-slate-600 dark:text-slate-300">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{data.stats.avgSalary}</div>
                <div className="text-slate-600 dark:text-slate-300">Average Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{data.stats.satisfaction}</div>
                <div className="text-slate-600 dark:text-slate-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{data.stats.timeToFill}</div>
                <div className="text-slate-600 dark:text-slate-300">Avg. Time to Fill</div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Industry Challenges</h2>
                <div className="space-y-6">
                  {data.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mr-4 mt-1">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <div>
                        <p className="text-slate-700 dark:text-slate-300">{challenge}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-serif font-bold mb-8">Our Solutions</h2>
                <div className="space-y-6">
                  {data.solutions.map((solution, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <p className="text-slate-700 dark:text-slate-300">{solution}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Roles */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Key Roles We Fill</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Specialized positions that drive innovation and growth in the {industry.name.toLowerCase()} sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.roles.map((role, index) => (
                <div key={index} className="glass dark:glass-dark rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <Users className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">{role}</h3>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="/jobs">View Positions</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass dark:glass-dark rounded-2xl p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4">Success Story</Badge>
                  <h2 className="text-3xl font-serif font-bold mb-6">{data.caseStudy.title}</h2>
                  <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                    Client: {data.caseStudy.company}
                  </p>
                  <p className="text-lg mb-8">
                    <strong>Result:</strong> {data.caseStudy.result}
                  </p>
                  <Button asChild>
                    <Link href="/case-studies">Read Full Case Study</Link>
                  </Button>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                    alt="Case study"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Build Your {industry.name} Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with our {industry.name.toLowerCase()} specialists to discuss your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?type=client">Contact Industry Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/jobs">View {industry.name} Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
