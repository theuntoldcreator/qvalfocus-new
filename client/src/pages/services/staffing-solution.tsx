import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function StaffingSolutionPage() {
  const coreOfferings = [
    { imageUrl: "https://images.unsplash.com/photo-1556742044-538a3c1a1498?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Contract & Contract-to-Hire" },
    { imageUrl: "https://images.unsplash.com/photo-1600880292203-943bb4522542?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Direct Hire & Executive Search" },
    { imageUrl: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "FSP (Functional Service Provider) Teams" },
    { imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Project-Based Outsourcing" }
  ];

  const expertiseAreas = [
    { imageUrl: "https://images.unsplash.com/photo-1581092921447-c2a013a4d009?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Commissioning, Qualification & Validation (CQV)" },
    { imageUrl: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Quality Control (QC) & Quality Assurance (QA)" },
    { imageUrl: "https://images.unsplash.com/photo-1616432525091-5052414051de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Cleaning Validation" },
    { imageUrl: "https://images.unsplash.com/photo-1614064641938-3bbee5293462?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Computer System Validation (CSV)" },
    { imageUrl: "https://images.unsplash.com/photo-1633421822522-0584d645755e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", title: "Manufacturing & Process Engineers" },
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
              At QvalFocus, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly, address seasonal hiring spikes, or build a long-term workforce strategy, we ensure you have access to the right talent when and where you need it.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact?type=client">Get In Touch</Link>
            </Button>
          </div>
        </section>

        {/* Staffing Approach */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Staffing Approach</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                <p className="text-slate-600 dark:text-slate-300">For urgent roles</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Specialized Recruitment</h3>
                <p className="text-slate-600 dark:text-slate-300">In IT & Life Sciences</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Long-Term Strategies</h3>
                <p className="text-slate-600 dark:text-slate-300">Aligned with your growth</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">Tailored Engagement</h3>
                <p className="text-slate-600 dark:text-slate-300">To match your needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Staffing Offerings */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Core Staffing Offerings</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreOfferings.map((offering, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden h-64 group flex items-center justify-center text-center">
                  <img src={offering.imageUrl} alt={offering.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm py-3 px-6 rounded-lg inline-block">
                      <h3 className="text-lg font-bold text-white">{offering.title}</h3>
                      <div className="h-0.5 bg-primary mt-2 w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Resource Areas */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Specialized Resource Areas</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden h-64 group flex items-center justify-center text-center">
                  <img src={area.imageUrl} alt={area.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="relative z-10 p-4">
                    <div className="bg-slate-900/80 backdrop-blur-sm py-3 px-6 rounded-lg inline-block">
                      <h3 className="text-lg font-bold text-white">{area.title}</h3>
                      <div className="h-0.5 bg-primary mt-2 w-1/2 mx-auto"></div>
                    </div>
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
              Ready to Build Your Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with our talent specialists to find the right professionals for your organization.
            </p>
            <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
              <Link to="/contact?type=client">Find Talent Now</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}