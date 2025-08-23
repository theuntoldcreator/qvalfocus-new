import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Toaster } from "./components/ui/toaster";
import { MobileNav } from "./components/layout/mobile-nav";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MobileNav />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}