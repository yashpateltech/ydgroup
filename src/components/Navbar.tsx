import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-[#0078d4] rounded-lg text-white font-bold text-xl">
              Y
            </div>
            <span className="text-xl font-semibold text-gray-700">YDGROUPS</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-[#0078d4]">Services</a>
            <a href="#solutions" className="hover:text-[#0078d4]">Solutions</a>
            <a href="#about" className="hover:text-[#0078d4]">About Us</a>
            <a href="#contact" className="hover:text-[#0078d4]">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </button>
          <a href="#contact">
            <Button size="sm" className="bg-[#0078d4] hover:bg-[#005a9e] text-white">
              Enquire Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
