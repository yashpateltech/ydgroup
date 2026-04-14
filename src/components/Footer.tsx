import { Link } from "react-router-dom";
import { Globe, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { name: "Digital Marketing", path: "/services/digital-marketing" },
    { name: "AI & Machine Learning", path: "/services/ai-ml" },
    { name: "SEO Services", path: "/services/seo" },
    { name: "Web Design", path: "/services/web-design" },
    { name: "Software Development", path: "/services/software-development" },
    { name: "ERP Solutions", path: "/services/erp" },
    { name: "CRM Solutions", path: "/services/crm" },
    { name: "Microsoft Cloud", path: "/services/microsoft-cloud" },
    { name: "SharePoint", path: "/services/sharepoint" }
  ];

  const companyLinks = [
    { name: "About Us", path: "/#about" },
    { name: "Our Process", path: "/#process" },
    { name: "Case Studies", path: "/#case-studies" },
    { name: "Testimonials", path: "/#testimonials" },
    { name: "Careers", path: "#" },
    { name: "Contact", path: "/#contact" }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#0078d4] text-white font-bold text-2xl">
                Y
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">YDGROUPS</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              End-to-end IT solutions for scalable business growth. From strategy to implementation, we deliver high-performance digital, cloud, and enterprise solutions.
            </p>
            <div className="flex items-center gap-4">
              <Facebook className="h-5 w-5 hover:text-[#0078d4] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-[#0078d4] cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 hover:text-[#0078d4] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-[#0078d4] cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Our Services</h4>
            <ul className="grid grid-cols-1 gap-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-[#0078d4] transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.path} className="text-sm hover:text-[#0078d4] transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-[#0078d4] shrink-0" />
                <span>123 Enterprise Way, Tech City, TC 56789</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-[#0078d4] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-[#0078d4] shrink-0" />
                <span>contact@ydgroups.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-6">
            <span>© 2024 YDGROUPS. All rights reserved.</span>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
          <button className="flex items-center gap-2 hover:text-white">
            <Globe className="h-4 w-4" />
            English (Global)
          </button>
        </div>
      </div>
    </footer>
  );
}
