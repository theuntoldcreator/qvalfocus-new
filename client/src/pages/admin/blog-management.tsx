import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PlusCircle, BookOpen, Edit, Trash2, Eye } from "lucide-react";
import { useBlogs, useDeleteBlog } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

export default function BlogManagementPage() {
  const { data: blogs, isLoading } = useBlogs();
  const deleteBlog = useDeleteBlog();
  const { toast } = useToast();

  const handleDelete = (id: string) => {
    deleteBlog.mutate(id, {
      onSuccess: () => {
        toast({ title: "Blog post deleted successfully!" });
      },
      onError: (error) => {
        toast({
          title: "Error deleting blog post",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  };

  return (
    <div className="space-y-8">
      <Card className="bg-white shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Blog Posts</CardTitle>
          <Button asChild> {/* This is the button */}
            <Link to="/admin/dashboard/blogs/new">
              <PlusCircle className="mr-2 h-4 w-4" />
              New Blog Post
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
            </div>
          ) : blogs && blogs.length > 0 ? (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Author</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Publish Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow key={blog.id}>
                    <TableCell className="font-medium">{blog.title}</TableCell>
                    <TableCell>{blog.author}</TableCell>
                    <TableCell>{blog.category}</TableCell>
                    <TableCell>{format(new Date(blog.publishDate), 'PPP')}</TableCell>
                    <TableCell>
                      <Badge variant={blog.status === 'published' ? 'default' : 'secondary'}>
                        {blog.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right space-x-2">
                      {blog.status === 'published' && (
                        <Button asChild variant="ghost" size="icon" title="View Public Post">
                          <a href={`/blogs/${blog.slug}`} target="_blank" rel="noopener noreferrer">
                            <Eye className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      <Button asChild variant="ghost" size="icon" title="Edit Blog Post">
                        <Link to={`/admin/dashboard/blogs/edit/${blog.slug}`}>
                          <Edit className="h-4 w-4" />
                        </Link>
                      </Button>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive" size="icon" title="Delete Blog Post">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. This will permanently delete the blog post.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDelete(blog.id)}>
                              Delete
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
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
          )}
        </CardContent>
      </Card>
    </div>
  );
}