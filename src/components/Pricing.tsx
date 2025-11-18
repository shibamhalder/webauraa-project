import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    description: "Perfect for small businesses and startups",
    features: [
      "Responsive Website",
      "5 Pages",
      "Basic SEO",
      "Contact Form",
      "1 Month Support",
      "Mobile Optimized"
    ],
    gradient: "from-blue-500 to-cyan-500",
    popular: false
  },
  {
    name: "Business",
    price: "₹19,999",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "10 Pages",
      "Advanced SEO",
      "Advanced Visual Elements",
      "E-Commerce Ready",
      "3 Months Support",
      "Analytics Dashboard",
      "Social Media Integration"
    ],
    gradient: "from-neon-aqua to-neon-blue",
    popular: true
  },
  {
    name: "Premium",
    price: "₹39,999",
    description: "For enterprises seeking excellence",
    features: [
      "Everything in Business",
      "Unlimited Pages",
      "Full Experience",
      "Custom Animations",
      "AI Integration",
      "6 Months Support",
      "Priority Updates",
      "Dedicated Manager",
      "Performance Optimization"
    ],
    gradient: "from-purple-500 to-pink-500",
    popular: false
  }
];

export const Pricing = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="pricing" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-aqua/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
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
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your digital transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} index={idx} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

type Plan = typeof plans[0];
interface PricingCardProps {
  plan: Plan;
  index: number;
  inView: boolean;
}

const PricingCard = ({ plan, index, inView }: PricingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={inView ? { 
        opacity: 1, 
        y: 0, 
        rotateX: 0,
        scale: plan.popular ? 1.05 : 1 
      } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative ${plan.popular ? 'md:-mt-4' : ''}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <span className="px-6 py-2 bg-gradient-to-r from-neon-aqua to-neon-blue text-cyber-dark font-bold rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}

      <motion.div
        animate={{
          rotateY: isHovered ? 8 : 0,
          rotateX: isHovered ? 8 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: "preserve-3d" }}
        className={`glass-card h-full ${plan.popular ? 'border-neon' : 'hover:border-neon-aqua/50'} transition-all duration-300 relative overflow-hidden`}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0`}
          animate={{ opacity: isHovered ? 0.1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10 p-8">
          {/* Plan name and price */}
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
            <div className="mb-3">
              <span className={`text-5xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                {plan.price}
              </span>
            </div>
            <p className="text-gray-400 text-sm">{plan.description}</p>
          </div>

          {/* Features list */}
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature: string, idx: number) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${plan.gradient} p-1 flex-shrink-0`}>
                  <Check className="w-full h-full text-cyber-dark" />
                </div>
                <span className="text-gray-300 text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <Button
            className={`w-full py-6 text-lg font-semibold rounded-xl transition-all duration-300 ${
              plan.popular
                ? 'bg-gradient-to-r from-neon-aqua to-neon-blue text-cyber-dark hover:scale-105 glow-intense'
                : 'glass border-neon text-white hover:bg-neon-aqua/10'
            }`}
          >
            Get Started
          </Button>
        </div>

        {/* Corner glow effect */}
        <motion.div
          className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${plan.gradient} rounded-full blur-3xl opacity-0`}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};
