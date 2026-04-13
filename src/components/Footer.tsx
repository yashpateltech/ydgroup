import { Globe, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const links = [
    {
      title: "Services",
      items: ["Digital Marketing", "AI Solutions", "SEO Optimization", "Web Design", "App Development", "ERP Systems", "CRM Software"]
    },
    {
      title: "Cloud Solutions",
      items: ["Microsoft Cloud", "SharePoint", "Cloud Migration", "Security & Compliance", "Serverless Computing"]
    },
    {
      title: "Company",
      items: ["About YDGROUPS", "Our Experts", "Success Stories", "Contact Us", "Careers"]
    }
  ];

  return (
    <footer className="bg-[#f2f2f2] pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {links.map((section, i) => (
            <div key={i}>
              <h4 className="font-bold text-gray-900 text-sm mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item, j) => (
                  <li key={j}>
                    <a href="#" className="text-xs text-gray-600 hover:text-[#0078d4] hover:underline">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-300 gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 bg-[#0078d4] rounded text-white font-bold text-xs">
                Y
              </div>
              <span className="text-sm font-bold text-gray-700">YDGROUPS</span>
            </div>
            <div className="flex items-center gap-4">
              <Facebook className="h-4 w-4 text-gray-500 cursor-pointer hover:text-[#0078d4]" />
              <Twitter className="h-4 w-4 text-gray-500 cursor-pointer hover:text-[#0078d4]" />
              <Linkedin className="h-4 w-4 text-gray-500 cursor-pointer hover:text-[#0078d4]" />
              <Youtube className="h-4 w-4 text-gray-500 cursor-pointer hover:text-[#0078d4]" />
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-[10px] text-gray-500">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
            <span>© YDGROUPS 2024</span>
          </div>
        </div>
      </div>
      
      <a href="#contact" className="fixed bottom-6 right-6 bg-[#0078d4] text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold hover:bg-[#005a9e] transition-colors z-50">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
        Enquire Now
      </a>
    </footer>
  );
}
