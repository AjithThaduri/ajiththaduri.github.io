
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "IBM Quantum Machine Learning",
      issuer: "IBM",
      level: "Advanced",
      date: "2024",
      description: "Advanced quantum computing principles applied to machine learning algorithms",
      skills: ["Quantum Computing", "Quantum ML", "Qiskit", "Quantum Algorithms"],
      color: "ai-blue"
    },
    {
      title: "IBM Quantum Machine Learning - Basic",
      issuer: "IBM",
      level: "Basic",
      date: "2024",
      description: "Foundational concepts in quantum machine learning and quantum computing",
      skills: ["Quantum Basics", "Quantum Gates", "Quantum Circuits", "ML Fundamentals"],
      color: "ai-purple"
    },
    {
      title: "Accenture Virtual Internship",
      issuer: "Accenture",
      level: "Professional",
      date: "2024",
      description: "Comprehensive data analytics and business intelligence virtual internship",
      skills: ["Data Analytics", "Business Intelligence", "SQL", "Data Visualization"],
      color: "ai-teal"
    },
    {
      title: "AWS Academy Cloud Foundations",
      issuer: "AWS Academy",
      level: "Foundation",
      date: "2024",
      description: "Fundamental cloud computing concepts and AWS services",
      skills: ["Cloud Computing", "AWS Services", "Cloud Architecture", "Security"],
      color: "ai-pink"
    },
    {
      title: "NPTEL Data Science",
      issuer: "NPTEL",
      level: "Academic",
      date: "2024",
      description: "Comprehensive data science course covering statistics, ML, and data analysis",
      skills: ["Data Science", "Statistics", "Machine Learning", "Python"],
      color: "ai-blue"
    }
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case 'ai-blue': return 'text-ai-blue border-ai-blue bg-ai-blue/10';
      case 'ai-purple': return 'text-ai-purple border-ai-purple bg-ai-purple/10';
      case 'ai-teal': return 'text-ai-teal border-ai-teal bg-ai-teal/10';
      case 'ai-pink': return 'text-ai-pink border-ai-pink bg-ai-pink/10';
      default: return 'text-ai-blue border-ai-blue bg-ai-blue/10';
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="ai-gradient-text">Certifications</span> & Learning
          </h2>
          <div className="w-20 h-1 bg-ai-pink mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="bg-dark-surface border-dark-border hover:border-gray-600 transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Award className={`h-6 w-6 ${cert.color === 'ai-blue' ? 'text-ai-blue' : cert.color === 'ai-purple' ? 'text-ai-purple' : cert.color === 'ai-teal' ? 'text-ai-teal' : 'text-ai-pink'}`} />
                    <div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-ai-blue transition-colors">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-400">{cert.issuer}</p>
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 hover:text-ai-blue cursor-pointer" />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <Badge className={`text-xs ${getColorClass(cert.color)}`}>
                    {cert.level}
                  </Badge>
                  <span className="text-xs text-gray-400">{cert.date}</span>
                </div>
                
                <p className="text-sm text-gray-300 mb-4">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-xs bg-dark-bg text-gray-400">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Committed to continuous learning and staying updated with the latest advancements in AI and ML
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;
