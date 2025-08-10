import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Settings, 
  Users, 
  Monitor, 
  Clock,
  CheckCircle,
  Shield,
  BarChart3,
  Headphones,
  Target,
  Zap,
  Award
} from "lucide-react";

export default function ManagedServicesPage() {
  const services = [
    {
      icon: Users,
      title: "Dedicated Development Teams",
      description: "Full-stack development teams integrated with your processes and culture.",
      features: ["Team augmentation", "Skill-specific roles", "Agile methodologies", "Direct communication"],
      pricing: "Starting at $85/hour"
    },
    {
      icon: Settings,
      title: "End-to-End Project Management",
      description: "Complete project ownership from conception to delivery and maintenance.",
      features: ["Project planning", "Resource management", "Quality assurance", "Timeline delivery"],
      pricing: "Fixed price projects"
    },
    {
      icon: Monitor,
      title: "24/7 Operations Support",
      description: "Round-the-clock monitoring and support for mission-critical systems.",
      features: ["System monitoring", "Incident response", "Performance optimization", "Preventive maintenance"],
      pricing: "Monthly retainer"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Comprehensive reporting and analytics to track project progress and ROI.",
      features: ["Real-time dashboards", "Custom reporting", "KPI tracking", "ROI analysis"],
      pricing: "Included in all packages"
    }
  ];

  const tiers = [
    {
      name: "Essential",
      price: "$5,000",
      period: "/month",
      description: "Perfect for small to medium projects with basic support needs.",
      features: [
        "Up to 3 dedicated resources",
        "Standard project management",
        "Business hours support",
        "Monthly reporting",
        "Basic SLA (99% uptime)"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$12,000",
      period: "/month",
      description: "Comprehensive solution for growing businesses with complex requirements.",
      features: [
        "Up to 8 dedicated resources",
        "Advanced project management",
        "Extended hours support",
        "Weekly reporting",
        "Enhanced SLA (99.5% uptime)",
        "Performance optimization"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored solutions for large organizations with mission-critical needs.",
      features: [
        "Unlimited dedicated resources",
        "Executive project management",
        "24/7 premium support",
        "Real-time reporting",
        "Enterprise SLA (99.9% uptime)",
        "Dedicated account manager",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const governance = [
    {
      title: "Service Level Agreements",
      description: "Guaranteed performance metrics with clear penalties for non-compliance.",
      metrics: ["99.9% uptime", "4-hour response", "Same-day resolution"]
    },
    {
      title: "Quality Assurance",
      description: "Multi-stage quality checks ensuring deliverables meet the highest standards.",
      metrics: ["Code reviews", "Testing protocols", "Performance audits"]
    },
    {
      title: "Risk Management",
      description: "Proactive risk identification and mitigation strategies.",
      metrics: ["Risk assessments", "Contingency planning", "Issue escalation"]
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Focus on Core Business",
      description: "Let us handle the technical execution while you focus on strategy and growth."
    },
    {
      icon: Zap,
      title: "Faster Time to Market",
      description: "Accelerated delivery through optimized processes and experienced teams."
    },
    {
      icon: Award,
      title: "Guaranteed Quality",
      description: "SLA-backed quality assurance with performance guarantees."
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Reduced project risk through proven methodologies and oversight."
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
              backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Managed Services & Operations
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Focus on Your <span className="text-gradient">Core Business</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Comprehensive managed services with guaranteed SLAs, dedicated teams, 
                and 24/7 support for mission-critical operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  View Pricing
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Managed Services</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                End-to-end managed services designed to optimize your operations and reduce overhead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-6">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                      <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Pricing</div>
                      <div className="font-semibold">{service.pricing}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Service Packages</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Flexible packages designed to scale with your business needs and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div key={index} className={`glass dark:glass-dark rounded-2xl p-8 relative ${tier.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'} transition-all duration-300`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-white">Most Popular</Badge>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {tier.price}
                      <span className="text-lg text-slate-500 dark:text-slate-400">{tier.period}</span>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${tier.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    {tier.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance & SLAs */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Governance & Quality</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Structured governance and quality assurance processes ensure consistent delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {governance.map((item, index) => (
                <div key={index} className="glass dark:glass-dark rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.metrics.map((metric, i) => (
                      <div key={i} className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-2 text-sm font-semibold text-primary">
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Why Choose Our Managed Services</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Strategic benefits that drive efficiency and business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-emerald-500 to-emerald-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Let's discuss how our managed services can streamline your operations and reduce costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact?type=client">Schedule Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Download Service Guide
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
