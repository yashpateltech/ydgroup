import { Link } from "react-router-dom";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useAuditModal } from "../context/AuditModalContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSeoDropdownOpen, setIsSeoDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { openModal } = useAuditModal();

  const seoLinks = [
    { name: "India", path: "/seo/india" },
    { name: "Australia", path: "/seo/australia" },
    { name: "Canada", path: "/seo/canada" }
  ];

  const serviceLinks = [
    { name: "SEO Optimization", path: "/services/seo" },
    { name: "AEO (Answer Engine)", path: "/services/aeo" },
    { name: "GEO (Generative Engine)", path: "/services/geo" },
    { name: "AI & Machine Learning", path: "/services/ai-ml" },
    { name: "Web Design", path: "/services/web-design" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-4 border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0047ff] text-white font-bold text-2xl">
            Y
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900">YD Groups</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-gray-900">
          <Link to="/" className="hover:text-[#0047ff] transition-colors">Home</Link>
          
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0047ff] transition-colors py-2">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2">
                {serviceLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="block p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-700 hover:text-[#0047ff]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* SEO Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsSeoDropdownOpen(true)}
            onMouseLeave={() => setIsSeoDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-[#0047ff] transition-colors py-2">
              SEO <ChevronDown className="h-4 w-4" />
            </button>
            {isSeoDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-2xl p-4 space-y-2 animate-in fade-in slide-in-from-top-2">
                {seoLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    to={link.path} 
                    className="block p-3 hover:bg-gray-50 rounded-xl transition-colors text-gray-700 hover:text-[#0047ff]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="hover:text-[#0047ff] transition-colors">About</Link>
          <Link to="/portfolio" className="hover:text-[#0047ff] transition-colors">Portfolio</Link>
          <Link to="/process" className="hover:text-[#0047ff] transition-colors">Process</Link>
          <Link to="/blog" className="hover:text-[#0047ff] transition-colors">Blog</Link>
          <Link to="/store" className="hover:text-[#0047ff] transition-colors font-bold text-[#0047ff]">Store</Link>
          <Link to="/contact" className="hover:text-[#0047ff] transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            onClick={openModal}
            className="hidden md:flex bg-black hover:bg-gray-800 text-white font-bold px-8 py-2 rounded-full text-sm"
          >
            Get Audit
          </Button>
          <button 
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b px-4 py-6 space-y-6 shadow-xl max-h-[80vh] overflow-y-auto">
          <Link to="/" className="block text-lg font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>Home</Link>
          
          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Services</p>
            {serviceLinks.map((link) => (
              <Link key={link.name} to={link.path} className="block text-lg font-bold text-gray-700 hover:text-[#0047ff]" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">SEO Countries</p>
            {seoLinks.map((link) => (
              <Link key={link.name} to={link.path} className="block text-lg font-bold text-gray-700 hover:text-[#0047ff]" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
            ))}
          </div>

          <Link to="/about" className="block text-lg font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/portfolio" className="block text-lg font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
          <Link to="/process" className="block text-lg font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>Process</Link>
          <Link to="/blog" className="block text-lg font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          <Link to="/store" className="block text-lg font-bold text-[#0047ff]" onClick={() => setIsMenuOpen(false)}>Store</Link>
          <Link to="/contact" className="block text-lg font-bold text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Button 
            onClick={() => { setIsMenuOpen(false); openModal(); }}
            className="w-full bg-black text-white font-bold rounded-full py-6"
          >
            Get Free Audit
          </Button>
        </div>
      )}
    </nav>
  );
}
