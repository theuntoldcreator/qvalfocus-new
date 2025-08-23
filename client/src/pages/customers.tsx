import { Header } from "@/components/layout/header";

export default function CustomersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="pt-20 md:pt-28 flex-grow flex items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-6xl">
            Customers
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            This page is under construction.
          </p>
        </div>
      </main>
    </div>
  );
}