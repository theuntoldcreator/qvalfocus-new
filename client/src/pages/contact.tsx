import { useState } from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/forms/contact-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  Mail, 
  MapPin
} from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const mapUrls = {
  usa: "https://maps.google.com/maps?q=666%20Plainsboro%20Rd%20%23615%2C%20Plainsboro%20Township%2C%20NJ%2008536&t=&z=15&ie=UTF8&iwloc=&output=embed",
  india: "https://maps.google.com/maps?q=Plot%20No%20383%2C%20Bachpally%2C%20Hyderabad%20500090%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"usa" | "india">("usa");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 text-center bg-white dark:bg-slate-800 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb className="flex justify-center mb-4">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Contact Us</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              We'd love to hear from you! Whether you have a question about our services, careers, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column: Info & Map */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
                  <p className="text-slate-600 dark:text-slate-300">
                    We're open for any suggestion or just to have a chat. Reach out to us through any of the channels below.
                  </p>
                </div>
                
                <div className="space-y-8">
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
                <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
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

              {/* Right Column: Form */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}