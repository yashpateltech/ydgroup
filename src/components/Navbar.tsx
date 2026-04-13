import { Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <a href="/" className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#0078d4]"
            >
              <path
                d="M1 1H11V11H1V1Z"
                fill="#F25022"
              />
              <path
                d="M13 1H23V11H13V1Z"
                fill="#7FBA00"
              />
              <path
                d="M1 13H11V23H1V13Z"
                fill="#00A4EF"
              />
              <path
                d="M13 13H23V23H13V13Z"
                fill="#FFB900"
              />
            </svg>
            <span className="text-xl font-semibold text-gray-700">YDGROUPS</span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-[#0078d4]">Explore</a>
            <a href="#" className="hover:text-[#0078d4]">Solutions</a>
            <a href="#" className="hover:text-[#0078d4]">Products</a>
            <a href="#" className="hover:text-[#0078d4]">Resources</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Search className="h-5 w-5" />
          </button>
          <Button variant="outline" size="sm" className="hidden sm:flex gap-2">
            <User className="h-4 w-4" />
            Sign in
          </Button>
        </div>
      </div>
    </nav>
  );
}
