
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ajith.thaduri@example.com",
      href: "mailto:ajith.thaduri@example.com",
      color: "ai-blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210",
      color: "ai-purple"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "ai-teal"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/ajith-thaduri",
      href: "https://linkedin.com/in/ajith-thaduri",
      color: "ai-pink"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setLoading(false);
  };

  const getColorClass = (color: string) => {
    switch (color) {
      case 'ai-blue': return 'text-ai-blue';
      case 'ai-purple': return 'text-ai-purple';
      case 'ai-teal': return 'text-ai-teal';
      case 'ai-pink': return 'text-ai-pink';
      default: return 'text-ai-blue';
    }
  };

  return (
    <div className="container mx-auto px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="ai-gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-ai-blue mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Let's collaborate on exciting AI projects or discuss opportunities in Generative AI and ML
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-dark-surface border-dark-border hover:border-gray-600 transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <info.icon className={`h-6 w-6 ${getColorClass(info.color)}`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm">{info.label}</h4>
                          <a 
                            href={info.href}
                            className="text-gray-300 hover:text-ai-blue transition-colors text-sm"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm always interested in discussing new opportunities, collaborative projects, 
                or innovative ideas in the field of Generative AI and Machine Learning. 
                Whether you're looking for a technical discussion or exploring potential partnerships, 
                I'd love to hear from you.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white"
                  onClick={() => window.open('https://linkedin.com/in/ajith-thaduri', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  className="border-ai-purple text-ai-purple hover:bg-ai-purple hover:text-white"
                  onClick={() => window.open('https://github.com/ajith-thaduri', '_blank')}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-dark-surface border-dark-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-dark-bg border-dark-border text-white focus:border-ai-blue"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-dark-bg border-dark-border text-white focus:border-ai-blue"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="bg-dark-bg border-dark-border text-white focus:border-ai-blue"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="bg-dark-bg border-dark-border text-white focus:border-ai-blue"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-ai-blue hover:bg-ai-blue/80 text-white py-3 font-semibold"
                  >
                    {loading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
