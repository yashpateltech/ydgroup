import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Rocket, 
  Link as LinkIcon, 
  BarChart3, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Award,
  ShoppingCart,
  CheckCircle2,
  TrendingUp,
  Search
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const storeCategories = [
  {
    id: "premium-services",
    title: "Premium Services",
    icon: <Rocket className="h-6 w-6" />,
    description: "High-impact strategies for market dominance and AI visibility.",
    items: [
      { 
        name: "Reddit PR for AI Visibility", 
        desc: "Boost Brand Discovery in LLM Search through strategic Reddit presence.", 
        basePrice: "₹68,999", 
        salePrice: "₹1,03,499", 
        badge: "Hot",
        image: "https://picsum.photos/seed/reddit-pr/400/300"
      },
      { 
        name: "Professional SEO Services", 
        desc: "Full-scale SEO management for higher Google rankings.", 
        basePrice: "₹52,499 – ₹150,000", 
        salePrice: "₹78,749 – ₹225,000", 
        badge: "Enterprise",
        image: "https://picsum.photos/seed/pro-seo/400/300"
      }
    ]
  },
  {
    id: "backlink-packages",
    title: "Backlink Packages",
    icon: <LinkIcon className="h-6 w-6" />,
    description: "Power your authority with high-quality link building sets.",
    items: [
      { name: "100 Powerful Competitor Backlinks", desc: "High DA links from your top competitors.", basePrice: "₹2,099", salePrice: "₹3,149" },
      { name: "50 Powerful Competitor Backlinks", desc: "High DA links from industry leaders.", basePrice: "₹2,099", salePrice: "₹3,149" },
      { name: "200 High Authority Backlinks", desc: "Moz DA Boost with premium authority signals.", basePrice: "₹2,069", salePrice: "₹3,104" },
      { name: "300 Monthly Backlinks Plan", desc: "Sustainable Google Ranking Boost strategy.", basePrice: "₹2,699", salePrice: "₹4,049" },
      { name: "All-In-One Backlink Package 2.0", desc: "Comprehensive mixed link profiles.", basePrice: "₹4,949", salePrice: "₹7,424" },
      { name: "Ultimate Premium Backlink Package", desc: "The gold standard of link building.", basePrice: "₹7,199", salePrice: "₹10,799" }
    ]
  },
  {
    id: "metrics-boost",
    title: "Authority & Metrics Boost",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "Instantly improve your public authority metrics (DR, UR, DA).",
    items: [
      { name: "Increase Ahrefs Domain Rating (DR 50+)", desc: "Build domain-wide authority fast.", basePrice: "₹1,949 – ₹3,599", salePrice: "₹2,924 – ₹5,399" },
      { name: "Increase Ahrefs URL Rating (0 to 70+)", desc: "Hyper-boost specific page rankings.", basePrice: "₹1,799", salePrice: "₹2,699" },
      { name: "Increase Moz Domain Authority (DA 40)", desc: "Established Moz authority signals.", basePrice: "₹1,199", salePrice: "₹1,799" }
    ]
  },
  {
    id: "advanced-solutions",
    title: "Advanced Backlink Solutions",
    icon: <Cpu className="h-6 w-6" />,
    description: "Niche-specific and high-trust editorial link placements.",
    items: [
      { name: "Premium Guest Post Backlinks", desc: "Placements on high-traffic real websites.", basePrice: "₹2,149 – ₹13,499", salePrice: "₹3,224 – ₹20,249" },
      { name: "450 High DA Premium Backlinks", desc: "Bulk authority for competitive niches.", basePrice: "₹2,399", salePrice: "₹3,599" },
      { name: "Edu & Gov Authority Backlinks", desc: "The highest trust signals available.", basePrice: "₹599 – ₹49,499", salePrice: "₹899 – ₹74,249" },
      { name: "PBN Homepage Backlinks (DA 50+)", desc: "Explosive power from private networks.", basePrice: "₹3,599 – ₹13,499", salePrice: "₹5,399 – ₹20,249" },
      { name: "Contextual High-Quality Backlinks", desc: "Relevant links embedded in content.", basePrice: "₹0 – ₹1,049", salePrice: "₹0 – ₹1,574" }
    ]
  },
  {
    id: "additional-assets",
    title: "Additional SEO Assets",
    icon: <Globe className="h-6 w-6" />,
    description: "Essential data and low-cost authority building blocks.",
    items: [
      { name: "3800+ Backlink Site List Bundle", desc: "Comprehensive list for in-house outreach.", basePrice: "₹449", salePrice: "₹674" },
      { name: "Web 2.0 Premium Backlinks", desc: "Foundation building blocks.", basePrice: "₹10 – ₹1,350", salePrice: "₹15 – ₹2,025" },
      { name: "Profile Dofollow Backlinks", desc: "Diversify your link profile.", basePrice: "₹0 – ₹1,199", salePrice: "₹0 – ₹1,799" },
      { name: "Comment Backlinks", desc: "High quality, manually placed comments.", basePrice: "₹0 – ₹899", salePrice: "₹0 – ₹1,349" },
      { name: "Quora Answer Backlinks", desc: "Niche relevant, high-traffic answers.", basePrice: "₹1,110 – ₹2,790", salePrice: "₹1,665 – ₹4,185" },
      { name: "Social Media Backlinks", desc: "Broaden your social signal base.", basePrice: "₹525 – ₹1,050", salePrice: "₹789 – ₹1,574" },
      { name: "100% Real Human Social Signals", desc: "Genuine engagement signals.", basePrice: "₹2 – ₹1,319", salePrice: "₹3 – ₹1,979" }
    ]
  },
  {
    id: "dev-tools",
    title: "Development & Tools",
    icon: <ShieldCheck className="h-6 w-6" />,
    description: "Official licenses and store setup for optimal performance.",
    items: [
      { name: "Shopify & WooCommerce Store Setup", desc: "Professional e-commerce development.", basePrice: "₹5,399 – ₹13,499", salePrice: "₹8,099 – ₹20,249" },
      { name: "WP Rocket License Activation", desc: "Original license for maximum speed.", basePrice: "₹1,319 – ₹2,624", salePrice: "₹1,979 – ₹3,936" },
      { name: "Rank Math Pro License Activation", desc: "The ultimate SEO plugin for WordPress.", basePrice: "₹1,169 – ₹2,307", salePrice: "₹1,754 – ₹3,460" }
    ]
  }
];

export default function Store() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Helmet>
        <title>Premium SEO Store | YD Groups Digital Services</title>
        <meta name="description" content="Shop premium SEO services, backlink packages, authority metrics boost, and development tools to scale your digital presence." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden bg-[#0a0a0a]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0047ff] rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d9ff00] rounded-full blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#d9ff00] text-xs font-bold uppercase tracking-widest mb-8">
              <ShoppingCart className="h-4 w-4" /> Official Service Store
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none">
              Premium <span className="text-[#0047ff]">Digital</span> <br /> 
              & SEO Services
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
              The industry-standard marketplace for authority building, rank dominance, and enterprise-grade search strategies.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => document.getElementById('market')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#0047ff] hover:bg-[#0037cc] text-white px-10 py-6 rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/20">
                Browse Collection
              </Button>
              <Button variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/5 px-10 py-6 rounded-2xl font-bold text-lg">
                Custom Quote
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale transition-all hover:grayscale-0">
             <div className="flex items-center gap-3 font-black text-2xl">Ahrefs</div>
             <div className="flex items-center gap-3 font-black text-2xl">Moz</div>
             <div className="flex items-center gap-3 font-black text-2xl">Semrush</div>
             <div className="flex items-center gap-3 font-black text-2xl">Shopify</div>
             <div className="flex items-center gap-3 font-black text-2xl">WordPress</div>
          </div>
        </div>
      </section>

      {/* Main Store Area */}
      <section id="market" className="py-24">
        <div className="container mx-auto px-4">
          {storeCategories.map((category, catIdx) => (
            <div key={category.id} className="mb-24 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div className="max-w-xl">
                  <div className="flex items-center gap-3 text-[#0047ff] mb-4">
                    <div className="p-3 bg-blue-50 rounded-2xl">{category.icon}</div>
                    <span className="text-sm font-bold uppercase tracking-[0.2em]">{category.title}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">{category.title} Solutions</h2>
                  <p className="text-gray-500 text-lg">{category.description}</p>
                </div>
                <div className="hidden md:block">
                  <span className="text-4xl font-black text-gray-100 uppercase tracking-tighter">0{catIdx + 1}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIdx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: itemIdx * 0.1 }}
                    className="group bg-white rounded-[2.5rem] border border-gray-100 p-8 hover:shadow-2xl transition-all duration-500 flex flex-col relative overflow-hidden"
                  >
                    {/* Hover Effect Background */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#0047ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    
                    {item.badge && (
                      <div className="absolute top-6 right-6 px-3 py-1 bg-[#d9ff00] text-black text-[10px] font-black uppercase tracking-widest rounded-full z-10">
                        {item.badge}
                      </div>
                    )}

                    <div className="mb-8 flex-grow">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-[#0047ff] transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      
                      <div className="flex items-center gap-3 mt-auto">
                        <div className="flex flex-col">
                          <span className="text-xs text-gray-400 line-through font-medium">{item.basePrice}</span>
                          <span className="text-3xl font-black text-gray-900">{item.salePrice}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                      <Button className="flex-grow bg-gray-900 hover:bg-[#0047ff] text-white rounded-2xl py-6 font-bold flex items-center justify-center gap-2 transition-all">
                        <ShoppingCart className="h-4 w-4" /> Add to Order
                      </Button>
                      <button className="p-4 rounded-2xl bg-gray-50 text-gray-400 hover:text-[#0047ff] hover:bg-blue-50 transition-all">
                        <Search className="h-5 w-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-[#0047ff] rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent " />
            <div className="relative z-10 max-w-3xl mx-auto">
              <Award className="h-16 w-16 text-[#d9ff00] mx-auto mb-8" />
              <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tight">Need a Custom <br className="hidden md:block"/> Enterprise Solution?</h2>
              <p className="text-xl text-blue-100 opacity-80 mb-12">
                For high-volume requirements or multi-year strategies, our consultants are ready to build a tailored roadmap for your brand.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button className="bg-white text-[#0047ff] hover:bg-blue-50 px-12 py-8 rounded-3xl font-bold text-xl shadow-xl">
                  Talk to an Expert
                </Button>
                <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 px-12 py-8 rounded-3xl font-bold text-xl">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer Info */}
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-12 text-sm text-gray-400 font-medium">
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Secure Payments</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Professional Support</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Real-time Reporting</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-500" /> Industry Leading ROI</div>
          </div>
        </div>
      </section>
    </div>
  );
}
