import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Brain, 
  Search, 
  Layout, 
  Code2, 
  Database, 
  Users, 
  Cloud, 
  Share2,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Settings,
  MessageSquare
} from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const services = [
    {
      title: "Digital Marketing Services",
      path: "/services/digital-marketing",
      icon: BarChart3,
      desc: "Data-driven strategies to amplify your brand presence and drive measurable growth."
    },
    {
      title: "AI & Machine Learning",
      path: "/services/ai-ml",
      icon: Brain,
      desc: "Harness the power of intelligent automation and predictive analytics for your business."
    },
    {
      title: "SEO Services",
      path: "/services/seo",
      icon: Search,
      desc: "Dominate search rankings and attract high-quality organic traffic to your platform."
    },
    {
      title: "Web Design Services",
      path: "/services/web-design",
      icon: Layout,
      desc: "User-centric, high-performance designs that convert visitors into loyal customers."
    },
    {
      title: "Software Development",
      path: "/services/software-development",
      icon: Code2,
      desc: "Custom-built, scalable software solutions tailored to your unique business requirements."
    },
    {
      title: "ERP Solutions",
      path: "/services/erp",
      icon: Database,
      desc: "Integrated enterprise resource planning to streamline your core business processes."
    },
    {
      title: "CRM Solutions",
      path: "/services/crm",
      icon: Users,
      desc: "Advanced customer relationship management to enhance engagement and sales."
    },
    {
      title: "Microsoft Cloud Services",
      path: "/services/microsoft-cloud",
      icon: Cloud,
      desc: "Secure, scalable Azure infrastructure and cloud migration for modern enterprises."
    },
    {
      title: "SharePoint Solutions",
      path: "/services/sharepoint",
      icon: Share2,
      desc: "Empower collaboration and document management with custom SharePoint intranets."
    }
  ];

  const processSteps = [
    { title: "Requirement Analysis", desc: "Deep dive into your business needs and objectives." },
    { title: "Consulting & Strategy", desc: "Building a roadmap for technology and implementation." },
    { title: "Design & Development", desc: "Crafting high-quality solutions with precision." },
    { title: "Implementation", desc: "Seamless deployment and integration with your systems." },
    { title: "Optimization & Support", desc: "Continuous monitoring and performance enhancement." }
  ];

  const whyChooseUs = [
    { title: "Enterprise-grade solutions", icon: ShieldCheck },
    { title: "Certified experts", icon: CheckCircle2 },
    { title: "Scalable architecture", icon: Zap },
    { title: "Fast delivery", icon: TrendingUp },
    { title: "ROI-focused execution", icon: BarChart3 }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8"
            >
              End-to-End IT Solutions for <span className="text-[#0078d4]">Scalable Business Growth</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-12 leading-relaxed"
            >
              From strategy to implementation, we deliver high-performance digital, cloud, and enterprise solutions tailored for modern businesses.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button className="bg-[#0078d4] hover:bg-[#005a9e] text-white px-10 py-8 text-lg font-bold rounded-xl shadow-xl shadow-blue-100">
                Request Consultation
              </Button>
              <Button variant="outline" className="px-10 py-8 text-lg font-bold border-gray-200 rounded-xl">
                Explore Services
              </Button>
            </motion.div>
          </div>
        </div>
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our IT Services</h2>
            <p className="text-gray-600">Comprehensive technology solutions designed to drive efficiency, innovation, and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-2xl border border-gray-100 bg-[#fbfbfb] hover:bg-white hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#0078d4] transition-colors">
                  <service.icon className="h-7 w-7 text-[#0078d4] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed line-clamp-2">
                  {service.desc}
                </p>
                <Link 
                  to={service.path} 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0078d4] hover:gap-3 transition-all"
                >
                  Explore Service <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About YDGROUPS</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                YDGROUPS is a premier IT services company focused on driving digital transformation for enterprises worldwide. We specialize in bridging the gap between complex business challenges and innovative technology solutions.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                    <Cloud className="h-6 w-6 text-[#0078d4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Digital Transformation</h4>
                    <p className="text-sm text-gray-500">Modernizing legacy systems with cloud-native architectures.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0">
                    <TrendingUp className="h-6 w-6 text-[#0078d4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ROI-Focused Execution</h4>
                    <p className="text-sm text-gray-500">Every solution is built to deliver measurable business value.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/office/800/600" 
                  alt="YDGROUPS Office" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                <div className="text-4xl font-bold text-[#0078d4] mb-1">10+</div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-gray-600">The YDGROUPS advantage: Excellence in every delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <item.icon className="h-8 w-8 text-[#0078d4]" />
                </div>
                <h4 className="font-bold text-gray-900">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-24 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-400">A structured approach to delivering excellence.</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center group">
                  <div className="w-12 h-12 bg-[#0078d4] rounded-full flex items-center justify-center mx-auto mb-6 relative z-10 ring-8 ring-gray-900 group-hover:scale-110 transition-transform">
                    <span className="font-bold">{i + 1}</span>
                  </div>
                  <h4 className="font-bold mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600">Real results delivered for our global partners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Traffic Growth", metric: "300%", desc: "Organic traffic increase for a global retail brand.", color: "bg-blue-500" },
              { title: "Automation Success", metric: "60%", desc: "Reduction in manual processing for a logistics firm.", color: "bg-green-500" },
              { title: "ROI Improvement", metric: "4.5x", desc: "Return on ad spend for an e-commerce startup.", color: "bg-purple-500" }
            ].map((caseStudy, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-gray-100 h-80">
                <img 
                  src={`https://picsum.photos/seed/case${i}/600/400`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-8 flex flex-col justify-end">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider mb-4 ${caseStudy.color}`}>
                    Case Study
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <div className="text-3xl font-extrabold text-[#0078d4] mb-2">{caseStudy.metric}</div>
                  <p className="text-sm text-gray-300">{caseStudy.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Feedback</h2>
            <p className="text-gray-600">What industry leaders say about YDGROUPS.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "CTO, TechFlow", quote: "YDGROUPS transformed our infrastructure. Their cloud expertise is unmatched." },
              { name: "Michael Chen", role: "CEO, InnovateX", quote: "The AI solutions provided by YDGROUPS gave us a significant competitive edge." },
              { name: "David Miller", role: "Director, Global Logistics", quote: "Professional, efficient, and ROI-focused. A true partner for digital growth." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 text-yellow-400 mb-6">
                  {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-600 italic mb-8">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200" />
                  <div>
                    <h5 className="font-bold text-gray-900">{t.name}</h5>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Build Something Great Together</h2>
              <p className="text-lg text-gray-600 mb-12">
                Ready to scale your business with enterprise-grade IT solutions? Contact us today for a free consultation.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <MessageSquare className="h-6 w-6 text-[#0078d4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Expert Consultation</h4>
                    <p className="text-sm text-gray-500">Get strategic advice from our certified technology experts.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                    <Settings className="h-6 w-6 text-[#0078d4]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Custom Solutions</h4>
                    <p className="text-sm text-gray-500">Tailored roadmaps designed for your specific business goals.</p>
                  </div>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
