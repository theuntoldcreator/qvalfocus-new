import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import Index from "./pages/index";
import About from "./pages/about";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog-post";
import JobDetail from "./pages/job-detail";
import PrivacyPolicy from "./pages/privacy-policy";
import TermsOfService from "./pages/terms-of-service";
import Apply from "./pages/apply";
import Careers from "./pages/careers";

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