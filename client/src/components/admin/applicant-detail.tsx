import type { Application } from "@shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, MessageSquare, Link as LinkIcon, Github, Linkedin, FileText, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

interface ApplicantDetailProps {
  application: Application & { jobs: { title: string; slug: string } | null };
  onClose: () => void;
}

export function ApplicantDetail({ application, onClose }: ApplicantDetailProps) {
  const skills = ["Python", "Git", "CI/CD", "Data Modeling", "SQL", "React", "TypeScript"]; // Placeholder skills

  if (!application) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        Select an applicant to view details.
      </div>
    );
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-xl">Applicant Details</CardTitle>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden p-0">
        <ScrollArea className="h-full p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Avatar className="h-16 w-16">
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${application.first_name} ${application.last_name}`} />
              <AvatarFallback>{application.first_name[0]}{application.last_name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-bold">{application.first_name} {application.last_name}</h3>
              <p className="text-muted-foreground">{application.email}</p>
              {application.phone && <p className="text-muted-foreground">{application.phone}</p>}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Applied For</h4>
            {application.jobs ? (
              <Link to={`/jobs/${application.jobs.slug}`} className="text-primary hover:underline">
                {application.jobs.title}
              </Link>
            ) : (
              <p className="text-muted-foreground">Job not found</p>
            )}
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h4 className="font-semibold mb-2">ATS Match Score</h4>
            <div className="flex items-center gap-3">
              <Progress value={application.score || 0} className="w-full h-3" />
              <span className="font-bold text-lg">{application.score}%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              This score indicates how well the applicant's profile matches the job requirements.
            </p>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Experience & Role</h4>
            <p><strong>Level:</strong> {application.experience_level || 'N/A'}</p>
            <p><strong>Current Role:</strong> {application.current_role || 'N/A'}</p>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Cover Letter</h4>
            {application.cover_letter ? (
              <p className="text-muted-foreground whitespace-pre-wrap">{application.cover_letter}</p>
            ) : (
              <p className="text-muted-foreground italic">No cover letter provided.</p>
            )}
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Skills (Parsed)</h4>
            <div className="flex flex-wrap gap-2">
              {skills.length > 0 ? (
                skills.map(skill => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))
              ) : (
                <p className="text-muted-foreground italic">No skills parsed yet.</p>
              )}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Links</h4>
            <div className="space-y-2">
              {application.resume_url && (
                <a href={application.resume_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <FileText className="h-4 w-4 mr-2" /> Resume/CV
                </a>
              )}
              {application.linkedin && (
                <a href={application.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Linkedin className="h-4 w-4 mr-2" /> LinkedIn Profile
                </a>
              )}
              {application.github && (
                <a href={application.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <Github className="h-4 w-4 mr-2" /> GitHub Profile
                </a>
              )}
              {application.portfolio && (
                <a href={application.portfolio} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                  <LinkIcon className="h-4 w-4 mr-2" /> Portfolio
                </a>
              )}
              {!application.resume_url && !application.linkedin && !application.github && !application.portfolio && (
                <p className="text-muted-foreground italic">No external links provided.</p>
              )}
            </div>
          </div>

          <div className="mt-8 flex justify-end gap-2">
            <Button variant="outline">
              <ThumbsUp className="h-4 w-4 mr-2" /> Shortlist
            </Button>
            <Button variant="outline">
              <ThumbsDown className="h-4 w-4 mr-2" /> Reject
            </Button>
            <Button>
              <MessageSquare className="h-4 w-4 mr-2" /> Message
            </Button>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}