import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { ServiceCategories } from "@/components/sections/service-categories";
import { AboutSection } from "@/components/sections/about-section";
import { Industries } from "@/components/sections/industries";
import { FeaturedJobs } from "@/components/sections/featured-jobs";
import { Testimonials } from "@/components/sections/testimonials";
import { WhyWorkWithUs } from "@/components/sections/why-work-with-us";
import { Newsletter } from "@/components/sections/newsletter";
import { CardStackScroll } from "@/components/sections/card-stack-scroll";
import { ScrollAnimate } from "@/components/ui/scroll-animate";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { RecruitmentSectors } from "@/components/sections/RecruitmentSectors";

const stackCards = [
  {
    subtitle: "Recruitment Services",
    title: "Executive Search",
    description: "Mattis element semper tellus donec ornae. Eolor auctor pellen tesque urna nam lectus. Tellus risus dapibus ornare interdum tempore lorem.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib.rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/executive-search"
  },
  {
    subtitle: "Talent Acquisition",
    title: "Talent Sourcing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib.rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/talent-sourcing"
  },
  {
    subtitle: "Career Development",
    title: "Career Counseling",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib.rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/career-counseling"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header and Footer are now handled by RootLayout */}
      <main>
        <Hero />
        <ScrollAnimate>
          <AboutSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <ServiceCategories />
        </ScrollAnimate>
        
        <CardStackScroll cards={stackCards} />

        <ScrollAnimate>
          <WhyWorkWithUs />
        </ScrollAnimate>
        <ScrollAnimate>
          <RecruitmentSectors />
        </ScrollAnimate>
        <ScrollAnimate>
          <CtaBanner />
        </ScrollAnimate>
        <ScrollAnimate>
          <Industries />
        </ScrollAnimate>
        <ScrollAnimate>
          <FeaturedJobs />
        </ScrollAnimate>
        <ScrollAnimate>
          <Testimonials />
        </ScrollAnimate>
        <ScrollAnimate>
          <Newsletter />
        </ScrollAnimate>
      </main>
    </div>
  );
}