import { 
  Cloud, 
  Database, 
  Cpu, 
  Globe, 
  Shield, 
  BarChart3, 
  Settings, 
  MessageSquare,
  Search,
  Code,
  User
} from "lucide-react";

export default function FreeProducts() {
  const products = [
    { name: "Digital Marketing", icon: BarChart3, desc: "Comprehensive digital strategies for growth." },
    { name: "AI & Machine Learning", icon: Cpu, desc: "Advanced AI solutions for business automation." },
    { name: "SEO Optimization", icon: Search, desc: "Boost your visibility in search engines." },
    { name: "Web Design", icon: Globe, desc: "Modern, responsive, and user-centric designs." },
    { name: "App Development", icon: Code, desc: "Custom software and mobile applications." },
    { name: "ERP Solutions", icon: Settings, desc: "Integrated management of core business processes." },
    { name: "CRM Software", icon: User, desc: "Manage your customer relationships effectively." },
    { name: "Enterprise Cloud", icon: Cloud, desc: "Scalable cloud infrastructure and services." },
    { name: "Collaboration Portals", icon: Shield, desc: "Collaborative document management and storage." },
    { name: "Cloud DevOps", icon: Settings, desc: "5 users with unlimited private Git repos" },
    { name: "SQL Database", icon: Database, desc: "100,000 vCore seconds of serverless usage" },
    { name: "Document Intelligence", icon: BarChart3, desc: "500 pages per month free" }
  ];

  return (
    <section className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="text-xs font-bold text-[#0078d4] uppercase tracking-wider">Free Services</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-2">Take advantage of free products</h2>
          <p className="text-gray-600 mt-2">These products are free up to the specified monthly amounts. Some are always free to all YDGROUPS customers.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div key={i} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all group cursor-pointer">
              <product.icon className="h-8 w-8 text-[#0078d4] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{product.desc}</p>
              <a href="#" className="text-xs font-semibold text-[#0078d4] hover:underline">Explore the product</a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="text-[#0078d4] font-semibold flex items-center gap-2 mx-auto hover:underline">
            See all free services
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
