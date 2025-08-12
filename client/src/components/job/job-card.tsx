import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, Building } from "lucide-react";
import type { Job } from "@shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  const companyInitial = job.company ? job.company.charAt(0).toUpperCase() : '';

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 flex flex-col h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-4">
          <Avatar className="w-12 h-12 rounded-lg">
            {job.companyLogo ? (
              <AvatarImage src={job.companyLogo} alt={`${job.company} logo`} />
            ) : (
              <AvatarFallback className="bg-primary text-white text-lg font-bold">
                {companyInitial || <Building className="w-6 h-6" />}
              </AvatarFallback>
            )}
          </Avatar>
          {job.tags && job.tags.length > 0 && (
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800">
              <Clock className="w-3 h-3 mr-1.5" />
              {job.tags[0]}
            </Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{job.title}</h3>
        <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 space-x-4 mb-4">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1.5" />
            {job.type}
          </div>
        </div>
      </div>
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 mt-4 flex justify-between items-center">
        <p className="text-sm text-slate-600 dark:text-slate-300 flex-1 pr-4 line-clamp-2">
          {job.description}
        </p>
        <Button asChild size="sm" className="flex-shrink-0">
          <Link to={`/jobs/${job.slug}`}>Apply Now</Link>
        </Button>
      </div>
    </div>
  );
}