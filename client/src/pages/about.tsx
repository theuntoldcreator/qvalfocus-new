import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Award, 
  Heart, 
  Lightbulb, 
  Handshake,
  Target,
  Eye
} from "lucide-react";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { NewAboutSection } from "@/components/sections/NewAboutSection";

export default function AboutPage() {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "Transparency in all actions"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "High standards in delivery"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Success-driven partnerships"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Modern tools and problem-solving"
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "Strong client and talent relationships"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header and Footer are now handled by RootLayout */}
      
      <main>
        {/* New About Section */}
        <ScrollAnimate>
          <NewAboutSection />
        </ScrollAnimate>

        {/* Core Values */}
        <ScrollAnimate>
          <section className="py-20 bg-slate-100 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Core Values</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {coreValues.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div key={index} className="text-center p-6 glass dark:glass-dark rounded-2xl">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{value.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </ScrollAnimate>

        {/* Vision & Mission */}
        <ScrollAnimate>
          <section className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1531539134685-27d854339120?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Team looking at a bright future"
                    className="w-full h-auto object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <div className="mb-12">
                    <div className="flex items-center mb-4">
                      <Eye className="w-8 h-8 text-primary mr-4" />
                      <h2 className="text-3xl font-serif font-bold">Our Vision</h2>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                      To be the preferred strategic partner for organizations seeking excellence in talent, technology, and operational execution.
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <Target className="w-8 h-8 text-primary mr-4" />
                      <h2 className="text-3xl font-serif font-bold">Our Mission</h2>
                    </div>
                    <p className="text-lg text-slate-700 dark:text-slate-300">
                      To empower clients with staffing and project solutions that drive growth, compliance, and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimate>

        {/* New CTA Banner Section */}
        <ScrollAnimate>
          <CtaBanner />
        </ScrollAnimate>

        {/* CTA Section */}
        <ScrollAnimate>
          <section className="py-20 bg-gradient-to-r from-primary to-accent">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                Let's Build the Future Together
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-8">
                Whether you're looking to build your team or advance your career, 
                we'd love to be part of your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
                  <Link to="/contact?type=client">Partner With Us</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <Link to="/jobs">Explore Careers</Link>
                </Button>
              </div>
            </div>
          </section>
        </ScrollAnimate>
      </main>
    </div>
  );
}