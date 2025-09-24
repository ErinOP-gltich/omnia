import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Smartphone, 
  Cloud, 
  AlertTriangle, 
  CheckCircle, 
  Activity, 
  Users, 
  Lock,
  Wifi,
  HardDrive,
  BarChart3,
  Settings,
  Download,
  RefreshCw
} from "lucide-react";

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  };

  const securityScore = 87;
  const devices = [
    { name: "MacBook Pro", status: "Protected", lastScan: "2 hours ago", icon: HardDrive },
    { name: "iPhone 14", status: "Protected", lastScan: "1 hour ago", icon: Smartphone },
    { name: "Smart TV", status: "Vulnerable", lastScan: "1 day ago", icon: Wifi },
  ];

  const recentAlerts = [
    { type: "warning", message: "Suspicious login attempt blocked", time: "2 hours ago" },
    { type: "info", message: "VPN connection established", time: "3 hours ago" },
    { type: "success", message: "Security scan completed", time: "6 hours ago" },
  ];

  const protectionModules = [
    {
      icon: Shield,
      title: "Identity Protection",
      status: "Active",
      description: "Monitoring 3 email addresses",
      progress: 100,
      color: "text-green-500"
    },
    {
      icon: Smartphone,
      title: "Device Security",
      status: "Active",
      description: "3 devices protected",
      progress: 87,
      color: "text-blue-500"
    },
    {
      icon: Cloud,
      title: "Cloud Monitoring",
      status: "Active",
      description: "2 cloud services monitored",
      progress: 95,
      color: "text-purple-500"
    },
    {
      icon: Wifi,
      title: "Network Security",
      status: "Needs Attention",
      description: "VPN disconnected",
      progress: 60,
      color: "text-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Dashboard Header */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Security Dashboard</h1>
              <p className="text-muted-foreground">Monitor and manage your complete digital protection</p>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleRefresh}
                disabled={refreshing}
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Security Score Overview */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <Card className="lg:col-span-2 glass border-border/50 animate-fade-up">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5 text-primary" />
                    <span>Security Score</span>
                  </CardTitle>
                  <CardDescription>Overall protection status</CardDescription>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-foreground">{securityScore}%</div>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Good
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Progress value={securityScore} className="mb-4" />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Identity Protection</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Device Security</span>
                    <span className="font-medium">87%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Network Security</span>
                    <span className="font-medium">60%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Cloud Monitoring</span>
                    <span className="font-medium">95%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="w-5 h-5 text-primary" />
                <span>Recent Activity</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'warning' ? 'bg-orange-500' :
                      alert.type === 'success' ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Protection Modules */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {protectionModules.map((module, index) => (
            <Card key={index} className="glass border-border/50 hover:shadow-glow transition-all duration-300 animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <module.icon className={`w-8 h-8 ${module.color}`} />
                  <Badge variant={module.status === "Active" ? "default" : "destructive"}>
                    {module.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{module.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{module.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Protection Level</span>
                    <span className="font-medium">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Devices and Threats */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="glass border-border/50 animate-fade-up">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-primary" />
                <span>Protected Devices</span>
              </CardTitle>
              <CardDescription>3 of 10 devices connected</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {devices.map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                    <div className="flex items-center space-x-3">
                      <device.icon className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{device.name}</p>
                        <p className="text-sm text-muted-foreground">Last scan: {device.lastScan}</p>
                      </div>
                    </div>
                    <Badge variant={device.status === "Protected" ? "default" : "destructive"}>
                      {device.status === "Protected" ? (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      ) : (
                        <AlertTriangle className="w-3 h-3 mr-1" />
                      )}
                      {device.status}
                    </Badge>
                  </div>
                ))}
                <Button variant="ghost" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Add New Device
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="glass border-border/50 animate-fade-up" style={{animationDelay: '0.1s'}}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                <span>Threat Statistics</span>
              </CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Threats Blocked</span>
                  <span className="text-2xl font-bold text-green-500">247</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Phishing Attempts</span>
                  <span className="text-2xl font-bold text-orange-500">15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Malware Detected</span>
                  <span className="text-2xl font-bold text-red-500">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Data Breaches</span>
                  <span className="text-2xl font-bold text-muted-foreground">0</span>
                </div>
              </div>
              <div className="mt-6">
                <Button className="w-full bg-gradient-primary">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  View Detailed Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card className="glass border-border/50 animate-fade-up">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common security tasks and settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Shield className="w-6 h-6 text-primary" />
                  <span>Run Security Scan</span>
                </Button>
                <Button variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Lock className="w-6 h-6 text-primary" />
                  <span>Update Passwords</span>
                </Button>
                <Button variant="ghost" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Manage Family</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;