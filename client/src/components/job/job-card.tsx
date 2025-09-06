import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase } from "lucide-react";
import type { Job } from "@shared/schema";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:shadow-md transition-shadow duration-300">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
        <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 gap-x-4 gap-y-2">
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1.5" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-1.5" />
            <span className="capitalize">{job.type.replace('-', ' ')}</span>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 mt-4 sm:mt-0">
        <Button asChild>
          <Link to={`/jobs/${job.slug}`}>Apply Now</Link>
        </Button>
      </div>
    </div>
  );
}