import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ResumeUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeUploadModal({ isOpen, onClose }: ResumeUploadModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload Your Resume</DialogTitle>
          <DialogDescription>
            Don't see a role that fits? Upload your resume, and we'll keep you in mind for future opportunities.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="resume">Resume/CV</Label>
            <Input id="resume" type="file" />
            <p className="text-sm text-slate-500">PDF, DOC, DOCX (Max 5MB)</p>
          </div>
        </div>
        <Button type="submit" className="w-full">Submit</Button>
      </DialogContent>
    </Dialog>
  );
}