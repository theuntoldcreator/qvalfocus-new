import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sun } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <Badge variant="outline" className="mb-6 py-2 px-4 rounded-full border-slate-200 bg-white shadow-sm">
              <Sun className="w-4 h-4 mr-2 text-slate-500" />
              2.0 version is here
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-sans text-slate-900 dark:text-white">
              Welcome to the <br />
              <span className="font-serif italic text-slate-600 dark:text-slate-400">innovation</span> oasis
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto lg:mx-0">
              Step into our innovation oasis, where groundbreaking ideas bloom, and every click is a step into a world of endless possibilities.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">Get Started</Button>
              <Button size="lg" variant="outline" className="border-slate-300 bg-white">Watch Demo</Button>
            </div>
          </div>

          {/* Right Column: Grid of Cards */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Column 1 */}
            <div className="space-y-4 md:space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Phone with stock chart"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </div>
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-center items-center text-center border border-slate-100">
                <p className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">27k+</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Raised by startups</p>
              </div>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-4 md:space-y-6 mt-0 md:mt-12">
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-center items-center text-center border border-slate-100">
                <p className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">$14B</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Funds & Syndicates</p>
              </div>
              <div className="bg-slate-50 rounded-3xl p-6 md:p-8 shadow-md flex flex-col justify-center items-center text-center border border-slate-100">
                <p className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">80k</p>
                <p className="text-slate-600 dark:text-slate-400 mt-2 mb-4 text-sm">Active members</p>
                <div className="flex -space-x-2">
                  <Avatar className="h-8 w-8 border-2 border-slate-50">
                    <AvatarImage src="https://i.pravatar.cc/150?img=1" />
                    <AvatarFallback>A</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-slate-50">
                    <AvatarImage src="https://i.pravatar.cc/150?img=2" />
                    <AvatarFallback>B</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-slate-50">
                    <AvatarImage src="https://i.pravatar.cc/150?img=3" />
                    <AvatarFallback>C</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-slate-50">
                    <AvatarImage src="https://i.pravatar.cc/150?img=4" />
                    <AvatarFallback>D</AvatarFallback>
                  </Avatar>
                  <Avatar className="h-8 w-8 border-2 border-slate-50">
                    <AvatarImage src="https://i.pravatar.cc/150?img=5" />
                    <AvatarFallback>E</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}