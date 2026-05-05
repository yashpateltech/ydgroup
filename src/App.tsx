import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import StickyCTA from "./components/StickyCTA";
import Home from "./pages/Home";
import ServicePage from "./pages/ServicePage";
import CountryPage from "./pages/CountryPage";
import CityPage from "./pages/CityPage";
import About from "./pages/About";
import Process from "./pages/Process";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Store from "./pages/Store";
import Portfolio from "./pages/Portfolio";
import { AuditModalProvider, useAuditModal } from "./context/AuditModalContext";
import AuditModal from "./components/AuditModal";

function AppContent() {
  const { pathname, hash } = useLocation();
  const { isOpen, closeModal } = useAuditModal();

  const isAdminPage = pathname.startsWith("/admin");

  // Handle scroll to top or hash on route change
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <Breadcrumbs />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/seo/:country" element={<CountryPage />} />
          <Route path="/seo/:country/:city" element={<CityPage />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/store" element={<Store />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
      {!isAdminPage && <StickyCTA />}
      <AuditModal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
}

export default function App() {
  return (
    <AuditModalProvider>
      <AppContent />
    </AuditModalProvider>
  );
}
