"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RecruitmentPlans() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Professional working on a laptop with charts"
              className="rounded-3xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-6">
            <p className="font-semibold text-slate-800 dark:text-slate-200">
              <span className="bg-yellow-300/70 px-2 py-1">Start Bright Future With Us</span>
            </p>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
              Get Industry-Leading Recruitment Plans
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              At mattis elementum semper tellus donec ornae. Dis dolor pellentesque dui auctor urna nam lectus.
            </p>

            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="bg-transparent p-0 justify-start gap-4 border-b">
                <TabsTrigger value="mission" className="pb-2 rounded-none bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Mission</TabsTrigger>
                <TabsTrigger value="integrity" className="pb-2 rounded-none bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Integrity</TabsTrigger>
                <TabsTrigger value="expertise" className="pb-2 rounded-none bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary data-[state=active]:shadow-none">Expertise</TabsTrigger>
              </TabsList>
              <div className="pt-6">
                <TabsContent value="mission">
                  <p className="text-slate-600 dark:text-slate-300">
                    Facilisis quis pharetra at lacinia eget tellus. Nulla cursus tempus posuere faucibus. Vestibulum blandit quam lorem. Rhoncus sed gravida metus ac aliquam.
                  </p>
                </TabsContent>
                <TabsContent value="integrity">
                  <p className="text-slate-600 dark:text-slate-300">
                    We operate with unwavering integrity, ensuring transparency and honesty in all our interactions. Building trust with our clients and candidates is the foundation of our recruitment plans and long-term partnerships.
                  </p>
                </TabsContent>
                <TabsContent value="expertise">
                  <p className="text-slate-600 dark:text-slate-300">
                    Our team's deep industry expertise allows us to understand the unique challenges and opportunities within your sector. We leverage this knowledge to create tailored recruitment strategies that deliver results and drive your business forward.
                  </p>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}