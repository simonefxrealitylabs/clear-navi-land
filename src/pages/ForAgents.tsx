import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, Zap, Award, DollarSign } from "lucide-react";

const ForAgents = () => {
  const features = [
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Track performance, conversion rates, and market trends with detailed dashboards"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Client Management",
      description: "Organize leads, track communications, and manage your entire sales pipeline"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified Listings",
      description: "Access to pre-verified properties that build instant trust with clients"
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Quick Tools",
      description: "FSI calculator, market comparisons, and instant property reports"
    }
  ];

  const benefits = [
    "Higher commission rates for verified agents",
    "Exclusive access to premium listings",
    "Marketing support and co-branded materials",
    "Training programs on Navi Mumbai regulations",
    "Direct leads from qualified buyers",
    "24/7 technical support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Agent Portal
              </Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Supercharge Your Land Sales Business
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Join ClearPlot's network of verified agents and access powerful tools, verified listings, and qualified leads in Navi Mumbai's booming land market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="hero-gradient text-white">
                  Apply as Agent
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">₹2.5L+</div>
                  <div className="text-muted-foreground mb-4">Average monthly earnings</div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-semibold">150+</div>
                      <div className="text-muted-foreground">Active Agents</div>
                    </div>
                    <div>
                      <div className="font-semibold">500+</div>
                      <div className="text-muted-foreground">Deals Closed</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Powerful Agent Tools</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage clients, close deals, and grow your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Why Top Agents Choose ClearPlot</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="p-8">
              <CardHeader className="p-0 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="h-10 w-10 text-primary" />
                  <div>
                    <CardTitle>Agent Certification Program</CardTitle>
                    <CardDescription>Become a verified ClearPlot agent</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Training Completion</span>
                    <span className="text-sm font-semibold">Required</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Background Verification</span>
                    <span className="text-sm font-semibold">Mandatory</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Performance Reviews</span>
                    <span className="text-sm font-semibold">Quarterly</span>
                  </div>
                  <Button className="w-full mt-6" variant="outline">
                    Start Certification
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-muted-foreground">Hear from our top-performing agents</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                role: "Senior Land Consultant",
                earnings: "₹4.2L/month",
                quote: "ClearPlot's verified listings helped me close 3x more deals with higher-value clients."
              },
              {
                name: "Rahul Patil",
                role: "Property Specialist",
                earnings: "₹3.1L/month", 
                quote: "The FSI calculator and market analysis tools make me look like an expert to every client."
              },
              {
                name: "Anjali Desai",
                role: "Land Investment Advisor",
                earnings: "₹5.5L/month",
                quote: "Best decision was joining ClearPlot. The quality of leads and tools is unmatched."
              }
            ].map((story, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold">{story.name.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-muted-foreground">{story.role}</div>
                    </div>
                  </div>
                  <blockquote className="text-sm text-muted-foreground mb-4 italic">
                    "{story.quote}"
                  </blockquote>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{story.earnings}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Join Our Network?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start earning more with verified listings, powerful tools, and qualified leads. Apply today and transform your land sales business.
          </p>
          <Button size="lg" className="hero-gradient text-white">
            Apply Now - Free
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ForAgents;