import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services"; // This will be replaced later
import { AboutSection } from "@/components/sections/about-section"; // This will be replaced later
import { Industries } from "@/components/sections/industries"; // This will be replaced later
import { FeaturedJobs } from "@/components/sections/featured-jobs"; // This will be replaced later
import { Testimonials } from "@/components/sections/testimonials"; // This will be replaced later
import { WhyWorkWithUs } from "@/components/sections/why-work-with-us"; // This will be replaced later
import { Newsletter } from "@/components/sections/newsletter"; // This will be replaced later

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900"> {/* Adjusted background */}
      <Header />
      <main>
        <Hero />
        {/* The following sections will be replaced in subsequent steps */}
        <Services />
        <AboutSection />
        <WhyWorkWithUs />
        <Industries />
        <FeaturedJobs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}