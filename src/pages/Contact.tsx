import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Globe, CheckCircle2, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";
import SchemaMarkup from "../components/SchemaMarkup";

export default function Contact() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact YD Groups",
    "description": "Get in touch with YD Groups for expert SEO, AEO, and GEO services.",
    "url": "https://ais-dev-bxswbocnfoom3rdatois46-628900592895.asia-southeast1.run.app/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "YD Groups",
      "email": "yashpatelseo19@gmail.com",
      "telephone": "+91-989-8989-898"
    }
  };

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Contact Us | Get a Free SEO Audit | YD Groups</title>
        <meta name="description" content="Ready to grow your business? Contact YD Groups for expert SEO, AEO, and GEO services. Get a free audit and consultation today." />
      </Helmet>
      <SchemaMarkup data={contactPageSchema} />

      {/* Hero Section */}
      <section className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Get in <span className="text-[#d9ff00]">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            Let's discuss how we can grow your business through advanced search optimization and AI-ready strategies.
          </motion.p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0047ff]/10 via-transparent to-transparent" />
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Details & Trust */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Contact Us?</h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We provide a free, no-obligation audit and consultation to help you understand your current performance and identify growth opportunities.
              </p>
              
              <div className="space-y-8 mb-16">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-[#0047ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                    <p className="text-gray-600">yashpatelseo19@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-[#0047ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">+91-989-8989-898</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-[#0047ff]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Our Location</h4>
                    <p className="text-gray-600">Ahmedabad, India (Serving Global Clients)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Commitment</h3>
                <div className="space-y-4">
                  {[
                    "Fast response within 24 hours",
                    "Free comprehensive SEO audit",
                    "Expert consultation with search specialists",
                    "Customized growth roadmap"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                      <CheckCircle2 className="h-5 w-5 text-[#0047ff]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div>
              <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                  <p className="text-gray-500">Fill out the form below and we'll get back to you shortly.</p>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Short) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: "John Doe", text: "The audit they provided was eye-opening. We saw immediate improvements after implementing their suggestions." },
              { name: "Jane Smith", text: "Professional and highly knowledgeable. They are our go-to partner for all things search optimization." }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                <div className="text-[#0047ff] mb-4"><MessageSquare className="h-6 w-6" /></div>
                <p className="text-gray-600 italic mb-4">"{t.text}"</p>
                <h4 className="font-bold text-gray-900">- {t.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-[#0047ff] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">Start Your Growth Journey Today</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Don't let your competitors dominate the search results. Take the first step towards digital authority.
          </p>
          <Button className="bg-[#d9ff00] hover:bg-[#c4e600] text-black font-bold px-10 py-8 text-xl rounded-full">
            Get Free Audit
          </Button>
        </div>
      </section>
    </div>
  );
}
