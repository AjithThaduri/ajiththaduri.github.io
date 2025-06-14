
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Assistant Manager",
      organization: "Advanced Academic Center, GRIET",
      duration: "2023 - Present",
      type: "Leadership",
      description: "Leading academic initiatives and coordinating advanced learning programs. Managed student mentorship programs and facilitated technical workshops on emerging technologies.",
      responsibilities: [
        "Coordinated technical workshops and seminars",
        "Mentored students in AI and ML projects",
        "Developed curriculum for emerging technologies",
        "Managed academic partnerships and collaborations"
      ],
      skills: ["Leadership", "Project Management", "Technical Mentoring", "Academic Coordination"],
      color: "ai-blue"
    },
    {
      title: "Student Coordinator",
      organization: "Street Cause NGO",
      duration: "2022 - 2024",
      type: "Volunteer",
      description: "Coordinated community outreach programs and led technical education initiatives for underprivileged communities. Organized coding workshops and digital literacy programs.",
      responsibilities: [
        "Organized community technology workshops",
        "Led digital literacy programs",
        "Coordinated volunteer technical teams",
        "Developed educational content for coding bootcamps"
      ],
      skills: ["Community Outreach", "Technical Education", "Volunteer Management", "Social Impact"],
      color: "ai-teal"
    }
  ];

  const getColorClass = (color: string) => {
    return color === 'ai-blue' ? 'text-ai-blue' : 'text-ai-teal';
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Experience & <span className="ai-gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 bg-ai-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Building leadership skills through academic and community initiatives
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-dark-surface border-dark-border hover:border-gray-600 transition-all duration-300">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <Briefcase className={`h-6 w-6 ${getColorClass(exp.color)}`} />
                      <Badge className={`${exp.color === 'ai-blue' ? 'bg-ai-blue/10 text-ai-blue border-ai-blue' : 'bg-ai-teal/10 text-ai-teal border-ai-teal'}`}>
                        {exp.type}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-300">{exp.organization}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <p className="text-sm text-gray-400">{exp.duration}</p>
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 rounded-full mt-2 ${exp.color === 'ai-blue' ? 'bg-ai-blue' : 'bg-ai-teal'}`}></div>
                            <span className="text-gray-300">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Skills Developed</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="bg-dark-bg text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
