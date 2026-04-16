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

export default function Process() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      title: "Discovery & Audit",
      desc: "We begin with a comprehensive audit of your current digital footprint, competitor analysis, and market opportunity research.",
      icon: Search,
      details: ["Technical SEO Audit", "Competitor Gap Analysis", "Content Performance Review", "Market Trend Research"]
    },
    {
      title: "Strategy Planning",
      desc: "Developing a customized roadmap that integrates SEO, AEO, and GEO to capture maximum search visibility.",
      icon: Brain,
      details: ["Keyword & Intent Mapping", "AEO/GEO Targeting Strategy", "Information Architecture Planning", "Content Roadmap Development"]
    },
    {
      title: "Technical Optimization",
      desc: "Hardening your website's technical foundation for speed, mobile-friendliness, and crawlability.",
      icon: Settings,
      details: ["Core Web Vitals Optimization", "Schema Markup Implementation", "Site Structure Refinement", "Mobile-First Enhancements"]
    },
    {
      title: "Content & Optimization",
      desc: "Creating and optimizing high-value content designed for both human readers and AI search engines.",
      icon: Zap,
      details: ["SEO Content Creation", "AEO Direct Answer Optimization", "GEO Brand Citation Strategy", "On-Page Semantic Optimization"]
    },
    {
      title: "Link Building & Authority",
      desc: "Building high-quality, relevant backlinks and digital PR to establish your brand as a market leader.",
      icon: TrendingUp,
      details: ["High-Authority Link Acquisition", "Digital PR & Outreach", "Brand Mention Monitoring", "Niche Authority Building"]
    },
    {
      title: "Tracking & Reporting",
      desc: "Real-time monitoring and transparent reporting on the metrics that matter most to your business.",
      icon: BarChart3,
      details: ["Custom Analytics Dashboards", "Ranking & Visibility Tracking", "Conversion Rate Monitoring", "Monthly Performance Reviews"]
    },
    {
      title: "Continuous Optimization",
      desc: "Agile testing and scaling to ensure long-term growth and adaptation to search engine updates.",
      icon: MessageSquare,
      details: ["A/B Testing Strategies", "Algorithm Update Adaptation", "New Opportunity Identification", "Performance-Based Scaling"]
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
            onClick={scrollToContact}
            className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full"
          >
            Get Free Audit
          </Button>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#d9ff00]/5 via-transparent to-transparent" />
      </section>

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Our Process Matters</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Success in digital marketing isn't about luck; it's about a repeatable, scalable system. Our process removes confusion, ensures total transparency, and focuses every action on driving measurable ROI for your business.
          </p>
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
