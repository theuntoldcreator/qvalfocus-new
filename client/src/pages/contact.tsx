import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { companyInfo } from "@/lib/data";
import { 
  Building, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  FileText
} from "lucide-react";

export default function ContactPage() {
  const [contactType, setContactType] = useState<"client" | "candidate">("client");

  // Check URL parameters for contact type
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'client' || type === 'candidate') {
      setContactType(type);
    }
  }, []);

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 500\nSan Francisco, CA 94105",
      phone: "+1 (415) 555-0123",
      email: "sf@talentforge.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM PST"
    },
    {
      city: "New York",
      address: "456 Madison Avenue, Floor 15\nNew York, NY 10022",
      phone: "+1 (212) 555-0124",
      email: "ny@talentforge.com",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM EST"
    },
    {
      city: "London",
      address: "789 Canary Wharf, Level 20\nLondon E14 5HQ, UK",
      phone: "+44 20 7555 0125",
      email: "london@talentforge.com",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT"
    },
    {
      city: "Singapore",
      address: "321 Marina Bay, Tower 3\nSingapore 018983",
      phone: "+65 6555 0126",
      email: "singapore@talentforge.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM SGT"
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
              backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Ready to <span className="text-gradient">Connect?</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Whether you're seeking exceptional talent or your next career opportunity, 
                we're here to forge meaningful connections.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Type Selection */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center mb-8">
              <div className="glass dark:glass-dark rounded-xl p-2 inline-flex">
                <button
                  onClick={() => setContactType("client")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    contactType === "client" 
                      ? "bg-primary text-white shadow-lg" 
                      : "text-slate-600 dark:text-slate-300 hover:text-primary"
                  }`}
                >
                  <Building className="w-5 h-5 inline-block mr-2" />
                  For Companies
                </button>
                <button
                  onClick={() => setContactType("candidate")}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    contactType === "candidate" 
                      ? "bg-primary text-white shadow-lg" 
                      : "text-slate-600 dark:text-slate-300 hover:text-primary"
                  }`}
                >
                  <Users className="w-5 h-5 inline-block mr-2" />
                  For Professionals
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Forms */}
        <section className="py-12 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="glass dark:glass-dark rounded-2xl p-8">
                <div className="mb-6">
                  {contactType === "client" ? (
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-600 rounded-xl flex items-center justify-center mr-4">
                        <Building className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">For Companies</h2>
                        <p className="text-slate-600 dark:text-slate-300">Build your dream team with top talent</p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-600 rounded-xl flex items-center justify-center mr-4">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">For Professionals</h2>
                        <p className="text-slate-600 dark:text-slate-300">Discover opportunities that accelerate your career</p>
                      </div>
                    </div>
                  )}
                </div>

                <ContactForm type={contactType} />
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="glass dark:glass-dark rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Phone</div>
                        <div className="text-slate-600 dark:text-slate-300">{companyInfo.phone}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-slate-600 dark:text-slate-300">{companyInfo.email}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Headquarters</div>
                        <div className="text-slate-600 dark:text-slate-300">{companyInfo.headquarters}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Business Hours</div>
                        <div className="text-slate-600 dark:text-slate-300">Mon-Fri: 8:00 AM - 6:00 PM PST</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="glass dark:glass-dark rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-6">Quick Actions</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      <MessageCircle className="w-5 h-5 text-primary mr-3" />
                      <div className="flex-1">
                        <div className="font-semibold">Schedule a Call</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Book a 30-minute consultation</div>
                      </div>
                      <button className="text-primary font-semibold text-sm">Book Now</button>
                    </div>
                    
                    <div className="flex items-center p-4 bg-accent-50 dark:bg-accent-900/20 rounded-lg">
                      <FileText className="w-5 h-5 text-accent mr-3" />
                      <div className="flex-1">
                        <div className="font-semibold">Download Brochure</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Learn more about our services</div>
                      </div>
                      <button className="text-accent font-semibold text-sm">Download</button>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quick Response</h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      We typically respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Global Offices</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Connect with our local teams around the world for personalized service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offices.map((office, index) => (
                <div key={index} className="glass dark:glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold mb-4">{office.city}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 text-primary mr-2 mt-0.5" />
                      <div className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                        {office.address}
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-primary mr-2" />
                      <a href={`tel:${office.phone}`} className="text-slate-600 dark:text-slate-300 hover:text-primary">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-primary mr-2" />
                      <a href={`mailto:${office.email}`} className="text-slate-600 dark:text-slate-300 hover:text-primary">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-primary mr-2" />
                      <div className="text-slate-600 dark:text-slate-300">
                        {office.hours}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Quick answers to common questions about our services and process.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">How quickly can you fill a position?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Our average time-to-fill is 15 days, though this varies based on role complexity and requirements.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">What industries do you specialize in?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    We serve Technology, Financial Services, Healthcare, Retail, Manufacturing, and Public Sector.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Do you work with remote positions?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Yes, we place candidates in remote, hybrid, and on-site positions based on client needs.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">What is your placement guarantee?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    We offer replacement guarantees ranging from 6-12 months depending on the position level.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">Do you provide consulting services?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Yes, we offer digital transformation, cloud migration, and managed services consulting.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-bold mb-2">How do you ensure quality matches?</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    We use a comprehensive vetting process including technical assessments and cultural fit evaluation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
