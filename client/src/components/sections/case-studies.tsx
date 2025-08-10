import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useFeaturedCaseStudies } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";

export function CaseStudies() {
  const { data: caseStudies, isLoading } = useFeaturedCaseStudies();

  return (
    <section id="case-studies" className="py-20 bg-slate-100 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Success Stories</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Real results from our partnerships with industry leaders.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {isLoading ? (
            Array.from({ length: 2 }).map((_, i) => (
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
            ))
          ) : (
            caseStudies?.slice(0, 2).map((caseStudy) => (
              <div key={caseStudy.id} className="glass dark:glass-dark rounded-2xl p-8 hover:scale-105 transition-all duration-300">
                <div className="w-full h-48 rounded-xl mb-6 overflow-hidden">
                  <img 
                    src={caseStudy.imageUrl || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"} 
                    alt={caseStudy.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-sm text-primary font-semibold mb-2">{caseStudy.subtitle}</div>
                <h3 className="text-2xl font-bold mb-4">{caseStudy.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  {caseStudy.challenge.substring(0, 150)}...
                </p>
                {Array.isArray(caseStudy.results) && (
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {(caseStudy.results as Array<{metric: string, value: string}>).slice(0, 3).map((result, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                )}
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0" asChild>
                  <Link href={`/case-studies/${caseStudy.slug}`}>
                    Read Full Case Study →
                  </Link>
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
