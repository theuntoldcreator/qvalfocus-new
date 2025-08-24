import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import Index from "./pages/Index";
import About from "./pages/about";
import Services from "./pages/Services";
import Contact from "./pages/contact";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import JobDetail from "./pages/JobDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Apply from "./pages/Apply";
import Careers from "./pages/Careers";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/:slug" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/jobs/:slug" element={<JobDetail />} />
        <Route path="/apply/:jobId" element={<Apply />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </Layout>
  );
}

export default App;