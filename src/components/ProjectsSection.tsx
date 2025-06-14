
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Zap, Bot, Network, Building, Cloud } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GenTune – LLM Fine-Tuning Framework",
      description: "Fine-tuned open-source LLMs using domain-specific Q&A datasets. Used Ollama for local experimentation and built a customizable prompt pipeline with LangChain.",
      longDescription: "A comprehensive framework for fine-tuning large language models on domain-specific datasets. The project implements advanced techniques for model optimization, including LoRA (Low-Rank Adaptation) and quantization methods. Built with scalability in mind, it supports multiple model architectures and provides a streamlined pipeline from data preparation to model deployment.",
      icon: Zap,
      tags: ["Ollama", "Fine-Tuning", "LangChain", "Prompt Engineering"],
      color: "ai-blue",
      features: [
        "Domain-specific dataset processing",
        "Automated hyperparameter tuning",
        "Model evaluation and benchmarking",
        "Prompt optimization pipeline"
      ]
    },
    {
      title: "RAGBot – Retrieval-Augmented Chat with Neural Reranking",
      description: "Built a Streamlit-based GenAI bot using FAISS + LangChain + Cross-Encoder reranker for hybrid retrieval and contextual chat memory.",
      longDescription: "An advanced retrieval-augmented generation system that combines vector search with neural reranking for superior context retrieval. The system maintains conversation context across sessions and implements hybrid search strategies to ensure relevant and accurate responses.",
      icon: Bot,
      tags: ["RAG", "LangChain", "FAISS", "LLMs"],
      color: "ai-purple",
      features: [
        "Hybrid vector and keyword search",
        "Neural reranking for relevance",
        "Persistent conversation memory",
        "Real-time document ingestion"
      ]
    },
    {
      title: "AgentPulse – LangGraph Multi-Agent System",
      description: "Built an agentic AI architecture using LangGraph and Gemini API for market research and dataset discovery workflows.",
      longDescription: "A sophisticated multi-agent system designed for complex workflow orchestration. Agents collaborate to perform market research, data discovery, and analysis tasks. The system uses LangGraph for state management and implements advanced coordination patterns between specialized agents.",
      icon: Network,
      tags: ["LangGraph", "Multi-Agent AI", "Google Gemini", "RAG", "Orchestration"],
      color: "ai-teal",
      features: [
        "Autonomous agent coordination",
        "Workflow state management",
        "Dynamic task allocation",
        "Real-time collaboration monitoring"
      ]
    },
    {
      title: "BizBot Builder – No-Code NLP Bot Engine",
      description: "Developed a business chatbot builder that fine-tunes models on business-specific data, using vector DBs and LangChain components.",
      longDescription: "A no-code platform that enables businesses to create sophisticated chatbots without technical expertise. The platform automatically fine-tunes models on business-specific data and provides drag-and-drop interface for bot configuration.",
      icon: Building,
      tags: ["NLP", "Custom LLM", "FAISS", "LangChain"],
      color: "ai-pink",
      features: [
        "No-code bot builder interface",
        "Automatic model fine-tuning",
        "Business context optimization",
        "Multi-channel deployment"
      ]
    },
    {
      title: "CloudCare AI – Azure ML Deployment",
      description: "Deployed a predictive healthcare model via Azure Machine Learning Studio, integrating Blob Storage, AutoML, and REST endpoints via AKS.",
      longDescription: "A production-ready healthcare prediction system deployed on Azure cloud infrastructure. The solution leverages Azure's AutoML capabilities and integrates with various Azure services for scalable, reliable healthcare predictions.",
      icon: Cloud,
      tags: ["Azure ML", "AutoML", "Cloud Deployment", "REST API"],
      color: "ai-blue",
      features: [
        "Scalable cloud architecture",
        "Automated model retraining",
        "Real-time prediction API",
        "Healthcare data compliance"
      ]
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'ai-blue': return 'text-ai-blue border-ai-blue';
      case 'ai-purple': return 'text-ai-purple border-ai-purple';
      case 'ai-teal': return 'text-ai-teal border-ai-teal';
      case 'ai-pink': return 'text-ai-pink border-ai-pink';
      default: return 'text-ai-blue border-ai-blue';
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="ai-gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-ai-teal mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Showcasing innovative AI solutions and cutting-edge implementations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="bg-dark-surface border-dark-border hover:border-gray-600 transition-all duration-300 cursor-pointer hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <project.icon className={`h-8 w-8 ${project.color === 'ai-blue' ? 'text-ai-blue' : project.color === 'ai-purple' ? 'text-ai-purple' : project.color === 'ai-teal' ? 'text-ai-teal' : 'text-ai-pink'}`} />
                      <h3 className="text-lg font-semibold text-white group-hover:text-ai-blue transition-colors">
                        {project.title.split(' – ')[0]}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-dark-bg text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-dark-bg text-gray-400">
                          +{project.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent className="bg-dark-surface border-dark-border max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center space-x-3 text-xl">
                    <project.icon className={`h-6 w-6 ${project.color === 'ai-blue' ? 'text-ai-blue' : project.color === 'ai-purple' ? 'text-ai-purple' : project.color === 'ai-teal' ? 'text-ai-teal' : 'text-ai-pink'}`} />
                    <span className="text-white">{project.title}</span>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <p className="text-gray-300 leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${project.color === 'ai-blue' ? 'bg-ai-blue' : project.color === 'ai-purple' ? 'bg-ai-purple' : project.color === 'ai-teal' ? 'bg-ai-teal' : 'bg-ai-pink'}`}></div>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-dark-bg text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-4">
                    <Button className="bg-ai-blue hover:bg-ai-blue/80 text-white">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className="border-ai-teal text-ai-teal hover:bg-ai-teal hover:text-dark-bg">
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
