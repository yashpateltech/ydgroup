import { motion } from "motion/react";
import { 
  BarChart, 
  Brain, 
  Search, 
  Layout, 
  Code2, 
  Database, 
  Users, 
  Cloud, 
  Share2 
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "Digital Marketing",
      icon: BarChart,
      features: ["PPC Management", "Social Media Marketing", "Content Strategy", "Email Campaigns"]
    },
    {
      title: "AI Solutions",
      icon: Brain,
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "SEO Services",
      icon: Search,
      features: ["On-Page Optimization", "Technical SEO Audit", "Backlink Building", "Keyword Research"]
    },
    {
      title: "Web Design",
      icon: Layout,
      features: ["UI/UX Design", "Responsive Layouts", "Brand Identity", "Prototyping"]
    },
    {
      title: "Development",
      icon: Code2,
      features: ["Full-Stack Web Apps", "Mobile App Development", "API Integration", "Cloud-Native Apps"]
    },
    {
      title: "ERP Systems",
      icon: Database,
      features: ["Inventory Management", "Financial Accounting", "Supply Chain Tracking", "HR Management"]
    },
    {
      title: "CRM Software",
      icon: Users,
      features: ["Lead Tracking", "Customer Support Portals", "Sales Automation", "Analytics Dashboards"]
    },
    {
      title: "Microsoft Cloud",
      icon: Cloud,
      features: ["Azure Infrastructure", "Cloud Migration", "Security & Compliance", "Serverless Computing"]
    },
    {
      title: "SharePoint",
      icon: Share2,
      features: ["Intranet Portals", "Document Collaboration", "Workflow Automation", "Enterprise Search"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Solutions</h2>
          <p className="text-gray-600 mt-2">Comprehensive functionalities designed to accelerate your business growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-xl border border-gray-100 bg-[#fbfbfb] hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <sol.icon className="h-6 w-6 text-[#0078d4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{sol.title}</h3>
              </div>
              <ul className="space-y-3">
                {sol.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#0078d4]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
