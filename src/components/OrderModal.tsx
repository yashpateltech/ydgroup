import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Mail, User, Phone, CheckCircle2, Loader2, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/lib/firestoreUtils';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
}

export default function OrderModal({ isOpen, onClose, serviceName }: OrderModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedService, setSelectedService] = useState(serviceName);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Sync internal state when prop changes
  React.useEffect(() => {
    setSelectedService(serviceName);
  }, [serviceName]);

  const allServices = [
    "Reddit PR for AI Visibility",
    "Professional SEO Services",
    "100 Powerful Competitor Backlinks",
    "50 Powerful Competitor Backlinks",
    "200 High Authority Backlinks",
    "300 Monthly Backlinks Plan",
    "All-In-One Backlink Package 2.0",
    "Ultimate Premium Backlink Package",
    "Increase Ahrefs Domain Rating (DR 50+)",
    "Increase Ahrefs URL Rating (0 to 70+)",
    "Increase Moz Domain Authority (DA 40)",
    "Premium Guest Post Backlinks",
    "450 High DA Premium Backlinks",
    "Edu & Gov Authority Backlinks",
    "PBN Homepage Backlinks (DA 50+)",
    "Contextual High-Quality Backlinks",
    "3800+ Backlink Site List Bundle",
    "Web 2.0 Premium Backlinks",
    "Profile Dofollow Backlinks",
    "Comment Backlinks",
    "Quora Answer Backlinks",
    "Social Media Backlinks",
    "100% Real Human Social Signals",
    "Shopify & WooCommerce Store Setup",
    "WP Rocket License Activation",
    "Rank Math Pro License Activation"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const path = 'orders';
    try {
      await addDoc(collection(db, path), {
        name,
        email,
        phone,
        service: selectedService,
        status: 'new',
        createdAt: serverTimestamp()
      });
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setName('');
        setEmail('');
        setPhone('');
      }, 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {isSuccess ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Order Placed!</h3>
                <p className="text-gray-500">
                  We've received your inquiry for <span className="text-[#0047ff] font-bold">{selectedService}</span>. 
                  Our team will contact you at <span className="text-gray-900 font-bold">{email}</span> shortly.
                </p>
              </div>
            ) : (
              <div className="p-8 lg:p-12">
                <button 
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-6 w-6 text-gray-400" />
                </button>

                <div className="text-center mb-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="h-8 w-8 text-[#0047ff]" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Service</h2>
                  <p className="text-gray-500 text-sm">Please fill your details below</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Select Service</label>
                    <div className="relative">
                      <Package className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <select 
                        required
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff] appearance-none"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                      >
                        <option value="" disabled>Choose a service...</option>
                        {allServices.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Your Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        type="text" 
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Gmail Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        type="email" 
                        required
                        placeholder="yourname@gmail.com"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 00000 00000"
                        className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0047ff]"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-2xl bg-[#0047ff] hover:bg-[#0037cc] text-white font-bold text-lg shadow-xl shadow-blue-500/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" /> Processing...
                      </span>
                    ) : (
                      'Confirm Order Inquiry'
                    )}
                  </Button>

                  <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest font-bold">
                    Forwarding to yashpatelseo19@gmail.com for review
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
