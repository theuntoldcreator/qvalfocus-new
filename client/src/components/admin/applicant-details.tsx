import { type Application } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, Link as LinkIcon } from "lucide-react";

type ApplicationWithJob = Application & { jobs: { title: string; slug: string } | null };

interface ApplicantDetailsProps {
  applicant: ApplicationWithJob | null;
}

export function ApplicantDetails({ applicant }: ApplicantDetailsProps) {
  if (!applicant) {
    return (
      <Card className="h-full flex items-center justify-center">
        <CardContent>
          <p className="text-slate-500">Select an applicant to see details</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-x-4">
        <Avatar className="h-16 w-16">
          <AvatarFallback>{applicant.first_name[0]}{applicant.last_name[0]}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-2xl">{applicant.first_name} {applicant.last_name}</CardTitle>
          <CardDescription>{applicant.current_role || 'No role specified'}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-2">Contact Information</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center"><Mail className="w-4 h-4 mr-2" /> {applicant.email}</div>
            {applicant.phone && <div className="flex items-center"><Phone className="w-4 h-4 mr-2" /> {applicant.phone}</div>}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Professional Links</h4>
          <div className="flex space-x-2">
            {applicant.linkedin && <Button variant="outline" size="sm" asChild><a href={applicant.linkedin} target="_blank"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a></Button>}
            {applicant.github && <Button variant="outline" size="sm" asChild><a href={applicant.github} target="_blank"><Github className="w-4 h-4 mr-2" /> GitHub</a></Button>}
            {applicant.portfolio && <Button variant="outline" size="sm" asChild><a href={applicant.portfolio} target="_blank"><LinkIcon className="w-4 h-4 mr-2" /> Portfolio</a></Button>}
          </div>
        </div>
        {applicant.cover_letter && (
          <div>
            <h4 className="font-semibold mb-2">Cover Letter</h4>
            <p className="text-sm text-slate-600 whitespace-pre-wrap">{applicant.cover_letter}</p>
          </div>
        )}
        {applicant.resume_url && (
          <div>
            <Button asChild><a href={applicant.resume_url} target="_blank">View Resume</a></Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}