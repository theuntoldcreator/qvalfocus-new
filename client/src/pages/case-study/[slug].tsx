import { useParams } from "wouter";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCaseStudyBySlug } from "@/lib/hooks";
import { Link } from "wouter";
import { 
  ArrowLeft,
  Calendar,
  Building,
  TrendingUp,
  Target,
  CheckCircle,
  Award,
  Users,
  Clock
} from "lucide-react";

export default function CaseStudyPage() {
  const { slug } = useParams();
  const { data: caseStudy, isLoading, error } = useCaseStudyBySlug(slug || "");

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The case study you're looking for doesn't exist or has been removed.
            </p>
            <Link href="/case-studies">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Case Studies
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Skeleton className="h-8 w-32 mb-4" />
            <Skeleton className="h-12 w-3/4 mb-4" />
            <Skeleton className="h-6 w-1/2 mb-8" />
            <Skeleton className="h-64 w-full mb-8" />
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!caseStudy) return null;

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/case-studies">
                <Button variant="ghost" className="mb-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Case Studies
                </Button>
              </Link>
            </div>

            <div className="text-center mb-12">
              <Badge className="mb-4 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400">
                {caseStudy.industry}
              </Badge>
              
              {caseStudy.subtitle && (
                <div className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">
                  {caseStudy.subtitle}
                </div>
              )}
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {caseStudy.title}
              </h1>
              
              <div className="flex items-center justify-center gap-6 text-slate-600 dark:text-slate-300">
                <div className="flex items-center">
                  <Building className="w-4 h-4 mr-2" />
                  {caseStudy.client}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(caseStudy.createdAt!).getFullYear()}
                </div>
              </div>
            </div>

            {/* Hero Image */}
            {caseStudy.imageUrl && (
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img 
                  src={caseStudy.imageUrl}
                  alt={caseStudy.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
          </div>
        </section>

        {/* Key Metrics */}
        {Array.isArray(caseStudy.results) && (
          <section className="py-16 bg-white dark:bg-slate-800">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold mb-4">Key Results</h2>
                <p className="text-xl text-slate-600 dark:text-slate-300">
                  Measurable outcomes that demonstrate the success of our partnership.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {(caseStudy.results as Array<{metric: string, value: string}>).map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                    <div className="text-slate-600 dark:text-slate-300">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Case Study Content */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="prose prose-slate dark:prose-invert max-w-none">
                  {/* Challenge */}
                  <div className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-xl flex items-center justify-center mr-4">
                        <Target className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold">The Challenge</h2>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {caseStudy.challenge.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center mr-4">
                        <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold">Our Solution</h2>
                    </div>
                    <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {caseStudy.solution.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  {/* Implementation Timeline */}
                  <div className="mb-12">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center mr-4">
                        <Clock className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <h2 className="text-2xl font-serif font-bold">Implementation Process</h2>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-white text-sm font-bold">1</div>
                        <div>
                          <h3 className="font-semibold mb-2">Discovery & Assessment</h3>
                          <p className="text-slate-600 dark:text-slate-400">Comprehensive analysis of existing systems and requirements</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-white text-sm font-bold">2</div>
                        <div>
                          <h3 className="font-semibold mb-2">Strategy Development</h3>
                          <p className="text-slate-600 dark:text-slate-400">Created tailored approach based on client needs and industry best practices</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 text-white text-sm font-bold">3</div>
                        <div>
                          <h3 className="font-semibold mb-2">Execution & Monitoring</h3>
                          <p className="text-slate-600 dark:text-slate-400">Implementation with continuous monitoring and optimization</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="glass dark:glass-dark rounded-2xl p-8 sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Project Details</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-slate-500 dark:text-slate-400 mb-2">Industry</h4>
                      <p className="font-semibold">{caseStudy.industry}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-500 dark:text-slate-400 mb-2">Client</h4>
                      <p className="font-semibold">{caseStudy.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-500 dark:text-slate-400 mb-2">Project Type</h4>
                      <p className="font-semibold">Staffing & Consulting</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-500 dark:text-slate-400 mb-2">Completion</h4>
                      <p className="font-semibold">{new Date(caseStudy.createdAt!).getFullYear()}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                    <Button className="w-full mb-4" asChild>
                      <Link href="/contact?type=client">Start Your Project</Link>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/case-studies">View More Cases</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Case Studies */}
        <section className="py-20 bg-white dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-serif font-bold mb-6">More Success Stories</h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Explore how we've helped other companies achieve their goals.
              </p>
            </div>
            
            <div className="text-center">
              <Button size="lg" asChild>
                <Link href="/case-studies">View All Case Studies</Link>
              </Button>
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