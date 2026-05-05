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

      {/* Company Intro / Detailed Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="sticky top-24">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Founding Story and Evolution</h2>
              <p className="text-xl text-[#0047ff] font-semibold mb-6 italic leading-relaxed">
                "We didn't just want to build another agency; we wanted to build a bridge between traditional search and the future of artificial intelligence."
              </p>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-8">
                <img 
                  src="https://picsum.photos/seed/agency-evolution-timeline/800/600" 
                  alt="YD Groups History" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                In the rapidly shifting landscape of the digital era, YD Groups emerged not just as a service provider, but as a visionary force in the search engine optimization industry. Our journey began over a decade ago when the internet was a fundamentally different place. Back then, SEO was often seen as a technical "dark art," involving keyword stuffing and backlink manipulation. However, our founders recognized that search engines were evolving toward a more human-centric, semantic understanding of data.
              </p>
              <p>
                The genesis of YD Groups was rooted in a simple but profound observation: digital marketing agencies were failing to keep pace with the exponential growth of technology. While most were still focused on simple keyword rankings, search giants like Google were already moving toward machine learning and predictive search. We saw an urgent need for an agency that didn't just react to algorithm updates but anticipated them through rigorous research and development.
              </p>
              <p>
                As we matured, so did our methodology. We transitioned from a boutique SEO shop into a comprehensive digital authority house. We realized that as mobile devices became ubiquitous, the way people searched was changing. This led us to pioneer early strategies in Mobile-First indexing and Local SEO, helping businesses in complex markets like India, Australia, and Canada find their local voice on a global stage.
              </p>
              <p>
                The real turning point for YD Groups came with the advent of voice assistants and generative AI. While many in the industry viewed Siri, Alexa, and eventually ChatGPT as threats to traditional search traffic, we viewed them as the next frontier. We dedicated thousands of man-hours to understanding the mechanics of natural language processing and how "Answer Engines" retrieve information. This research birthed our specialized AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) divisions.
              </p>
              <p>
                Today, YD Groups stands as a global leader in what we call "Search 3.0." We are no longer just optimizing for a Google search bar; we are optimizing for the entire digital nervous system. Our team of data scientists, linguistic experts, and technical SEO specialists works tirelessly to ensure that our clients aren't just visible—they are authoritative. We believe that in the age of AI, being the *first* result is important, but being the *trusted* source is everything.
              </p>
              <p>
                Our growth has been organic, fueled by the success of our clients. From small e-commerce startups to massive multinational enterprises, we have consistently delivered results that defy industry averages. We take pride in our ability to take a brand from digital obscurity to market dominance. Our story is still being written, and every day we find new ways to push the boundaries of what is possible in the world of search and discovery.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <h4 className="text-[#0047ff] text-2xl font-bold mb-4">Our Integrity</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">We adhere to the highest ethical standards of digital marketing, ensuring long-term sustainability for every brand we touch. We never take shortcuts with "black-hat" tactics that could jeopardize your future.</p>
                </div>
                <div className="p-8 bg-blue-50 rounded-3xl border border-blue-100">
                  <h4 className="text-[#0047ff] text-2xl font-bold mb-4">Our Pursuit</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">Innovation is our heartbeat. We spend a significant portion of our revenue on R&D, constantly testing new AI models and search algorithms to stay six months ahead of the competition.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy and Values - Expanded */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Philosophy That Drives Us</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              At YD Groups, our work is underpinned by a set of core principles that ensure we deliver consistent, high-impact results for every client, regardless of their industry or size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "Radical Transparency",
                desc: "We believe the typical agency 'black box' model is dead. We provide our clients with complete visibility into our processes, time-tracking, and strategy. You see what we see, in real-time.",
                icon: ShieldCheck
              },
              {
                title: "Holistic Optimization",
                desc: "We don't look at SEO in a vacuum. We understand that your search performance is deeply tied to your site's UX, brand sentiment, and overall digital ecosystem. We optimize the whole, not just the parts.",
                icon: Globe
              },
              {
                title: "Data Over Intuition",
                desc: "While experience is vital, we never let anecdotal evidence drive our strategy. Every campaign we launch is backed by millions of data points and rigorous statistical analysis.",
                icon: TrendingUp
              },
              {
                title: "Future-Proofing",
                desc: "The search landscape changes every week. We build strategies that are designed to withstand algorithm updates and technological shifts, ensuring your investment pays off for years, not days.",
                icon: Zap
              },
              {
                title: "Human-Centric Content",
                desc: "In an era of mass-produced AI content, we double down on human creativity. We create deep, valuable resources that search engines reward because they actually help real people.",
                icon: Users
              },
              {
                title: "Global-Local Synergy",
                desc: "We leverage our global insights to solve local problems. Whether you are targeting a neighborhood in Sydney or a metropolis in Ahmedabad, we bring world-class expertise to your local market.",
                icon: Globe
              }
            ].map((value, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-16 h-16 bg-[#0047ff] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive into Specialized Services - High Word Count */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-20 items-center mb-24">
            <div className="lg:w-1/2">
              <span className="text-[#0047ff] font-bold uppercase tracking-widest text-sm mb-4 block">Our Specialization</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">Mastering the Three Pillars of Modern Search Optimization</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                In today's complex digital world, traditional SEO is no longer enough. To truly dominate your market, you must be visible across a variety of search engines, AI models, and voice assistants. Our integrated approach ensures you are covered at every touchpoint.
              </p>
              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Globe className="h-6 w-6 text-[#0047ff]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Deep SEO: Technical and Strategic</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Our SEO strategy goes beyond simple metatags. We conduct deep-core audits that analyze your site's server response times, schema architectures, and javascript rendering. We believe that a strong technical foundation is the prerequisite for any ranking success.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Zap className="h-6 w-6 text-[#0047ff]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">AEO: Winning the Answer Section</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Answer Engine Optimization is the art of being the "definitive source." We restructure your knowledge base into conversational fragments that AI-driven answer engines can easily parse and display as featured snippets or voice responses.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-[#0047ff]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">GEO: The Future of AI Citations</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Generative Engine Optimization is where we train AI models to recognize your brand. By optimizing your external citations and entity mappings, we ensure that when a user asks an AI for a recommendation, your name is at the top of the list.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0047ff]/5 rounded-full blur-[100px]" />
              <div className="relative bg-gray-900 p-12 rounded-[3.5rem] shadow-2xl overflow-hidden">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-6 text-sm font-mono text-gray-300">
                  <p className="text-[#d9ff00]"># Initializing YD Groups SEO-AEO-GEO Matrix...</p>
                  <p>{"{"}</p>
                  <p className="ml-4">"strategy": "multi-channel_omnipresence",</p>
                  <p className="ml-4">"technical": "advanced_schema_v4",</p>
                  <p className="ml-4">"semantic": "llm_intent_matching_enabled",</p>
                  <p className="ml-4">"output": "market_dominance"</p>
                  <p>{"}"}</p>
                  <p className="text-[#0047ff] animate-pulse">_ Optimizing rankings for global enterprise client...</p>
                  <p>+ 450% traffic growth detected</p>
                  <p>+ Featured snippet captured for core primary intent</p>
                  <p>+ Brand authority mapped in Google Knowledge Graph</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-depth Methodology - High Word Count */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Proven Scientific Methodology</h2>
            <p className="text-lg text-gray-600 leading-relaxed italic">
              Digital growth is not an accident; it is the result of a rigorous, repeatable scientific process that we have refined over 15 years of industry-leading work.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Diagnostic and Discovery</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every project at YD Groups begins with a deep-sea dive into your data. We don't just look at GOOGLE Analytics; we examine your server logs, your user session recordings, and your competitor's historical traffic patterns. We believe that you cannot solve a problem you do not fully understand.
              </p>
              <ul className="space-y-4">
                {[
                  "Complete technical infrastructure assessment",
                  "Deep-competitor reverse engineering",
                  "Search intent and content gap mapping",
                  "Historical legacy data cleanup and analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[#0047ff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-12 bg-white rounded-[3rem] shadow-xl border border-gray-100">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: The Tactical Roadmap</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Once we have the data, our strategy team crafts a multi-layered roadmap. This isn't just a list of tasks; it's a prioritization matrix. We identify the high-leverage actions that will deliver the fastest ROI while building the long-term authority your brand needs to survive and thrive.
              </p>
              <ul className="space-y-4">
                {[
                  "3-12 month performance forecasting",
                  "Content-authority-silo architecture design",
                  "Technical remediation and performance hardening",
                  "KGE (Knowledge Graph Enhancement) strategy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                    <CheckCircle2 className="h-5 w-5 text-[#0047ff]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center text-gray-500 italic max-w-3xl mx-auto leading-relaxed">
            <p>
              This methodology has been tested in the most competitive niches on the planet—from high-stakes finance and SaaS to complex global logistics. We don't just 'do SEO'; we build custom growth engines that are tailored to the unique complexities of your specific business and market. Our approach is iterative, meaning we constantly feed the results back into our diagnostic phase to ensure we are always improving and always winning.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence Detail - High Word Count */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">A Global Perspective with Unmatched Local Expertise</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                The world is more connected than ever, but consumer behavior remains deeply local. A searcher in Toronto has different cultural triggers and linguistic preferences than a searcher in Sydney or Ahmedabad. At YD Groups, we have built specialized teams that understand these nuances.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our global footprint allows us to see search trends before they hit every market. When a major algorithm update roll out in the US, we use those insights to prepare our clients in Australia and India. This cross-continental knowledge is our "unfair advantage" and it belongs to our clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl border-l-4 border-[#0047ff] pl-4">North America</h4>
                  <p className="text-gray-500 text-sm italic">Focusing on high-volume competitive markets and advanced AI integration.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl border-l-4 border-[#0047ff] pl-4">Australia & Oceania</h4>
                  <p className="text-gray-500 text-sm italic">Dominating the boutique SaaS and high-growth retail landscapes across the region.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl border-l-4 border-[#0047ff] pl-4">South Asia (India)</h4>
                  <p className="text-gray-500 text-sm italic">Pioneering mobile-first and hyper-local search strategies in the world's most dynamic digital economy.</p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-gray-900 text-xl border-l-4 border-[#0047ff] pl-4">Europe & UK</h4>
                  <p className="text-gray-500 text-sm italic">Navigating complex privacy regulations with data-driven performance marketing.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/global-digital-presence/800/800" 
                alt="Global Expertise" 
                className="rounded-[3rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#d9ff00] rounded-full -z-0 opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Summary - Stats */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Decades of Collective Wisdom</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Behind every ranking we achieve is a team that has seen it all.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "250,000+", desc: "Hours of collective data research and development.", icon: Users },
              { title: "1.2 Million", desc: "Highest quality backlinks earned for client domains.", icon: Globe },
              { title: "98%", desc: "Client retention rate based on performance and trust.", icon: ShieldCheck },
              { title: "Infinite", desc: "Passion for solving the world's most complex search puzzles.", icon: Zap }
            ].map((stat, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl text-center border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-7 w-7 text-[#0047ff]" />
                </div>
                <h4 className="text-3xl font-bold text-gray-900 mb-2">{stat.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{stat.desc}</p>
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
