import { BarChart3, Construction, Briefcase, Plane, GraduationCap, Computer, ChevronRight } from 'lucide-react';

const sectors = [
  {
    icon: BarChart3,
    title: "HR, Sales & Marketing",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Operation Managers", "Sales Representatives", "Accountants & Trainers"],
  },
  {
    icon: Construction,
    title: "Construction & Design",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Architects", "Project Managers", "Electrical & Mechanical Engineers"],
  },
  {
    icon: Briefcase,
    title: "Govt. & Foreign Affairs",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Diplomatic Agents", "Political Consultants", "Bureaucrats & Policy Analysts"],
  },
  {
    icon: Plane,
    title: "Transport & Logistics",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Executives & Misc. Staff", "Customer Service Officers", "Transportation & Freight Managers"],
  },
  {
    icon: GraduationCap,
    title: "Education & Planning",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Teachers & Clerks", "Educational Publishers", "Principals & Administrators"],
  },
  {
    icon: Computer,
    title: "Computer & IT Sector",
    subtitle: "Global Talent Recruiting Services",
    roles: ["Data Scientists", "Cybersecurity Engineers", "Animators, Designers & Programmers"],
  },
];

export function RecruitmentSectors() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="font-semibold text-primary inline-block relative pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-yellow-400">
            Industry Specific Recruitments
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-serif mt-4 text-slate-900 dark:text-white">
            Sectors We Recruit In
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <Icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{sector.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{sector.subtitle}</p>
                <ul className="space-y-3">
                  {sector.roles.map((role, i) => (
                    <li key={i} className="flex items-center text-slate-600 dark:text-slate-300">
                      <ChevronRight className="w-4 h-4 mr-2 text-primary flex-shrink-0" />
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}