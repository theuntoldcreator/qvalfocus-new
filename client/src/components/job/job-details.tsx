import type { Job } from "@shared/schema";
import { Button } from "@/components/ui/button";
import {
  Share2,
  Bookmark,
  MapPin,
  Briefcase,
  Clock,
  Users,
  Zap,
  CheckCircle2,
  Circle,
} from "lucide-react";
import { formatDistanceToNow } from "date-fns";

interface JobDetailsProps {
  job: Job;
}

export function JobDetails({ job }: { job: Job }) {
  // Placeholder for applicant count
  const applicantCount = Math.floor(Math.random() * (150 - 40 + 1)) + 40;

  const requirementsList = job.requirements.split('\n').filter(Boolean);
  const responsibilitiesList = job.responsibilities.split('\n').filter(Boolean);
  const benefitsList = job.benefits ? job.benefits.split('\n').filter(Boolean) : [];

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 pb-6 border-b">
        <div>
          <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
          <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400 gap-x-4 gap-y-1">
            <div className="flex items-center">
              <Briefcase className="w-4 h-4 mr-1.5" />
              By {job.company}
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1.5" />
              {job.location}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1.5" />
              Posted {formatDistanceToNow(new Date(job.created_at))} ago
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1.5" />
              Over {applicantCount} applicants
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-4 sm:mt-0 flex-shrink-0">
          <Button variant="outline" size="icon">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button className="bg-theme-orange hover:bg-theme-orange-dark">Apply Now</Button>
        </div>
      </div>

      {/* Body */}
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Job Description</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{job.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Required Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {requirementsList.map((item, i) => (
              <div key={i} className="flex items-start">
                <Zap className="w-4 h-4 mr-3 mt-1 text-primary flex-shrink-0" />
                <span className="text-slate-600 dark:text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
            <div className="space-y-2">
              {responsibilitiesList.map((item, i) => (
                <div key={i} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-3 mt-1 text-primary flex-shrink-0" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Benefits</h2>
            <div className="space-y-2">
              {benefitsList.map((item, i) => (
                <div key={i} className="flex items-start">
                  <Circle className="w-2 h-2 mr-3 mt-2 text-primary flex-shrink-0 fill-current" />
                  <span className="text-slate-600 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Notes</h2>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Assist in conducting user research, including interviews, surveys, and usability testing, to gather insights into user needs and behaviors. Collaborate with designers to create wireframes, prototypes, and visual designs that align with project objectives and user requirements. Contribute to the development of interactive prototypes to demonstrate user flows and interactions. Support usability testing efforts by planning and conducting tests, analyzing results, and providing recommendations for design improvements.
          </p>
        </div>
      </div>
    </div>
  );
}