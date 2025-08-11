import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCaseStudies } from "@/lib/hooks";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Award, Target } from "lucide-react";

export default function CaseStudiesPage() {
  const { data: caseStudies, isLoading, error } = useCaseStudies();

  const stats = [
    { icon: TrendingUp, label: "Success Rate", value: "95%" },
    { icon: Users, label: "Clients Served", value: "500+" },
    { icon: Award, label: "Projects Completed", value: "1,200+" },
    { icon: Target, label: "Avg. ROI Increase", value: "340%" }
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
              backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
            }}
          >
            <div className="absolute inset-0 bg-slate-900/70"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Success Stories
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Proven <span className="text-gradient">Results</span> & Impact
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto">
                Real outcomes from our partnerships with industry leaders. 
                Discover how we've helped companies achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/contact?type=client">Discuss Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  Download Success Guide
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
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

        {/* Case Studies Grid */}
        <section className="py-20 bg-slate-100 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Client Success Stories</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Explore detailed case studies showcasing our approach, execution, and measurable results.
              </p>
            </div>

            {error && (
              <div className="text-center py-12">
                <div className="text-red-500 mb-4">Failed to load case studies</div>
                <Button onClick={() => window.location.reload()}>Try Again</Button>
              </div>
            )}

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="glass dark:glass-dark rounded-2xl p-8">
                    <Skeleton className="w-full h-48 rounded-xl mb-6" />
                    <Skeleton className="h-4 w-32 mb-2" />
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-20 w-full mb-6" />
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {Array.from({ length: 3 }).map((_, j) => (
                        <div key={j} className="text-center">
                          <Skeleton className="h-8 w-12 mx-auto mb-2" />
                          <Skeleton className="h-3 w-16 mx-auto" />
                        </div>
                      ))}
                    </div>
                    <Skeleton className="h-6 w-40" />
                  </div>
                ))}
              </div>
            ) : caseStudies && caseStudies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {caseStudies.map((caseStudy) => (
                  <Link key={caseStudy.id} href={`/case-studies/${caseStudy.slug}`}>
                    <div className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300 group h-full">
                      <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                        <img 
                          src={caseStudy.imageUrl || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"} 
                          alt={caseStudy.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <Badge className="mb-4 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                        {caseStudy.industry}
                      </Badge>
                      
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                        {caseStudy.title}
                      </h3>
                      
                      {caseStudy.subtitle && (
                        <div className="text-sm font-semibold text-primary mb-2">{caseStudy.subtitle}</div>
                      )}
                      
                      <p className="text-slate-600 dark:text-slate-300 mb-6 line-clamp-3">
                        {caseStudy.challenge.substring(0, 150)}...
                      </p>
                      
                      {Array.isArray(caseStudy.results) && (
                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {(caseStudy.results as Array<{metric: string, value: string}>).slice(0, 3).map((result, index) => (
                            <div key={index} className="text-center">
                              <div className="text-xl font-bold text-primary">{result.value}</div>
                              <div className="text-xs text-slate-500 dark:text-slate-400">{result.metric}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-slate-500 dark:text-slate-400">
                          Client: {caseStudy.client}
                        </div>
                        <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Award className="w-16 h-16 text-slate-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">No case studies available</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-md mx-auto">
                  We're currently updating our case studies. Check back soon for detailed success stories.
                </p>
                <Button asChild>
                  <Link href="/contact?type=client">Discuss Your Project</Link>
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Industry Focus */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Success Across Industries</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our expertise spans multiple industries, delivering tailored solutions for unique challenges.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "Technology", count: "15+ cases" },
                { name: "Finance", count: "12+ cases" },
                { name: "Healthcare", count: "8+ cases" },
                { name: "Retail", count: "10+ cases" },
                { name: "Manufacturing", count: "6+ cases" },
                { name: "Public Sector", count: "4+ cases" }
              ].map((industry, index) => (
                <div key={index} className="glass dark:glass-dark rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                  <h3 className="font-bold mb-2">{industry.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{industry.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help you achieve similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="bg-white text-primary hover:bg-slate-200" asChild>
                <Link href="/contact?type=client">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10" asChild>
                <Link href="/services/consulting">View Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}