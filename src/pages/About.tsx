import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, TrendingUp, Users, ShieldCheck, Globe, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import SchemaMarkup from "../components/SchemaMarkup";

export default function About() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "YD Groups",
    "url": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app",
    "logo": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app/logo.png",
    "description": "Leading digital marketing agency specializing in SEO, AEO, and GEO.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "India"
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>About YD Groups | Experts in SEO, AEO & GEO Services</title>
        <meta name="description" content="Learn about YD Groups, a premier digital marketing agency. We specialize in driving growth through advanced SEO, Answer Engine Optimization, and Generative Engine Optimization." />
      </Helmet>
      <SchemaMarkup data={organizationSchema} />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Who We Are: <br />
              <span className="text-[#d9ff00]">YD Groups</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl"
            >
              We are a results-driven digital marketing agency dedicated to scaling businesses through innovative search strategies and AI-ready optimization.
            </motion.p>
            <Button 
              onClick={scrollToContact}
              className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full"
            >
              Get Free SEO Audit
            </Button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d9ff00]/5 to-transparent" />
      </section>

      {/* Company Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                YD Groups started with a simple observation: the search landscape was changing faster than agencies could adapt. We saw the rise of voice search and generative AI as an opportunity to redefine how brands connect with their audience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Today, we are at the forefront of the SEO, AEO, and GEO revolution, helping global brands navigate the complexities of modern search engines and AI models.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#0047ff] text-3xl font-bold mb-2">Our Mission</h4>
                  <p className="text-gray-500 text-sm">To empower businesses with future-proof digital strategies that drive sustainable growth.</p>
                </div>
                <div>
                  <h4 className="text-[#0047ff] text-3xl font-bold mb-2">Our Vision</h4>
                  <p className="text-gray-500 text-sm">To be the global leader in AI-driven search optimization and digital brand authority.</p>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/agency-team/800/600" 
                alt="YD Groups Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Solving complex digital growth problems with precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SEO", desc: "Traditional search engine optimization to dominate rankings and drive high-intent organic traffic.", icon: Globe },
              { title: "AEO", desc: "Answer Engine Optimization to capture voice search and direct answers in 'zero-click' environments.", icon: Zap },
              { title: "GEO", desc: "Generative Engine Optimization ensuring your brand is the top recommendation for AI models like Gemini and ChatGPT.", icon: TrendingUp }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                  <item.icon className="h-8 w-8 text-[#0047ff]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose YD Groups?</h2>
            <p className="text-gray-600">We don't just deliver reports; we deliver ROI. Our approach is built on three core pillars.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Data-Driven Strategy", desc: "Every decision we make is backed by rigorous data analysis and market research." },
              { title: "ROI-Focused Execution", desc: "We prioritize actions that directly impact your bottom line and business growth." },
              { title: "Total Transparency", desc: "Real-time reporting and clear communication. You always know exactly where your investment is going." }
            ].map((pillar, i) => (
              <div key={i} className="text-center">
                <div className="text-[#0047ff] text-5xl font-bold mb-6">0{i + 1}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-[#0047ff] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://picsum.photos/seed/strategy/800/600" 
                alt="Our Strategy" 
                className="rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-8">Our Strategy-First Approach</h2>
              <p className="text-lg text-blue-100 mb-8 leading-relaxed">
                We don't believe in one-size-fits-all solutions. Our process begins with a deep understanding of your business, your competitors, and your target audience's search behavior.
              </p>
              <div className="space-y-6">
                {[
                  "In-depth market and competitor research",
                  "Customized optimization roadmap",
                  "Agile execution and continuous testing",
                  "Performance-based scaling"
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </div>
                    <span className="text-lg font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / Expertise */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A global team of search specialists, data scientists, and content strategists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "15+ Years", desc: "Combined experience in search engine optimization.", icon: Users },
              { title: "500+ Projects", desc: "Successfully delivered across multiple industries.", icon: CheckCircle2 },
              { title: "Global Reach", desc: "Expertise in India, Australia, and North American markets.", icon: Globe },
              { title: "AI Pioneers", desc: "Early adopters and innovators in AEO and GEO.", icon: ShieldCheck }
            ].map((stat, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl text-center border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <stat.icon className="h-6 w-6 text-[#0047ff]" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{stat.title}</h4>
                <p className="text-sm text-gray-500">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results / Proof */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">Real Results, Real Growth</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div>
              <div className="text-6xl font-bold text-[#0047ff] mb-4">300%</div>
              <p className="text-gray-600 font-medium uppercase tracking-widest text-sm">Average Traffic Growth</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#0047ff] mb-4">150%</div>
              <p className="text-gray-600 font-medium uppercase tracking-widest text-sm">Increase in Lead Volume</p>
            </div>
            <div>
              <div className="text-6xl font-bold text-[#0047ff] mb-4">Top 3</div>
              <p className="text-gray-600 font-medium uppercase tracking-widest text-sm">Rankings for Core Keywords</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Michael Chen", company: "TechNova Solutions", location: "Sydney, AU", result: "400% ROI in 6 months", text: "YD Groups completely transformed our digital presence. Their AEO strategy put us ahead of competitors who were still stuck in old SEO ways." },
              { name: "Sarah Williams", company: "EcoRetail", location: "Toronto, CA", result: "Top 1 on Google Maps", text: "The local SEO expertise they brought to our Canadian stores was incredible. We saw a 200% increase in foot traffic within weeks." },
              { name: "Amit Patel", company: "FinServe India", location: "Mumbai, IN", result: "Dominating Voice Search", text: "Their understanding of the Indian market combined with cutting-edge GEO optimization makes them the best agency we've ever worked with." },
              { name: "David Miller", company: "Global Logistics", location: "London, UK", result: "Organic Traffic Doubled", text: "Professional, transparent, and results-oriented. They don't just talk about SEO; they deliver actual business growth." }
            ].map((t, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <div className="text-[#0047ff] text-4xl font-serif mb-6">"</div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">{t.text}</p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.company} • {t.location}</p>
                  </div>
                  <div className="text-[#0047ff] font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
                    {t.result}
                  </div>
                </div>
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
                Ready to <span className="text-[#d9ff00]">Grow?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join hundreds of successful businesses that have scaled with YD Groups. Get your free audit today.
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
