import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Users, Rocket, Target } from "lucide-react";

const stats = [
  { icon: Rocket, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Award, value: "3+", label: "Years Experience" },
  { icon: Target, value: "100%", label: "Client Satisfaction" }
];

const timeline = [
  { year: "2022", title: "Foundation", desc: "Started as a freelance developer" },
  { year: "2023", title: "Growth", desc: "Expanded to a team of specialists" },
  { year: "2024", title: "Innovation", desc: "Pioneered web experiences" },
  { year: "2025", title: "Excellence", desc: "Industry-leading digital agency" }
];

export const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Holographic effect background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-aqua/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
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
              The Digital Aura Behind WebAuraa
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're not just developers—we're digital artists crafting the future of web experiences
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card text-center hover:border-neon-aqua/50 transition-all duration-300 group"
            >
              <motion.div
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="inline-block mb-4"
              >
                <stat.icon className="w-10 h-10 text-neon-aqua glow-aqua" />
              </motion.div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-neon-aqua transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-neon-aqua">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-aqua via-neon-blue to-neon-aqua" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: idx * 0.2, duration: 0.6 }}
                  className={`flex items-center gap-8 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${idx % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass-card inline-block hover:border-neon-aqua/50 transition-all duration-300">
                      <div className="text-neon-aqua font-bold text-lg mb-1">{item.year}</div>
                      <div className="text-white font-semibold text-xl mb-2">{item.title}</div>
                      <div className="text-gray-400">{item.desc}</div>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 rounded-full bg-neon-aqua glow-aqua relative z-10" />
                  
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card border-neon relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-aqua/10 to-neon-blue/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <motion.div 
                  className="w-32 h-32 rounded-2xl bg-gradient-to-br from-neon-aqua to-neon-blue p-1 glow-intense"
                  whileHover={{ scale: 1.05, rotateZ: 5 }}
                >
                  <div className="w-full h-full rounded-2xl bg-cyber-dark flex items-center justify-center">
                    <span className="text-5xl font-bold text-white">SH</span>
                  </div>
                </motion.div>
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">
                    <span className="bg-gradient-to-r from-neon-aqua to-neon-blue bg-clip-text text-transparent">
                      Shibam Halder
                    </span>
                  </h3>
                  <p className="text-neon-aqua font-semibold mb-4">Founder & Lead Developer</p>
                  <p className="text-gray-300 leading-relaxed">
                    A visionary developer passionate about pushing the boundaries of web technology. 
                    Specializing in immersive web experiences, cutting-edge animations, and digital solutions 
                    that leave lasting impressions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
