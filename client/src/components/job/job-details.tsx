import type { Job } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export function JobDetails({ job }: JobDetailsProps) {
  const details = [
    job.type,
    job.industry,
    job.location,
    job.remote ? 'Remote' : null,
    job.salary,
  ].filter(Boolean);

  return (
    <div className="space-y-8">
      {/* Job Title Card */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{job.title}</h1>
          <Button variant="outline" size="sm">
            <Share2 className="w-4 h-4 mr-2" />
            Share job
          </Button>
        </div>
        <div className="flex flex-wrap items-center text-sm text-slate-500 dark:text-slate-400">
          {details.map((detail, index) => (
            <span key={index} className="capitalize">
              {detail}
              {index < details.length - 1 && <span className="mx-2">&bull;</span>}
            </span>
          ))}
        </div>
      </div>

      {/* Job Description Card */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2 className="font-bold">Job Description</h2>
          <p>{job.description}</p>

          <h2 className="font-bold">Key Responsibilities</h2>
          <ul>
            {job.responsibilities.split('\n').map((item, i) => <li key={i}>{item}</li>)}
          </ul>

          <h2 className="font-bold">Requirements</h2>
          <ul>
            {job.requirements.split('\n').map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}