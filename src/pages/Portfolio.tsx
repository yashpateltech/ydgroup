import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  TrendingUp, 
  Target, 
  BarChart2, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Globe,
  Zap,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuditModal } from '../context/AuditModalContext';

const caseStudies = [
  {
    client: "NEAR Blockchain",
    website: "NEAR.ORG",
    duration: "2 Years",
    traffic: "137,499/month",
    logo: "https://picsum.photos/seed/near/200/200",
    description: "Multi-year engagement focusing on broad search dominance for the NEAR ecosystem, protocols, and digital wallets.",
    keywords: [
      { kw: "near", pos: 1, volume: "2.4K", traffic: "34.19%" },
      { kw: "near protocol", pos: 1, volume: "1.9K", traffic: "27.06%" },
      { kw: "near crypto", pos: 1, volume: "720", traffic: "10.22%" },
      { kw: "near wallet", pos: 1, volume: "390", traffic: "5.51%" }
    ],
    accent: "#0047ff"
  },
  {
    client: "Aurora.dev",
    website: "AURORA.DEV",
    duration: "1 Year",
    traffic: "4,169/month",
    logo: "https://picsum.photos/seed/aurora/200/200",
    description: "Driving visibility for top-tier cryptocurrency terms and expanding niche relevance in the Web3 space.",
    keywords: [
      { kw: "aurora", pos: 17, volume: "90.5K", traffic: "60.00%" },
      { kw: "aurora cryptocurrency", pos: 1, volume: "110", traffic: "12.00%" },
      { kw: "2flr", pos: 1, volume: "70", traffic: "7.55%" },
      { kw: "aurora crypto", pos: 2, volume: "90", traffic: "4.88%" },
      { kw: "openbisea", pos: 7, volume: "320", traffic: "4.00%" }
    ],
    accent: "#d9ff00"
  }
];

const growthStories = [
  {
    client: "Mintbase.io",
    scope: "Social Media & SEO",
    milestone1: "Month 1: 80 orders/month",
    milestone2: "Month 9: 12,000 orders/month",
    stat: "+14,900%",
    label: "Order Growth",
    description: "Massive scaling project involving product optimization and social signal dominance."
  },
  {
    client: "LostMary",
    scope: "SEO & Traffic Growth (Canada)",
    milestone1: "Start: 160/month traffic",
    milestone2: "Current: 40,000/month traffic",
    stat: "250x",
    label: "Traffic Increase",
    description: "Sustained organic growth in a highly competitive vaping market across Canada."
  }
];

export default function Portfolio() {
  const { openModal } = useAuditModal();
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Helmet>
        <title>SEO Portfolio & Case Studies | YD Groups</title>
        <meta name="description" content="View our real-world SEO success stories from NEAR.org, Aurora.dev, Mintbase, and more." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gray-900 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0047ff] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#d9ff00] rounded-full blur-[100px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-[#d9ff00] font-black uppercase tracking-[0.3em] text-xs mb-6 block">Proven Results</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
              SEO Portfolio <br /> & <span className="text-[#0047ff]">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real data, real growth, real dominance. Explore how we scale brands from zero to market leaders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Case Studies */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-32">
            {caseStudies.map((study, idx) => (
              <div key={study.client} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-8">
                    <img src={study.logo} alt={study.client} className="w-16 h-16 rounded-2xl shadow-xl shadow-blue-500/10" referrerPolicy="no-referrer" />
                    <div>
                      <h2 className="text-4xl font-black text-gray-900 tracking-tight">{study.client}</h2>
                      <p className="text-gray-400 font-bold uppercase tracking-widest text-xs">{study.website}</p>
                    </div>
                  </div>
                  
                  <p className="text-2xl text-gray-600 mb-10 leading-relaxed font-medium italic">
                    "{study.description}"
                  </p>

                  <div className="grid grid-cols-2 gap-8 mb-12">
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                      <Clock className="h-6 w-6 text-[#0047ff] mb-4" />
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                      <p className="text-2xl font-black text-gray-900">{study.duration}</p>
                    </div>
                    <div className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100">
                      <TrendingUp className="h-6 w-6 text-green-500 mb-4" />
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Organic Traffic</p>
                      <p className="text-2xl font-black text-gray-900">{study.traffic}</p>
                    </div>
                  </div>

                  <Button className="bg-[#0047ff] hover:bg-[#0037cc] text-white px-10 py-6 rounded-2xl font-bold text-lg flex items-center gap-3">
                    View Project Details <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>

                <div className="lg:w-1/2 w-full">
                  <div className="bg-white rounded-[3rem] border border-gray-100 p-8 lg:p-12 shadow-2xl overflow-hidden">
                    <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                      <Target className="h-6 w-6 text-[#0047ff]" /> Keyword Performance
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left">
                        <thead>
                          <tr className="border-b border-gray-50">
                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Keyword</th>
                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Position</th>
                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400">Volume</th>
                            <th className="pb-4 text-xs font-black uppercase tracking-widest text-gray-400 text-right">Traffic %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                          {study.keywords.map((kw, kIdx) => (
                            <tr key={kIdx} className="hover:bg-gray-50 transition-colors group">
                              <td className="py-4 font-bold text-gray-900">{kw.kw}</td>
                              <td className="py-4">
                                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full font-black text-xs ${kw.pos === 1 ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                                  #{kw.pos}
                                </span>
                              </td>
                              <td className="py-4 font-medium text-gray-500">{kw.volume}</td>
                              <td className="py-4 text-right">
                                <span className="font-black text-[#0047ff]">{kw.traffic}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-50 flex items-center justify-between text-[10px] uppercase font-black tracking-[0.2em] text-gray-300">
                      <span>Verified Search Console Data</span>
                      <BarChart2 className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Block (Mintbase & LostMary) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">Hyper-Growth <span className="text-[#0047ff]">Scaling</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Focusing on order volume and organic traffic conversion for high-stake industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {growthStories.map((story) => (
              <motion.div 
                key={story.client}
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                   <Zap className="h-32 w-32 text-[#0047ff]" />
                </div>
                
                <p className="text-[#0047ff] font-black uppercase tracking-widest text-[10px] mb-4">{story.scope}</p>
                <h3 className="text-3xl font-black text-gray-900 mb-8">{story.client}</h3>
                
                <div className="space-y-6 mb-10">
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <p className="text-gray-600 font-medium text-lg leading-tight">{story.milestone1}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                    <p className="text-gray-900 font-bold text-lg leading-tight">{story.milestone2}</p>
                  </div>
                </div>

                <div className="flex items-end gap-3 pt-6 border-t border-gray-50">
                  <span className="text-5xl font-black text-[#0047ff] tracking-tighter">{story.stat}</span>
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{story.label}</span>
                </div>
                
                <p className="mt-8 text-gray-500 leading-relaxed">
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-900 rounded-[4rem] p-12 lg:p-20 text-center relative overflow-hidden">
             <div className="relative z-10">
                <Briefcase className="h-12 w-12 text-[#d9ff00] mx-auto mb-8" />
                <h2 className="text-4xl text-white font-black mb-8">Ready to be our next Success Story?</h2>
                <Button 
                  onClick={openModal}
                  className="bg-[#0047ff] hover:bg-[#0037cc] text-white px-12 py-8 rounded-3xl font-bold text-xl shadow-2xl shadow-blue-500/20"
                >
                  Start Your Audit Now
                </Button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
