import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Users, 
  Target, 
  Award, 
  Globe, 
  Zap,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Twitter
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Users Protected", value: "1M+", icon: Users },
    { label: "Threats Blocked", value: "50M+", icon: Shield },
    { label: "Countries Served", value: "50+", icon: Globe },
    { label: "Uptime", value: "99.9%", icon: Zap }
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize your security above all else, implementing the highest standards of protection."
    },
    {
      icon: Users,
      title: "User-Centric",
      description: "Every feature is designed with our users in mind, ensuring simplicity without compromising security."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously innovate to stay ahead of emerging threats and security challenges."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our products to our customer service."
    }
  ];

  const team = [
    {
      name: "J AnandaNarayan",
      role: "CEO & Co-founder",
      bio: "Former cybersecurity Enthusiast and Btech in Computer Secuirty",
      image: "e"
    },
    {
      name: "Aman Goswami",
      role: "CTO & Co-founder",
      bio: "Security researcher and Btech in Computer Security",
      image: "e"
    },
    {
      name: "Ankit Mohanty",
      role: "CFO & Co-founder",
      bio: "Btech in Computer Security,",
      image: "e"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <Badge className="mb-6 bg-primary/10 text-primary">About OMNIA</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Protecting Your Digital Life Since
              <span className="bg-gradient-primary bg-clip-text text-transparent"> 2025</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're on a mission to make comprehensive cybersecurity accessible to everyone. 
              From individuals to enterprises, we provide unified protection that's both powerful and simple to use.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center glass border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="pt-6">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At OMNIA, we believe that everyone deserves comprehensive digital protection without the complexity. 
                Our mission is to democratize cybersecurity by providing enterprise-grade protection that's accessible, 
                affordable, and easy to use for individuals, families, and businesses alike.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We've built a platform that unifies identity protection, device security, network monitoring, 
                and cloud defense into a single, intelligent solution that learns and adapts to your digital lifestyle.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">AI-powered threat detection and prevention</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Unified protection across all your digital assets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-foreground">Simple, intuitive interface for complex security</span>
                </div>
              </div>
            </div>
            <div className="animate-float">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-3xl opacity-20"></div>
                <Card className="relative glass border-border/50">
                  <CardContent className="p-8">
                    <div className="text-center space-y-6">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Complete Protection</h3>
                      <p className="text-muted-foreground">
                        One platform, infinite possibilities. Protect your identity, devices, 
                        network, and cloud infrastructure with a single solution.
                      </p>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">24/7</div>
                          <div className="text-muted-foreground">Monitoring</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary">AI</div>
                          <div className="text-muted-foreground">Powered</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="glass border-border/50 hover:shadow-glow transition-all duration-300 group animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Security experts dedicated to protecting your digital life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="glass border-border/50 hover:shadow-glow transition-all duration-300 group animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to join our mission?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the future of cybersecurity with OMNIA's comprehensive protection platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Started Today
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
