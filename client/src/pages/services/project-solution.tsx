import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
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
      title: "Equipment, Utility and Facility Validation",
      description: "Comprehensive CQV services for equipment, utilities, and facilities using robust IQ, OQ, and PQ protocols to ensure compliance and audit readiness."
    },
    {
      icon: TestTube,
      title: "Cleaning Validation",
      description: "Data-driven, risk-based cleaning validation services, including cycle development for COP, CIP, and SIP systems to prevent cross-contamination."
    },
    {
      icon: Laptop,
      title: "Computer System Validation",
      description: "Robust validation for software, hardware, and automation systems (SCADA, DeltaV, Rockwell) to meet global GxP requirements, including 21 CFR Part 11."
    },
    {
      icon: Wind,
      title: "Environmental Monitoring",
      description: "Continuous environmental monitoring strategies for viable and non-viable particles to maintain the integrity of your cleanrooms and controlled areas."
    },
    {
      icon: Thermometer,
      title: "Temperature Mapping Studies",
      description: "Precise temperature mapping of storage units, warehouses, and transport vehicles to identify fluctuations and ensure product stability."
    },
    {
      icon: Siren,
      title: "Remediation Services",
      description: "Gap assessments, root cause analysis, and corrective action planning to quickly and effectively restore compliance after regulatory findings."
    },
    {
      icon: FileCheck,
      title: "Deviation & Capa Backlog Closeout",
      description: "Efficiently close out accumulated deviations and CAPAs by reviewing, investigating, and remediating backlog records to restore and sustain GMP compliance."
    }
  ];

  const itSolutions = [
    {
      icon: Code,
      title: "Application Development & Modernization",
      description: "End-to-end solutions to build, scale, and transform applications. We deliver robust, secure, and future-ready applications from greenfield builds to legacy system modernization."
    },
    {
      icon: CheckCircle,
      title: "QA & Test Automation",
      description: "Scalable QA strategies, automation frameworks, and performance testing to ensure flawless user experiences and defect-free delivery across all platforms."
    },
    {
      icon: Cloud,
      title: "Cloud & Infrastructure Projects",
      description: "Cloud-native and hybrid infrastructure solutions. From cloud migration and optimization to DevOps implementation and infrastructure automation."
    },
    {
      icon: DatabaseZap,
      title: "Data & Analytics",
      description: "Turn data into a competitive edge. Our experts design data pipelines, implement ETL processes, and develop interactive dashboards to unlock real-time insights."
    },
    {
      icon: ShieldCheck,
      title: "Cybersecurity Programs",
      description: "Vulnerability assessments, governance and compliance (NIST, ISO, SOC2), and DevSecOps adoption to embed security into every layer of your technology stack."
    },
    {
      icon: BrainCircuit,
      title: "AI/ML Initiatives",
      description: "Accelerate innovation with data-driven intelligence. From model development and MLOps pipelines to Generative AI integration and intelligent automation."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
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
              At QvalFocus, we provide end-to-end project-based solutions designed to help our clients accelerate delivery, improve efficiency, and meet regulatory or technical demands.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact?type=client">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Life Sciences Project Solutions */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Life Sciences Project Solutions</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Specialized solutions to ensure compliance, quality, and efficiency in the life sciences sector.
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
                Modern technology solutions to drive digital transformation and business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
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
              <Link href="/contact?type=client">Schedule a Consultation</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}