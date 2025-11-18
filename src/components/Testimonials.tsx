import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "CEO, TechStart",
    content: "WebAuraa transformed our online presence with their stunning website. The attention to detail and innovation is unmatched!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Priya Das",
    role: "Founder, EcoShop",
    content: "The e-commerce platform they built with rich product views increased our sales by 200%. Absolutely incredible work!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Amit Verma",
    role: "Marketing Director, BrandX",
    content: "Their creative approach to web design helped us stand out in a crowded market. The holographic effects are mesmerizing!",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Sneha Gupta",
    role: "Product Manager, InnovCorp",
    content: "Working with Shibham and his team was a dream. They understood our vision and brought it to life with cutting-edge technology.",
    rating: 5,
    image: "/placeholder.svg"
  },
  {
    name: "Vikram Singh",
    role: "CTO, DataFlow",
    content: "The performance optimization and animations are world-class. Our website is now the talk of the industry!",
    rating: 5,
    image: "/placeholder.svg"
  }
];

export const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      {/* Radial gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-radial from-neon-aqua/10 via-transparent to-transparent" />
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it—hear from our satisfied clients
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center">
          {testimonials.map((testimonial, idx) => {
            const offset = idx - activeIndex;
            const absOffset = Math.abs(offset);
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: absOffset === 0 ? 1 : absOffset === 1 ? 0.6 : 0.3,
                  scale: absOffset === 0 ? 1 : absOffset === 1 ? 0.85 : 0.7,
                  x: offset * 320,
                  z: absOffset === 0 ? 0 : -absOffset * 100,
                  rotateY: offset * -15,
                }}
                transition={{ duration: 0.5 }}
                style={{ 
                  transformStyle: "preserve-3d",
                  position: "absolute"
                }}
                className={`w-full max-w-md ${absOffset > 1 ? 'pointer-events-none invisible' : ''}`}
                onClick={() => setActiveIndex(idx)}
              >
                <TestimonialCard testimonial={testimonial} isActive={absOffset === 0} />
              </motion.div>
            );
          })}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? 'bg-neon-aqua w-8 glow-aqua' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type Testimonial = typeof testimonials[0];
interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
  return (
    <div className={`glass-card ${isActive ? 'border-neon' : ''} transition-all duration-300 cursor-pointer`}>
      <div className="p-8">
        <Quote className="w-12 h-12 text-neon-aqua mb-4 glow-aqua" />
        
        <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-neon-aqua to-neon-blue p-0.5 glow-aqua">
            <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
              <span className="text-2xl font-bold text-white">
                {testimonial.name.split(' ').map((n: string) => n[0]).join('')}
              </span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
            <p className="text-neon-aqua text-sm">{testimonial.role}</p>
            <div className="flex gap-1 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-neon-aqua text-neon-aqua" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
