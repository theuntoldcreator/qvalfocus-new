import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { ServiceCategories } from "@/components/sections/service-categories";
import { AboutSection } from "@/components/sections/about-section";
import { Industries } from "@/components/sections/industries";
import { FeaturedJobs } from "@/components/sections/featured-jobs";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyWorkWithUs } from "@/components/sections/why-work-with-us";
import { Newsletter } from "@/components/sections/newsletter";
import { ServiceCard } from "@/components/ui/ServiceCard";

const serviceCardDemos = [
  {
    label: "Recruitment Services",
    title: "Executive Search",
    description: "Mattis element semper tellus donec ornae. Eolor auctor pellen tesque urna nam lectus. Tellus risus dapibus ornare interdum tempore lorem.",
    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "A team of professionals collaborating in a modern office.",
    },
    href: "/services/executive-search"
  },
  {
    label: "Career Development",
    title: "Career Counseling",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: {
      src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "A person receiving career advice in a bright, open space.",
    },
    href: "/services/career-counseling"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header and Footer are now handled by RootLayout */}
      <main>
        <Hero />
        <AboutSection />
        <ServiceCategories />
        
        {/* Demo of the new ServiceCard component */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <ServiceCard {...serviceCardDemos[0]} />
            <ServiceCard {...serviceCardDemos[1]} revealDelayMs={200} />
          </div>
        </section>

        <WhyWorkWithUs />
        <Industries />
        <FeaturedJobs />
        <Testimonials />
        <Newsletter />
      </main>
    </div>
  );
}