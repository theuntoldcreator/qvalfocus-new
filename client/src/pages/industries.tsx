import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { industries } from "@/lib/data";
import { 
  Cpu, 
  DollarSign, 
  Heart, 
  ShoppingBag, 
  Factory, 
  Building,
  ArrowRight,
  TrendingUp,
  Users,
  Shield
} from "lucide-react";

const iconMap = {
  technology: Cpu,
  "financial-services": DollarSign,
  healthcare: Heart,
  retail: ShoppingBag,
  manufacturing: Factory,
  "public-sector": Building,
};

export default function IndustriesPage() {
  const industryDetails = {
    technology: {
      challenges: ["Rapid technology changes", "Talent shortage", "Security concerns", "Scalability demands"],
      solutions: ["AI/ML expertise", "Cloud-native development", "Cybersecurity specialists", "DevOps automation"],
      roles: ["Software Engineers", "Data Scientists", "Security Architects", "Product Managers"],
      growth: "+15% annually"
    },
    "financial-services": {
      challenges: ["Regulatory compliance", "Digital transformation", "Fintech disruption", "Customer expectations"],
      solutions: ["RegTech solutions", "Digital banking platforms", "API integrations", "Risk management"],
      roles: ["Fintech Developers", "Compliance Officers", "Data Analysts", "UX Designers"],
      growth: "+12% annually"
    },
    healthcare: {
      challenges: ["Data privacy", "Interoperability", "Patient engagement", "Cost optimization"],
      solutions: ["HIPAA-compliant systems", "Healthcare APIs", "Telemedicine platforms", "AI diagnostics"],
      roles: ["Healthcare IT Specialists", "Clinical Informatics", "Biotech Engineers", "Medical Device Developers"],
      growth: "+18% annually"
    },
    retail: {
      challenges: ["Omnichannel experience", "Inventory management", "Customer personalization", "Supply chain"],
      solutions: ["E-commerce platforms", "AI recommendations", "Inventory optimization", "Mobile solutions"],
      roles: ["E-commerce Developers", "UX/UI Designers", "Data Analysts", "Supply Chain Specialists"],
      growth: "+10% annually"
    },
    manufacturing: {
      challenges: ["Industry 4.0 adoption", "IoT integration", "Quality control", "Predictive maintenance"],
      solutions: ["Smart factory solutions", "IoT platforms", "Predictive analytics", "Automation systems"],
      roles: ["IoT Engineers", "Automation Specialists", "Data Engineers", "Systems Integrators"],
      growth: "+14% annually"
    },
    "public-sector": {
      challenges: ["Digital transformation", "Citizen services", "Legacy systems", "Budget constraints"],
      solutions: ["Digital government platforms", "Citizen portals", "Legacy modernization", "Cost-effective solutions"],
      roles: ["Government IT Specialists", "Digital Service Designers", "System Architects", "Project Managers"],
      growth: "+8% annually"
    }
  };

  const stats = [
    { label: "Industries Served", value: "6+", icon: TrendingUp },
    { label: "Active Clients", value: "500+", icon: Users },
    { label: "Compliance Rate", value: "100%", icon: Shield },
    { label: "Success Rate", value: "95%", icon: ArrowRight }
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
              backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Industry Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Deep <span className="text-gradient">Industry Knowledge</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Specialized expertise across high-growth industries, with deep understanding 
                of unique challenges and opportunities in each sector.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Discuss Your Industry</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Stats */}
        <section className="py-16 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-slate-600 dark:text-slate-300">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Industries We Serve</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Comprehensive solutions tailored to the unique needs of each industry sector.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry) => {
                const Icon = iconMap[industry.id as keyof typeof iconMap];
                const details = industryDetails[industry.id as keyof typeof industryDetails];
                
                return (
                  <Link key={industry.id} href={`/industries/${industry.slug}`}>
                    <div className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 group h-full">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{industry.name}</h3>
                      <p className="text-slate-600 dark:text-slate-300 mb-6">{industry.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-sm text-slate-500 dark:text-slate-400 mb-2">Key Focus Areas</h4>
                          <div className="flex flex-wrap gap-2">
                            {details.solutions.slice(0, 2).map((solution, i) => (
                              <Badge key={i} variant="secondary" className="text-xs">
                                {solution}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-semibold text-slate-500 dark:text-slate-400">Growth Rate</div>
                            <div className="font-semibold text-primary">{details.growth}</div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Industry Focus Matters */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                  Why Industry Expertise Matters
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  Deep industry knowledge enables us to understand your unique challenges, 
                  speak your language, and deliver solutions that drive real business value.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                    <div>
                      <h3 className="font-bold mb-2">Regulatory Compliance</h3>
                      <p className="text-slate-600 dark:text-slate-300">Deep understanding of industry-specific regulations and compliance requirements.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                    <div>
                      <h3 className="font-bold mb-2">Technical Expertise</h3>
                      <p className="text-slate-600 dark:text-slate-300">Specialized technical knowledge of industry-standard tools and platforms.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4"></div>
                    <div>
                      <h3 className="font-bold mb-2">Network Access</h3>
                      <p className="text-slate-600 dark:text-slate-300">Extensive networks of qualified professionals within each industry vertical.</p>
                    </div>
                  </div>
                </div>
                
                <Button className="mt-8" asChild>
                  <Link href="/about">Learn About Our Team</Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="glass dark:glass-dark rounded-2xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Industry expertise visualization"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
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
                <Link href="/contact?type=client">Contact Industry Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/case-studies">View Industry Cases</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}