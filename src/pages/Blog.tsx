import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "The Future of Search: Why GEO is the New SEO",
    desc: "As generative AI models like Gemini and ChatGPT change how users find information, Generative Engine Optimization (GEO) is becoming critical for brand visibility.",
    category: "GEO",
    date: "April 10, 2024",
    author: "YD Expert Team"
  },
  {
    title: "AEO Strategies: Capturing the Zero-Click Audience",
    desc: "Learn how to optimize your content for direct answers and voice search to dominate the 'zero-click' search landscape.",
    category: "AEO",
    date: "April 5, 2024",
    author: "Search Specialist"
  },
  {
    title: "10 Technical SEO Audit Steps for 2024",
    desc: "A comprehensive guide to auditing your website's technical health, from Core Web Vitals to advanced schema implementation.",
    category: "SEO",
    date: "March 28, 2024",
    author: "Technical Lead"
  },
  {
    title: "Case Study: Scaling an E-commerce Brand in India",
    desc: "How we helped a local Indian retail brand achieve 300% organic growth through localized SEO and AEO strategies.",
    category: "Case Study",
    date: "March 20, 2024",
    author: "Growth Manager"
  },
  {
    title: "The Impact of Core Web Vitals on Rankings",
    desc: "Understanding how page experience metrics affect your search engine visibility and user conversion rates.",
    category: "SEO",
    date: "March 15, 2024",
    author: "UX Specialist"
  },
  {
    title: "Optimizing for Voice Search: A Practical Guide",
    desc: "Practical tips for structuring your content to be easily understood and cited by voice assistants like Alexa and Siri.",
    category: "AEO",
    date: "March 10, 2024",
    author: "Content Strategist"
  },
  {
    title: "How AI Models Cite Sources: A GEO Deep Dive",
    desc: "Exploring the mechanics of how generative AI engines select and cite sources for their answers.",
    category: "GEO",
    date: "March 5, 2024",
    author: "AI Researcher"
  },
  {
    title: "Local SEO for Global Brands: Scaling Consistency",
    desc: "How to maintain brand authority while optimizing for hyper-local search results across multiple countries.",
    category: "SEO",
    date: "February 28, 2024",
    author: "Global Lead"
  },
  {
    title: "The Role of E-E-A-T in Modern Search Algorithms",
    desc: "Why Experience, Expertise, Authoritativeness, and Trustworthiness are more important than ever for your SEO strategy.",
    category: "SEO",
    date: "February 20, 2024",
    author: "SEO Director"
  },
  {
    title: "Case Study: Dominating the Australian SaaS Market",
    desc: "A breakdown of the GEO and SEO strategy that put an Australian SaaS startup at the top of AI recommendations.",
    category: "Case Study",
    date: "February 15, 2024",
    author: "Strategy Head"
  }
];

export default function Blog() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Insights & Resources | SEO, AEO & GEO Blog | YD Groups</title>
        <meta name="description" content="Stay updated with the latest strategies in SEO, Answer Engine Optimization, and Generative Engine Optimization. Expert insights from the YD Groups team." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Insights & <span className="text-[#d9ff00]">Resources</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            The latest strategies, case studies, and expert insights on SEO, AEO, and GEO to help you stay ahead of the curve.
          </motion.p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0047ff]/10 to-transparent" />
      </section>

      {/* Featured Blog Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {blogPosts.slice(0, 2).map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative h-80 rounded-[2.5rem] overflow-hidden mb-8">
                  <img 
                    src={`https://picsum.photos/seed/${post.category.toLowerCase()}/800/600`} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-[#d9ff00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-[#0047ff] transition-colors">{post.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{post.desc}</p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {post.date}</span>
                  <span className="flex items-center gap-2"><User className="h-4 w-4" /> {post.author}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Listing Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <p className="text-gray-600">Explore our full library of search optimization resources.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["All", "SEO", "AEO", "GEO", "Case Study"].map((cat, i) => (
                <button key={i} className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${i === 0 ? "bg-[#0047ff] text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all flex flex-col group">
                <div className="flex items-center gap-2 text-[#0047ff] text-xs font-bold uppercase tracking-widest mb-4">
                  <Tag className="h-3 w-3" /> {post.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#0047ff] transition-colors leading-tight">{post.title}</h3>
                <p className="text-gray-500 text-sm mb-8 flex-grow leading-relaxed">{post.desc}</p>
                <div className="pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{post.date}</span>
                  <button className="text-[#0047ff] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Read More <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#0047ff] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Stay Ahead of the Curve</h2>
          <p className="text-lg text-blue-100 mb-10">Subscribe to our newsletter for the latest SEO, AEO, and GEO strategies delivered straight to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-blue-200 focus:outline-none focus:ring-2 focus:ring-[#d9ff00]"
            />
            <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-4 rounded-full">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
