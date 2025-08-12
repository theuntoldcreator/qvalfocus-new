import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useTestimonials } from "@/lib/hooks";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, Briefcase } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export function Testimonials() {
  const { data: testimonials, isLoading } = useTestimonials();

  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="text-left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
              CUSTOMER FEEDBACKS
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              See What Our Clients Have To Say
            </h2>
          </div>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-2xl bg-slate-800" />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-8">
              {testimonials?.map((testimonial: Testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-8 md:basis-1/2 lg:basis-1/3">
                  <div className="p-8 bg-slate-800 rounded-2xl h-full flex flex-col relative overflow-hidden min-h-[320px]">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xl font-bold">{testimonial.company}</span>
                    </div>
                    <p className="text-slate-300 mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>
                    <div className="border-t border-slate-700 pt-6 flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <Quote className="absolute -bottom-4 -right-4 w-32 h-32 text-slate-700/50" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-24 right-0 flex space-x-2">
              <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
              <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
}