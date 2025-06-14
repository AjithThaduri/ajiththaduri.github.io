
import { GraduationCap, MapPin, Calendar, Mail, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="ai-gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-ai-blue mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-dark-surface border-dark-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-ai-blue">Personal Bio</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm an IT student with a deep interest in LLMs, Prompt Engineering, and Agentic AI. 
                  My learning includes fine-tuning LLMs, deploying cloud-first ML pipelines on Azure, 
                  and experimenting with LangChain, LangGraph, and Ollama.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-surface border-dark-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-ai-purple">Education Timeline</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-ai-blue mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">GRIET (Gokaraju Rangaraju Institute of Engineering and Technology)</h4>
                      <p className="text-sm text-gray-400">Information Technology</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <GraduationCap className="h-5 w-5 text-ai-teal mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Sri Chaitanya</h4>
                      <p className="text-sm text-gray-400">Foundation Studies</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-dark-surface border-dark-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-ai-teal">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-ai-blue" />
                    <span className="text-gray-300">ajith.thaduri@example.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-ai-purple" />
                    <span className="text-gray-300">Hyderabad, India</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-5 w-5 text-ai-teal" />
                    <a href="#" className="text-gray-300 hover:text-ai-teal transition-colors">
                      LinkedIn Profile
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-ai-pink" />
                    <span className="text-gray-300">Available for opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-dark-surface border-dark-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-ai-pink">Current Focus</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-blue rounded-full"></div>
                    <span>Advanced LLM Fine-tuning Techniques</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-purple rounded-full"></div>
                    <span>Multi-Agent System Architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-teal rounded-full"></div>
                    <span>Production ML Deployment on Azure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-ai-pink rounded-full"></div>
                    <span>Quantum Machine Learning Research</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
