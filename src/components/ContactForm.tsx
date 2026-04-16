import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

interface ContactFormProps {
  serviceDefault?: string;
}

export default function ContactForm({ serviceDefault = "" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: serviceDefault,
    budget: 3000,
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: serviceDefault, message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Consultation</h3>
      {status === "success" ? (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-6 bg-green-50 border border-green-200 rounded-xl text-center"
        >
          <div className="text-green-600 text-4xl mb-4">✓</div>
          <h4 className="text-green-900 font-bold mb-2">Inquiry Sent!</h4>
          <p className="text-green-700 text-sm">Thank you for reaching out. Our team will contact you shortly.</p>
          <Button 
            variant="outline" 
            className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Full Name *</label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078d4] focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Email Address *</label>
              <input
                required
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078d4] focus:border-transparent outline-none transition-all"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078d4] focus:border-transparent outline-none transition-all"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Service Interested</label>
              <select
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078d4] focus:border-transparent outline-none transition-all appearance-none bg-white"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="">Select a service</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="AI & Machine Learning">AI & Machine Learning</option>
                <option value="SEO Services">SEO Services</option>
                <option value="Web Design">Web Design</option>
                <option value="Software Development">Software Development</option>
                <option value="ERP Solutions">ERP Solutions</option>
                <option value="CRM Solutions">CRM Solutions</option>
                <option value="Microsoft Cloud">Microsoft Cloud</option>
                <option value="SharePoint">SharePoint</option>
              </select>
            </div>
          </div>
          
          <div className="space-y-4 py-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-semibold text-gray-700">Monthly Marketing Budget (USD)</label>
              <span className="text-lg font-bold text-[#0078d4]">${formData.budget.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="3000"
              max="200000"
              step="1000"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0078d4]"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: parseInt(e.target.value) })}
            />
            <div className="flex justify-between text-xs text-gray-400 font-medium">
              <span>$3,000</span>
              <span>$100,000</span>
              <span>$200,000</span>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Message *</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#0078d4] focus:border-transparent outline-none transition-all resize-none"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          {status === "error" && (
            <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
          )}
          <Button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full bg-[#0078d4] hover:bg-[#005a9e] text-white py-6 text-lg font-bold rounded-lg transition-all"
          >
            {status === "loading" ? "Sending..." : "Submit Inquiry"}
          </Button>
        </form>
      )}
    </div>
  );
}
