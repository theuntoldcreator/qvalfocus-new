import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Users, 
  Search, 
  UserCheck, 
  MessageCircle, 
  CheckCircle, 
  Clock,
  Target,
  Award,
  TrendingUp
} from "lucide-react";

export default function StaffingPage() {
  const processes = [
    {
      icon: Search,
      title: "Discovery",
      description: "We analyze your needs, culture, and technical requirements to create a comprehensive hiring strategy."
    },
    {
      icon: Users,
      title: "Talent Sourcing",
      description: "Leveraging our network and advanced sourcing techniques to identify top-tier candidates."
    },
    {
      icon: UserCheck,
      title: "Screening & Assessment",
      description: "Rigorous technical and cultural fit evaluation using proven assessment methodologies."
    },
    {
      icon: MessageCircle,
      title: "Interview Coordination",
      description: "Streamlined interview process with detailed feedback and candidate insights."
    },
    {
      icon: CheckCircle,
      title: "Placement & Onboarding",
      description: "Seamless placement with comprehensive onboarding support for long-term success."
    }
  ];

  const services = [
    {
      title: "Executive Search",
      description: "C-level and senior leadership recruitment with extensive market knowledge and confidential processes.",
      features: ["Confidential searches", "Market mapping", "Leadership assessment", "Succession planning"],
      timeframe: "8-12 weeks",
      guarantee: "12-month replacement guarantee"
    },
    {
      title: "Direct Hire",
      description: "Permanent placement solutions for mid to senior-level professionals across all functions.",
      features: ["Cultural fit assessment", "Technical evaluation", "Reference verification", "Salary benchmarking"],
      timeframe: "4-6 weeks",
      guarantee: "6-month replacement guarantee"
    },
    {
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based work and temporary skill augmentation.",
      features: ["Rapid deployment", "Skills matching", "Performance monitoring", "Flexible contracts"],
      timeframe: "1-2 weeks",
      guarantee: "Performance guarantee"
    },
    {
      title: "Contract-to-Hire",
      description: "Risk-mitigation approach allowing evaluation before permanent commitment.",
      features: ["Trial period evaluation", "Performance tracking", "Seamless conversion", "Cost optimization"],
      timeframe: "2-3 weeks",
      guarantee: "Conversion support"
    }
  ];

  const differentiators = [
    {
      icon: Target,
      title: "Precision Matching",
      description: "Our proprietary assessment methodology ensures 95% first-interview success rate."
    },
    {
      icon: Clock,
      title: "Speed to Market",
      description: "Average 15-day time-to-fill across all positions with maintained quality standards."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Comprehensive vetting process with 18-month average candidate retention rate."
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time salary data and market insights to optimize your hiring strategy."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Strategic Staffing Solutions
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Build Your <span className="text-gradient">Dream Team</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                From executive search to contract staffing, we connect you with exceptional talent 
                that drives innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Start Hiring</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Staffing Services</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Comprehensive staffing solutions tailored to your specific needs and timeline.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Timeline</div>
                      <div className="font-semibold">{service.timeframe}</div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-1">Guarantee</div>
                      <div className="font-semibold">{service.guarantee}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Proven Process</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                A systematic approach that ensures quality matches and successful long-term placements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processes.map((process, index) => {
                const Icon = process.icon;
                return (
                  <div key={index} className="text-center relative">
                    {index < processes.length - 1 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent z-0"></div>
                    )}
                    <div className="relative z-10">
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{process.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose TalentForge</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our competitive advantages that set us apart in the staffing industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentiators.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Build Your Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss your staffing needs and create a customized solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?type=client">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
