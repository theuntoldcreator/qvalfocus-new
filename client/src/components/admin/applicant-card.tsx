import type { Application } from "@shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown, MessageSquare, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ApplicantCardProps {
  application: Application & { jobs: { title: string } | null };
  onSelect: (application: Application & { jobs: { title: string } | null }) => void;
  isSelected: boolean;
}

export function ApplicantCard({ application, onSelect, isSelected }: ApplicantCardProps) {
  const skills = ["Python", "Git", "CI/CD", "Data Modeling", "SQL"]; // Placeholder skills

  return (
    <Card 
      className={`cursor-pointer transition-all ${isSelected ? "border-primary ring-2 ring-primary/50" : "border-slate-200 hover:border-slate-300"}`}
      onClick={() => onSelect(application)}
    >
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${application.first_name} ${application.last_name}`} />
              <AvatarFallback>{application.first_name[0]}{application.last_name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold text-lg">{application.first_name} {application.last_name}</p>
              <p className="text-sm text-muted-foreground">{application.current_role || "No role specified"}</p>
              <p className="text-sm text-muted-foreground">{application.email}</p>
            </div>
          </div>
          <div className="flex flex-col items-end space-y-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              ATS Score: {application.score}%
            </Badge>
            <Progress value={application.score || 0} className="w-24 h-2" />
          </div>
        </div>

        <div className="mt-2">
          {application.cover_letter && (
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              Cover letter: {application.cover_letter}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <Button variant="outline" size="sm" className="flex-1">
            <ThumbsUp className="h-4 w-4 mr-2" /> Shortlist
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <ThumbsDown className="h-4 w-4 mr-2" /> Reject
          </Button>
          <Button variant="secondary" size="sm" className="flex-1">
            <MessageSquare className="h-4 w-4 mr-2" /> Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}