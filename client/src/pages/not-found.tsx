import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="pt-20 md:pt-28 flex-grow flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-red-500" />
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-gray-600 dark:text-slate-300">
              The page you are looking for does not exist.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}