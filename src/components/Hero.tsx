import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { Code2, Sparkles, Zap, Cpu, Layers } from "lucide-react";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const floatingIcons = [
    { Icon: Code2, position: "top-20 left-[10%]", delay: 0 },
    { Icon: Sparkles, position: "top-40 right-[15%]", delay: 0.2 },
    { Icon: Zap, position: "bottom-40 left-[20%]", delay: 0.4 },
    { Icon: Cpu, position: "top-60 right-[25%]", delay: 0.6 },
    { Icon: Layers, position: "bottom-32 right-[10%]", delay: 0.8 },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-aqua rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0] 
            }}
            transition={{ 
              duration: Math.random() * 3 + 2, 
              repeat: Infinity,
              delay: Math.random() * 2 
            }}
          />
        ))}
      </div>

      {/* 3D Floating Icons */}
      {floatingIcons.map(({ Icon, position, delay }, idx) => (
        <motion.div
          key={idx}
          className={`absolute ${position} hidden lg:block`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateZ: [0, 5, 0]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon className="w-12 h-12 text-neon-aqua glow-aqua" />
          </motion.div>
        </motion.div>
      ))}

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 text-center px-6 max-w-6xl"
      >
        {/* 3D Floating Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <motion.div
            className="inline-block"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="text-neon-aqua text-7xl md:text-9xl font-bold glow-text">
              {"</>"}
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white glow-text animate-neon-flicker">
            We Build Immersive Websites
          </span>
          <br />
          <span className="bg-gradient-to-r from-neon-aqua to-neon-blue bg-clip-text text-transparent">
            That Define the Future
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Shibham WebAuraa blends design, development, and innovation to craft 
          unforgettable digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button 
            asChild
            size="lg"
            variant="cyber"
            className="px-8 py-6 text-lg rounded-xl"
          >
            <a href="#contact">Build My Website</a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="cyber-outline"
            className="px-8 py-6 text-lg rounded-xl"
          >
            <a href="#portfolio">Explore Portfolio</a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-neon-aqua rounded-full flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1 h-2 bg-neon-aqua rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
