import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  MapPin,
  Search,
  BarChart3,
  Users,
  Settings,
  Plus,
  Minus
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import SchemaMarkup from "../components/SchemaMarkup";

const cityData: Record<string, any> = {
  "ahmedabad": {
    name: "Ahmedabad",
    country: "India",
    intro: "Ahmedabad is a thriving hub for manufacturing and textile industries. Our SEO services in Ahmedabad are designed to help local businesses transition into the digital era with high-performance search strategies.",
    whyChoose: "We understand the local business landscape of Gujarat. Our team focuses on driving high-intent traffic from both local and global audiences to your Ahmedabad-based business.",
    faqs: [
      { q: "How long does SEO take in Ahmedabad?", a: "Typically, you can see significant improvements in 3-6 months depending on the competitiveness of your industry in Ahmedabad." },
      { q: "Do you offer local SEO for Ahmedabad businesses?", a: "Yes, we specialize in Google Business Profile optimization and local keyword targeting for the Ahmedabad market." }
    ]
  },
  "mumbai": {
    name: "Mumbai",
    country: "India",
    intro: "As the financial capital of India, Mumbai's digital market is incredibly competitive. Our SEO services in Mumbai provide the edge you need to stand out in a crowded marketplace.",
    whyChoose: "We have extensive experience working with fintech and entertainment brands in Mumbai. Our strategies are built for high-scale competition.",
    faqs: [
      { q: "Why is SEO important for Mumbai businesses?", a: "With millions of searches happening daily in Mumbai, SEO is critical for capturing high-value leads in a competitive environment." }
    ]
  },
  "delhi": {
    name: "Delhi",
    country: "India",
    intro: "Delhi's diverse economy requires a versatile SEO approach. From government contractors to tech startups, we provide tailored SEO solutions in Delhi.",
    whyChoose: "Our Delhi team is expert at navigating the complex search trends of the National Capital Region (NCR).",
    faqs: [
      { q: "Can you help with SEO in the NCR region?", a: "Yes, our services cover Delhi, Noida, and Gurgaon for comprehensive regional dominance." }
    ]
  },
  "bangalore": {
    name: "Bangalore",
    country: "India",
    intro: "In the Silicon Valley of India, technical SEO is paramount. Our Bangalore SEO services focus on high-tech industries and SaaS startups.",
    whyChoose: "We speak the language of tech. Our SEO strategies for Bangalore businesses are as innovative as the city itself.",
    faqs: [
      { q: "Do you specialize in SaaS SEO in Bangalore?", a: "Absolutely, we have a dedicated team for tech and SaaS SEO based in Bangalore." }
    ]
  },
  "surat": {
    name: "Surat",
    country: "India",
    intro: "Surat's diamond and textile sectors are booming. Our SEO services in Surat help traditional businesses reach global buyers through effective online visibility.",
    whyChoose: "We focus on B2B SEO strategies that connect Surat's manufacturers with international markets.",
    faqs: [
      { q: "How can SEO help my textile business in Surat?", a: "By targeting global B2B keywords, we can help you find buyers across the world from your base in Surat." }
    ]
  },
  "sydney": {
    name: "Sydney",
    country: "Australia",
    intro: "Sydney is Australia's global gateway. Our SEO services in Sydney help brands capture a massive international and local audience.",
    whyChoose: "We understand the premium nature of the Sydney market and craft strategies that reflect your brand's quality.",
    faqs: [
      { q: "Is SEO competitive in Sydney?", a: "Yes, Sydney is one of the most competitive markets in the Southern Hemisphere, requiring a sophisticated SEO approach." }
    ]
  },
  "melbourne": {
    name: "Melbourne",
    country: "Australia",
    intro: "Melbourne's culture and tech scene are unique. Our SEO services in Melbourne focus on creative industries and the burgeoning tech sector.",
    whyChoose: "We blend creativity with technical SEO to match Melbourne's unique business vibe.",
    faqs: [
      { q: "How do you handle local SEO for Melbourne suburbs?", a: "We create hyper-local landing pages and optimize for suburb-specific search terms across Melbourne." }
    ]
  },
  "brisbane": {
    name: "Brisbane",
    country: "Australia",
    intro: "Brisbane is growing rapidly. Our SEO services in Brisbane help businesses capitalize on the city's expansion and upcoming global events.",
    whyChoose: "We are focused on the long-term growth of the Queensland market.",
    faqs: [
      { q: "Why should I invest in SEO in Brisbane now?", a: "With the city's growth, establishing search authority now will pay massive dividends in the coming years." }
    ]
  },
  "perth": {
    name: "Perth",
    country: "Australia",
    intro: "Perth's resource-heavy economy requires specialized B2B SEO. We help Perth's mining and engineering firms reach global decision-makers.",
    whyChoose: "We understand the specific needs of the Western Australian market and its global connections.",
    faqs: [
      { q: "Can you help with international SEO from Perth?", a: "Yes, we specialize in helping WA firms reach markets in Asia and Europe." }
    ]
  },
  "adelaide": {
    name: "Adelaide",
    country: "Australia",
    intro: "Adelaide's defense and tech sectors are world-class. Our SEO services in Adelaide support high-tech manufacturing and professional services.",
    whyChoose: "We provide high-precision SEO for Adelaide's specialized industries.",
    faqs: [
      { q: "Is SEO effective for small businesses in Adelaide?", a: "Extremely. Local SEO is the most cost-effective way for Adelaide SMEs to compete with larger brands." }
    ]
  },
  "toronto": {
    name: "Toronto",
    country: "Canada",
    intro: "Toronto is Canada's economic engine. Our SEO services in Toronto are built for high-stakes competition in the financial and tech sectors.",
    whyChoose: "We have the scale and expertise to handle the most competitive keywords in the Canadian market.",
    faqs: [
      { q: "How do you handle bilingual SEO in Toronto?", a: "While Toronto is primarily English-speaking, we offer multi-language SEO strategies for national reach." }
    ]
  },
  "vancouver": {
    name: "Vancouver",
    country: "Canada",
    intro: "Vancouver's tech and film industries are global leaders. Our SEO services in Vancouver help you reach a tech-savvy, international audience.",
    whyChoose: "We understand the West Coast market and its unique digital consumption patterns.",
    faqs: [
      { q: "Do you offer SEO for Vancouver's real estate market?", a: "Yes, we have specialized strategies for the highly competitive Vancouver real estate sector." }
    ]
  },
  "calgary": {
    name: "Calgary",
    country: "Canada",
    intro: "Calgary's energy and tech sectors are evolving. Our SEO services in Calgary help businesses navigate this transition and find new growth opportunities.",
    whyChoose: "We are experts at B2B lead generation for Calgary's industrial and tech sectors.",
    faqs: [
      { q: "How can SEO help my energy firm in Calgary?", a: "By establishing thought leadership and authority through high-value content and technical optimization." }
    ]
  },
  "ottawa": {
    name: "Ottawa",
    country: "Canada",
    intro: "As the capital, Ottawa has a unique mix of government and tech. Our SEO services in Ottawa are designed for high-authority, trustworthy brands.",
    whyChoose: "We focus on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) which is critical for the Ottawa market.",
    faqs: [
      { q: "Is SEO different for government-related services in Ottawa?", a: "Yes, it requires a higher focus on accessibility, trust signals, and clear information architecture." }
    ]
  },
  "montreal": {
    name: "Montreal",
    country: "Canada",
    intro: "Montreal's bilingual market requires a specialized SEO approach. Our SEO services in Montreal ensure you reach both French and English speaking audiences.",
    whyChoose: "We are experts in French-Canadian SEO and localized content strategies.",
    faqs: [
      { q: "Do you offer French SEO in Montreal?", a: "Yes, bilingual SEO is a core part of our offering for the Montreal market." }
    ]
  }
};

export default function CityPage() {
  const { city } = useParams();
  const data = cityData[city?.toLowerCase() || ""];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">City Not Found</h1>
        <Link to="/"><Button className="mt-8">Return Home</Button></Link>
      </div>
    );
  }

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `YD Groups ${data.name}`,
    "image": "https://picsum.photos/seed/" + data.name + "/800/600",
    "url": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app" + window.location.pathname,
    "telephone": "+91-989-8989-898",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.name,
      "addressCountry": data.country
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>SEO Services in {data.name}, {data.country} | YD Groups</title>
        <meta name="description" content={`Expert SEO services in ${data.name}. ${data.intro} Drive more leads and sales with YD Groups.`} />
      </Helmet>
      <SchemaMarkup data={citySchema} />
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1 rounded-full bg-[#d9ff00] text-black text-xs font-bold uppercase tracking-widest mb-6">
              Local SEO Experts
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              SEO Services in <br />
              <span className="text-[#d9ff00] italic">{data.name}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl"
            >
              {data.intro}
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full">
                Get Free Audit in {data.name}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d9ff00]/5 to-transparent" />
      </section>

      {/* SEO Breakdown */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our {data.name} SEO Strategy</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A comprehensive approach to dominating the local search results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Technical SEO", icon: Settings, desc: "Optimizing site speed, mobile-friendliness, and crawlability for {city} users." },
              { title: "Content Strategy", icon: Zap, desc: "Creating high-value, localized content that resonates with the {city} audience." },
              { title: "Local SEO", icon: MapPin, desc: "Dominating Google Maps and local search queries in {city}." },
              { title: "Link Building", icon: TrendingUp, desc: "Acquiring high-authority backlinks to boost your domain authority in {country}." }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100 hover:border-[#0047ff] transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="h-7 w-7 text-[#0047ff]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc.replace("{city}", data.name).replace("{country}", data.country)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us in City */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Choose YD Groups in {data.name}?</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {data.whyChoose}
            </p>
            <div className="space-y-4">
              {[
                "15+ Years of SEO Experience",
                "Data-Driven Local Strategies",
                "Transparent Reporting & Analytics",
                "Proven Track Record in " + data.country
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700 font-semibold">
                  <CheckCircle2 className="h-5 w-5 text-[#0047ff]" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src={`https://picsum.photos/seed/${data.name}/800/600`} 
              alt={`SEO in ${data.name}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our SEO Process for {data.name}</h2>
            <p className="text-gray-600">How we take your business to the top of search results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Audit & Research", icon: Search, desc: "We start with a deep dive into your current performance and competitor landscape in {city}." },
              { title: "Optimization", icon: Zap, desc: "Implementing technical and on-page changes to align with search engine best practices." },
              { title: "Growth & Scaling", icon: BarChart3, desc: "Continuous monitoring and refinement to ensure long-term sustainable growth." }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <step.icon className="h-10 w-10 text-[#0047ff]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc.replace("{city}", data.name)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">FAQs About SEO in {data.name}</h2>
          <div className="space-y-4">
            {data.faqs.map((faq: any, i: number) => (
              <div 
                key={i} 
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all"
              >
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

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0a0a0a] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Get a Free SEO Audit in {data.name}</h2>
              <p className="text-gray-400">Our experts are ready to help you scale your business in {data.name}.</p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem]">
              <ContactForm serviceDefault={`SEO Services in ${data.name}`} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
