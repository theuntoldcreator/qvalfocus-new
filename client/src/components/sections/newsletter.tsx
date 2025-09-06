import { NewsletterForm } from "@/components/forms/newsletter-form";

export function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Stay Ahead of the Curve
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8">
          Get insights on industry trends, salary reports, and career advice delivered monthly.
        </p>
        
        <NewsletterForm />
        
        <p className="text-sm text-primary-foreground/60 mt-4">
          No spam, unsubscribe anytime. Read our{" "}
          <a href="/legal/privacy" className="underline hover:text-white">privacy policy</a>.
        </p>
      </div>
    </section>
  );
}