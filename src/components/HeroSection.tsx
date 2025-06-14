
import { useState, useEffect } from 'react';
import { ChevronDown, ExternalLink, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Generative AI & Agentic Systems Explorer";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [typedText, fullText]);

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
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-ai-blue rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
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
