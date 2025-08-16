import type { Job } from "@shared/schema";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  DollarSign, 
  Building
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface JobDetailsProps {
  job: Job;
}

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

export function JobDetails({ job }: JobDetailsProps) {
  const companyInitial = job.company ? job.company.charAt(0).toUpperCase() : '';

  return (
    <div>
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center mb-4">
          <Avatar className="w-16 h-16 rounded-xl mr-6">
            {job.company_logo ? (
              <AvatarImage src={job.company_logo} alt={`${job.company} logo`} />
            ) : (
              <AvatarFallback className="bg-gradient-to-r from-primary to-accent text-white text-xl font-bold">
                {companyInitial || <Building className="w-8 h-8" />}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">{job.title}</h1>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-2" />
                {job.company}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {job.location}
              </div>
              {job.salary && (
                <div className="flex items-center">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {job.salary}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-8">
        <Badge className={`px-3 py-1 ${getTypeColor(job.type)}`}>
          {job.type.replace('-', ' ')}
        </Badge>
        <Badge variant="outline" className="px-3 py-1">
          {job.level}
        </Badge>
        <Badge variant="outline" className="px-3 py-1">
          {job.industry}
        </Badge>
        {job.remote && (
          <Badge variant="outline" className="px-3 py-1 text-primary border-primary">
            Remote Friendly
          </Badge>
        )}
      </div>

      {job.skills && job.skills.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
          <div className="flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-3 py-1">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Job Description</h2>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {job.description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Key Responsibilities</h2>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {job.responsibilities.split('\n').map((responsibility, index) => (
              <p key={index} className="mb-2 flex items-start">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {responsibility}
              </p>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-serif font-bold mb-4">Requirements</h2>
          <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {job.requirements.split('\n').map((requirement, index) => (
              <p key={index} className="mb-2 flex items-start">
                <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                {requirement}
              </p>
            ))}
          </div>
        </div>

        {job.benefits && (
          <div className="mb-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Benefits</h2>
            <div className="text-slate-700 dark:text-slate-300 leading-relaxed">
              {job.benefits.split('\n').map((benefit, index) => (
                <p key={index} className="mb-2 flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {benefit}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}