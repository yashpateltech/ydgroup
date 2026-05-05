import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Layout, 
  ArrowRight,
  Zap,
  CheckCircle2,
  BarChart3,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Clock,
  Plus,
  Minus,
  FileText,
  Users,
  Settings,
  Brain,
  Code2,
  Database,
  Cloud,
  Share2,
  TrendingUp,
  ShieldCheck,
  Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SchemaMarkup from "../components/SchemaMarkup";
import { useAuditModal } from "../context/AuditModalContext";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const { openModal } = useAuditModal();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YD Groups",
    "url": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app/",
    "logo": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-989-8989-898",
      "contactType": "customer service",
      "email": "yashpatelseo19@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/ydgroups",
      "https://www.twitter.com/ydgroups",
      "https://www.linkedin.com/company/ydgroups"
    ]
  };

  const topServices = [
    { title: "Website SEO Health Check", icon: CheckCircle2, desc: "Our in-depth technical SEO audits uncover and resolve hidden issues that may impact your website's search performance, ensuring seamless crawlability, indexability, and an enhanced user experience." },
    { title: "SEO Keyword Analysis", icon: ListIcon, desc: "Our in-depth keyword research services analyze and identify high-impact keywords and search terms tailored to your business, ensuring your content aligns with user intent and the latest search trends." },
    { title: "Page-Level Optimization", icon: FileText, desc: "We optimize individual web pages to rank higher and earn more relevant traffic in search engines, focusing on content, HTML tags, and image optimization." },
    { title: "Authority Link Building", icon: LinkIcon, desc: "Our strategic link-building and outreach efforts are designed to acquire high-quality backlinks from trusted sources, strengthening your website's authority and search rankings." },
    { title: "Localized SEO Services", icon: MapPin, desc: "Our local SEO strategies boost your business's presence in local search results by optimizing listings and targeting location-specific keywords to attract nearby customers." },
    { title: "Content & SEO Writing", icon: EditIcon, desc: "Our content and SEO writing services create engaging, keyword-optimized content that resonates with your audience while enhancing search rankings." }
  ];

  const processSteps = [
    { title: "Research & Evaluation", icon: Users, desc: "We continuously track performance metrics, providing regular updates and detailed reports to measure progress and impact." },
    { title: "SEO Roadmap", icon: CheckCircle2, desc: "We create a tailored SEO strategy based on our findings, outlining clear objectives, tactics, and timelines to achieve your goals." },
    { title: "Insights & Reporting", icon: EditIcon, desc: "We continuously track performance metrics, providing regular updates and detailed reports to measure progress and impact." },
    { title: "Ongoing Optimization", icon: Settings, desc: "SEO is a continuous process. We analyze data, refine strategies, and adapt to digital trends to ensure long-term success." },
    { title: "Competitor Analysis", icon: Users, desc: "We monitor key performance metrics to evaluate SEO success and refine strategies for continuous growth." },
    { title: "Tracking & Analysis", icon: Settings, desc: "We track SEO metrics to measure performance and refine strategies for better results." }
  ];

  const whyChoose = [
    { title: "Skilled & Experienced Team", content: "With 15+ years of industry experience, our seasoned SEO professionals deliver unmatched knowledge and expertise to every project." },
    { title: "Personalized Solutions", content: "We provide tailored SEO strategies designed to meet your specific business goals and drive measurable results." },
    { title: "Honest & Transparent Approach", content: "We believe in clear communication and honest reporting, keeping you informed every step of the way." }
  ];

  const caseStudies = [
    { title: "E-commerce Growth Strategy", category: "SEO Optimization", image: "https://picsum.photos/seed/ecommerce-dashboard/600/400" },
    { title: "SaaS Market Dominance", category: "GEO & AEO", image: "https://picsum.photos/seed/software-interface/600/400" },
    { title: "Local Business Visibility", category: "Local SEO", image: "https://picsum.photos/seed/local-business-location/600/400" },
    { title: "Financial Sector Authority", category: "Technical SEO", image: "https://picsum.photos/seed/financial-data-charts/600/400" }
  ];

  const testimonials = [
    { 
      name: "Marcus Aurelius", 
      text: "The transition to GEO and AEO was invisible to us until we saw the traffic spike. YD Groups is the only agency we've found that actually understands how LLMs parse brand data. Our citations in ChatGPT and Gemini went from zero to being the top recommended solution in our niche within three months.", 
      avatar: "https://i.pravatar.cc/150?u=marcus", 
      rating: 5,
      role: "CTO, TechNova Solutions"
    },
    { 
      name: "Sonia Gupta", 
      text: "Managing a multi-location retail chain in India and Canada was a nightmare for our search consistency. YD Groups implemented a technical SEO framework that unified our digital footprint while respecting regional nuances. Their audit uncovered architectural flaws that three other agencies missed completely.", 
      avatar: "https://i.pravatar.cc/150?u=sonia", 
      rating: 5,
      role: "VP Marketing, Global retail"
    },
    { 
      name: "Jameson Lee", 
      text: "Most SEOs talk about keywords. YD Groups talks about business intelligence. They used our search data to inform our product roadmap, showing us exactly where the market was moving before it happened. The ROI isn't just in traffic; it's in the strategic clarity they brought to our entire executive team.", 
      avatar: "https://i.pravatar.cc/150?u=jameson", 
      rating: 5,
      role: "CEO, SaaS Pioneer"
    }
  ];

  const clients = [
    "luckyvape", "shomnath travel", "MBA Colleges",
    "TechNova Solutions", "Global Logistics Inc.", "Zenith Marketing", "Apex Financial",
    "CloudStream Systems", "BlueHorizon Media", "Quantum Dynamics", "SilverLine Consulting",
    "Terra Firma Real Estate", "NorthStar Healthcare", "IronClad Security", "Velocity Ventures",
    "Echo Digital", "Prism Analytics", "Summit Enterprise", "Orion Software",
    "Catalyst Creative", "Beacon Energy", "Frontier Robotics", "Insight Global",
    "Stellar Retail", "Nexus Networks", "Vantage Point", "Integrity Law", "Paramount Education"
  ];

  return (
    <div className="flex flex-col font-sans">
      <Helmet>
        <title>YD Groups | Leading IT Services & SEO Solutions for Business Growth</title>
        <meta name="description" content="YD Groups offers expert SEO, Digital Marketing, AI/ML, and Enterprise Cloud Solutions. Scale your business with our data-driven IT services." />
        <meta name="keywords" content="IT Services, SEO Solutions, Digital Marketing, AI Machine Learning, Cloud Infrastructure, YD Groups" />
      </Helmet>
      <SchemaMarkup data={organizationSchema} />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-[#0a0a0a] text-white overflow-hidden py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Elevate Your Website with Expert Solutions <br />
              <span className="text-[#d9ff00] italic">SEO Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg mb-10 max-w-xl">
              Boost your website's visibility with expert SEO solutions. We optimize rankings, enhance organic reach, and drive traffic through keyword research, content optimization, and technical SEO. Elevate your online presence and outperform the competition today!
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full flex items-center gap-2 transition-all"
              >
                Get Quote <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                onClick={openModal}
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-full flex items-center gap-2 transition-all"
              >
                Free Audit
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden border-8 border-white/10 shadow-2xl">
              <img 
                src="https://picsum.photos/seed/seo-expert-dashboard/800/600" 
                alt="Expert SEO" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d9ff00]/5 to-transparent pointer-events-none" />
      </section>

      {/* Logo Bar (Client Names Marquee) */}
      <section className="py-12 bg-white border-b border-gray-100 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex whitespace-nowrap">
          <motion.div 
            className="flex items-center gap-16 px-4"
            animate={{ x: [0, -2000] }}
            transition={{ 
              duration: 40, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <div 
                key={i} 
                className="text-2xl font-black text-gray-200 hover:text-[#0047ff] transition-colors cursor-default tracking-tighter uppercase"
              >
                {client}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Search Evolution Section - High Word Count */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">The Evolution of Search and Discovery</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              In the last decade, search has moved from simple keyword matching to complex artificial intelligence recommendations. At YD Groups, we've lived through every shift, mastering the technologies that define how users find your brand today.
            </p>
          </div>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 hidden lg:block" />
            
            <div className="space-y-24">
              {[
                {
                  year: "2010 - 2015",
                  title: "The Era of Keyword Dominance",
                  desc: "This was the age of traditional SEO. Success was measured by how many times you could mention a keyword on a page and how many low-quality links you could point to it. YD Groups was already pioneering 'Technical SEO' during this time, focusing on clean code and site structure while others were taking shortcuts. We helped brands build real authority by focusing on high-quality metadata and foundational infrastructure that still serves them well today.",
                  align: "left"
                },
                {
                  year: "2016 - 2020",
                  title: "The Mobile & Semantic Shift",
                  desc: "As smartphones became the primary way people accessed the internet, everything changed. Google introduced BERT and other semantic models, starting to understand *intent* rather than just *words*. We transitioned our strategy to 'Mobile-First' and 'Entity-Based SEO'. We helped businesses transform their content into structured data, ensuring they appeared in rich snippets and map results. This period was about context—ensuring the search engine understood not just what you said, but who you were to your audience.",
                  align: "right"
                },
                {
                  year: "2021 - 2024",
                  title: "The Rise of AEO & Voice",
                  desc: "Suddenly, users stopped typing and started talking. 'Siri, find me an SEO expert' became a common query. We launched our specialized Answer Engine Optimization division to capitalize on this shift. We realized that search was no longer just about a list of links; it was about being the single, definitive answer that an AI assistant would speak back to the user. We perfected the art of the 'Zero-Click' result, ensuring our clients were the authorities in their niche.",
                  align: "left"
                },
                {
                  year: "2025 & Beyond",
                  title: "The GEO & Generative Frontier",
                  desc: "Today, we are in the midst of the most significant revolution since the birth of the internet. Generative AI models like Gemini and ChatGPT are changing discovery again. At YD Groups, we are pioneering Generative Engine Optimization (GEO). We don't just optimize for a ranking; we optimize your brand's presence within the knowledge maps of LLMs. We ensure you areCited. Recommended. Credible. In this era, visibility is about training the AI to recognize you as the industry standard.",
                  align: "right"
                }
              ].map((period, i) => (
                <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-0 ${period.align === "right" ? "lg:flex-row-reverse" : ""}`}>
                  <div className="lg:w-1/2 flex justify-center px-8 text-center lg:text-left">
                    <div className="max-w-md">
                      <div className="text-[#0047ff] font-serif italic text-3xl mb-4">{period.year}</div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">{period.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{period.desc}</p>
                    </div>
                  </div>
                  <div className="z-10 bg-[#0047ff] w-4 h-4 rounded-full border-4 border-white shadow-lg hidden lg:block" />
                  <div className="lg:w-1/2 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive Services Section - High Word Count */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Comprehensive Digital Growth Engines</h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                We don't offer generic packages. We build tailored growth engines that leverage the full spectrum of modern digital optimization. Our multidisciplinary team works across technical, content, and authority spheres to deliver absolute market dominance for your brand. 15 years of data science and search expertise packed into every campaign.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-[#0047ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Enterprise SEO</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Managing search performance for sites with millions of pages requires a different breed of SEO. We handle complex site architectures and crawl budget optimization at scale.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-[#0047ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">SaaS Optimization</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">We specialize in help SaaS companies move from feature-based content to intent-based authority, driving demo requests and trial signups through targeted SEO.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-[#0047ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Technical Remediation</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">Is your javascript site invisible to crawlers? We fix complex rendering issues, implement advanced schema, and ensure your tech stack isn't holding you back.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 bg-[#0047ff] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Share2 className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">Authority Marketing</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">We don't just 'build links.' We build brand visibility by securing placements in high-authority journals, niches, and news sites that drive traffic and trust.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="https://picsum.photos/seed/engine/800/800" alt="Growth Engine" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#d9ff00] rounded-full blur-[100px] opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Summary Home */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">Our Philosophy of Perpetual Growth</h2>
               <p className="text-xl text-gray-600 leading-relaxed mb-8">
                 Most agencies focus on 'maintenance.' We focus on iteration. Our philosophy is that a search strategy that isn't evolving is already dying. We treat every client's digital presence as a living, breathing asset that must be constantly refined and expanded.
               </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img src="https://picsum.photos/seed/growth/600/600" alt="Philosophy" className="rounded-[3rem] shadow-2xl" referrerPolicy="no-referrer" />
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Semantic Integrity</h4>
                  <p className="text-gray-600 leading-relaxed">In the age of AI, search engines are looking for 'truth' and 'authority.' We ensure your content has the semantic integrity to be cited as a primary source. This involves deep research into your industry's knowledge graph and mapping your brand's unique insights directly to it.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Holistic UX Integration</h4>
                  <p className="text-gray-600 leading-relaxed">SEO does not exist in a vacuum. Your bounce rate and user-engagement metrics are powerful ranking signals. We optimize the entire user journey, ensuring that when we drive traffic to your site, that traffic converts and stays engaged, reinforcing your authority to search engines.</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Global Data Intelligence</h4>
                  <p className="text-gray-600 leading-relaxed">We leverage data from our global client base to stay ahead of regional search trends. If a strategy works in Australia, we test it in India and North America. This cross-pollination of data gives our clients an intelligence advantage that single-market agencies simply cannot match.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Services Section */}
      <section className="py-24 bg-[#0047ff] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-white/30 text-sm font-semibold mb-8">
            Top Services
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-16 max-w-5xl mx-auto leading-tight">
            From startups to multinational corporations, we've helped businesses of all sizes achieve online success with <br />
            <span className="italic text-[#d9ff00]">Customized SEO Solutions.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {topServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:bg-white/20 transition-all group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <service.icon className="h-8 w-8 text-[#0047ff]" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-16">
            <Button 
              onClick={openModal}
              className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-10 py-6 text-lg rounded-full flex items-center gap-2 mx-auto"
            >
              Get Free Audit <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold mb-8">
              About Us
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Our dedicated SEO experts leverage deep industry knowledge and innovative strategies to drive real, measurable <br />
              <span className="text-[#0047ff] italic">results for our clients.</span>
            </h2>
            <Link to="/about">
              <Button className="bg-[#0047ff] hover:bg-[#0036c2] text-white font-bold px-10 py-6 text-lg rounded-full flex items-center gap-2">
                Learn More About Us <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/team1/400/400" alt="Team" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/team2/400/400" alt="Team" className="rounded-3xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-12">
              <img src="https://picsum.photos/seed/team3/400/400" alt="Team" className="rounded-3xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/team4/400/400" alt="Team" className="rounded-3xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/why/800/1000" alt="Why Choose Us" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-[#0047ff] italic text-5xl md:text-7xl">Our Agency</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Our customized SEO strategies, backed by expertise and proven techniques, elevate search rankings, boost traffic, and drive leads and revenue.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Key Advantages:</h3>
            <div className="space-y-4">
              {whyChoose.map((item, i) => (
                <div 
                  key={i} 
                  className={`rounded-2xl border transition-all cursor-pointer ${activeAccordion === i ? 'bg-[#d9ff00] border-[#d9ff00]' : 'bg-gray-50 border-gray-100'}`}
                  onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{item.title}</span>
                    {activeAccordion === i ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </div>
                  {activeAccordion === i && (
                    <div className="px-6 pb-6 text-gray-800">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold mb-8">
            Our Process
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-16 max-w-5xl mx-auto leading-tight">
            Our SEO approach is strategic, data-driven, and focused on results. Here's a <span className="text-[#0047ff] italic">glimpse into our process.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0047ff] transition-colors">
                  <step.icon className="h-8 w-8 text-[#0047ff] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <Link to="/process">
            <Button className="bg-[#0047ff] hover:bg-[#0036c2] text-white font-bold px-10 py-6 text-lg rounded-full flex items-center gap-2 mx-auto">
              View Full Process <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((caseStudy, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="rounded-[2.5rem] overflow-hidden mb-8 shadow-lg">
                  <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="text-blue-600 font-bold mb-4">{caseStudy.category}</div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 group-hover:text-[#0047ff] transition-colors">
                  {caseStudy.title}
                </h3>
                <Link to="/portfolio" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-[#0047ff] transition-colors">
                  Read Case Study <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 text-center mb-20">
            See What Our Clients Say About <br />
            Their <span className="text-[#0047ff] italic">Experience With Us</span>
          </h2>
          <div className="relative max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center gap-8 mb-12 ${i % 2 !== 0 ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className="shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-24 h-24 rounded-full border-4 border-white shadow-xl" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative">
                  <div className={`flex gap-1 text-yellow-400 mb-4 ${i % 2 !== 0 ? 'justify-end' : ''}`}>
                    {[...Array(t.rating)].map((_, i) => <CheckCircle2 key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{t.name}</h4>
                  <p className="text-[#0047ff] text-xs font-bold uppercase tracking-wider mb-4">{t.role}</p>
                  <p className="text-gray-600 leading-relaxed italic">
                    {t.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News & Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold mb-8">
              News & Blog
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Explore Our Latest News & Blog for Expert <span className="text-[#0047ff] italic">SEO Insights</span>
            </h2>
            <p className="text-gray-600 text-lg mb-10 max-w-xl">
              Stay updated with the latest trends in Search Engine Optimization, Answer Engine Optimization, and Generative Engine Optimization. Our experts share actionable insights to help you grow.
            </p>
            <Link to="/blog">
              <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-10 py-6 text-lg rounded-full">
                Visit Our Blog
              </Button>
            </Link>
          </div>
          <div className="space-y-8">
            {[
              { title: "How Content Marketing Drives SEO Success", date: "January 01, 2025" },
              { title: "The Ultimate Guide to Conducting an SEO Audit", date: "February 05, 2025" }
            ].map((post, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex gap-4 mb-6">
                  <span className="bg-[#d9ff00] text-black text-xs font-bold px-3 py-1 rounded-md uppercase">SEO</span>
                  <span className="bg-[#d9ff00] text-black text-xs font-bold px-3 py-1 rounded-md uppercase">{post.date}</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8 group-hover:text-[#0047ff] transition-colors">
                  {post.title}
                </h3>
            <Link to="/blog">
              <Button variant="outline" className="rounded-full px-8 border-gray-200">Read More</Button>
            </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Ready to <span className="text-[#d9ff00]">Grow?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Contact our experts today for a free SEO audit and personalized growth strategy.
              </p>
            </div>
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#d9ff00]/5 blur-[120px] rounded-full" />
      </section>
    </div>
  );
}

// Custom Icons for the design
function ListIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
    </svg>
  );
}

