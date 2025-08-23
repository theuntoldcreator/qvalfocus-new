import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle, BookOpen } from "lucide-react";

export default function BlogManagementPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Blog Posts</CardTitle>
          <Button asChild>
            <Link to="/admin/dashboard/blogs/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Blog Post
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-center py-20">
            <BookOpen className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No blog posts yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Start creating engaging content for your audience.
            </p>
            <Button asChild className="mt-4">
              <Link to="/admin/dashboard/blogs/new">
                <PlusCircle className="mr-2 h-4 w-4" />
                Create New Blog Post
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}