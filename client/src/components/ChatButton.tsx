import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function ChatButton() {
  return (
    <Button asChild className="bg-violet-100 text-primary hover:bg-violet-100 rounded-full w-24 h-10 flex items-center justify-center gap-1">
      <Link to="/contact"> {/* Assuming chat links to contact for now */}
        <MessageSquare className="h-4 w-4" />
        Chat
      </Link>
    </Button>
  );
}