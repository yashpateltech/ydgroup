import { Link } from "react-router-dom";
import { Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/#services" },
    { name: "About", path: "/#about" },
    { name: "Process", path: "/#process" },
    { name: "Contact", path: "/#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0078d4] text-white font-bold text-2xl shadow-lg shadow-blue-200">
              Y
            </div>
            <span className="text-2xl font-bold tracking-tight text-gray-900">YDGROUPS</span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-gray-600">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path} 
                className="hover:text-[#0078d4] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Button variant="outline" size="sm" className="gap-2 border-gray-200 text-gray-700 hover:bg-gray-50">
              <User className="h-4 w-4" />
              Client Portal
            </Button>
          </div>
          <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white font-bold px-6">
            Get Started
          </Button>
          <button 
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="block text-lg font-semibold text-gray-700 hover:text-[#0078d4]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t flex flex-col gap-4">
            <Button variant="outline" className="w-full justify-center">Client Portal</Button>
          </div>
        </div>
      )}
    </nav>
  );
}
