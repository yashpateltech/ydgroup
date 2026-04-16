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
    { name: "Blog", path: "/#blog" },
    { name: "Contact", path: "/#contact" }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0047ff] text-white font-bold text-2xl">
            Y
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900">YD Groups</span>
        </Link>
        
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-gray-900">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="hover:text-[#0047ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button className="hidden md:flex bg-black hover:bg-gray-800 text-white font-bold px-8 py-2 rounded-full text-sm">
            Get Started
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
        <div className="lg:hidden bg-white border-b px-4 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.path} 
              className="block text-lg font-bold text-gray-900 hover:text-[#0047ff]"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full bg-black text-white font-bold rounded-full">Get Started</Button>
        </div>
      )}
    </nav>
  );
}
