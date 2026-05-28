"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for "Contact Backend" requirement
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-premium p-10 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
          <MessageSquare className="w-40 h-40 text-[#00f2fe]" />
        </div>

        <div className="mb-12 text-center md:text-left relative z-10">
          <h2 className="text-4xl font-black text-white mb-4 tracking-tighter">Get In Touch</h2>
          <p className="text-gray-400 font-medium">Have a question or want to collaborate? Send a message directly.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Full Name</label>
              <input
                required
                type="text"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 glass border border-white/5 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00838d]/50 transition-all font-medium"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Email Address</label>
              <input
                required
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 glass border border-white/5 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00838d]/50 transition-all font-medium"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-4">Your Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 glass border border-white/5 rounded-2xl text-white placeholder:text-gray-700 focus:outline-none focus:border-[#00838d]/50 transition-all font-medium resize-none"
            />
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-5 bg-[#00838d] hover:bg-[#007b85] text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] transition-all transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl shadow-[#00838d]/20 flex items-center justify-center gap-3"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute inset-0 z-20 glass-premium flex flex-col items-center justify-center text-center p-10 bg-[#050505]/95"
            >
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Message Received!</h3>
              <p className="text-gray-500 font-medium max-w-xs">Thank you for reaching out. I'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-[10px] font-black uppercase tracking-widest text-[#00838d] hover:text-[#00f2fe] transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
