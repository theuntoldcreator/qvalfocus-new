import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useSubscribeNewsletter } from "@/lib/hooks";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const newsletterFormSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export function NewsletterForm() {
  const { toast } = useToast();
  const subscribeMutation = useSubscribeNewsletter();

  const form = useForm<z.infer<typeof newsletterFormSchema>>({
    resolver: zodResolver(newsletterFormSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof newsletterFormSchema>) {
    subscribeMutation.mutate(values, {
      onSuccess: () => {
        toast({
          title: "Subscribed!",
          description: "Thanks for subscribing to our newsletter.",
        });
        form.reset();
      },
      onError: (error: Error) => {
        toast({
          title: "Uh oh! Something went wrong.",
          description: error.message,
          variant: "destructive",
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex space-x-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormControl>
                <Input type="email" placeholder="Your Email" className="bg-slate-800 border-slate-600 text-white" {...field} />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <Button type="submit" size="icon" disabled={subscribeMutation.isPending}>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </form>
    </Form>
  );
}