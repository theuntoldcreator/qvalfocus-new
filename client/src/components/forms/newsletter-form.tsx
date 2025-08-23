import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useSubscribeNewsletter } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";

const newsletterSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const subscribeNewsletter = useSubscribeNewsletter();
  const { toast } = useToast();

  const form = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormData) => {
    try {
      setIsSubmitting(true);
      await subscribeNewsletter.mutateAsync(data);

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });

      form.reset();
    } catch (error: any) {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white text-slate-900"
                  {...field} 
                />
              </FormControl>
              <FormMessage className="text-white" />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          variant="default"
          disabled={isSubmitting}
          className="bg-white text-primary hover:bg-slate-200"
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </Form>
  );
}