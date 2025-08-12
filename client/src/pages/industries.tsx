import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { industries } from "@/lib/data";
import { 
  Cpu, 
  FlaskConical,
  ArrowRight,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  "life-sciences": FlaskConical,
  "information-technology": Cpu,
};

export default function IndustriesPage() {
  const stats = [
    { label: "Industries Served", value: "2", icon: TrendingUp },
    { label: "Active Clients", value: "500+", icon: Users },
    { label: "Compliance Rate", value: "100%", icon: Shield },
    { label: "Success Rate", value: "95%", icon: ArrowRight }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden bg-slate-100 dark:bg-slate-900">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
              alt="Industries"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-6">
                Industry Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Deep <span className="text-gradient">Industry Knowledge</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                We specialize in Life Sciences and Information Technology — delivering industry-aligned staffing and project solutions that produce measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact?type=client">Discuss Your Industry</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Industries We Serve</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {industries.map((industry) => {
                const Icon = iconMap[industry.id];
                
                return (
                  <Link key={industry.id} to={`/industries/${industry.slug}`}>
                    <div className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 group h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{industry.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{industry.description}</p>
                      
                      <div className="flex justify-end items-center">
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Leverage Industry Expertise?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with our industry specialists to discuss your specific challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
                <Link to="/contact?type=client">Contact Industry Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link to="/case-studies">View Industry Cases</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}