import { ServiceCategoryCard } from "./service-category-card";
import { services, industries } from "@/lib/data";
import * as LucideIcons from "lucide-react"; // Import all Lucide icons for type safety

export function ServiceCategories() {
  const categories = [
    {
      title: "Permanent Staffing", // Changed title to match image
      initialImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      iconName: "Users" as keyof typeof LucideIcons,
      link: services[0].link, // Link to Staffing Solution
    },
    {
      title: "Temporary Staffing", // Changed title to match image
      initialImage: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      iconName: "RefreshCcw" as keyof typeof LucideIcons, // Using RefreshCcw for temporary
      link: services[0].link, // Link to Staffing Solution
    },
    {
      title: "Contract Staffing", // Changed title to match image
      initialImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      hoverImage: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      iconName: "Handshake" as keyof typeof LucideIcons, // Using Handshake for contract
      link: services[0].link, // Link to Staffing Solution
    },
    {
      title: "Project Solutions", // Using Project Solutions
      initialImage: industries[1].initialImage, // Using IT image for project solution
      hoverImage: industries[1].hoverImage,
      iconName: "HardHat" as keyof typeof LucideIcons,
      link: services[1].link, // Link to Project Solution
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <ServiceCategoryCard
              key={index}
              title={category.title}
              initialImage={category.initialImage}
              hoverImage={category.hoverImage}
              iconName={category.iconName}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}