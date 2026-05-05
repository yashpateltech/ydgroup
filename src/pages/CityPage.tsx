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
import { useAuditModal } from "../context/AuditModalContext";

const cityData: Record<string, any> = {
  "ahmedabad": {
    name: "Ahmedabad",
    country: "India",
    intro: "Ahmedabad is a thriving hub for manufacturing, textiles, and technology in India. Our SEO services in Ahmedabad are designed to help local businesses transition into the digital era with high-performance search strategies that capture both local and international intent. We understand that as Ahmedabad transforms into a global industrial powerhouse, your digital visibility must keep pace with your physical growth.",
    whyChoose: "We understand the local business landscape of Gujarat and the unique entrepreneurial spirit of Ahmedabad. Our team focuses on driving high-intent traffic from both local and global audiences to your Ahmedabad-based business. We combine hyper-local SEO with broad-scale authority building, ensuring that whether someone is searching in Mani Nagar or Manhattan, your brand is the first thing they see. Our approach is rooted in hard data, leveraging our 15 years of industry experience to deliver ROI that traditional agencies simply can't match.",
    faqs: [
      { q: "How long does SEO take in Ahmedabad?", a: "Typically, you can see significant improvements in 3-6 months depending on the competitiveness of your industry in Ahmedabad. Some highly competitive manufacturing sectors may take up to 9 months for total dominance." },
      { q: "Do you offer local SEO for Ahmedabad businesses?", a: "Yes, we specialize in Google Business Profile optimization, local citation building across Gujarat, and local keyword targeting specifically for the Ahmedabad market." }
    ],
    testimonials: [
      { name: "Amit Patel", role: "MD, Gujarat Textiles", text: "YD Groups helped us reach European buyers we never thought possible. Their SEO strategy for our Ahmedabad factory was flawless.", avatar: "https://i.pravatar.cc/150?u=amit" },
      { name: "Devanshi Shah", role: "Founder, Ahmedabad Tech", text: "The best SEO agency in Gujarat. They actually understand the manufacturing sector here.", avatar: "https://i.pravatar.cc/150?u=devanshi" }
    ]
  },
  "mumbai": {
    name: "Mumbai",
    country: "India",
    intro: "As the financial capital of India, Mumbai's digital market is incredibly competitive and fast-paced. Our SEO services in Mumbai provide the technical and strategic edge you need to stand out in a crowded marketplace where every click counts. Whether you are a fintech startup in BKC or a heritage luxury brand in Colaba, our strategies are designed for high-stakes competition and massive scale.",
    whyChoose: "We have extensive experience working with fintech, entertainment, and real estate brands in Mumbai. Our strategies are built for high-scale competition, focusing on technical excellence and high-authority digital PR. We don't just 'do SEO'; we build digital powerhouses for Mumbai-based enterprises. We understand that in Mumbai, time is money, so we focus on high-impact optimizations that deliver measurable growth quickly and sustainably.",
    faqs: [
      { q: "Why is SEO important for Mumbai businesses?", a: "With millions of searches happening daily in Mumbai, SEO is critical for capturing high-value leads. In a city where everyone is competing for attention, being at the top of search results is the ultimate competitive advantage." }
    ],
    testimonials: [
      { name: "Vikram Malhotra", role: "Marketing VP, Mumbai FinTech", text: "In the BKC tech scene, visibility is everything. YD Groups put us on the map for all our critical keywords.", avatar: "https://i.pravatar.cc/150?u=vikram" },
      { name: "Suresh Iyer", role: "CEO, South Mumbai Realty", text: "Highly professional and data-driven. They delivered exactly what they promised: growth.", avatar: "https://i.pravatar.cc/150?u=suresh" }
    ]
  },
  "delhi": {
    name: "Delhi",
    country: "India",
    intro: "Delhi's diverse economy requires a versatile and culturally nuanced SEO approach. From government contractors and educational institutions to high-growth tech startups, we provide tailored SEO solutions in Delhi that address the unique search behaviors of the National Capital Region. We help brands bridge the gap between traditional prestige and digital dominance.",
    whyChoose: "Our Delhi team is expert at navigating the complex search trends of the NCR. We provide localized strategies that cover Delhi, Noida, and Gurgaon, ensuring regional dominance for your brand. We focus on building deep semantic relevance, ensuring that your business is the authoritative answer for any query related to your industry in the capital region. We combine this with robust technical SEO to ensure your site is faster than your fastest competitor.",
    faqs: [
      { q: "Can you help with SEO in the NCR region?", a: "Yes, our services cover Delhi, Noida, and Gurgaon for comprehensive regional dominance, allowing you to capture the entire NCR market with a single, unified strategy." }
    ],
    testimonials: [
      { name: "Anjali Gupta", role: "Director, NCR Education Group", text: "The team's understanding of the Delhi search landscape is impressive. Our organic inquiries have doubled.", avatar: "https://i.pravatar.cc/150?u=anjali" },
      { name: "Rahul Verma", role: "Founder, Delhi TechHub", text: "A strategic partner you can trust. They handled our multi-location SEO across NCR perfectly.", avatar: "https://i.pravatar.cc/150?u=rahul" }
    ]
  },
  "bangalore": {
    name: "Bangalore",
    country: "India",
    intro: "In the Silicon Valley of India, technical SEO is not just a service—it's a requirement. Our Bangalore SEO services focus on high-tech industries, SaaS startups, and global R&D centers that demand world-class digital visibility. We help Bangalore's most innovative companies translate their technical brilliance into search-engine-readable authority.",
    whyChoose: "We speak the language of tech. Our SEO strategies for Bangalore businesses are as innovative as the city itself, focusing on advanced schema markup, javascript rendering optimization, and conversion-centric content. We understand the SaaS growth funnel and the specific metrics that matter to tech founders and investors. Our work in Bangalore is about more than rankings; it's about building a digital asset that supports your next round of funding or your global expansion.",
    faqs: [
      { q: "Do you specialize in SaaS SEO in Bangalore?", a: "Absolutely, we have a dedicated team for tech and SaaS SEO based in Bangalore that focuses on MRR growth through organic acquisition." }
    ],
    testimonials: [
      { name: "Sandeep Rao", role: "CTO, Bangalore SaaS", text: "Their technical SEO knowledge is enterprise-level. They optimized our React-based platform perfectly.", avatar: "https://i.pravatar.cc/150?u=sandeep" },
      { name: "Kavita Reddy", role: "Growth Lead, Koramangala Startup", text: "YD Groups is the best choice for tech companies in Bangalore. They understand product-led growth.", avatar: "https://i.pravatar.cc/150?u=kavita" }
    ]
  },
  "surat": {
    name: "Surat",
    country: "India",
    intro: "Surat's diamond and textile sectors are the backbone of global supply chains. Our SEO services in Surat help traditional businesses and manufacturers reach international buyers through effective, high-authority online visibility. We help 'The Diamond City' shine brighter in the digital world by connecting local manufacturers with global decision-makers.",
    whyChoose: "We focus on B2B SEO strategies that connect Surat's manufacturers with international markets. Our approach involves deep industry research and targeting high-intent wholesale and manufacturing keywords across the globe. We help you build a digital presence that is as respected as your physical products, ensuring that your brand's authority is recognized by search engines in Europe, America, and beyond. We are the bridge between Surat's craftsmanship and the global internet.",
    faqs: [
      { q: "How can SEO help my textile business in Surat?", a: "By targeting global B2B keywords and building international backlinks, we can help you find wholesale buyers across the world from your base in Surat, reducing your reliance on traditional trade shows." }
    ],
    testimonials: [
      { name: "Hitesh Gaja", role: "Owner, Surat Diamonds", text: "Our export business grew by 40% after implementing their B2B SEO strategy. They are Surat's best partner for global growth.", avatar: "https://i.pravatar.cc/150?u=hitesh" },
      { name: "Manish Zaveri", role: "Director, Surat Textiles", text: "Professional and reliable. They helped us rank in the US market from right here in Surat.", avatar: "https://i.pravatar.cc/150?u=manish" }
    ]
  },
  "sydney": {
    name: "Sydney",
    country: "Australia",
    intro: "Sydney is Australia's global gateway and a world-class financial and cultural center. Our SEO services in Sydney help brands capture a massive international and local audience in one of the most competitive search environments in the Southern Hemisphere. We help your brand rise above the noise of the harbor city and dominate the high-intent queries that drive business in New South Wales.",
    whyChoose: "We understand the premium nature of the Sydney market and craft strategies that reflect your brand's quality and prestige. Our Sydney SEO strategy is built on the pillars of authority and trust, focusing on acquiring high-quality backlinks from reputable Australian publications and news sites. We ensure that your digital presence is as professional and high-performing as your physical operations, providing a seamless experience for your Australian customers.",
    faqs: [
      { q: "Is SEO competitive in Sydney?", a: "Yes, Sydney is one of the most competitive markets globally, requiring a sophisticated approach that blends technical excellence with aggressive authority building." }
    ],
    testimonials: [
      { name: "Liam O'Connor", role: "CEO, Sydney FinServ", text: "YD Groups is the best SEO team in Sydney. Their focus on high-authority digital PR has been transformative for us.", avatar: "https://i.pravatar.cc/150?u=liam" },
      { name: "Isabella Smith", role: "Marketing Head, NSW Luxury", text: "Top-tier results in a record timeframe. They really know how to dominate the Sydney search landscape.", avatar: "https://i.pravatar.cc/150?u=isabella" }
    ]
  },
  "melbourne": {
    name: "Melbourne",
    country: "Australia",
    intro: "Melbourne's unique culture and thriving tech and creative scenes require an SEO approach that is both analytically rigorous and creatively inspired. Our SEO services in Melbourne focus on creative industries, lifestyle brands, and the burgeoning tech sector that define Victoria's economic landscape. we help Melbourne brands find their unique voice in a crowded digital world.",
    whyChoose: "We blend creativity with technical SEO to match Melbourne's unique business vibe and sophisticated consumer base. Our team focuses on intent-based content that resonates with the Melbourne audience while also signaling deep topical authority to search engines. We understand the importance of community and local discovery in Victoria, ensuring that your brand is the top-of-mind choice for Melbourne searchers.",
    faqs: [
      { q: "How do you handle local SEO for Melbourne suburbs?", a: "We create hyper-local landing pages and optimize for suburb-specific search terms across Melbourne, from St Kilda to Fitzroy and beyond." }
    ],
    testimonials: [
      { name: "Oliver Wilson", role: "Founder, Melbourne Creative", text: "They found the perfect balance between design and SEO performance. Our traffic from Melbourne locals is up 200%.", avatar: "https://i.pravatar.cc/150?u=oliver" },
      { name: "Sophie Brown", role: "Product Manager, VicTech", text: "Expert technical SEO and brilliant content strategy. YD Groups is a vital part of our Melbourne team.", avatar: "https://i.pravatar.cc/150?u=sophie" }
    ]
  },
  "brisbane": {
    name: "Brisbane",
    country: "Australia",
    intro: "Brisbane is growing at a record pace, as it prepares for a decade of global attention. Our SEO services in Brisbane help businesses capitalize on this massive city expansion and the upcoming global events that will define its future. We help Queensland businesses scale their digital presence to meet the demands of a rapidly growing and diversifying market.",
    whyChoose: "We are deeply focused on the long-term growth of the Queensland market and helping local brands become national leaders. Our Brisbane SEO strategy is built for scalability, ensuring that as your business grows, your search footprint expands alongside it. We focus on high-intent local search and robust conversion optimization, ensuring that every click we drive to your site has the highest possible chance of becoming a customer.",
    faqs: [
      { q: "Why should I invest in SEO in Brisbane now?", a: "With the city's current growth trajectory, establishing search authority now before the 2032 Olympics will pay massive dividends and give you a permanent competitive advantage." }
    ],
    testimonials: [
      { name: "Jack Harrison", role: "Director, Brisbane Growth", text: "Brisbane is booming and YD Groups is helping us stay ahead of the curve. Their local knowledge is exceptional.", avatar: "https://i.pravatar.cc/150?u=jack" },
      { name: "Charlotte Davis", role: "Marketing, QLD Real Estate", text: "The best partner for scaling in Brisbane. They delivered high-intent leads that actually converted.", avatar: "https://i.pravatar.cc/150?u=charlotte" }
    ]
  },
  "perth": {
    name: "Perth",
    country: "Australia",
    intro: "Perth's resource-heavy and innovation-driven economy requires specialized B2B SEO. We help Perth's mining, engineering, and tech firms reach global decision-makers in Singapore, Europe, and America. We bridge the distance between Western Australia and the global market through high-authority search strategies and technical excellence.",
    whyChoose: "We understand the specific needs of the Western Australian market and its deep global connections to the energy and resources sectors. Our Perth SEO strategy focuses on establishing 'Thought Leadership' and 'Topical Authority,' ensuring your brand is the definitive answer for technical queries in your niche. We help WA firms leverage their local expertise to achieve global dominance, ensuring your brand is recognized by both search engines and industry leaders worldwide.",
    faqs: [
      { q: "Can you help with international SEO from Perth?", a: "Yes, we specialize in helping Western Australian firms reach markets in Asia and Europe through cross-border SEO strategies." }
    ],
    testimonials: [
      { name: "William Taylor", role: "Operations, Perth Mining Hub", text: "B2B SEO was a mystery to us until we met YD Groups. They helped us reach global decision-makers from Perth.", avatar: "https://i.pravatar.cc/150?u=william" },
      { name: "Grace Miller", role: "CEO, WA Engineering", text: "Expert knowledge of the industrial SEO landscape. They are our secret weapon in Perth.", avatar: "https://i.pravatar.cc/150?u=grace" }
    ]
  },
  "adelaide": {
    name: "Adelaide",
    country: "Australia",
    intro: "Adelaide's defense, space, and tech sectors are world-class and rapidly expanding. Our SEO services in Adelaide support high-tech manufacturing, professional services, and lifestyle brands that demand a sophisticated digital presence. We help Adelaide businesses translate their specialized expertise into search visibility that drives real business growth in South Australia.",
    whyChoose: "We provide high-precision SEO for Adelaide's specialized industries, focusing on E-E-A-T signals and technical hardening. We understand that in a market like Adelaide, reputation is everything, so we focus on building trust and authority through high-quality content and reputable backlinks. Our goal is to make your business the most visible and trusted name in your sector, whether you are targeting the CBD or the global market.",
    faqs: [
      { q: "Is SEO effective for small businesses in Adelaide?", a: "Extremely. Local SEO is the most cost-effective way for Adelaide SMEs to compete with larger brands and capture the high-intent local audience." }
    ],
    testimonials: [
      { name: "Ethan James", role: "Director, Adelaide Defence Tech", text: "YD Groups understands the high-security and high-trust needs of our industry in Adelaide. Exceptional service.", avatar: "https://i.pravatar.cc/150?u=ethan" },
      { name: "Mia Jones", role: "Marketing, SA Lifestyle", text: "Highly effective local SEO for the Adelaide market. Our store foot traffic has increased significantly.", avatar: "https://i.pravatar.cc/150?u=mia" }
    ]
  },
  "toronto": {
    name: "Toronto",
    country: "Canada",
    intro: "Toronto is Canada's economic engine and a global financial powerhouse. Our SEO services in Toronto are built for high-stakes competition in the financial, tech, and retail sectors that define the GTA. We help brands rise above the noise of North America's fourth-largest city and dominate the high-volume queries that define success in Ontario.",
    whyChoose: "We have the scale, technology, and expertise to handle the most competitive keywords in the Canadian market. Our Toronto SEO strategy is built on a foundation of technical excellence and aggressive authority scaling. We understand the complexity of the North American search landscape and help Toronto-based enterprises achieve and maintain global rankings. We focus on ROI-driven metrics, ensuring that our work in the GTA delivers a clear and measurable impact on your bottom line.",
    faqs: [
      { q: "How do you handle bilingual SEO in Toronto?", a: "While Toronto is primarily English-speaking, we offer multi-language SEO strategies to ensure you reach the entire Canadian population effectively." }
    ],
    testimonials: [
      { name: "Noah Campbell", role: "CEO, Toronto FinTech", text: "The Toronto market is relentless. YD Groups provided the edge we needed to outperform global competitors right here in Ontario.", avatar: "https://i.pravatar.cc/150?u=noah" },
      { name: "Emma Smith", role: "Marketing Manager, GTA Retail", text: "Their technical SEO work was flawless. Our site speed and rankings in Toronto have never been better.", avatar: "https://i.pravatar.cc/150?u=emma" }
    ]
  },
  "vancouver": {
    name: "Vancouver",
    country: "Canada",
    intro: "Vancouver's tech, film, and green-economy industries are world leaders. Our SEO services in Vancouver help you reach a tech-savvy, international audience across the Pacific Northwest and beyond. We help Vancouver brands capture the unique 'West Coast' intent and transform it into sustainable digital growth.",
    whyChoose: "We understand the West Coast market and its unique digital consumption patterns and values. Our Vancouver SEO strategy focus on high-authority content that demonstrates real-world expertise and trust. We help businesses in BC navigate the competitive tech scene, ensuring they are the first brand discovered by both users and AI models. Our approach is agile and data-driven, matching the fast-paced innovation of the Vancouver market.",
    faqs: [
      { q: "Do you offer SEO for Vancouver's real estate market?", a: "Yes, we have specialized strategies for the highly competitive Vancouver real estate sector that focus on high-intent conversion." }
    ],
    testimonials: [
      { name: "Lucas Wong", role: "VP Growth, BC Tech Group", text: "Incredible attention to detail. They helped us navigate the Pacific Northwest search landscape with ease.", avatar: "https://i.pravatar.cc/150?u=lucas" },
      { name: "Ava Brown", role: "Product Manager, Vancouver Eco", text: "Finally an SEO agency that understands our brand values and delivers consistent, high-quality traffic in Vancouver.", avatar: "https://i.pravatar.cc/150?u=ava" }
    ]
  },
  "calgary": {
    name: "Calgary",
    country: "Canada",
    intro: "Calgary's energy-driven and tech-evolving economy requires a strategic SEO approach. Our SEO services in Calgary help businesses navigate the transition to more digital and tech-focused models, ensuring they find new growth opportunities in the Prairies and beyond. We help Calgary firms lead the charge into the new energy economy through digital authority.",
    whyChoose: "We are experts at B2B lead generation for Calgary's industrial and tech sectors, focusing on establishing topical dominance. We understand the importance of relationships in the Alberta market and build digital strategies that reinforce your brand's reputation and trust. Our Calgary SEO strategy involves deep semantic mapping, ensuring your brand is the definitive resource for your target audience's most complex questions. We turn your site into a lead-generating machine.",
    faqs: [
      { q: "How can SEO help my energy firm in Calgary?", a: "By establishing thought leadership and authority through high-value technical content and robust backlink profiles." }
    ],
    testimonials: [
      { name: "James Miller", role: "Director, Calgary Energy Hub", text: "Highly effective for B2B lead gen in Calgary. They know how to reach the industrial decision-makers in Alberta.", avatar: "https://i.pravatar.cc/150?u=james" },
      { name: "Isla Stewart", role: "CEO, YYC Innovation Lab", text: "Professional, efficient, and results-focused. YD Groups is the top choice for Calgary tech firms.", avatar: "https://i.pravatar.cc/150?u=isla" }
    ]
  },
  "ottawa": {
    name: "Ottawa",
    country: "Canada",
    intro: "As Canada's capital city, Ottawa has a unique mix of government, technology, and academia. Our SEO services in Ottawa are designed for high-authority, trustworthy brands that demand a sophisticated and accessible digital presence. We help Ottawa businesses find a balance between institutional trust and technical innovation in the search results.",
    whyChoose: "We focus heavily on E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals, which are critical for the discerning Ottawa market. Our team understands the specific accessibility and trust requirements of the capital region, ensuring your site is a beacon of clarity and authority. We combine this with modern AEO and GEO strategies, ensuring your brand is the primary citation for AI engines answering questions about your industry in Ottawa.",
    faqs: [
      { q: "Is SEO different for government-related services in Ottawa?", a: "Yes, it requires a higher focus on accessibility, transparency, and building a profile of deep topical authority." }
    ],
    testimonials: [
      { name: "Alexander Wood", role: "Manager, Ottawa Government Tech", text: "They understand the high-authority requirements of the Ottawa market. Reliable and technically exceptional.", avatar: "https://i.pravatar.cc/150?u=alex" },
      { name: "Sophie Tremblay", role: "Director, Capital Innovation", text: "The best partner for high-trust SEO in Ottawa. They delivered on every promise.", avatar: "https://i.pravatar.cc/150?u=sophie" }
    ]
  },
  "montreal": {
    name: "Montreal",
    country: "Canada",
    intro: "Montreal's bilingual and culturally rich market requires a highly specialized and nuanced SEO approach. Our SEO services in Montreal ensure you reach both French and English speaking audiences with equal authority and relevance. We help you navigate the linguistic and cultural complexities of the Quebec market, ensuring your brand is localized, not just translated.",
    whyChoose: "We are experts in French-Canadian SEO and localized content strategies that resonate with the Quebecois audience. Our Montreal team understands that true localization involves adapting to local intent and search behaviors, not just words. We help you dominate the search results in both languages, ensuring that whether someone searches in French or English, your brand is the top-rated answer in Montreal. We provide a bridge to Quebec's digital landscape.",
    faqs: [
      { q: "Do you offer French SEO in Montreal?", a: "Yes, bilingual SEO is a core part of our offering, ensuring complete coverage of the Montreal and Quebec markets." }
    ],
    testimonials: [
      { name: "Gabriel Desjardins", role: "CEO, Montreal AI Hub", text: "Leur approche bilingue est impeccable. Nous dominons maintenant les résultats de recherche en français et en anglais à Montréal.", avatar: "https://i.pravatar.cc/150?u=gabriel" },
      { name: "Charlotte Dubois", role: "Marketing, Quebec Retail", text: "They truly understand the culture of Montreal. This isn't just translation; it's true localization.", avatar: "https://i.pravatar.cc/150?u=charlotte" }
    ]
  }
};

export default function CityPage() {
  const { city } = useParams();
  const data = cityData[city?.toLowerCase() || ""];
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { openModal } = useAuditModal();

  if (!data) {
    return (
      <div className="py-32 text-center">
        <h1 className="text-4xl font-bold">City Not Found</h1>
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
              <Button 
                onClick={openModal}
                className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-8 py-6 text-lg rounded-full"
              >
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
              src={`https://picsum.photos/seed/${data.name}-local-business/800/600`} 
              alt={`SEO in ${data.name}`} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Success Stories / Reviews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Success Stories</h2>
            <p className="text-gray-600">See how businesses in {data.name} are scaling with our search strategies.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {data.testimonials.map((t: any, i: number) => (
              <div key={i} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="flex items-center gap-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-full border-2 border-white shadow-md" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-[10px] text-[#0047ff] font-bold uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{t.text}"</p>
              </div>
            ))}
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
              <p className="text-gray-400 mb-8">Our experts are ready to help you scale your business in {data.name}.</p>
              <Button 
                onClick={openModal}
                className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-12 py-8 text-xl rounded-full shadow-2xl shadow-[#d9ff00]/20"
              >
                Run Free SEO Audit
              </Button>
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
