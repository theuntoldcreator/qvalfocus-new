import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import type { Job } from "@shared/schema";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time':
        return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
      case 'contract':
        return 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200';
      case 'part-time':
        return 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200';
      default:
        return 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200';
    }
  };

  const jobSlug = job.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

  return (
    <div className="glass dark:glass-dark rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">{job.companyLogo}</span>
        </div>
        <Badge className={`px-2 py-1 rounded-full text-xs font-semibold ${getTypeColor(job.type)}`}>
          {job.type.replace('-', ' ')}
        </Badge>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{job.company}</p>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-3">
        {job.description.substring(0, 120)}...
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skills?.slice(0, 3).map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div>
          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-1">
            <MapPin className="w-4 h-4 mr-1" />
            {job.location}
          </div>
          {job.salary && (
            <p className="text-sm font-semibold text-primary">{job.salary}</p>
          )}
        </div>
        <Button variant="ghost" className="text-primary hover:text-primary/80 text-sm p-0" asChild>
          <Link href={`/jobs/${jobSlug}`}>
            Apply →
          </Link>
        </Button>
      </div>
    </div>
  );
}
