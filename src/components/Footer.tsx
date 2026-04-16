import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-gray-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0047ff] text-white font-bold text-2xl">
              Y
            </div>
            <span className="text-2xl font-black tracking-tighter text-white">YD Groups</span>
          </Link>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-white">
            <a href="/#services" className="hover:text-[#d9ff00] transition-colors">Services</a>
            <a href="/#about" className="hover:text-[#d9ff00] transition-colors">About Us</a>
            <a href="/#process" className="hover:text-[#d9ff00] transition-colors">Process</a>
            <a href="/#blog" className="hover:text-[#d9ff00] transition-colors">Blog</a>
            <a href="/#contact" className="hover:text-[#d9ff00] transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <Facebook className="h-5 w-5 hover:text-[#d9ff00] cursor-pointer transition-colors" />
            <Twitter className="h-5 w-5 hover:text-[#d9ff00] cursor-pointer transition-colors" />
            <Linkedin className="h-5 w-5 hover:text-[#d9ff00] cursor-pointer transition-colors" />
            <Youtube className="h-5 w-5 hover:text-[#d9ff00] cursor-pointer transition-colors" />
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          <p>© 2024 YD Groups. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <button className="flex items-center gap-2 hover:text-white">
              <Globe className="h-4 w-4" />
              English (Global)
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
