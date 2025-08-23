import type { Application } from "@shared/schema";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface ApplicantCardProps {
  application: Application & { jobs: { title: string } | null };
}

export function ApplicantCard({ application }: ApplicantCardProps) {
  const skills = ["Python", "Git", "CI/CD", "Data Modeling", "SQL"]; // Placeholder skills

  return (
    <Card className="bg-slate-800 border-slate-700 text-white">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${application.first_name} ${application.last_name}`} />
              <AvatarFallback>{application.first_name[0]}{application.last_name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-bold">{application.first_name} {application.last_name}</p>
              <p className="text-sm text-slate-400">{application.current_role || "No role specified"}</p>
              <p className="text-sm text-slate-400">{application.email}</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" className="border-green-500 text-green-500 hover:bg-green-500/10 hover:text-green-500">
              <ThumbsUp className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="border-red-500 text-red-500 hover:bg-red-500/10 hover:text-red-500">
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-4">
          {application.cover_letter && (
            <p className="text-sm text-slate-300 mb-4 line-clamp-2">
              Cover letter: {application.cover_letter}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <Badge key={skill} variant="secondary" className="bg-slate-700 text-slate-300">{skill}</Badge>
            ))}
          </div>
        </div>

        <div className="mt-4 flex space-x-2">
          <Button variant="outline" className="flex-1 border-slate-600 hover:bg-slate-700">Message</Button>
          <Button className="flex-1 bg-green-600 hover:bg-green-700">Hire</Button>
        </div>
      </CardContent>
    </Card>
  );
}