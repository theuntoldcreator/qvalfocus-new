import { Button } from "@/components/ui/button";
import { newsData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsCard = ({ post, className }: { post: (typeof newsData)[0], className?: string }) => (
  <div className={cn("group relative overflow-hidden rounded-2xl", className)}>
    <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className={cn(
      "relative flex flex-col justify-between p-6 w-full h-full",
      post.dark ? "bg-slate-900/70 text-white" : "bg-white/80 backdrop-blur-sm text-slate-800"
    )}>
      {post.date && (
        <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 text-center rounded-md p-2 leading-none font-bold">
          <div>{post.date.day}</div>
          <div>{post.date.month}</div>
        </div>
      )}
      <div>
        <p className="text-sm font-semibold text-primary">{post.category}</p>
        <h3 className="mt-2 text-xl font-semibold">
          <Link to={post.link} className="hover:underline">
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
      </div>
      <div className="mt-6">
        {post.author ? (
          <p className="text-sm opacity-80">By {post.author} · {post.readTime} read</p>
        ) : (
          <div className="font-semibold flex items-center group-hover:text-primary transition-colors">
            Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </div>
  </div>
);

export function NewsAndInsights() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Talent Sourcing & Recruitment</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
              Latest News & Insights
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/blog">
              Read More News <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((post, index) => (
            <NewsCard key={index} post={post} className="min-h-[380px]" />
          ))}
        </div>
      </div>
    </section>
  );
}