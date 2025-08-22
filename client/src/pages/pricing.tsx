import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { DollarSign } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleMobileMenu={() => {}} /> {/* Added onToggleMobileMenu prop */}
      <main className="pt-20 md:pt-28 flex-grow flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center p-8">
          <DollarSign className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
            Our flexible pricing plans will be detailed here soon. Contact us for a custom quote!
          </p>
          <Button asChild>
            <Link to="/contact">Contact Sales</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}