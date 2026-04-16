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

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

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
    { title: "Page-Level Optimization", icon: FileText, desc: "Our in-depth technical SEO audits uncover and resolve hidden issues that may impact your website's search performance, ensuring seamless crawlability, indexability, and an enhanced user experience." },
    { title: "Authority Link Building", icon: LinkIcon, desc: "Our strategic link-building and outreach efforts are designed to acquire high-quality backlinks from trusted sources, strengthening your website's authority, improving search rankings, and increasing online visibility." },
    { title: "Localized SEO Services", icon: MapPin, desc: "Our local SEO strategies boost your business's presence in local search results by optimizing listings, managing reviews, and targeting location-specific keywords to attract nearby customers and increase foot traffic." },
    { title: "Content & SEO Writing", icon: EditIcon, desc: "Our content and SEO writing services create engaging, keyword-optimized content that boosts visibility and drives traffic. We craft compelling copy that resonates with your audience while enhancing search rankings." }
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
    { title: "Honest & Transparent Approach", content: "We believe in clear communication and honest reporting, keeping you informed every step of the way." },
    { title: "Honest & Transparent Approach", content: "We believe in clear communication and honest reporting, keeping you informed every step of the way." }
  ];

  const caseStudies = [
    { title: "Enhancing Brand Engagement with Influencer Collaborations", category: "SEO Optimization", image: "https://picsum.photos/seed/case1/600/400" },
    { title: "Optimizing ROI with Precision-Targeted Social Media Ads", category: "SEO Optimization", image: "https://picsum.photos/seed/case2/600/400" },
    { title: "Revolutionizing Customer Service Through Social Media", category: "SEO Optimization", image: "https://picsum.photos/seed/case3/600/400" },
    { title: "Elevating Brand Engagement with Influencer Collaborations", category: "SEO Optimization", image: "https://picsum.photos/seed/case4/600/400" }
  ];

  const testimonials = [
    { name: "John Doe", text: "Nulla id lectus gravida nisl venenatis luctus sed et turpis. Integer dignissim malesuada sollicitudin. Donec pharetra auctor aliquam. Aliquam in feugiat tortor. Curabitur ut malesuada lectus, eget consectetur ipsum. Integer eget laoreet dui. Nam vitae congue felis, a elementum.", avatar: "https://i.pravatar.cc/150?u=john", rating: 5 },
    { name: "Michael Davis", text: "Nulla id lectus gravida nisl venenatis luctus sed et turpis. Integer dignissim malesuada sollicitudin. Donec pharetra auctor aliquam. Aliquam in feugiat tortor. Curabitur ut malesuada lectus, eget consectetur ipsum. Integer eget laoreet dui. Nam vitae congue felis, a elementum.", avatar: "https://i.pravatar.cc/150?u=michael", rating: 5 },
    { name: "Daniel Thomas", text: "Nulla id lectus gravida nisl venenatis luctus sed et turpis. Integer dignissim malesuada sollicitudin. Donec pharetra auctor aliquam. Aliquam in feugiat tortor. Curabitur ut malesuada lectus, eget consectetur ipsum. Integer eget laoreet dui. Nam vitae congue felis, a elementum.", avatar: "https://i.pravatar.cc/150?u=daniel", rating: 5 }
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
              <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full flex items-center gap-2 transition-all">
                Get Quote <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 font-bold px-8 py-6 text-lg rounded-full flex items-center gap-2 transition-all">
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
                src="https://picsum.photos/seed/expert/800/600" 
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

      {/* Global Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full border border-blue-200 text-blue-600 text-sm font-semibold mb-4">
              Global Reach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Country-Based Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide localized SEO, AEO, and GEO strategies tailored to the unique market dynamics of India, Australia, and Canada.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "India", flag: "🇮🇳", desc: "Dominating the diverse and rapidly growing digital landscape of the Indian market.", link: "/seo/india" },
              { name: "Australia", flag: "🇦🇺", desc: "Helping Australian businesses scale with high-intent search and conversion strategies.", link: "/seo/australia" },
              { name: "Canada", flag: "🇨🇦", desc: "Strategic SEO and AI-driven optimization for the competitive North American market.", link: "/seo/canada" }
            ].map((country, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all text-center group"
              >
                <div className="text-6xl mb-6">{country.flag}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{country.name}</h3>
                <p className="text-gray-600 mb-8">{country.desc}</p>
                <Link to={country.link} className="inline-flex items-center gap-2 font-bold text-[#0047ff] hover:underline">
                  Explore {country.name} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
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
            <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-10 py-6 text-lg rounded-full flex items-center gap-2 mx-auto">
              Learn More Us <ArrowRight className="h-5 w-5" />
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
            <Button className="bg-[#0047ff] hover:bg-[#0036c2] text-white font-bold px-10 py-6 text-lg rounded-full flex items-center gap-2">
              Learn More Us <ArrowRight className="h-5 w-5" />
            </Button>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
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
                <Link to="#" className="inline-flex items-center gap-2 font-bold text-gray-900 hover:text-[#0047ff] transition-colors">
                  Read More <ArrowRight className="h-5 w-5" />
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
                  <h4 className="text-xl font-bold text-gray-900 mb-4">{t.name}</h4>
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla id dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.
            </p>
            <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-10 py-6 text-lg rounded-full">
              Read More
            </Button>
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
                <Button variant="outline" className="rounded-full px-8 border-gray-200">Read More</Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Boost Your Rankings with <span className="text-[#d9ff00] italic">Expert SEO!</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Get in touch today to book a consultation or explore our services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[#d9ff00]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Address</p>
                    <p className="font-bold">123 Main Street, Suite 456, Springfield, NY 10001 United States</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-[#d9ff00]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone</p>
                    <p className="font-bold">+91-989-8989-898</p>
                    <p className="font-bold">+91-987-6543-210</p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-[#d9ff00]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email</p>
                    <p className="font-bold">youremail.com</p>
                    <p className="font-bold">www.yoursite.com</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-[#d9ff00]" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Working Hours</p>
                    <p className="font-bold">Monday - Friday</p>
                    <p className="font-bold">09:00am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-10 rounded-[2.5rem]">
            <ContactForm />
          </div>
        </div>
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

