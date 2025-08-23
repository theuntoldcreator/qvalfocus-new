import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ListChecks } from "lucide-react";

export default function ChangelogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onToggleMobileMenu={() => {}} />
      <main className="pt-20 md:pt-28 flex-grow flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center p-8">
          <ListChecks className="w-16 h-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Changelog</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-md">
            Stay up-to-date with our latest product updates and feature releases right here.
          </p>
          <Button asChild className="bg-theme-orange hover:bg-theme-orange-dark">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}