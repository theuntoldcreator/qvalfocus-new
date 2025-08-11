import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Shield, 
  Award, 
  Heart, 
  Lightbulb, 
  Handshake,
  GitMerge,
  Briefcase,
  TrendingUp,
  UserCheck,
  FileCheck,
  Target,
  Eye
} from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency and honesty in everything we do."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in our services, solutions, and people."
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your goals are our priority—we’re driven by your success."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace modern tools and thinking to solve today’s challenges."
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We believe in building strong, long-term relationships with clients and talent alike."
    }
  ];

  const offerings = [
    {
      icon: GitMerge,
      title: "Flexible Engagement Models",
      description: "Contract, contract-to-hire, direct hire, executive search, FSP teams, and project-based outsourcing tailored to your needs."
    },
    {
      icon: Briefcase,
      title: "Industry Expertise",
      description: "Specialized support for Life Sciences, Biotechnology, Pharmaceuticals, and Information Technology sectors."
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description: "From individual consultants to fully managed teams, we offer scalable talent and project solutions."
    },
    {
      icon: UserCheck,
      title: "Talent-First Approach",
      description: "Our rigorous screening and cultural alignment process ensures you get the right fit every time."
    },
    {
      icon: FileCheck,
      title: "Compliance & Quality Focus",
      description: "Strong emphasis on regulatory compliance and quality assurance, especially in validated environments."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Diverse team collaborating in a modern office"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="mb-6">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Flexible, Scalable Talent Solutions
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
              At TalentForge, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly or build a long-term hiring strategy, our solutions ensure you have access to the right talent when and where you need it.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact?type=client">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Who We Are</h2>
                <div className="space-y-6 text-slate-700 dark:text-slate-300">
                  <p>
                    TalentForge, Inc. is an emerging professional services provider delivering innovative, high-quality solutions across the Life Sciences and Information Technology sectors. Backed by modern technology, passionate experts, and a leadership team with over 50 years of combined industry experience, we specialize in connecting top-tier talent with forward-thinking organizations. We do the heavy lifting—so you can focus on delivering your projects on time with skilled and reliable resources.
                  </p>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="Professional team in a discussion"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
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

        {/* Vision & Mission */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1587560699334-cc4262401233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
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
                    Our mission is to empower our clients by delivering high-impact staffing and project-based solutions that drive success, efficiency, and growth. We are committed to bridging the gap between exceptional talent and innovative companies through integrity, agility, and unmatched service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">What We Offer</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((offering, index) => {
                const Icon = offering.icon;
                return (
                  <div key={index} className={`glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 flex flex-col ${index === 3 ? 'md:col-span-1' : ''} ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 flex-grow">{offering.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{offering.description}</p>
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
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Whether you're looking to build your team or advance your career, 
              we'd love to be part of your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
                <Link href="/contact?type=client">Partner With Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/jobs">Explore Careers</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}