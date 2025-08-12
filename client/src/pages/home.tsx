import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { FeaturedJobs } from "@/components/sections/featured-jobs";
import { Testimonials } from "@/components/sections/testimonials";
import { Newsletter } from "@/components/sections/newsletter";
import { WhyWorkWithUs } from "@/components/sections/why-work-with-us";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-[120px]"> {/* Adjusted padding-top to account for fixed header */}
        <Hero />
        <WhyWorkWithUs />
        <Services />
        <Industries />
        <FeaturedJobs />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}