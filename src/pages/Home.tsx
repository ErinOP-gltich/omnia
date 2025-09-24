import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Smartphone, 
  Cloud, 
  Building2, 
  CheckCircle, 
  AlertTriangle, 
  ArrowRight,
  Users,
  Lock,
  Zap
} from "lucide-react";

const Home = () => {
  const [email, setEmail] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<{
    found: boolean;
    details: string;
    title: string;
  } | null>(null);
  const { toast } = useToast();

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsScanning(true);
    
    // Simulate scan delay
    setTimeout(() => {
      const breaches = Math.random() < 0.4; // 40% chance of finding breaches
      
      if (breaches) {
        setScanResult({
          found: true,
          title: "⚠️ 3 exposed accounts found",
          details: `We detected that ${email} appears in 3 known data breaches. Consider changing passwords and enabling 2FA.`
        });
      } else {
        setScanResult({
          found: false,
          title: "✅ No exposed accounts found",
          details: `We found no known breaches for ${email}. Keep monitoring your accounts.`
        });
      }
      
      setIsScanning(false);
      toast({
        title: "Security scan complete",
        description: breaches ? "Potential issues found" : "No issues detected"
      });
    }, 2000);
  };

  const features = [
    {
      icon: Shield,
      title: "Identity & Privacy",
      description: "Dark web scans, identity theft recovery, account breach alerts."
    },
    {
      icon: Smartphone,
      title: "Devices & Network",
      description: "Antivirus, malware protection, phishing detection, secured VPN."
    },
    {
      icon: Cloud,
      title: "Cloud & IoT",
      description: "Smart device security, cloud monitoring, device isolation."
    },
    {
      icon: Building2,
      title: "Enterprise Tools",
      description: "Endpoint detection, threat dashboards, compliance reports."
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "1 device • Breach alerts",
      features: ["Basic security scan", "Email breach alerts", "1 device protection"],
      buttonText: "Get Started",
      variant: "ghost" as const
    },
    {
      name: "Family",
      price: "$9.99/mo",
      description: "Up to 10 devices • Identity + VPN",
      features: ["Everything in Starter", "VPN protection", "Identity monitoring", "10 devices", "Priority support"],
      buttonText: "Start Trial",
      variant: "default" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Teams • EDR • Support",
      features: ["Everything in Family", "Endpoint detection", "Team management", "Custom integrations", "24/7 support"],
      buttonText: "Contact Sales",
      variant: "ghost" as const
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Shield className="w-4 h-4" />
                <span>Safe & Secure</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Full-spectrum security for your 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> digital life</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                OMNIA integrates identity protection, device security, VPN, and smart cloud & IoT defense—managed through one dashboard.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/login">
                  <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                    Start Free Trial
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="ghost" className="border-primary text-primary hover:bg-primary/10">
                  See Plans
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-4 text-center border border-border/50">
                  <div className="font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-4 text-center border border-border/50">
                  <div className="font-bold text-foreground">0</div>
                  <div className="text-sm text-muted-foreground">Security breaches</div>
                </div>
                <div className="bg-white/80 dark:bg-card/80 backdrop-blur-sm rounded-lg p-4 text-center border border-border/50">
                  <div className="font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Protection</div>
                </div>
              </div>
            </div>

            {/* Security Scan Card */}
            <div className="animate-float">
              <Card className="glass shadow-card border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Lock className="w-5 h-5 text-primary" />
                    <span>Quick Security Scan</span>
                  </CardTitle>
                  <CardDescription>
                    Enter your email to scan for exposures
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form onSubmit={handleScan} className="space-y-4">
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary" 
                      disabled={isScanning}
                    >
                      {isScanning ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Scanning...</span>
                        </div>
                      ) : (
                        "Run Scan"
                      )}
                    </Button>
                  </form>

                  {scanResult && (
                    <div className={`p-4 rounded-lg border animate-scale-in ${
                      scanResult.found 
                        ? "bg-destructive/10 border-destructive/20 text-destructive-foreground" 
                        : "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200"
                    }`}>
                      <h4 className="font-semibold mb-2">{scanResult.title}</h4>
                      <p className="text-sm">{scanResult.details}</p>
                    </div>
                  )}

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Dark web credential check</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Known breach detection</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Suggested remediation steps</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              All-in-one protection modules
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive security that adapts to your digital lifestyle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 animate-fade-up border-border/50" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Choose your plan
            </h2>
            <p className="text-xl text-muted-foreground">
              Flexible pricing for individuals, families, and enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative animate-fade-up ${
                  plan.popular 
                    ? "border-primary shadow-glow scale-105" 
                    : "border-border/50"
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-primary px-4 py-1 rounded-full text-white text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-foreground my-4">{plan.price}</div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/login" className="block">
                    <Button 
                      variant={plan.variant} 
                      className={`w-full ${plan.popular ? "bg-gradient-primary" : ""}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
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
              Ready to secure your digital life?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of users who trust OMNIA for complete protection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Users className="mr-2 w-4 h-4" />
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;