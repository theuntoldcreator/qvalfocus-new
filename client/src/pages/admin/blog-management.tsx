import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PlusCircle, BookOpen, Edit, Trash2, Eye } from "lucide-react";
import { useBlogs, useDeleteBlog } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { type Blog } from "@shared/schema";

export default function BlogManagementPage() {
  const { data: blogs, isLoading } = useBlogs();
  const { toast } = useToast();
  const deleteBlogMutation = useDeleteBlog();

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      deleteBlogMutation.mutate(id, {
        onSuccess: () => {
          toast({ title: "Blog post deleted successfully!" });
          // Here you would typically invalidate the query, but since it's mock data, we don't.
        },
        onError: (error: Error) => {
          toast({
            title: "Error deleting blog post",
            description: error.message,
            variant: "destructive",
          });
        },
      });
    }
  };

  if (isLoading) {
    return <Skeleton className="h-96 w-full" />;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <BookOpen className="w-6 h-6 mr-2" />
          Blog Management
        </CardTitle>
        <Button asChild>
          <Link to="/admin/new-blog">
            <PlusCircle className="w-4 h-4 mr-2" />
            Create New Post
          </Link>
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs?.map((blog: Blog) => (
              <TableRow key={blog.id}>
                <TableCell>{blog.title}</TableCell>
                <TableCell>{blog.author}</TableCell>
                <TableCell>{blog.status}</TableCell>
                <TableCell className="space-x-2">
                  <Button variant="outline" size="icon" asChild>
                    <Link to={`/blog/${blog.slug}`} target="_blank">
                      <Eye className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link to={`/admin/edit-blog/${blog.slug}`}>
                      <Edit className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="destructive" size="icon" onClick={() => handleDelete(blog.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}