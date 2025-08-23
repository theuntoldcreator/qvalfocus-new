import { ServiceCategoryCard } from "./service-category-card";
import { services, industries } from "@/lib/data";
import * as LucideIcons from "lucide-react"; // Import all Lucide icons for type safety

export function ServiceCategories() {
  const serviceCategories = [
    {
      title: "Staffing Solutions",
      initialImage: industries[0].initialImage,
      hoverImage: industries[0].hoverImage,
      iconName: "Users" as keyof typeof LucideIcons,
      description: "We provide comprehensive staffing solutions to meet your business needs.",
      link: "/services/staffing-solutions",
    },
    {
      title: "Executive Search",
      initialImage: industries[2].initialImage,
      hoverImage: industries[2].hoverImage,
      iconName: "UserCheck" as keyof typeof LucideIcons,
      description: "Our executive search service helps you find top-tier leadership talent.",
      link: "/services/executive-search",
    },
    {
      title: "Project Solutions", // Using Project Solutions
      initialImage: industries[1].initialImage, // Using IT image for project solution
      hoverImage: industries[1].hoverImage,
      iconName: "HardHat" as keyof typeof LucideIcons,
      description: "We offer project-based hiring to support your short-term and long-term projects.",
      link: "/services/project-solutions",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            What We Offer
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We provide a range of recruitment services to help you find the right talent for your organization.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {serviceCategories.map((category) => (
            <ServiceCategoryCard key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}