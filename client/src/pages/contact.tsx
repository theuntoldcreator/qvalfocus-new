import { useState, useEffect } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ContactForm } from "@/components/forms/contact-form";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building, 
  Users, 
  Phone, 
  Mail, 
  MapPin
} from "lucide-react";

const mapUrls = {
  usa: "https://maps.google.com/maps?q=666%20Plainsboro%20Rd%20%23615%2C%20Plainsboro%20Township%2C%20NJ%2008536&t=&z=15&ie=UTF8&iwloc=&output=embed",
  india: "https://maps.google.com/maps?q=Plot%20No%20383%2C%20Bachpally%2C%20Hyderabad%20500090%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export default function ContactPage() {
  const [contactType, setContactType] = useState<"client" | "candidate">("client");
  const [activeTab, setActiveTab] = useState<"usa" | "india">("usa");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');
    if (type === 'client' || type === 'candidate') {
      setContactType(type);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header and Footer are now handled by RootLayout */}
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 md:pt-28 pb-32 overflow-hidden bg-white dark:bg-slate-800">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Team collaborating in a modern office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80 dark:from-slate-800 dark:via-slate-800/95 dark:to-slate-800/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-6">
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900 dark:text-white">
                Ready to <span className="text-gradient">Connect?</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
                Whether you're seeking exceptional talent or your next career opportunity, 
                we're here to forge meaningful connections.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="relative pb-20 mt-[-8rem]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Section */}
              <div className="glass dark:glass-dark rounded-2xl p-8">
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
                <div className="mb-6">
                  {contactType === "client" ? (
                    <div className="text-center">
                      <h2 className="text-2xl font-bold">For Companies</h2>
                      <p className="text-slate-600 dark:text-slate-300">Build your dream team with top talent</p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <h2 className="text-2xl font-bold">For Professionals</h2>
                      <p className="text-slate-600 dark:text-slate-300">Discover opportunities that accelerate your career</p>
                    </div>
                  )}
                </div>
                <ContactForm type={contactType} />
              </div>

              {/* Map & Details Section */}
              <div className="space-y-8">
                <div className="glass dark:glass-dark rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Our Global Offices</h3>
                  <Tabs 
                    defaultValue={activeTab} 
                    onValueChange={(value) => setActiveTab(value as "usa" | "india")} 
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="usa">United States</TabsTrigger>
                      <TabsTrigger value="india">India</TabsTrigger>
                    </TabsList>
                    <TabsContent value="usa" className="mt-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">United States</div>
                            <div className="text-slate-600 dark:text-slate-300">666 Plainsboro Rd #615, Plainsboro Township, NJ 08536</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Phone className="w-5 h-5 text-primary mr-4 mt-1" />
                          <div>
                            <div className="font-semibold">Phone</div>
                            <div className="text-slate-600 dark:text-slate-300">+1 (609) 701-9988</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="w-5 h-5 text-primary mr-4 mt-1" />
                          <div>
                            <div className="font-semibold">Email</div>
                            <div className="text-slate-600 dark:text-slate-300">info@qvalfocus.com</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="india" className="mt-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-primary mr-4 mt-1 flex-shrink-0" />
                          <div>
                            <div className="font-semibold">India</div>
                            <div className="text-slate-600 dark:text-slate-300">Plot No 383, Bachpally, Hyderabad 500090, India</div>
                          </div>
                        </div>
                         <div className="flex items-start">
                          <Phone className="w-5 h-5 text-primary mr-4 mt-1" />
                          <div>
                            <div className="font-semibold">Phone</div>
                            <div className="text-slate-600 dark:text-slate-300">+1 (609) 701-9988</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Mail className="w-5 h-5 text-primary mr-4 mt-1" />
                          <div>
                            <div className="font-semibold">Email</div>
                            <div className="text-slate-600 dark:text-slate-300">info@qvalfocus.com</div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
                <div className="rounded-2xl overflow-hidden h-80">
                  <iframe
                    key={activeTab}
                    className="animate-fade-in"
                    src={mapUrls[activeTab]}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}