import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function JobsPage() {
  const featuredPositions = [
    { title: "Technical Recruiter (Remote)" },
    { title: "SDET Consultant – Life Sciences (Remote/Hybrid)" },
    { title: "Account Manager – IT & Life Sciences (Hybrid, NJ)" },
    { title: "CSV Consultant – Pharma Client (Remote/Onsite)" },
    { title: "Business Analyst – IT Services" },
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
              backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Empowering People. <span className="text-gradient">Building Futures.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                We offer opportunities across multiple roles — from recruitment to project consulting — where you can grow and make a lasting impact.
              </p>
            </div>
          </div>
        </section>

        {/* Jobs Listing */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold mb-4">Featured Positions</h2>
            </div>

            <div className="space-y-6">
              {featuredPositions.map((job, index) => (
                <Card key={index} className="glass dark:glass-dark">
                  <CardContent className="p-6 flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <Button disabled>Apply</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center glass dark:glass-dark p-8 rounded-2xl">
              <Mail className="w-12 h-12 mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Didn’t find a role?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                Send your resume to <a href="mailto:careers@qvalfocus.com" className="text-primary font-semibold hover:underline">careers@qvalfocus.com</a> — we’ll reach out when a matching opportunity arises.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}