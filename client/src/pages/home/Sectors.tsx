import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { sectorsData } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function Sectors() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Industry Specific Recruitments</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Sectors We Recruit In
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sectorsData.map((sector) => (
            <Card key={sector.title} className="rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary/10 text-primary">
                      <sector.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <CardTitle className="text-lg font-semibold">{sector.title}</CardTitle>
                    <p className="text-sm text-slate-500">{sector.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {sector.roles.map((role) => (
                    <li key={role} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 mr-2" />
                      <span className="text-slate-600">{role}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}