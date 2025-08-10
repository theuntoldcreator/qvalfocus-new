import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Cloud, 
  Database, 
  Shield, 
  Zap,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Target,
  Users,
  Lightbulb
} from "lucide-react";

export default function ConsultingPage() {
  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies that modernize operations and accelerate growth.",
      features: ["Strategy Development", "Technology Roadmap", "Change Management", "Performance Metrics"],
      outcomes: "40% faster time-to-market, 30% cost reduction"
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure",
      description: "Cloud-native architecture design and migration strategies for scalable, resilient systems.",
      features: ["Cloud Migration", "Architecture Design", "DevOps Implementation", "Cost Optimization"],
      outcomes: "60% infrastructure cost savings, 99.9% uptime"
    },
    {
      icon: Database,
      title: "Data & AI Strategy",
      description: "Unlock the power of your data with AI-driven insights and intelligent automation.",
      features: ["Data Architecture", "ML Implementation", "Analytics Platforms", "AI Integration"],
      outcomes: "5x faster decision making, 25% revenue increase"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security frameworks to protect your digital assets and ensure compliance.",
      features: ["Security Assessment", "Risk Management", "Compliance Framework", "Incident Response"],
      outcomes: "Zero security breaches, 100% compliance adherence"
    }
  ];

  const engagementModels = [
    {
      title: "Strategic Advisory",
      description: "C-level consulting for digital strategy and transformation roadmaps.",
      duration: "3-6 months",
      deliverables: ["Strategic roadmap", "Technology assessment", "ROI analysis"]
    },
    {
      title: "Implementation Partnership",
      description: "Hands-on execution support with embedded teams and project management.",
      duration: "6-18 months",
      deliverables: ["Full implementation", "Team training", "Knowledge transfer"]
    },
    {
      title: "Managed Transformation",
      description: "Complete ownership of transformation initiatives with guaranteed outcomes.",
      duration: "12-24 months",
      deliverables: ["Outcome guarantee", "Ongoing optimization", "Performance monitoring"]
    }
  ];

  const methodologies = [
    {
      icon: Target,
      title: "Outcome-Driven",
      description: "Every engagement is structured around measurable business outcomes and ROI."
    },
    {
      icon: Users,
      title: "Collaborative Approach",
      description: "We work alongside your teams to ensure knowledge transfer and capability building."
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Leveraging cutting-edge technologies and industry best practices for competitive advantage."
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
              backgroundImage: "url('https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Digital Transformation Consulting
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Transform Your <span className="text-gradient">Digital Future</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Strategic consulting services that architect solutions for measurable business outcomes 
                and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Start Transformation</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  View Solutions
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Services */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Consulting Expertise</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Comprehensive consulting services designed to accelerate your digital transformation journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-accent-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-accent-50 dark:bg-accent-900/20 rounded-lg p-4 mb-6">
                      <div className="text-sm font-semibold text-accent-600 dark:text-accent-400 mb-1">Typical Outcomes</div>
                      <div className="text-sm">{service.outcomes}</div>
                    </div>

                    <Button variant="outline" className="w-full group">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Engagement Models */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Engagement Models</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Flexible engagement options tailored to your needs, timeline, and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {engagementModels.map((model, index) => (
                <div key={index} className="glass dark:glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">{model.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{model.description}</p>
                  
                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 mb-6">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">Duration</div>
                    <div className="font-semibold">{model.duration}</div>
                  </div>

                  <div className="text-left">
                    <h4 className="font-semibold mb-3">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {model.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Methodology</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Proven frameworks and methodologies that ensure successful outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {methodologies.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{method.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{method.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industry Metrics */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Proven Results</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Industry-leading outcomes across our consulting engagements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-slate-600 dark:text-slate-300">Project Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40%</div>
                <div className="text-slate-600 dark:text-slate-300">Average Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">6x</div>
                <div className="text-slate-600 dark:text-slate-300">ROI Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-slate-600 dark:text-slate-300">Months Avg Timeline</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-accent-100 mb-8">
              Let's discuss your digital transformation goals and design a strategy for success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?type=client">Start Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
