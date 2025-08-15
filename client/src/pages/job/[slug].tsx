import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ApplyForm } from "@/components/job/apply-form";
import { useJobBySlug } from "@/lib/hooks";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Building,
  Mail,
  Phone,
  ArrowLeft,
  Share2,
  Bookmark
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function JobPage() {
  const { slug } = useParams();
  const { data: job, isLoading, error } = useJobBySlug(slug || "");

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The job you're looking for doesn't exist or has been removed.
            </p>
            <Link to="/jobs">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Jobs
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
          {/* Loading skeleton */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Skeleton className="h-8 w-32 mb-4" />
                <Skeleton className="h-12 w-3/4 mb-4" />
                <Skeleton className="h-6 w-1/2 mb-8" />
                <div className="space-y-4 mb-8">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <Skeleton className="h-64 w-full" />
              </div>
              <div>
                <Skeleton className="h-96 w-full" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!job) return null;

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

  const companyInitial = job.company ? job.company.charAt(0).toUpperCase() : '';

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20 md:pt-28"> {/* Added pt-20 */}
        {/* Job Header */}
        <section className="py-12 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <Link to="/jobs">
                <Button variant="ghost" className="mb-4">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Jobs
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="w-16 h-16 rounded-xl mr-6">
                      {job.companyLogo ? (
                        <AvatarImage src={job.companyLogo} alt={`${job.company} logo`} />
                      ) : (
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xl font-bold">
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
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="w-4 h-4" />
                    </Button>
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
              </div>

              <div className="lg:col-span-1">
                <div className="glass dark:glass-dark rounded-xl p-6 sticky top-24">
                  <Button className="w-full mb-4" size="lg">
                    Apply Now
                  </Button>
                  
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center text-slate-600 dark:text-slate-300">
                      <Clock className="w-4 h-4 mr-2" />
                      Posted {new Date(job.createdAt!).toLocaleDateString()}
                    </div>
                    
                    {job.recruiterName && (
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-4">
                        <h4 className="font-semibold mb-2">Recruiter Contact</h4>
                        <div className="space-y-2">
                          <div className="flex items-center text-slate-600 dark:text-slate-300">
                            <Users className="w-4 h-4 mr-2" />
                            {job.recruiterName}
                          </div>
                          {job.recruiterEmail && (
                            <div className="flex items-center text-slate-600 dark:text-slate-300">
                              <Mail className="w-4 h-4 mr-2" />
                              <a href={`mailto:${job.recruiterEmail}`} className="hover:text-primary">
                                {job.recruiterEmail}
                              </a>
                            </div>
                          )}
                          {job.recruiterPhone && (
                            <div className="flex items-center text-slate-600 dark:text-slate-300">
                              <Phone className="w-4 h-4 mr-2" />
                              <a href={`tel:${job.recruiterPhone}`} className="hover:text-primary">
                                {job.recruiterPhone}
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
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

              <div className="lg:col-span-1">
                <ApplyForm job={job} />
              </div>
            </div>
          </div>
        </section>

        {/* Similar Jobs */}
        <section className="py-20 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Similar Opportunities</h2>
            <div className="text-center">
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Discover more opportunities that match your skills and interests.
              </p>
              <Button asChild>
                <Link to="/jobs">View All Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}