import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const searchServices = [
  {
    subtitle: "Recruitment Services",
    title: "Executive Search",
    description: "Mattis element semper tellus donec ornae. Eolor auctor pellen tesque urna nam lectus. Tellus risus dapibus ornare interdum tempore lorem.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/executive-search"
  },
  {
    subtitle: "Talent Acquisition",
    title: "Talent Sourcing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/talent-sourcing"
  },
  {
    subtitle: "Career Development",
    title: "Career Counseling",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/career-counseling"
  }
];

export function ExecutiveSearch() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          <CarouselContent>
            {searchServices.map((service, index) => (
              <CarouselItem key={index}>
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div
                    className={cn(
                      "grid grid-cols-1 lg:grid-cols-2 items-center transition-all duration-500 ease-out",
                      current === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    )}
                  >
                    <div className="p-8 md:p-12">
                      <MoveUpRight className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-6" />
                      <p className="text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
                        {service.subtitle}
                      </p>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-slate-900 dark:text-white">
                        {service.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-300 mb-8">
                        {service.description}
                      </p>
                      <Button asChild className="bg-avada-yellow text-avada-green-darker hover:bg-yellow-400">
                        <Link to={service.link}>
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                    <div className="h-64 lg:h-full">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-16 right-0 flex gap-2">
            <CarouselPrevious className="static translate-y-0 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600" />
            <CarouselNext className="static translate-y-0 bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}