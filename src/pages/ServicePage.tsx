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
  BarChart3,
  MessageSquare
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import SchemaMarkup from "../components/SchemaMarkup";

const serviceData: Record<string, any> = {
  "digital-marketing": {
    title: "Digital Marketing",
    icon: BarChart3,
    valueProp: "Drive measurable growth with data-driven digital strategies.",
    overview: "Our digital marketing services are designed to amplify your brand presence and deliver high-performance results. We combine creative strategy with technical precision to ensure your business reaches its full potential in the digital landscape. We focus on multi-channel attribution and high-intent audience targeting, ensuring that every marketing dollar is optimized for maximum ROI. Our approach is holistic, linking social, email, search, and paid efforts into a single, cohesive growth machine that evolves with your business.",
    benefits: ["Increased Brand Visibility", "Higher Conversion Rates", "Data-Driven Insights", "Scalable Growth"],
    offerings: ["PPC Management", "Social Media Marketing", "Content Strategy", "Email Campaigns"],
    testimonials: [
      { name: "Sarah Jenkins", role: "Direct of Marketing, RetailHub", text: "The multi-channel approach provided by YD Groups was a game changer. We saw direct correlation between our social signals and organic ranking growth.", avatar: "https://i.pravatar.cc/150?u=sarahj" },
      { name: "Robert Chen", role: "Owner, TechStart", text: "Finally an agency that speaks the language of ROI. Their digital strategies are precise, aggressive, and highly effective.", avatar: "https://i.pravatar.cc/150?u=robertc" }
    ],
    caseStudy: {
      title: "Retail Growth",
      metric: "250% ROI",
      desc: "Implemented a multi-channel digital strategy for a retail giant, resulting in a significant boost in online sales. We optimized their full funnel from initial discovery to retention."
    }
  },
  "ai-ml": {
    title: "AI & Machine Learning",
    icon: Brain,
    valueProp: "Empower your business with intelligent automation and predictive analytics.",
    overview: "We deliver cutting-edge AI and Machine Learning solutions that transform complex data into actionable insights. From automation to predictive modeling, we help you stay ahead of the curve in an increasingly automated world. Our team of data scientists and engineers builds custom models that solve real-world business problems, whether it's identifying customer churn, optimizing supply chains, or automating complex document processing. We focus on 'Responsible AI' that is transparent, ethical, and scalable for enterprise needs.",
    benefits: ["Operational Efficiency", "Predictive Accuracy", "Automated Workflows", "Enhanced Decision Making"],
    offerings: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    testimonials: [
      { name: "Dr. Alan Vane", role: "Chief Data Officer, LogiSync", text: "The predictive model YD Groups built for our route optimization has saved us millions in fuel costs. Their understanding of deep learning is enterprise-grade.", avatar: "https://i.pravatar.cc/150?u=alan" },
      { name: "Elena Rossi", role: "Head of AI, FutureTech", text: "Seamless integration of NLP into our support systems. The accuracy of the sentiment analysis was beyond what we expected from an external partner.", avatar: "https://i.pravatar.cc/150?u=elena" }
    ],
    caseStudy: {
      title: "Automation Success",
      metric: "40% Cost Reduction",
      desc: "Developed a custom ML model for a logistics firm to optimize route planning and reduce fuel costs through real-time predictive analytics."
    }
  },
  "seo": {
    title: "SEO Services",
    icon: Search,
    valueProp: "Dominate search rankings and attract high-quality organic traffic.",
    overview: "Our SEO services focus on long-term sustainability and growth. We optimize every aspect of your online presence—from technical architecture to content quality and authority—to ensure you are found by the right audience at the right time. We don't believe in shortcuts; we build enduring search equity by focusing on semantic relevance and user intent. Our team stays ahead of search engine algorithm updates, providing an agile and proactive strategy that ensures your rankings stay high even as the search landscape evolves.",
    benefits: ["Sustainable Traffic", "Brand Authority", "Technical Excellence", "Competitive Edge"],
    offerings: ["On-Page Optimization", "Technical SEO Audit", "Backlink Building", "Keyword Research"],
    testimonials: [
      { name: "John Miller", role: "Founder, CloudScale", text: "Rankings are one thing, but YD Groups delivers *revenue*. Our organic lead volume quadrupled in less than a year. They are the best SEO partner we've had in a decade.", avatar: "https://i.pravatar.cc/150?u=johnm" },
      { name: "Linda Wu", role: "SEO Manager, Global Logistics", text: "Their technical audit was the most comprehensive I've ever seen. They found crawl budget issues that were invisible to our search console tools.", avatar: "https://i.pravatar.cc/150?u=lindaw" }
    ],
    caseStudy: {
      title: "Search Dominance",
      metric: "Top 3 Rankings",
      desc: "Achieved top search rankings for 50+ high-competition keywords for a SaaS provider, resulting in a 400% increase in organic leads."
    }
  },
  "web-design": {
    title: "Web Design",
    icon: Layout,
    valueProp: "User-centric, high-performance designs that convert.",
    overview: "We create modern, responsive, and intuitive web designs that prioritize user experience and brand identity. Our designs are built to perform and scale with your business, focusing on conversion-centric layouts and high-speed loading times. We understand that your website is your digital storefront, so we combine aesthetic beauty with technical precision. Every element we design is rooted in user behavior data, ensuring that your site isn't just pretty, but functional and optimized for your specific business goals.",
    benefits: ["Enhanced UX", "Mobile Responsiveness", "Brand Consistency", "High Performance"],
    offerings: ["UI/UX Design", "Responsive Layouts", "Brand Identity", "Prototyping"],
    testimonials: [
      { name: "Kevin Hart", role: "CEO, FinTech UI", text: "The redesign didn't just look better; it converted better. Our signup rate increased by 35% on day one. YD Groups really understands the psychology of design.", avatar: "https://i.pravatar.cc/150?u=kevin" },
      { name: "Sandra Bullock", role: "Product Manager, EcoShop", text: "Their focus on mobile performance and accessibility was impressive. The new site is blazing fast and our mobile users love it.", avatar: "https://i.pravatar.cc/150?u=sandra" }
    ],
    caseStudy: {
      title: "UX Overhaul",
      metric: "45% Bounce Rate Reduction",
      desc: "Redesigned the user interface for a fintech platform, significantly improving user retention and increasing the average time-on-site."
    }
  },
  "software-development": {
    title: "Software Development",
    icon: Code2,
    valueProp: "Custom-built, scalable software solutions for modern enterprises.",
    overview: "Our software development team builds robust, secure, and scalable applications tailored to your specific business needs. We use the latest tech stacks to ensure longevity and performance, focusing on modular architectures that allow your software to grow with your business. Whether you need an internal enterprise tool or a customer-facing platform, we deliver clean, efficient, and well-documented code that provides a competitive edge. Our development lifecycle is agile, ensuring transparent progress and high-quality delivery at every stage.",
    benefits: ["Custom Scalability", "Enterprise Security", "Seamless Integration", "Future-Proof Tech"],
    offerings: ["Custom Development", "API Integration", "Cloud-Native Apps", "Maintenance"],
    testimonials: [
      { name: "Peter Parker", role: "CTO, DailyBugle IT", text: "Scalability was our biggest hurdle. YD Groups built a modular system that handles our current load and is ready for 10x growth without a rewrite.", avatar: "https://i.pravatar.cc/150?u=peter" },
      { name: "Diana Prince", role: "Innovation Lead, Amazonia Prime", text: "Their engineers are top-tier. The code is clean, well-tested, and easy for our internal team to maintain. A true strategic development partner.", avatar: "https://i.pravatar.cc/150?u=diana" }
    ],
    caseStudy: {
      title: "Enterprise App",
      metric: "10k+ Daily Users",
      desc: "Built a custom enterprise management tool that scaled to support thousands of concurrent users across multiple global locations."
    }
  },
  "erp": {
    title: "ERP Solutions",
    icon: Database,
    valueProp: "Integrated enterprise resource planning for streamlined operations.",
    overview: "We implement comprehensive ERP systems that unify your core business processes, from inventory and manufacturing to finance and HR. Our solutions provide a single source of truth for your entire organization, reducing manual errors and providing real-time visibility into your operations. We focus on custom integrations that ensure your ERP works seamlessly with your existing tools, providing a scalable foundation for operational excellence. Our ERP experts guide you through the entire lifecycle, from requirement mapping to implementation and training.",
    benefits: ["Unified Data", "Process Automation", "Real-time Reporting", "Cost Efficiency"],
    offerings: ["Inventory Management", "Financial Accounting", "Supply Chain Tracking", "HR Management"],
    testimonials: [
      { name: "Tony Stark", role: "Operations Director, Stark Industries", text: "Unifying our disparate global systems into one ERP was a massive undertaking, and YD Groups handled it with surgical precision. Our reporting lag dropped from weeks to seconds.", avatar: "https://i.pravatar.cc/150?u=tony" },
      { name: "Pepper Potts", role: "CEO, Potts Logistics", text: "The ROI from our new ERP was visible within the first quarter. Waste is down and operational efficiency is at an all-time high.", avatar: "https://i.pravatar.cc/150?u=pepper" }
    ],
    caseStudy: {
      title: "ERP Integration",
      metric: "30% Efficiency Gain",
      desc: "Unified fragmented business processes for a manufacturing plant using a custom ERP solution, resulting in significant time and cost savings."
    }
  },
  "crm": {
    title: "CRM Solutions",
    icon: Users,
    valueProp: "Advanced customer relationship management to drive sales and engagement.",
    overview: "Our CRM solutions help you manage customer interactions with precision and scale. We build tools that empower your sales and support teams to deliver exceptional service through automated workflows and centralized data. We focus on 'Customer Intelligence'—providing you with the insights you need to understand customer behavior and predict future needs. Our CRMs are designed to be intuitive and accessible, ensuring high adoption rates across your organization and a direct impact on your sales pipeline and customer retention.",
    benefits: ["Customer Retention", "Sales Automation", "Centralized Insights", "Enhanced Support"],
    offerings: ["Lead Tracking", "Customer Support Portals", "Sales Automation", "Analytics Dashboards"],
    testimonials: [
      { name: "Bruce Wayne", role: "Sales Manager, Wayne Enterprises", text: "Our sales team's productivity doubled after the CRM implementation. The automated lead tracking ensures nothing falls through the cracks.", avatar: "https://i.pravatar.cc/150?u=bruce" },
      { name: "Selina Kyle", role: "CRM Admin, Gotham Ventures", text: "The interface is so intuitive that we didn't even need a transition period. User adoption was 100% within the first week.", avatar: "https://i.pravatar.cc/150?u=selina" }
    ],
    caseStudy: {
      title: "Sales Growth",
      metric: "20% Revenue Increase",
      desc: "Implemented a custom CRM for a real estate agency, resulting in better lead conversion, tracking, and improved agent performance."
    }
  },
  "microsoft-cloud": {
    title: "Microsoft Cloud",
    icon: Cloud,
    valueProp: "Secure, scalable Azure infrastructure and cloud migration.",
    overview: "We provide end-to-end Microsoft Cloud services, including Azure infrastructure setup, migration, and security compliance. We help you leverage the full power of the cloud to reduce costs and increase agility. Our team of certified cloud architects builds secure, scalable, and resilient environments that support your business-critical applications. We focus on cost optimization and performance monitoring, ensuring you get the most out of your Azure investment. Whether you are moving to the cloud for the first time or optimizing an existing setup, we are your strategic partner.",
    benefits: ["Enterprise Security", "Infinite Scalability", "Cost Optimization", "High Availability"],
    offerings: ["Azure Infrastructure", "Cloud Migration", "Security & Compliance", "Serverless Computing"],
    testimonials: [
      { name: "Steve Rogers", role: "Cloud Architect, Shield IT", text: "Migrating our legacy infrastructure to Azure was seamless. The security posture YD Groups implemented exceeds all our compliance requirements.", avatar: "https://i.pravatar.cc/150?u=steve" },
      { name: "Natasha Romanoff", role: "Head of Infrastructure, BlackWidow Global", text: "Reliability is key for us. Since the migration, our uptime has been rock solid and our cloud costs have dropped by 25%.", avatar: "https://i.pravatar.cc/150?u=natasha" }
    ],
    caseStudy: {
      title: "Cloud Migration",
      metric: "99.99% Uptime",
      desc: "Migrated a legacy on-premise infrastructure to Azure for a global financial services firm, ensuring high availability and robust security compliance."
    }
  },
  "sharepoint": {
    title: "SharePoint",
    icon: Share2,
    valueProp: "Empower collaboration and document management with custom SharePoint solutions.",
    overview: "Our SharePoint experts build custom intranets and document management systems that enhance team collaboration and information flow within your organization. we focus on breaking down information silos and providing a secure, centralized hub for all your enterprise data. Our solutions include advanced workflow automation, custom permissions mapping, and integration with Microsoft 365, ensuring that your team has the tools they need to work efficiently from anywhere. We help you transform SharePoint from a simple storage tool into a powerful collaboration engine.",
    benefits: ["Enhanced Collaboration", "Secure Document Storage", "Workflow Automation", "Enterprise Search"],
    offerings: ["Intranet Portals", "Document Collaboration", "Workflow Automation", "Enterprise Search"],
    testimonials: [
      { name: "Wanda Maximoff", role: "HR Director, Visionary Corp", text: "Our new custom intranet has completely changed how our remote teams communicate. Information is now easy to find and share across the whole company.", avatar: "https://i.pravatar.cc/150?u=wanda" },
      { name: "Vision", role: "Knowledge Officer, Synthezoid Inc", text: "The document management system YD Groups architected is exactly what we needed. Versions are tracked perfectly and retrieval time is near zero.", avatar: "https://i.pravatar.cc/150?u=vision" }
    ],
    caseStudy: {
      title: "Intranet Success",
      metric: "50% Faster Search",
      desc: "Developed a custom SharePoint portal for a large legal firm, improving document retrieval times and internal communication efficiency."
    }
  },
  "aeo": {
    title: "AEO (Answer Engine Optimization)",
    icon: MessageSquare,
    valueProp: "Optimize for the future of search: Direct answers and voice assistants.",
    overview: "Answer Engine Optimization (AEO) is the process of optimizing your content to be the definitive answer for user queries on platforms like Alexa, Siri, and Google Assistant. We focus on structured data, schema markup, and conversational content that wins the 'zero-click' search result. As voice search and smart assistants become the primary way people discover information, AEO ensures your brand is the one being spoken back to the user. We help you dominate the featured snippet and position your brand as the absolute authority in your industry.",
    benefits: ["Voice Search Dominance", "Zero-Click Visibility", "Brand Authority", "Improved User Intent Matching"],
    offerings: ["Featured Snippet Optimization", "Schema Markup Implementation", "Conversational Content Strategy", "FAQ Page Development"],
    testimonials: [
      { name: "Reed Richards", role: "CEO, FutureFoundation", text: "Voice search was a blind spot for us until YD Groups stepped in. Now, we are the direct answer for most of our high-value target queries on Siri and Google Home.", avatar: "https://i.pravatar.cc/150?u=reed" },
      { name: "Susan Storm", role: "Director of Outreach, Invisible Branding", text: "Winning the featured snippet for our niche has given us unmatched authority. Our brand is now the literal voice of the industry.", avatar: "https://i.pravatar.cc/150?u=susan" }
    ],
    caseStudy: {
      title: "Voice Search Growth",
      metric: "300% Snippet Increase",
      desc: "Optimized a health portal for AEO, resulting in a massive increase in featured snippets and voice search appearances across diverse health queries."
    }
  },
  "geo": {
    title: "GEO (Generative Engine Optimization)",
    icon: Brain,
    valueProp: "Stay relevant in the age of AI-driven search results.",
    overview: "Generative Engine Optimization (GEO) ensures your brand is cited, quoted, and recommended by AI models like ChatGPT, Gemini, and Perplexity. We optimize your total digital footprint to ensure AI engines perceive your business as a trusted, high-authority entity. This involves complex brand networking, entity-based SEO, and sentiment management across the entire web. In an era where AI-generated summaries are the first thing users see, GEO is the key to maintaining visibility and brand credibility in the generative search landscape.",
    benefits: ["AI Model Citations", "Future-Proof Visibility", "Authority Building", "Brand Sentiment Control"],
    offerings: ["AI Citation Optimization", "Knowledge Graph Integration", "Entity-Based SEO", "Brand Authority Signals"],
    testimonials: [
      { name: "Barry Allen", role: "Growth Lead, FlashTech", text: "In the new era of generative search, traditional rankings aren't enough. YD Groups ensures that when an AI model recommends a solution in our space, it's always our brand.", avatar: "https://i.pravatar.cc/150?u=barry" },
      { name: "Arthur Curry", role: "CEO, Atlantis Digital", text: "Our brand's sentiment and citation rate within the major LLMs have improved drastically. This is the future of digital visibility and YD Groups is leading it.", avatar: "https://i.pravatar.cc/150?u=arthur" }
    ],
    caseStudy: {
      title: "AI Visibility",
      metric: "85% AI Citation Rate",
      desc: "Implemented GEO strategies for a tech startup, ensuring they are consistently cited as a top-tier recommendation by major LLMs for specific industry queries."
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "YD Groups"
    },
    "description": service.overview,
    "areaServed": ["India", "Australia", "Canada"]
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{service.title} | YD Groups - Enterprise IT Solutions</title>
        <meta name="description" content={`${service.title} services by YD Groups. ${service.valueProp}`} />
        <meta name="keywords" content={`${service.title}, IT Services, YD Groups, Business Growth, Consulting`} />
      </Helmet>
      <SchemaMarkup data={serviceSchema} />
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
            <Button 
              onClick={scrollToContact}
              className="bg-[#0078d4] hover:bg-[#005a9e] text-white px-8 py-6 text-lg font-bold rounded-xl"
            >
              Get Free Consultation
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

      {/* Relevant Reviews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600">Real feedback from leaders who have integrated our {service.title} solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.testimonials.map((t: any, i: number) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-xs text-[#0078d4] font-bold uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
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
              <Button 
                onClick={scrollToContact}
                className="bg-[#0078d4] hover:bg-[#005a9e] text-white px-8 py-6 text-lg font-bold rounded-xl"
              >
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
