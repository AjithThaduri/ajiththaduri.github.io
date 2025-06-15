
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Eye, Calendar } from 'lucide-react';

const ResumeSection = () => {
  const resumeVersions = [
    {
      version: "Latest",
      date: "December 2024",
      description: "Comprehensive resume highlighting AI/ML expertise and recent projects",
      highlights: ["Latest AI projects", "Updated certifications", "Recent experience"],
      color: "ai-blue"
    },
    {
      version: "Technical Focus",
      date: "November 2024",
      description: "Technical-focused resume emphasizing development skills and frameworks",
      highlights: ["Technical skills", "Project implementations", "Code contributions"],
      color: "ai-purple"
    }
  ];

  const handleDownload = (version: string) => {
    // In a real implementation, this would trigger a download
    console.log(`Downloading ${version} resume...`);
  };

  const handlePreview = (version: string) => {
    // In a real implementation, this would open a preview modal
    console.log(`Previewing ${version} resume...`);
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="ai-gradient-text">Resume</span> & CV
          </h2>
          <div className="w-20 h-1 bg-ai-purple mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Download my latest resume to learn more about my experience and qualifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {resumeVersions.map((resume, index) => (
            <Card key={index} className="bg-dark-surface border-dark-border hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className={`h-6 w-6 ${resume.color === 'ai-blue' ? 'text-ai-blue' : 'text-ai-purple'}`} />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{resume.version} Resume</h3>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{resume.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{resume.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {resume.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${resume.color === 'ai-blue' ? 'bg-ai-blue' : 'bg-ai-purple'}`}></div>
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex space-x-3">
                  <Button 
                    onClick={() => handleDownload(resume.version)}
                    className={`${resume.color === 'ai-blue' ? 'bg-ai-blue hover:bg-ai-blue/80' : 'bg-ai-purple hover:bg-ai-purple/80'} text-white flex-1`}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button 
                    onClick={() => handlePreview(resume.version)}
                    variant="outline" 
                    className={`${resume.color === 'ai-blue' ? 'border-ai-blue text-ai-blue hover:bg-ai-blue' : 'border-ai-purple text-ai-purple hover:bg-ai-purple'} hover:text-white`}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="bg-dark-surface border-dark-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Professional Summary</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Passionate Generative AI Engineer with expertise in LLM fine-tuning, multi-agent systems, 
                and cloud-based ML deployments. Experienced in building production-ready AI applications 
                using LangChain, LangGraph, and Azure ML. Committed to advancing the field of AI through 
                innovative research and practical implementations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-ai-blue mb-1">7+</div>
                  <div className="text-sm text-gray-400">AI Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ai-purple mb-1">8+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ai-teal mb-1">2+</div>
                  <div className="text-sm text-gray-400">Leadership Roles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-ai-pink mb-1">1+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
