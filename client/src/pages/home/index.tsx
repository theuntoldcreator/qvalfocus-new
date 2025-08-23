import { ScrollToTopButton } from "@/components/ui/scroll-to-top-button";
import { Hero } from "./Hero";
import { NewsAndInsights } from "./NewsAndInsights";
import { RecruitmentCategories } from "./RecruitmentCategories";
import { Sectors } from "./Sectors";
import { WhyChooseUs } from "./WhyChooseUs";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <RecruitmentCategories />
        <WhyChooseUs />
        <Sectors />
        <NewsAndInsights />
        <ScrollToTopButton />
      </main>
    </div>
  );
}