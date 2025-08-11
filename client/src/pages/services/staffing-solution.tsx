import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Users, 
  Briefcase, 
  Handshake,
  FlaskConical,
  CheckSquare,
  Wrench,
  UserCheck,
  Laptop
} from "lucide-react";

export default function StaffingSolutionPage() {
  const strategicSolutions = [
    {
      icon: Briefcase,
      title: "Project Delivery",
      description: "Our Project Delivery solutions offer comprehensive support across the entire project lifecycle. We source, onboard, and manage skilled professionals to execute key initiatives whether IT, Life Sciences, or cross-functional programs. From kickoff to completion, we ensure seamless execution, consistent quality, and measurable results that align with your delivery goals."
    },
    {
      icon: Handshake,
      title: "Talent Partnership",
      description: "Our Talent Partnership model goes beyond traditional staffing. We immerse ourselves in your business to understand your long-term goals, company culture, and evolving skill needs. Acting as an extension of your HR and hiring teams, we offer consultative support, data-driven hiring strategies, and a flexible engagement model delivering not just people, but business-aligned solutions that drive sustained success."
    }
  ];

  const expertiseAreas = [
    {
      icon: FlaskConical,
      title: "Commissioning, Qualification & Validation (CQV) Resources",
      description: "Ensure the successful initiation of your projects with our qualified professionals who oversee commissioning and qualification processes, guaranteeing compliance and efficiency."
    },
    {
      icon: CheckSquare,
      title: "Quality Control Resources",
      description: "Exceed quality benchmarks with our experts who manage and optimize your quality control processes, ensuring precision and compliance in every facet of your operations."
    },
    {
      icon: Wrench,
      title: "Cleaning Validation Resources",
      description: "Maintain the highest hygiene standards with our experienced professionals who oversee and validate your cleaning processes, ensuring a safe and compliant environment."
    },
    {
      icon: UserCheck,
      title: "Quality Assurance Resources",
      description: "Elevate your quality standards with our dedicated personnel committed to maintaining the highest quality throughout your processes, ensuring strict compliance and excellence."
    },
    {
      icon: Laptop,
      title: "Computer System Validation Resources",
      description: "Stay at the forefront of the digital landscape with our skilled professionals who validate and maintain your computer systems, ensuring they consistently meet industry standards."
    },
    {
      icon: Users,
      title: "Engineers (Quality, Manufacturing, Process)",
      description: "Secure top-tier talent for critical engineering roles. Connect with engineers who bring both expertise and innovation to your projects."
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
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Team of professionals in a meeting"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6">Staffing Solutions</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Flexible, Scalable Talent Solutions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              At QvalFocus, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly or build a long-term hiring strategy, our solutions ensure you have access to the right talent when and where you need it.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact?type=client">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Strategic Talent Solutions */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Strategic Talent Solutions for Evolving Business Needs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {strategicSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 max-w-lg mx-auto">{solution.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Expertise</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                We specialize in sourcing highly skilled professionals for a wide range of critical roles in the life sciences and technology sectors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div key={index} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{area.description}</p>
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
              Connect with our talent specialists to find the right professionals for your organization.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
              <Link href="/contact?type=client">Find Talent Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}