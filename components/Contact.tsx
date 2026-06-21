"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/liipp1017@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset(); // This clears the form!
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-6 text-text-secondary max-w-lg mx-auto font-light">
            I'm currently open for internships, freelance projects, and collaborations. Let's discuss how I can help bring your ideas to life!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 text-primary rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:liipp1017@gmail.com" className="text-text-secondary hover:text-primary transition-colors font-light">
                  liipp1017@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 text-primary rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                <a 
                  href="https://wa.me/6287804054071" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-primary transition-colors font-light flex items-center gap-2"
                >
                  +62 878-0405-4071
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-4 bg-white/5 backdrop-blur-md border border-white/10 text-primary rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">Location</h3>
                <p className="text-text-secondary font-light">
                  Bekasi, West Java, Indonesia
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex-[1.5] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-xl relative"
          >
            {/* FormSubmit Config */}
            <input type="hidden" name="_subject" value="New message from your Portfolio Website!" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-text-secondary/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-text-secondary/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                name="topic"
                required
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground placeholder:text-text-secondary/50"
                placeholder="How can I help you?"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground resize-none placeholder:text-text-secondary/50"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full sm:w-auto px-8 py-3.5 flex items-center justify-center gap-2 text-background rounded-xl font-medium transition-all shadow-[0_0_15px_rgba(217,199,163,0.3)] group ${
                isSuccess ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary-light"
              } ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                "Sending..."
              ) : isSuccess ? (
                "Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
