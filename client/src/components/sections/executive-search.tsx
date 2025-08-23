import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { MoveUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const searchServices = [
  {
    subtitle: "Recruitment Services",
    title: "Executive Search",
    description: "Mattis element semper tellus donec ornae. Eolor auctor pellen tesque urna nam lectus. Tellus risus dapibus ornare interdum tempore lorem.",
    imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib-rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/executive-search"
  },
  {
    subtitle: "Talent Acquisition",
    title: "Talent Sourcing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://images.unsplash.com/photo-1556742502-ec-7c0e9f34b1?ixlib-rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/talent-sourcing"
  },
  {
    subtitle: "Career Development",
    title: "Career Counseling",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib-rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "/services/career-counseling"
  }
];

export function ExecutiveSearch() {
  const [api, setApi] = React.useState<CarouselApi>();
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // This effect drives the carousel's position based on vertical scroll
  React.useEffect(() => {
    const onScroll = () => {
      if (!api || !sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      const activeZoneStart = sectionTop - viewportHeight;
      const activeZoneEnd = sectionTop + sectionHeight - viewportHeight;
      
      if (scrollY > activeZoneStart && scrollY < activeZoneEnd) {
        const progress = (scrollY - activeZoneStart) / (activeZoneEnd - activeZoneStart);
        const totalSlides = api.scrollSnapList().length;
        const targetSlide = Math.min(totalSlides - 1, Math.floor(progress * totalSlides));
        
        if (api.selectedScrollSnap() !== targetSlide) {
          api.scrollTo(targetSlide);
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [api]);

  // This effect applies the 3D transformations as the carousel scrolls
  React.useEffect(() => {
    if (!api) return;

    const apply3DEffect = () => {
      const engine = api.internalEngine();
      const scrollProgress = engine.scrollProgress.get();

      api.slideNodes().forEach((slideNode, index) => {
        const slidePosition = index / (api.scrollSnapList().length - 1);
        const distanceFromCenter = slidePosition - scrollProgress;

        const scale = 1 - Math.abs(distanceFromCenter) * 0.4;
        const rotateY = distanceFromCenter * -30;
        const opacity = 1 - Math.abs(distanceFromCenter) * 0.5;
        const zIndex = 100 - Math.abs(Math.round(distanceFromCenter * 10));

        slideNode.style.transform = `rotateY(${rotateY}deg) scale(${scale})`;
        slideNode.style.opacity = `${opacity}`;
        slideNode.style.zIndex = `${zIndex}`;
      });
    };

    api.on("scroll", apply3DEffect);
    api.on("reInit", apply3DEffect);
    
    // Set initial state
    apply3DEffect();

    return () => {
      api.off("scroll", apply3DEffect);
    };
  }, [api]);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-slate-900 [perspective:1000px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent className="[transform-style:preserve-3d]">
            {searchServices.map((service, index) => (
              <CarouselItem key={index} className="transition-transform duration-300 ease-out">
                <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
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
        </Carousel>
      </div>
    </section>
  );
}