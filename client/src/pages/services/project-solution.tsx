import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function ProjectSolutionPage() {
  const lifeSciencesSolutions = [
    {
      imageUrl: "https://images.unsplash.com/photo-1581092921447-c2a013a4d009?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Equipment, Utility & Facility Validation",
      description: "Complete CQV (IQ, OQ, PQ) execution in line with GAMP 5 and regulatory expectations."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1616432525091-5052414051de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cleaning Validation",
      description: "Risk-based cleaning strategies for COP, CIP, SIP systems to ensure removal of residues."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Computer System Validation (CSV)",
      description: "Compliance with FDA, EMA, and 21 CFR Part 11 requirements for systems like SCADA and DeltaV."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1578493593483-26274f838a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Environmental Monitoring",
      description: "Viable and non-viable particle monitoring to maintain GMP compliance in controlled environments."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1631160215-3401610c0489?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Temperature Mapping Studies",
      description: "Ensuring controlled environments for product storage and transport through rigorous studies."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Remediation Services",
      description: "Addressing audit findings, implementing corrective actions, and restoring compliance."
    }
  ];

  const itSolutions = [
    {
      imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Application Development & Modernization",
      description: "Full-stack development across modern frameworks for secure, scalable solutions."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "QA & Test Automation",
      description: "Automation frameworks, performance testing, and QA strategy implementation."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cloud & Infrastructure Projects",
      description: "Cloud migration, optimization, and infrastructure scaling (AWS, Azure, GCP)."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Data & Analytics",
      description: "Data engineering, analytics, BI implementation, and governance."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Cybersecurity Programs",
      description: "Threat detection, SOC operations, and compliance readiness."
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "AI/ML Initiatives",
      description: "Predictive analytics, intelligent automation, and AI-driven process improvement."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header and Footer are now handled by RootLayout */}
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 md:pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
          <div 
            className="absolute inset-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Team collaborating on a project"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6">Project Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              End-to-End Project Delivery
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              We deliver end-to-end project execution for both IT and Life Sciences sectors. Our goal is to help you accelerate delivery, improve efficiency, and meet technical or regulatory requirements with precision.
            </p>
            <Button size="lg" asChild className="bg-theme-orange hover:bg-theme-orange-dark">
              <Link to="/contact?type=client">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Life Sciences Project Solutions */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Life Sciences Project Solutions</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                We provide specialized services that ensure compliance, efficiency, and high-quality results throughout your product lifecycle.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {lifeSciencesSolutions.map((solution, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden h-80 group flex items-end text-left">
                  <img src={solution.imageUrl} alt={solution.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-200 text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Project Solutions */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">IT Project Solutions</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                We help businesses innovate, modernize, and scale technology with industry-leading project delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((solution, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden h-80 group flex items-end text-left">
                  <img src={solution.imageUrl} alt={solution.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="relative z-10 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{solution.title}</h3>
                    <p className="text-slate-200 text-sm">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's discuss how our project solutions can help you achieve your business objectives.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
              <Link to="/contact?type=client">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}