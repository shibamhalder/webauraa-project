import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layers3, ShoppingBag, Palette, TrendingUp, Wrench } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Layers3,
    title: "Website Development",
    description: "Interactive Spline UI, animated components, and motion-based interactions that captivate users.",
    features: ["WebGL Integration", "Animations", "Interactive UI"],
    color: "from-neon-aqua to-blue-500"
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce with Product Views",
    description: "Product rotations, neon light reflections, and smooth micro-interactions for immersive shopping.",
    features: ["Product Models", "AR Preview", "Smooth Checkout"],
    color: "from-neon-blue to-purple-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Holographic UI concepts, glassmorphism panels, and floating design mockups that mesmerize.",
    features: ["Figma Prototypes", "Design Systems", "User Research"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description: "Animated speed meters, ranking bars, and lit-up performance indicators for optimal results.",
    features: ["Technical SEO", "Core Web Vitals", "Speed Optimization"],
    color: "from-green-500 to-neon-aqua"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "24/7 support with bot assistance, smooth pulse animations, and real-time monitoring.",
    features: ["24/7 Monitoring", "Quick Updates", "Bug Fixes"],
    color: "from-orange-500 to-red-500"
  }
];

export const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-aqua/5 to-transparent" />
      
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
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge solutions that push the boundaries of web technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

type Service = typeof services[0];
interface ServiceCardProps {
  service: Service;
  index: number;
  inView: boolean;
}

const ServiceCard = ({ service, index, inView }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? 5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
        className="glass-card h-full hover:border-neon-aqua/50 transition-all duration-300 relative overflow-hidden"
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
        />

        {/* Icon with glow */}
        <motion.div
          animate={{ 
            rotate: isHovered ? 360 : 0,
            scale: isHovered ? 1.1 : 1 
          }}
          transition={{ duration: 0.6 }}
          className="mb-6 relative"
        >
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 glow-aqua`}>
            <Icon className="w-full h-full text-white" />
          </div>
        </motion.div>

        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-neon-aqua transition-colors">
          {service.title}
        </h3>
        
        <p className="text-gray-400 mb-6 leading-relaxed">
          {service.description}
        </p>

        <div className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.1 + idx * 0.1 }}
              className="flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-neon-aqua glow-aqua" />
              <span className="text-sm text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-neon-aqua/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    </motion.div>
  );
};
