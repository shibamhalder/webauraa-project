import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ExternalLink, Code } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

const projects = [
  {
    title: "E-Commerce Store",
    category: "E-Commerce",
    image: "/placeholder.svg",
    description: "Immersive product visualization with AR integration",
    tech: ["React", "Three.js", "WebGL", "Node.js"],
    gradient: "from-neon-aqua to-blue-500"
  },
  {
    title: "Holographic Portfolio",
    category: "Portfolio",
    image: "/placeholder.svg",
    description: "Futuristic portfolio with holographic effects and parallax",
    tech: ["Next.js", "Framer Motion", "GSAP", "Tailwind"],
    gradient: "from-neon-blue to-purple-500"
  },
  {
    title: "Cyber Dashboard",
    category: "SaaS",
    image: "/placeholder.svg",
    description: "Real-time analytics dashboard with advanced data visualization",
    tech: ["React", "D3.js", "WebGL", "Socket.io"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "VR Landing Page",
    category: "Landing",
    image: "/placeholder.svg",
    description: "VR-enabled landing page with immersive scenes",
    tech: ["A-Frame", "Three.js", "React", "WebXR"],
    gradient: "from-green-500 to-neon-aqua"
  },
  {
    title: "AI Chatbot Interface",
    category: "AI/ML",
    image: "/placeholder.svg",
    description: "Animated AI chatbot with natural interactions",
    tech: ["React", "TensorFlow.js", "Three.js", "OpenAI"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Metaverse Showroom",
    category: "Metaverse",
    image: "/placeholder.svg",
    description: "Virtual showroom with multiplayer capabilities",
    tech: ["Unity", "WebGL", "Socket.io", "MongoDB"],
    gradient: "from-cyan-500 to-neon-blue"
  }
];

export const Portfolio = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-aqua)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--neon-aqua)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
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
              Our Work
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge web experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              index={idx} 
              inView={inView}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="glass-card border-neon max-w-4xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-neon-aqua to-neon-blue bg-clip-text text-transparent">
              {selectedProject?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="aspect-video rounded-xl overflow-hidden border border-neon-aqua/30">
              <img src={selectedProject?.image} alt={selectedProject?.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-gray-300 text-lg">{selectedProject?.description}</p>
            <div>
              <h4 className="text-neon-aqua font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech, idx) => (
                  <span key={idx} className="px-4 py-2 glass rounded-full text-sm border border-neon-aqua/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neon-aqua to-neon-blue text-cyber-dark rounded-xl font-semibold hover:scale-105 transition-transform">
                <ExternalLink className="w-4 h-4" />
                View Live
              </button>
              <button className="flex items-center gap-2 px-6 py-3 glass border-neon rounded-xl font-semibold hover:bg-neon-aqua/10 transition-colors">
                <Code className="w-4 h-4" />
                View Code
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

type Project = typeof projects[0];
interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
  onClick: () => void;
}

const ProjectCard = ({ project, index, inView, onClick }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 5 : 0,
          rotateX: isHovered ? 5 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ transformStyle: "preserve-3d" }}
        className="glass-card overflow-hidden hover:border-neon-aqua/50 transition-all duration-300"
      >
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
        </div>

        <div className="p-6">
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neon-aqua/20 text-neon-aqua border border-neon-aqua/30 mb-3">
            {project.category}
          </span>
          
          <h3 className="text-xl font-bold mb-2 text-white group-hover:text-neon-aqua transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-400 text-sm mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.slice(0, 3).map((tech: string, idx: number) => (
              <span key={idx} className="text-xs text-gray-500">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
