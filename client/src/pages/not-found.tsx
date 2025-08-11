import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Header } from "@/components/layout/header"; // Import Header
import { Footer } from "@/components/layout/footer"; // Import Footer

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col"> {/* Use flex-col for layout */}
      <Header /> {/* Add Header */}
      <main className="pt-20 flex-grow flex items-center justify-center bg-gray-50 dark:bg-slate-900"> {/* Added pt-20 and flex-grow */}
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-slate-300">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer /> {/* Add Footer */}
    </div>
  );
}