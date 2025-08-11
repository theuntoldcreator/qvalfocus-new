import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  Globe
} from "lucide-react";

export default function ContactPage() {
  const [contactType, setContactType] = useState<"client" | "candidate">("client");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'client' || type === 'candidate') {
      setContactType(type);
    }
  }, []);

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

        {/* Contact Forms & Info */}
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
                  <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">United States</div>
                        <div className="text-slate-600 dark:text-slate-300">666 Plainsboro Rd #615, Plainsboro Township, NJ 08536</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold mb-1">India</div>
                        <div className="text-slate-600 dark:text-slate-300">Plot No 383, Bachpally, Hyderabad 500090</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="glass dark:glass-dark rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Phone</div>
                        <div className="text-slate-600 dark:text-slate-300">+1 (609) 701-9988</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="w-6 h-6 text-primary mr-4 mt-1" />
                      <div>
                        <div className="font-semibold mb-1">Email</div>
                        <div className="text-slate-600 dark:text-slate-300">info@qvalfocus.com</div>
                      </div>
                    </div>
                  </div>
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