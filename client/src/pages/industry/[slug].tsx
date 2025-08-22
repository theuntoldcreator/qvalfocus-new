import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { industries, industryData } from "@/lib/data";
import { 
  Cpu, 
  FlaskConical,
  BrainCircuit,
  ShieldCheck,
  Zap,
  Handshake,
  Users,
  TrendingUp,
  Award,
  Goal
} from "lucide-react";

const iconMap: { [key: string]: React.ElementType } = {
  "life-sciences": FlaskConical,
  "information-technology": Cpu,
};

const whyUsIconMap: { [key: string]: React.ElementType } = {
  BrainCircuit,
  ShieldCheck,
  Zap,
  Handshake,
  Users,
  TrendingUp,
  Award,
  Goal
};

export default function IndustryPage() {
  const { slug } = useParams();
  const industry = industries.find(i => i.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Industry Not Found</h1>
          <Link to="/industries">
            <Button>Back to Industries</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = iconMap[industry.id];
  const data = industryData[industry.id];

  return (
    <div className="min-h-screen">
      {/* Header and Footer are now handled by RootLayout */}
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-28 pb-16 overflow-hidden">
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
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Icon className="w-10 h-10 text-white" />
              </div>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Industry Expertise
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                {data.title}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link to="/contact?type=client">Discuss Your Needs</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <Link to="/jobs">View Open Positions</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Description Section */}
        {data.mainDescription && (
          <section className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                {data.mainDescription}
              </p>
            </div>
          </section>
        )}

        {/* Expertise */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-4">Areas of Expertise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.expertise.map((item: any, index: number) => (
                <div key={index} className="glass dark:glass-dark rounded-xl p-6">
                  {typeof item === 'object' ? (
                    <>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{item.description}</p>
                    </>
                  ) : (
                    <>
                      <h3 className="font-semibold text-lg">{item.split(':')[0]}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">{item.split(':')[1]}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workforce Solutions Section */}
        {data.workforceSolutions && (
          <section className="py-20 bg-white dark:bg-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold mb-4">Flexible Workforce Solutions</h2>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  QvalFocus delivers flexible workforce solutions that adapt to shifting industry needs:
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.workforceSolutions.map((solution: { title: string; description: string, imageUrl: string }, index: number) => (
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
        )}

        {/* Why Choose Us */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                {data.whyUsTitle || "Why Choose Us"}
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={data.whyUsImage}
                  alt={data.whyUsTitle || "Why Choose Us"}
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
              </div>
              <div className="space-y-8">
                {data.whyUs.map((item: { icon: string; title: string; description: string }, index: number) => {
                  const Icon = whyUsIconMap[item.icon];
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mr-6">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Build Your {industry.name} Team?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Connect with our {industry.name.toLowerCase()} specialists to discuss your specific needs and challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
                <Link to="/contact?type=client">Contact Industry Expert</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link to="/jobs">View {industry.name} Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}