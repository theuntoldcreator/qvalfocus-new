import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";
import { industries } from "@/lib/data";
import {
  Briefcase,
  Building,
  Landmark,
  Plane,
  GraduationCap,
  Computer,
  Icon as LucideIcon,
} from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Briefcase,
  Building,
  Landmark,
  Plane,
  GraduationCap,
  Computer,
};

export default function IndustriesPage() {
  return (
    <>
      <header className="bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-slate-900">Industries We Serve</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
              We specialize in connecting top talent with leading companies across a diverse range of industries. Our expert recruiters understand the unique challenges and opportunities within each sector.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Industries</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {industries.map((industry) => {
            const Icon = iconMap[industry.icon];
            return (
              <Link key={industry.id} to={`/industries/${industry.slug}`} className="relative rounded-2xl overflow-hidden h-96 group block">
                <img src={industry.imageUrl} alt={industry.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  {Icon && <Icon className="w-12 h-12 mb-4 text-primary" />}
                  <h3 className="text-3xl font-bold">{industry.name}</h3>
                  <p className="mt-2 opacity-90 max-w-xs">{industry.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
}