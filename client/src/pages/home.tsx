import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AboutSection } from "@/components/sections/about-section";
import { Industries } from "@/components/sections/industries";
import { FeaturedJobs } from "@/components/sections/featured-jobs";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyWorkWithUs } from "@/components/sections/why-work-with-us";
import { Newsletter } from "@/components/sections/newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
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