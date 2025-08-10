import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { companyInfo, leadership } from "@/lib/data";
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  MapPin,
  Calendar,
  TrendingUp,
  Heart,
  Shield,
  Lightbulb,
  Handshake
} from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, label: "Team Members", value: "150+" },
    { icon: Award, label: "Years of Experience", value: "6+" },
    { icon: Globe, label: "Global Offices", value: "4" },
    { icon: TrendingUp, label: "Client Satisfaction", value: "95%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We pursue excellence in everything we do, from candidate selection to client service delivery."
    },
    {
      icon: Heart,
      title: "People First",
      description: "Every decision we make considers the human impact, prioritizing relationships over transactions."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Trust is the foundation of our business. We operate with transparency and ethical standards."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and methodologies to stay ahead in the evolving talent landscape."
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "We build long-term partnerships, not just transactions, with both clients and candidates."
    }
  ];

  const timeline = [
    {
      year: "2018",
      title: "Company Founded",
      description: "TalentForge was established with a vision to revolutionize the staffing industry through technology and human-centric approach."
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Secured our first Fortune 500 client, establishing our reputation for handling complex, large-scale staffing projects."
    },
    {
      year: "2020",
      title: "Remote-First Pivot",
      description: "Successfully transitioned to remote-first operations during the pandemic, helping clients adapt to new work models."
    },
    {
      year: "2021",
      title: "International Expansion",
      description: "Opened offices in London and Singapore, extending our global reach and capability."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Launched AI-powered matching algorithms, reducing time-to-fill by 40% while improving match quality."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple industry awards for innovation in staffing and client satisfaction excellence."
    },
    {
      year: "2024",
      title: "Continued Growth",
      description: "Expanded consulting services and achieved record placement numbers with industry-leading retention rates."
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 500",
      type: "Headquarters",
      employees: "75+"
    },
    {
      city: "New York",
      address: "456 Madison Avenue, Floor 15",
      type: "Regional Office",
      employees: "40+"
    },
    {
      city: "London",
      address: "789 Canary Wharf, Level 20",
      type: "European Hub",
      employees: "25+"
    },
    {
      city: "Singapore",
      address: "321 Marina Bay, Tower 3",
      type: "APAC Office",
      employees: "15+"
    }
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
              backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                About TalentForge
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Forging the Future of <span className="text-gradient">Talent</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Founded in 2018, TalentForge has connected thousands of exceptional professionals 
                with innovative companies reshaping industries. We don't just match skills—we 
                understand aspirations, culture, and the human element that drives lasting success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Partner With Us</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <Link href="/jobs">Join Our Team</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
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

        {/* Our Story */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Story</h2>
                <div className="space-y-6 text-slate-700 dark:text-slate-300">
                  <p>
                    TalentForge was born from a simple observation: the traditional staffing industry 
                    was broken. Candidates were treated as commodities, clients received generic solutions, 
                    and the human element was lost in transactional relationships.
                  </p>
                  <p>
                    Our founders, with decades of experience in consulting and human capital, envisioned 
                    a different approach. One that leveraged technology to enhance—not replace—human 
                    judgment. One that prioritized long-term relationships over short-term placements.
                  </p>
                  <p>
                    Today, TalentForge stands as a testament to that vision. We've successfully placed 
                    over 2,500 professionals, maintained a 95% client satisfaction rate, and built 
                    lasting partnerships with companies ranging from innovative startups to Fortune 500 enterprises.
                  </p>
                </div>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/case-studies">Read Our Success Stories</Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="glass dark:glass-dark rounded-2xl p-8">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                    alt="Team collaboration"
                    className="w-full h-80 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Values</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                The principles that guide every decision we make and every relationship we build.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.slice(0, 5).map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className={`glass dark:glass-dark rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 ${index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''}`}>
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Leadership Team</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Experienced leaders with decades of expertise in consulting, technology, and human capital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leadership.map((leader, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <img 
                      src={leader.avatar}
                      alt={leader.name}
                      className="w-48 h-48 rounded-2xl mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                  <div className="text-primary font-semibold mb-4">{leader.role}</div>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">{leader.bio}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Key milestones in our growth from startup to industry leader.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
              <div className="space-y-12">
                {timeline.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <div className="glass dark:glass-dark rounded-xl p-6">
                        <div className="text-primary font-bold mb-2">{event.year}</div>
                        <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                        <p className="text-slate-600 dark:text-slate-300">{event.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-slate-800 relative z-10"></div>
                    <div className="flex-1"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Global Presence</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Strategically located offices to serve clients and candidates worldwide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="glass dark:glass-dark rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{office.city}</h3>
                  <div className="text-sm text-primary font-semibold mb-2">{office.type}</div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">{office.address}</p>
                  <div className="text-sm font-semibold">{office.employees} Team Members</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEI Statement */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass dark:glass-dark rounded-2xl p-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-serif font-bold mb-6">Diversity, Equity & Inclusion</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                We believe that diverse teams drive innovation and better business outcomes. 
                TalentForge is committed to fostering an inclusive environment where all 
                professionals can thrive, regardless of their background, identity, or circumstances.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Diverse Leadership</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Diverse Placements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">Inclusive Hiring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Whether you're looking to build your team or advance your career, 
              we'd love to be part of your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
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
