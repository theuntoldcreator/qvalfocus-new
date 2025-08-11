import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Industries } from "@/components/sections/industries";
import { FeaturedJobs } from "@/components/sections/featured-jobs";
import { Blogs } from "@/components/sections/blogs";
import { Newsletter } from "@/components/sections/newsletter";
import { WhyWorkWithUs } from "@/components/sections/why-work-with-us"; // New import

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyWorkWithUs /> {/* New section added */}
        <Services />
        <Industries />
        <FeaturedJobs />
        <Blogs />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}