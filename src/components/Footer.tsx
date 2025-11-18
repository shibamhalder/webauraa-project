import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" }
];

export const Footer = () => {
  return (
    <footer className="relative py-12 px-6 border-t border-neon-aqua/20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-aqua/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-neon-aqua to-neon-blue rounded-lg flex items-center justify-center glow-aqua">
                <span className="text-white font-bold text-xl">SW</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Shibham WebAuraa</div>
                <div className="text-neon-aqua text-xs">Web Studio</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting the future of web experiences with innovative design and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Services", "Portfolio", "About", "Pricing", "Contact"].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-neon-aqua transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:border-neon-aqua/50 transition-all"
                >
                  <social.icon className="w-5 h-5 text-gray-400 hover:text-neon-aqua transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neon-aqua/20">
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2024 Shibham WebAuraa. Made with 
            <Heart className="w-4 h-4 text-neon-aqua fill-neon-aqua animate-pulse" />
            in India
          </p>
        </div>
      </div>
    </footer>
  );
};
