import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  FlaskConical, 
  Thermometer, 
  Laptop, 
  Wind, 
  Siren, 
  FileCheck,
  Cloud,
  ShieldCheck,
  DatabaseZap,
  BrainCircuit,
  TestTube,
  Code,
  CheckCircle
} from "lucide-react";

export default function ProjectSolutionPage() {
  const lifeSciencesSolutions = [
    {
      icon: FlaskConical,
      title: "Equipment, Utility & Facility Validation",
      description: "Complete CQV (IQ, OQ, PQ) execution in line with GAMP 5 and regulatory expectations. Validation for autoclaves, HVAC, cleanrooms, and purified water systems."
    },
    {
      icon: TestTube,
      title: "Cleaning Validation",
      description: "Risk-based cleaning strategies for COP, CIP, SIP systems. Ensuring removal of residues to safe, acceptable levels."
    },
    {
      icon: Laptop,
      title: "Computer System Validation (CSV)",
      description: "Compliance with FDA, EMA, and 21 CFR Part 11 requirements. Expertise in SCADA, DeltaV, RockWell Automation, SIEMENs."
    },
    {
      icon: Wind,
      title: "Environmental Monitoring",
      description: "Viable and non-viable particle monitoring to maintain GMP compliance."
    },
    {
      icon: Thermometer,
      title: "Temperature Mapping Studies",
      description: "Ensuring controlled environments for product storage and transport."
    },
    {
      icon: Siren,
      title: "Remediation Services",
      description: "Addressing audit findings, implementing corrective actions, and restoring compliance."
    },
    {
      icon: FileCheck,
      title: "Deviation & CAPA Backlog Closeout",
      description: "Investigation, documentation, and compliance restoration for backlog issues."
    }
  ];

  const itSolutions = [
    {
      icon: Code,
      title: "Application Development & Modernization",
      description: "Full-stack development across modern frameworks. Secure, scalable, and future-ready solutions."
    },
    {
      icon: CheckCircle,
      title: "QA & Test Automation",
      description: "Automation frameworks, performance testing, and QA strategy implementation."
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Projects",
      description: "Cloud migration, optimization, and infrastructure scaling (AWS, Azure, GCP)."
    },
    {
      icon: DatabaseZap,
      title: "Data & Analytics",
      description: "Data engineering, analytics, BI implementation, and governance."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Programs",
      description: "Threat detection, SOC operations, and compliance readiness."
    },
    {
      icon: BrainCircuit,
      title: "AI/ML Initiatives",
      description: "Predictive analytics, intelligent automation, and AI-driven process improvement."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
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
            <Button size="lg" asChild>
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
              {lifeSciencesSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{solution.description}</p>
                  </div>
                );
              })}
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
              {itSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{solution.description}</p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our project solutions can help you achieve your business objectives.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
              <Link to="/contact?type=client">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}