import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  ShieldCheck, 
  TrendingUp, 
  Globe,
  Search,
  Brain,
  MessageSquare,
  MapPin
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";
import SchemaMarkup from "../components/SchemaMarkup";

const countryData: Record<string, any> = {
  "india": {
    name: "India",
    flag: "🇮🇳",
    currency: "INR",
    marketTone: "Dynamic & Diverse",
    heroTitle: "Leading SEO, AEO & GEO Services in India",
    heroDesc: "Empowering Indian businesses to dominate the digital landscape with data-driven optimization and AI-ready strategies.",
    cities: ["Ahmedabad", "Mumbai", "Delhi", "Bangalore", "Surat"],
    testimonials: [
      { name: "Rajesh Kumar", role: "CEO, TechFlow India", text: "YD Groups transformed our organic presence. Their understanding of the Indian market is unmatched.", city: "Mumbai" },
      { name: "Priya Sharma", role: "Marketing Head, RetailHub", text: "The AEO strategy they implemented put us at the top of voice search results in weeks.", city: "Delhi" }
    ],
    trustSignals: "Trusted by 500+ Indian enterprises across E-commerce, Fintech, and Manufacturing."
  },
  "australia": {
    name: "Australia",
    flag: "🇦🇺",
    currency: "AUD",
    marketTone: "High-Intent & Competitive",
    heroTitle: "Premium SEO, AEO & GEO Solutions for Australian Brands",
    heroDesc: "Scale your business across the AU market with high-performance search strategies and generative engine optimization.",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    testimonials: [
      { name: "Lachlan Smith", role: "Founder, AussieSaaS", text: "Incredible ROI. Their GEO services ensured our brand was the top recommendation by AI engines.", city: "Sydney" },
      { name: "Sarah Jones", role: "Director, Coastal Real Estate", text: "Professional, transparent, and results-oriented. The best SEO agency in Australia.", city: "Melbourne" }
    ],
    trustSignals: "Partnering with leading Australian firms in Real Estate, SaaS, and Professional Services."
  },
  "canada": {
    name: "Canada",
    flag: "🇨🇦",
    currency: "CAD",
    marketTone: "Strategic & Growth-Oriented",
    heroTitle: "Expert SEO, AEO & GEO Services Across Canada",
    heroDesc: "Drive sustainable growth in the Canadian market with localized SEO and future-proof AI optimization.",
    cities: ["Toronto", "Vancouver", "Calgary", "Ottawa", "Montreal"],
    testimonials: [
      { name: "Jean-Pierre", role: "Manager, Quebec Logistics", text: "Their technical SEO audit uncovered issues our previous agency missed. Highly recommended.", city: "Montreal" },
      { name: "Emily Chen", role: "CEO, MapleTech", text: "The transition to GEO was seamless. We are now cited by all major AI models.", city: "Toronto" }
    ],
    trustSignals: "Helping Canadian businesses thrive in the North American market with localized expertise."
  }
};

export default function CountryPage() {
  const { country } = useParams();
  const data = countryData[country?.toLowerCase() || ""];

  if (!data) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">Country Not Found</h1>
        <Link to="/"><Button className="mt-8">Return Home</Button></Link>
      </div>
    );
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `YD Groups ${data.name}`,
    "image": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app/logo.png",
    "url": `https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app/seo/${country?.toLowerCase()}`,
    "telephone": "+91-989-8989-898",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": data.name
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>SEO, AEO & GEO Services in {data.name} | YD Groups</title>
        <meta name="description" content={`Expert ${data.heroTitle}. ${data.heroDesc} Specialized in ${data.marketTone} market dynamics.`} />
      </Helmet>
      <SchemaMarkup data={localBusinessSchema} />
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="text-6xl mb-8">{data.flag}</div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {data.heroTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl"
            >
              {data.heroDesc}
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full"
              >
                Get Free Audit in {data.name}
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d9ff00]/5 to-transparent" />
      </section>

      {/* Services Overview (SEO, AEO, GEO) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Optimization Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Localized strategies for the {data.name} market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "SEO Services", icon: Search, desc: "Traditional search engine optimization focused on rankings, traffic, and conversions in the local market." },
              { title: "AEO Services", icon: MessageSquare, desc: "Optimizing for direct answers and voice search to capture the 'zero-click' audience." },
              { title: "GEO Services", icon: Brain, desc: "Ensuring your brand is recommended and cited by generative AI models like ChatGPT and Gemini." }
            ].map((service, i) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                  <service.icon className="h-8 w-8 text-[#0047ff]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Pages Links */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Localized SEO Across {data.name}</h2>
            <p className="text-gray-600">Explore our city-specific SEO services tailored for local business growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {data.cities.map((city: string, i: number) => (
              <Link 
                key={i} 
                to={`/seo/${country?.toLowerCase()}/${city.toLowerCase()}`}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0047ff] transition-all text-center group"
              >
                <MapPin className="h-8 w-8 text-[#0047ff] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-gray-900">SEO in {city}</h4>
                <p className="text-xs text-gray-400 mt-2">Local Optimization</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-[#0047ff] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{data.trustSignals}</h2>
          <div className="flex justify-center gap-12 mt-12 opacity-50">
             <Globe className="h-12 w-12" />
             <ShieldCheck className="h-12 w-12" />
             <TrendingUp className="h-12 w-12" />
             <Zap className="h-12 w-12" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What Our {data.name} Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.testimonials.map((t: any, i: number) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 relative">
                <div className="text-[#0047ff] text-4xl font-serif mb-6">"</div>
                <p className="text-gray-600 italic mb-8 leading-relaxed">{t.text}</p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role} • {t.city}, {data.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Dominate the {data.name} Market?</h2>
              <p className="text-gray-600">Contact our {data.name} SEO experts today for a tailored strategy.</p>
            </div>
            <ContactForm serviceDefault={`SEO Services in ${data.name}`} />
          </div>
        </div>
      </section>
    </div>
  );
}
