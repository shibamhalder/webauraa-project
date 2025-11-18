import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "shibhamwebauraa@gmail.com",
    gradient: "from-neon-aqua to-blue-500"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9735806433",
    gradient: "from-neon-blue to-purple-500"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Kolkata, India",
    gradient: "from-purple-500 to-pink-500"
  }
];

export const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--neon-aqua)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--neon-aqua)) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-aqua to-neon-blue bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's create something extraordinary together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-8">
              Let's Talk About Your Project
            </h3>
            
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                className="glass-card hover:border-neon-aqua/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.gradient} p-3 glow-aqua`}>
                    <info.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">{info.title}</div>
                    <div className="text-white font-semibold group-hover:text-neon-aqua transition-colors">
                      {info.value}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 p-8 glass-card border-neon relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-aqua/10 to-neon-blue/10" />
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-3 text-neon-aqua">
                  Ready to Start?
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Book a free consultation call to discuss your project and explore how we can bring your vision to life with cutting-edge web experiences.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card border-neon space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Name</label>
                <Input
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name"
                  required
                  className="bg-cyber-dark border-neon-aqua/30 focus:border-neon-aqua text-white placeholder:text-gray-500 h-12"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Email</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  required
                  className="bg-cyber-dark border-neon-aqua/30 focus:border-neon-aqua text-white placeholder:text-gray-500 h-12"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">Message</label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  required
                  rows={6}
                  className="bg-cyber-dark border-neon-aqua/30 focus:border-neon-aqua text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-neon-aqua to-neon-blue text-cyber-dark font-bold py-6 text-lg hover:scale-105 transition-transform glow-intense rounded-xl"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
      `}</style>
    </section>
  );
};
