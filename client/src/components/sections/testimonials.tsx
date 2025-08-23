import { useTestimonials } from "@/lib/hooks";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { Star } from "lucide-react";

export function Testimonials() {
  const { data: testimonials, isLoading } = useTestimonials();

  return (
    <section className="py-16 sm:py-24 bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our Clients Say
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4">
                      <Skeleton className="h-64 w-full" />
                    </div>
                  </CarouselItem>
                ))
              ) : (
                testimonials?.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-4 h-full">
                      <Card className="bg-slate-700 border-slate-600 text-white h-full flex flex-col">
                        <CardContent className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center mb-4">
                            <Avatar className="h-12 w-12 mr-4">
                              <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                              <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold">{testimonial.name}</h3>
                              <p className="text-sm text-slate-400">{testimonial.role}</p>
                            </div>
                          </div>
                          <p className="text-slate-300 mb-6 flex-grow">
                            "{testimonial.testimonial}"
                          </p>
                          <div className="flex items-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
            <CarouselPrevious className="text-white" />
            <CarouselNext className="text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}