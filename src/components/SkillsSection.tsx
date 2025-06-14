
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Bot, Code, Cloud, Database, Zap, Cpu, Network } from 'lucide-react';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Primary Expertise",
      color: "ai-blue",
      skills: [
        { name: "Generative AI", icon: Brain, description: "Advanced experience with GPT, Claude, and Gemini models" },
        { name: "Agentic AI", icon: Bot, description: "Building autonomous AI agents and multi-agent systems" },
        { name: "LLM Engineering", icon: Code, description: "Fine-tuning, deployment, and optimization of large language models" },
        { name: "Prompt Engineering", icon: Zap, description: "Advanced prompt design and optimization techniques" },
      ]
    },
    {
      title: "Frameworks & Tools",
      color: "ai-purple",
      skills: [
        { name: "LangChain", icon: Network, description: "Expert in building LLM applications and chains" },
        { name: "LangGraph", icon: Bot, description: "Multi-agent workflows and stateful applications" },
        { name: "Azure ML Studio", icon: Cloud, description: "Cloud-based machine learning deployment and management" },
        { name: "MCP Protocol", icon: Cpu, description: "Mixtral Context Protocol implementation and optimization" },
      ]
    },
    {
      title: "Supporting Technologies",
      color: "ai-teal",
      skills: [
        { name: "Quantum ML", icon: Cpu, description: "Quantum machine learning algorithms and implementations" },
        { name: "FAISS", icon: Database, description: "Vector similarity search and indexing" },
        { name: "Streamlit", icon: Code, description: "Rapid prototyping of ML applications" },
        { name: "Ollama", icon: Bot, description: "Local LLM deployment and experimentation" },
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'ai-blue': return 'border-ai-blue text-ai-blue';
      case 'ai-purple': return 'border-ai-purple text-ai-purple';
      case 'ai-teal': return 'border-ai-teal text-ai-teal';
      default: return 'border-ai-blue text-ai-blue';
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="ai-gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-ai-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Specialized expertise in cutting-edge AI technologies and frameworks
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className={`text-xl font-semibold ${getColorClass(category.color).split(' ')[1]}`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <Card
                    key={skillIndex}
                    className={`bg-dark-surface border-2 transition-all duration-300 cursor-pointer hover:scale-105 ${
                      hoveredSkill === `${categoryIndex}-${skillIndex}` 
                        ? `${getColorClass(category.color)} glow-effect` 
                        : 'border-dark-border hover:border-gray-600'
                    }`}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <skill.icon className={`h-6 w-6 ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` 
                            ? getColorClass(category.color).split(' ')[1] 
                            : 'text-gray-400'
                        }`} />
                        <h4 className="font-semibold text-white">{skill.name}</h4>
                      </div>
                      {hoveredSkill === `${categoryIndex}-${skillIndex}` && (
                        <p className="text-sm text-gray-300 animate-fade-in">
                          {skill.description}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-400 mb-4">Foundation Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Python', 'C', 'Java', 'SQL'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-dark-surface border border-dark-border rounded-full text-sm text-gray-500 hover:text-gray-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
