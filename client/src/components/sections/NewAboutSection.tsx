import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, LineChart, Clock, Star, UserPlus, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Clock,
    title: "Timely Interviews",
    description: "Nulla acnia tempus lectus, sit amet lema umiliguia pharerta vamus quam consecter varius quam.",
  },
  {
    icon: Star,
    title: "Building The Trust",
    description: "Nulla acnia tempus lectus, sit amet lema umiliguia pharerta vamus quam consecter varius quam.",
  },
  {
    icon: UserPlus,
    title: "Talent Acquisition",
    description: "Nulla acnia tempus lectus, sit amet lema umiliguia pharerta vamus quam consecter varius quam.",
  },
];

export function NewAboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Title */}
        <div className="text-center md:text-left mb-16">
          <div className="flex justify-between items-start">
            <div>
              <p className="font-semibold text-yellow-500 mb-2">Better Employment Solutions</p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white max-w-2xl">
                Connecting Talent With Opportunities – Start Your Career Today!
              </h1>
            </div>
            <ArrowRight className="hidden md:block w-16 h-16 text-slate-300 dark:text-slate-600 -rotate-45" />
          </div>
          <hr className="mt-8 border-slate-200 dark:border-slate-700" />
        </div>

        {/* Content Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column: Image */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Colleagues collaborating in an office"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column: Text and Stats */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              We know all the hiring requirements of clients – including business type, job roles, qualifications & skills.
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Montes purus acesus lorem egestas metus feugiat ultrices. Dui elem entum lectus diam. Adipiscing pellentesque amet iaculis nunc faucibus valis faucibus matis pulvinar tempore. Dapibus ligua sit ornare amet elit ante hendrerit ipsum vitae ullamcorper.
            </p>
            <Button asChild className="bg-yellow-400 text-black hover:bg-yellow-500">
              <Link to="/about">
                About Us <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="bg-violet-100/50 dark:bg-violet-900/20 rounded-2xl p-6 text-center">
                <TrendingUp className="w-10 h-10 text-violet-500 mx-auto mb-4" />
                <p className="text-5xl font-bold text-slate-900 dark:text-white">40k</p>
                <p className="text-slate-600 dark:text-slate-300">Jobs Placement</p>
              </div>
              <div className="bg-green-100/50 dark:bg-green-900/20 rounded-2xl p-6 text-center">
                <LineChart className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <p className="text-5xl font-bold text-slate-900 dark:text-white">6.1%</p>
                <p className="text-slate-600 dark:text-slate-300">Growth This Year</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Block */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            We Offer High Quality Staffing Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-yellow-100/50 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-yellow-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}