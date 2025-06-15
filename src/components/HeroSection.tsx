
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Number of floating particles
const PARTICLE_COUNT = 20;

type Particle = {
  id: number;
  left: number; // percent
  top: number; // percent
  size: number; // px
  velocityX: number; // px per second
  velocityY: number; // px per second
  delay: number; // for staggered animation
};

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Generative AI & Agentic Systems Explorer";

  // Live particles animated state
  const [particles, setParticles] = useState<Particle[]>([]);
  const animationFrame = useRef<number | null>(null);

  // Text typing animation
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [typedText, fullText]);

  // Initialize particles on mount
  useEffect(() => {
    const tempParticles: Particle[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      tempParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 3 + Math.random() * 7, // 3px to 10px
        velocityX: (Math.random() - 0.5) * 2, // -1 to 1 px/sec
        velocityY: (Math.random() - 0.5) * 2,
        delay: Math.random() * 2,
      });
    }
    setParticles(tempParticles);
  }, []);

  // Animate particles with requestAnimationFrame
  useEffect(() => {
    let lastTimestamp = performance.now();

    const animate = (now: number) => {
      const dt = Math.min((now - lastTimestamp) / 1000, 0.05); // max 50ms steps, in seconds
      setParticles(prev =>
        prev.map(p => {
          // Move particle, wrap around at edges
          let newLeft = p.left + p.velocityX * dt;
          let newTop = p.top + p.velocityY * dt;

          // Wrap logic for looping
          if (newLeft < 0) newLeft = 100;
          if (newLeft > 100) newLeft = 0;
          if (newTop < 0) newTop = 100;
          if (newTop > 100) newTop = 0;
          return { ...p, left: newLeft, top: newTop };
        })
      );
      lastTimestamp = now;
      animationFrame.current = requestAnimationFrame(animate);
    };
    animationFrame.current = requestAnimationFrame(animate);
    return () => animationFrame.current && cancelAnimationFrame(animationFrame.current);
  }, []);

  const handleExploreWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCollaborate = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/10 via-ai-purple/10 to-ai-teal/10 animate-pulse"></div>
      </div>

      {/* Floating Particles - now always live */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute bg-ai-blue rounded-full opacity-70"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              filter: 'blur(0.5px)',
              transition: 'box-shadow 0.5s',
              boxShadow: '0 0 10px 2px #0ea5e988',
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="block text-white">Ajith</span>
            <span className="block ai-gradient-text">Thaduri</span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-xl md:text-2xl text-ai-blue font-medium">
              {typedText}
              <span className="animate-blink">|</span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-left">
            I'm keenly interested in <span className="text-ai-teal font-semibold">LLM Engineering</span>,
            exploring <span className="text-ai-purple font-semibold">MCP (Mixtral Context Protocol)</span> and
            building context-aware agentic systems. My journey is grounded in applied ML, hands-on
            experimentation, and pushing open-source models to production.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={handleExploreWork}
              className="bg-ai-blue hover:bg-ai-blue/80 text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 glow-effect"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Explore My Work
            </Button>

            <Button
              onClick={handleCollaborate}
              variant="outline"
              className="border-ai-teal text-ai-teal hover:bg-ai-teal hover:text-dark-bg px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Collaborate
            </Button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-ai-blue mx-auto cursor-pointer" onClick={handleExploreWork} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
