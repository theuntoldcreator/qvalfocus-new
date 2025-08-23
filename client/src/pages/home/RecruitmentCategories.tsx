import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Upload } from "lucide-react";
import { Link } from "react-router-dom";

const CategoryCard = ({ image, title, link }: { image: string; title: string; link: string }) => (
  <Link to={link} className="relative block group overflow-hidden rounded-2xl">
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <h3 className="text-white text-3xl font-bold">{title}</h3>
    </div>
  </Link>
);

export function RecruitmentCategories() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <CategoryCard image="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/for-employers.jpg" title="For Employers" link="/contact?type=client" />
            <CategoryCard image="https://res.cloudinary.com/div5rg0md/image/upload/v1754902643/recruitment/for-job-seekers.jpg" title="For Job Seekers" link="/jobs" />
          </div>
          <div className="flex flex-col gap-8">
            <Card className="p-8 flex flex-col items-center justify-center text-center bg-white rounded-2xl">
              <p className="text-6xl font-bold text-slate-800">260k+</p>
              <p className="text-slate-500 mt-2">Jobs facilitated each year!</p>
            </Card>
            <div className="p-8 flex flex-col justify-center bg-green-800 rounded-2xl text-white">
              <h3 className="text-2xl font-semibold">Find The Right Organization</h3>
              <p className="mt-2 mb-6">Upload Your CV For Consultation</p>
              <Button variant="warning" size="lg" asChild>
                <Link to="/contact?type=candidate">
                  Drop Your CV <Upload className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}