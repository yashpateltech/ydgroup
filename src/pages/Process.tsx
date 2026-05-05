import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Zap, 
  Settings, 
  TrendingUp, 
  BarChart3, 
  MessageSquare, 
  Brain,
  ArrowRight,
  Plus,
  Minus
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import ContactForm from "../components/ContactForm";
import { useAuditModal } from "../context/AuditModalContext";

export default function Process() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { openModal } = useAuditModal();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      title: "Discovery & Holistic Audit",
      desc: "Our journey begins with an exhaustive forensic analysis of your current digital presence. We don't just look at the surface; we probe into the very architecture of your site and the market forces surrounding it. This phase is critical because it sets the baseline for all future growth. We look for technical bottlenecks, data discrepancies, and missed opportunities that others usually overlook.",
      icon: Search,
      details: ["Comprehensive Technical SEO Audit", "Advanced Competitor Gap Analysis", "Content Quality & Relevance Review", "Market Opportunity & Trend Research", "Crawl Budget & Indexation Analysis", "Backlink Profile Health Check"]
    },
    {
      title: "Strategic Roadmap Mapping",
      desc: "Once the data is collected, our senior strategists develop a customized multi-layered roadmap. This is where we integrate SEO, AEO, and GEO into a singular, cohesive growth machine. We prioritize actions based on their potential for immediate ROI while ensuring the long-term health and authority of your brand. This isn't a template; it's a bespoke plan built for your specific business goals.",
      icon: Brain,
      details: ["Search Intent & User Journey Mapping", "AEO/GEO Citation & Entity Strategy", "Information Architecture & UX Planning", "Long-term Content Roadmap Development", "Performance Forecast & KPI Setting", "Resource Allocation & Budget Planning"]
    },
    {
      title: "Technical Hardening & Performance",
      desc: "A beautiful website is useless if it's invisible or slow. We focus on hardening your site's technical foundation, optimizing for Core Web Vitals, mobile responsiveness, and clean code that search engines love. We ensure that your technical infrastructure is not just 'good enough' but world-class, providing a friction-less experience for both users and search crawlers.",
      icon: Settings,
      details: ["Core Web Vitals & Speed Optimization", "Advanced Schema & JSON-LD Implementation", "Site Structure & Navigation Refinement", "Mobile-First Usability Enhancements", "Javascript Rendering & Hydration Audit", "Server-side Optimization & CDN Setup"]
    },
    {
      title: "High-Authority Content Strategy",
      desc: "Content is the fuel for your digital growth. We create and optimize high-value, human-centric resources that are designed for both readers and AI models. Our approach focuses on semantic relevance and deep value, ensuring that your content serves as a definitive answer in your niche. We avoid thin content, focusing instead on comprehensive guides and authoritative resources.",
      icon: Zap,
      details: ["Semantic SEO Content Engineering", "AEO Direct Answer Contextualization", "GEO Brand Authority Networking", "Ongoing On-Page Semantic Optimization", "E-E-A-T Signal Reinforcement", "Cluster-Based Content Architecture"]
    },
    {
      title: "Authority Scaling & Digital PR",
      desc: "In the modern search landscape, authority is earned through relevance and trust. We execute calculated link-building and digital PR campaigns to establish your brand as a market leader. We focus on acquiring high-quality backlinks from reputable sources within your industry, ensuring that your brand's digital footprints are broad, deep, and respected.",
      icon: TrendingUp,
      details: ["Strategic High-Authority Link Acquisition", "Niche-Specific Digital PR & Outreach", "Brand Mention & Entity Monitoring", "Global Authority & Citadel Building", "Competitor Backlink Profile Mirroring", "Relationship-Based Guest Publishing"]
    },
    {
      title: "Transparent Tracking & Intelligence",
      desc: "Data is only useful if it's actionable. We provide real-time monitoring and transparent reporting that cuts through the noise. Our custom dashboards show you exactly what's happening with your traffic, conversions, and rankings. We focus on the bottom-line metrics that move your business forward, providing clear insights into the ROI of every campaign action.",
      icon: BarChart3,
      details: ["Custom Real-time Analytics Dashboards", "Multichannel Visibility & Rank Tracking", "Conversion Rate & Funnel Monitoring", "Deep-Dive Monthly Performance Reviews", "Attribution Modeling & Lead Tracking", "Cross-Platform Sentiment Analysis"]
    },
    {
      title: "Continuous Agile Optimization",
      desc: "The digital world never stands still, and neither do we. Our final phase is an ongoing cycle of testing, learning, and scaling. We use A/B testing and agile methodology to adapt to search engine updates and shifts in user behavior. We are constantly looking for new opportunities to scale your success and keep you ahead of the competition in an ever-changing landscape.",
      icon: MessageSquare,
      details: ["Multi-Variable A/B Testing Strategies", "Algorithm Update Rapid Response", "Emerging Opportunity Identification", "Performance-Based Campaign Scaling", "Continuous User Experience Refinement", "Iterative Strategy Updates"]
    }
  ];

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Our SEO, AEO & GEO Process | YD Groups</title>
        <meta name="description" content="Discover our proven, transparent process for driving digital growth. From discovery and audit to continuous optimization, see how YD Groups delivers results." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Our <span className="text-[#d9ff00]">Process</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            A transparent, data-driven, and proven system designed for scalable business growth in the modern search era.
          </motion.p>
          <Button 
            onClick={openModal}
            className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full"
          >
            Get Free Audit
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9ff00]/5 via-transparent to-transparent" />
      </section>

      {/* Deep Dive Methodology Section - Growth Framework */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">The YD Groups Growth Framework™</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <p>
                Our proprietary growth framework is the culmination of fifteen years of intense digital experimentation. We realized early on that traditional "checklist SEO" was a race to the bottom. To achieve exponential growth, one must treat a website as a living organism within a complex, evolving search ecosystem. This framework is our blueprint for that biological growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 not-prose">
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Semantic Foundationing</h4>
                  <p className="leading-relaxed">
                    Most agencies start with keywords. We start with *entities* and *intent*. We map out the entire semantic cloud surrounding your business. We ask: What are the core concepts your audience is trying to understand? How does your brand relate to these concepts? By building a semantic foundation, we bridge the gap between your data and the AI's understanding.
                  </p>
                </div>
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Authority Citadel Building</h4>
                  <p className="leading-relaxed">
                    A backlink from a high-DA site is good. A cluster of topical authority citadels is invincible. We help you build "Citadels of Authority"—interconnected hubs of content and external citations that signal to search engines that you are the absolute master of a specific subject area. This is the difference between temporary rankings and permanent dominance.
                  </p>
                </div>
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The AEO/GEO Loop</h4>
                  <p className="leading-relaxed">
                    In Search 3.0, discovery happens in conversations and AI summaries. Our framework includes a continuous loop of testing how your brand appears in LLM (Large Language Model) responses. We feed these insights back into your content strategy, ensuring you are cited, quoted, and recommended by the very AI models your customers are using to make decisions.
                  </p>
                </div>
                <div className="p-10 bg-gray-50 rounded-[2.5rem] border border-gray-100">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">UX-Search Synthesis</h4>
                  <p className="leading-relaxed">
                    There is no longer a divide between SEO and User Experience. Google's page experience signals and AI's ability to 'understand' a page mean that a confusing UI will tank your rankings. Our framework integrates UX designers directly into the SEO process, ensuring your site is as intuitive for humans as it is crawlable for robots.
                  </p>
                </div>
              </div>
              <p className="pt-8">
                Furthermore, our methodology is inherently risk-averse. We have seen too many companies lose 80% of their traffic overnight because an agency took a shortcut with 'gray-hat' links or AI-spun content. We prioritize 'White-Hat Forever' strategies. We believe that if you provide genuine value to the internet, search engines will naturally want to reward you. Our job is simply to make that value as clear and undeniable as possible through technical excellence and strategic distribution.
              </p>
              <p>
                When you partner with YD Groups, you aren't just hiring a vendor; you are gaining an R&D department. We treat your search data as the most valuable asset in your company, mining it for insights that can inform your product development, your sales strategy, and your brand's future direction. This is search optimization as a business intelligence tool, and it is the only way to win in the next decade of digital competition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {steps.map((step, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 === 0 ? "order-1" : "order-1 lg:order-2"}>
                  <div className="inline-flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#0047ff] text-white flex items-center justify-center font-bold text-xl">
                      {i + 1}
                    </div>
                    <span className="text-[#0047ff] font-bold uppercase tracking-widest text-sm">Step {i + 1}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{step.title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{step.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-3 text-gray-700">
                        <ArrowRight className="h-4 w-4 text-[#d9ff00]" />
                        <span className="font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={i % 2 === 0 ? "order-2" : "order-2 lg:order-1"}>
                  <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex items-center justify-center">
                    <step.icon className="h-32 w-32 text-[#0047ff] opacity-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Flow Summary */}
      <section className="py-24 bg-[#0047ff] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">The Growth Cycle</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {["Audit", "Plan", "Optimize", "Content", "Authority", "Report"].map((item, i) => (
              <div key={i} className="flex items-center gap-8">
                <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-full border border-white/20 font-bold text-lg">
                  {item}
                </div>
                {i < 5 && <ArrowRight className="h-6 w-6 text-white/30 hidden lg:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Our Process Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <h4 className="text-2xl font-bold text-[#0047ff] mb-4">Data-Driven</h4>
                <p className="text-gray-600">We don't guess. Every step is guided by real-time data and analytics.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#0047ff] mb-4">Transparent</h4>
                <p className="text-gray-600">You have full visibility into our actions and their impact on your business.</p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#0047ff] mb-4">ROI-Focused</h4>
                <p className="text-gray-600">Our ultimate goal is your growth. We prioritize high-impact strategies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Process FAQs</h2>
          <div className="space-y-4">
            {[
              { q: "How long does the discovery phase take?", a: "Typically, the discovery and audit phase takes 1-2 weeks depending on the complexity of your website and industry." },
              { q: "Will I get regular updates on the process?", a: "Yes, we provide weekly updates and comprehensive monthly reports detailing our progress and results." },
              { q: "Can the process be customized for my business?", a: "Absolutely. While our core framework is proven, we tailor every step to meet your specific business goals and market dynamics." },
              { q: "How do you handle search engine algorithm updates?", a: "Our process is agile. We continuously monitor search trends and algorithm changes, adjusting our strategy in real-time to maintain and grow your rankings." }
            ].map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <button 
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-gray-900"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  {activeFaq === i ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Start Your <span className="text-[#d9ff00]">Project</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Ready to experience a transparent and results-driven optimization process? Get your free audit today.
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
