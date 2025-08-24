import { PageHeader } from "../components/layout/PageHeader";
import { JobList } from "../components/sections/JobList";

export default function Careers() {
  return (
    <>
      <PageHeader
        title="Careers"
        breadcrumbItems={[
          { name: "Home", href: "/" },
          { name: "Careers" },
        ]}
      />
      <main className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JobList />
        </div>
      </main>
    </>
  );
}