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
  Share2,
  CheckCircle2
} from "lucide-react";

export default function Solutions() {
  const solutions = [
    {
      title: "Digital Marketing",
      icon: BarChart,
      description: "Drive growth through data-backed digital strategies and multi-channel campaigns.",
      benefits: ["Increased Brand Awareness", "Higher Conversion Rates", "Targeted Audience Reach"],
      features: ["PPC Management", "Social Media Marketing", "Content Strategy", "Email Campaigns"]
    },
    {
      title: "AI Solutions",
      icon: Brain,
      description: "Leverage cutting-edge AI to automate processes and unlock predictive insights.",
      benefits: ["Operational Efficiency", "Data-Driven Decisions", "Reduced Human Error"],
      features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "SEO Optimization",
      icon: Search,
      description: "Dominate search results and attract high-quality organic traffic to your site.",
      benefits: ["Sustainable Traffic Growth", "Improved Search Visibility", "Better User Experience"],
      features: ["On-Page Optimization", "Technical SEO Audit", "Backlink Building", "Keyword Research"]
    },
    {
      title: "Web Design",
      icon: Layout,
      description: "Create stunning, intuitive interfaces that convert visitors into loyal customers.",
      benefits: ["Enhanced Brand Image", "Higher User Engagement", "Mobile-First Accessibility"],
      features: ["UI/UX Design", "Responsive Layouts", "Brand Identity", "Prototyping"]
    },
    {
      title: "Development",
      icon: Code2,
      description: "Build robust, scalable software tailored to your specific business requirements.",
      benefits: ["Custom Functionality", "Scalable Architecture", "Seamless Integrations"],
      features: ["Full-Stack Web Apps", "Mobile App Development", "API Integration", "Cloud-Native Apps"]
    },
    {
      title: "ERP Systems",
      icon: Database,
      description: "Centralize your business operations with integrated management solutions.",
      benefits: ["Unified Data Source", "Streamlined Workflows", "Real-Time Reporting"],
      features: ["Inventory Management", "Financial Accounting", "Supply Chain Tracking", "HR Management"]
    },
    {
      title: "CRM Software",
      icon: Users,
      description: "Build stronger customer relationships with automated sales and support tools.",
      benefits: ["Improved Customer Retention", "Sales Team Productivity", "Personalized Marketing"],
      features: ["Lead Tracking", "Customer Support Portals", "Sales Automation", "Analytics Dashboards"]
    },
    {
      title: "Microsoft Cloud",
      icon: Cloud,
      description: "Scale your infrastructure securely with enterprise-grade cloud services.",
      benefits: ["Cost Optimization", "High Availability", "Enterprise Security"],
      features: ["Azure Infrastructure", "Cloud Migration", "Security & Compliance", "Serverless Computing"]
    },
    {
      title: "SharePoint",
      icon: Share2,
      description: "Empower your team with collaborative document management and intranets.",
      benefits: ["Better Team Collaboration", "Centralized Knowledge", "Automated Workflows"],
      features: ["Intranet Portals", "Document Collaboration", "Workflow Automation", "Enterprise Search"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Our Core Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive technology and digital solutions designed to skyrocket your business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl border border-gray-100 bg-[#fbfbfb] hover:bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-xl group-hover:bg-[#0078d4] group-hover:text-white transition-colors duration-300">
                  <sol.icon className="h-7 w-7 text-[#0078d4] group-hover:text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{sol.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {sol.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Key Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {sol.benefits.map((benefit, j) => (
                      <span key={j} className="text-[10px] font-semibold bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Functionalities</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {sol.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle2 className="h-4 w-4 text-[#0078d4]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
