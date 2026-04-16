import { useParams } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Settings,
  Code2,
  Brain,
  Search,
  Layout,
  Database,
  Users,
  Cloud,
  Share2,
  BarChart3
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

const serviceData: Record<string, any> = {
  "digital-marketing": {
    title: "Digital Marketing",
    icon: BarChart3,
    valueProp: "Drive measurable growth with data-driven digital strategies.",
    overview: "Our digital marketing services are designed to amplify your brand presence and deliver high-performance results. We combine creative strategy with technical precision to ensure your business reaches its full potential in the digital landscape.",
    benefits: ["Increased Brand Visibility", "Higher Conversion Rates", "Data-Driven Insights", "Scalable Growth"],
    offerings: ["PPC Management", "Social Media Marketing", "Content Strategy", "Email Campaigns"],
    caseStudy: {
      title: "Retail Growth",
      metric: "250% ROI",
      desc: "Implemented a multi-channel digital strategy for a retail giant, resulting in a significant boost in online sales."
    }
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    icon: Brain,
    valueProp: "Empower your business with intelligent automation and predictive analytics.",
    overview: "We deliver cutting-edge AI and Machine Learning solutions that transform complex data into actionable insights. From automation to predictive modeling, we help you stay ahead of the curve.",
    benefits: ["Operational Efficiency", "Predictive Accuracy", "Automated Workflows", "Enhanced Decision Making"],
    offerings: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    caseStudy: {
      title: "Automation Success",
      metric: "40% Cost Reduction",
      desc: "Developed a custom ML model for a logistics firm to optimize route planning and reduce fuel costs."
    }
  },
  "seo": {
    title: "SEO Services",
    icon: Search,
    valueProp: "Dominate search rankings and attract high-quality organic traffic.",
    overview: "Our SEO services focus on long-term sustainability and growth. We optimize every aspect of your online presence to ensure you are found by the right audience at the right time.",
    benefits: ["Sustainable Traffic", "Brand Authority", "Technical Excellence", "Competitive Edge"],
    offerings: ["On-Page Optimization", "Technical SEO Audit", "Backlink Building", "Keyword Research"],
    caseStudy: {
      title: "Search Dominance",
      metric: "Top 3 Rankings",
      desc: "Achieved top search rankings for 50+ high-competition keywords for a SaaS provider."
    }
  },
  "web-design": {
    title: "Web Design",
    icon: Layout,
    valueProp: "User-centric, high-performance designs that convert.",
    overview: "We create modern, responsive, and intuitive web designs that prioritize user experience and brand identity. Our designs are built to perform and scale with your business.",
    benefits: ["Enhanced UX", "Mobile Responsiveness", "Brand Consistency", "High Performance"],
    offerings: ["UI/UX Design", "Responsive Layouts", "Brand Identity", "Prototyping"],
    caseStudy: {
      title: "UX Overhaul",
      metric: "45% Bounce Rate Reduction",
      desc: "Redesigned the user interface for a fintech platform, significantly improving user retention."
    }
  },
  "software-development": {
    title: "Software Development",
    icon: Code2,
    valueProp: "Custom-built, scalable software solutions for modern enterprises.",
    overview: "Our software development team builds robust, secure, and scalable applications tailored to your specific business needs. We use the latest tech stacks to ensure longevity and performance.",
    benefits: ["Custom Scalability", "Enterprise Security", "Seamless Integration", "Future-Proof Tech"],
    offerings: ["Custom Development", "API Integration", "Cloud-Native Apps", "Maintenance"],
    caseStudy: {
      title: "Enterprise App",
      metric: "10k+ Daily Users",
      desc: "Built a custom enterprise management tool that scaled to support thousands of concurrent users."
    }
  },
  "erp": {
    title: "ERP Solutions",
    icon: Database,
    valueProp: "Integrated enterprise resource planning for streamlined operations.",
    overview: "We implement comprehensive ERP systems that unify your core business processes, from inventory to finance. Our solutions provide a single source of truth for your entire organization.",
    benefits: ["Unified Data", "Process Automation", "Real-time Reporting", "Cost Efficiency"],
    offerings: ["Inventory Management", "Financial Accounting", "Supply Chain Tracking", "HR Management"],
    caseStudy: {
      title: "ERP Integration",
      metric: "30% Efficiency Gain",
      desc: "Unified fragmented business processes for a manufacturing plant using a custom ERP solution."
    }
  },
  "crm": {
    title: "CRM Solutions",
    icon: Users,
    valueProp: "Advanced customer relationship management to drive sales and engagement.",
    overview: "Our CRM solutions help you manage customer interactions with precision. We build tools that empower your sales and support teams to deliver exceptional service.",
    benefits: ["Customer Retention", "Sales Automation", "Centralized Insights", "Enhanced Support"],
    offerings: ["Lead Tracking", "Customer Support Portals", "Sales Automation", "Analytics Dashboards"],
    caseStudy: {
      title: "Sales Growth",
      metric: "20% Revenue Increase",
      desc: "Implemented a custom CRM for a real estate agency, resulting in better lead conversion and tracking."
    }
  },
  "microsoft-cloud": {
    title: "Microsoft Cloud",
    icon: Cloud,
    valueProp: "Secure, scalable Azure infrastructure and cloud migration.",
    overview: "We provide end-to-end Microsoft Cloud services, including Azure infrastructure setup, migration, and security compliance. We help you leverage the full power of the cloud.",
    benefits: ["Enterprise Security", "Infinite Scalability", "Cost Optimization", "High Availability"],
    offerings: ["Azure Infrastructure", "Cloud Migration", "Security & Compliance", "Serverless Computing"],
    caseStudy: {
      title: "Cloud Migration",
      metric: "99.99% Uptime",
      desc: "Migrated a legacy on-premise infrastructure to Azure for a global financial services firm."
    }
  },
  "sharepoint": {
    title: "SharePoint",
    icon: Share2,
    valueProp: "Empower collaboration and document management with custom SharePoint solutions.",
    overview: "Our SharePoint experts build custom intranets and document management systems that enhance team collaboration and information flow within your organization.",
    benefits: ["Enhanced Collaboration", "Secure Document Storage", "Workflow Automation", "Enterprise Search"],
    offerings: ["Intranet Portals", "Document Collaboration", "Workflow Automation", "Enterprise Search"],
    caseStudy: {
      title: "Intranet Success",
      metric: "50% Faster Search",
      desc: "Developed a custom SharePoint portal for a large legal firm, improving document retrieval times significantly."
    }
  }
};

export default function ServicePage() {
  const { id } = useParams();
  const service = serviceData[id || ""];

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Service Not Found</h1>
        <Button className="mt-8" onClick={() => window.history.back()}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{service.title} | YD Groups - Enterprise IT Solutions</title>
        <meta name="description" content={`${service.title} services by YD Groups. ${service.valueProp}`} />
        <meta name="keywords" content={`${service.title}, IT Services, YD Groups, Business Growth, Consulting`} />
      </Helmet>
      {/* Service Hero */}
      <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="w-16 h-16 bg-[#0078d4] rounded-2xl flex items-center justify-center mb-8">
              <service.icon className="h-8 w-8 text-white" />
            </div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl font-extrabold mb-6"
            >
              {service.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 mb-10"
            >
              {service.valueProp}
            </motion.p>
            <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white px-8 py-6 text-lg font-bold rounded-xl">
              Get Consultation
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0078d4]/10 to-transparent" />
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Service Overview</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {service.overview}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                    <CheckCircle2 className="h-5 w-5 text-[#0078d4]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={`https://picsum.photos/seed/${id}/800/600`} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offerings</h2>
            <p className="text-gray-600">Specialized solutions tailored for your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.offerings.map((offering: string, i: number) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="h-6 w-6 text-[#0078d4]" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{offering}</h4>
                <p className="text-sm text-gray-500">Professional {offering.toLowerCase()} services for enterprise growth.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development, Consulting, Implementation */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Code2 className="h-7 w-7 text-[#0078d4]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Development</h3>
              <p className="text-gray-600 leading-relaxed">
                We build custom, high-performance solutions using the latest technology stacks. Our development process ensures scalability, security, and seamless user experiences.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Users className="h-7 w-7 text-[#0078d4]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Consulting</h3>
              <p className="text-gray-600 leading-relaxed">
                Our strategic consulting services help you navigate complex technology landscapes. We provide requirement analysis, technology roadmaps, and ROI-focused recommendations.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center">
                <Zap className="h-7 w-7 text-[#0078d4]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Implementation</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle the entire deployment process, ensuring seamless integration with your existing systems. Our implementation includes rigorous testing and a smooth rollout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Process */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-3xl font-bold mb-12">Key Benefits</h2>
              <div className="space-y-8">
                {[
                  { title: "Efficiency", desc: "Streamline your operations and reduce manual overhead." },
                  { title: "Cost Reduction", desc: "Optimize your technology spend and maximize ROI." },
                  { title: "Automation", desc: "Leverage intelligent automation for repetitive tasks." },
                  { title: "Scalability", desc: "Solutions that grow with your business demands." }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="w-12 h-12 bg-[#0078d4] rounded-xl flex items-center justify-center shrink-0">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-gray-400">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-12">Our Process</h2>
              <div className="space-y-12 relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-800" />
                {[
                  { title: "Discovery", desc: "Understanding your business goals and challenges." },
                  { title: "Planning", desc: "Defining the strategy, tech stack, and roadmap." },
                  { title: "Execution", desc: "Agile development and continuous integration." },
                  { title: "Delivery", desc: "Testing, deployment, and ongoing support." }
                ].map((step, i) => (
                  <div key={i} className="flex gap-10 relative">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center shrink-0 relative z-10 ring-8 ring-gray-900">
                      <span className="font-bold text-[#0078d4]">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">{step.title}</h4>
                      <p className="text-sm text-gray-400">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-3xl p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <div className="inline-block px-4 py-1 bg-[#0078d4] text-white text-[10px] font-bold uppercase tracking-widest rounded-full mb-8">
                Case Study
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.caseStudy.title}</h2>
              <div className="text-5xl font-extrabold text-[#0078d4] mb-8">{service.caseStudy.metric}</div>
              <p className="text-xl text-gray-600 leading-relaxed mb-10">
                {service.caseStudy.desc}
              </p>
              <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white px-8 py-6 text-lg font-bold rounded-xl">
                View Full Case Study
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
               <img 
                src={`https://picsum.photos/seed/case-${id}/600/800`} 
                className="w-full h-full object-cover opacity-20"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-600">Contact our experts today for a tailored {service.title} strategy.</p>
            </div>
            <ContactForm serviceDefault={service.title} />
          </div>
        </div>
      </section>
    </div>
  );
}
