import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, FileCheck, Shield, Handshake, Calculator, Users, Award } from "lucide-react";

const HowItWorks = () => {
  const buyerSteps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Search & Browse",
      description: "Use our advanced filters to find plots by location, size, zoning, and budget",
      details: ["Interactive map view", "FSI calculator integration", "Satellite imagery", "Detailed specifications"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verify & Analyze",
      description: "Review verification status, documents, and get professional analysis",
      details: ["Document verification status", "Title clarity reports", "Market valuation", "FSI potential assessment"]
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Calculate & Compare",
      description: "Use built-in tools to analyze FSI potential and compare market rates",
      details: ["FSI calculator", "Development potential", "ROI projections", "Comparable sales data"]
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Negotiate & Close",
      description: "Connect with sellers, make offers, and complete transactions securely",
      details: ["Secure messaging", "Offer management", "Escrow payment option", "Legal support access"]
    }
  ];

  const sellerSteps = [
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "List Your Property",
      description: "Upload property details, photos, and documents through our simple interface",
      details: ["Easy upload process", "Document checklist", "Professional photography tips", "Pricing guidance"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Get Verified",
      description: "Choose verification level and submit documents for authentication",
      details: ["Basic document check", "Field verification option", "Title search service", "Legal clearance certificate"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Attract Buyers",
      description: "Your verified listing gets priority placement and builds buyer confidence",
      details: ["Featured placement", "Verification badges", "Enhanced visibility", "Qualified lead generation"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Close Deals",
      description: "Manage inquiries, negotiate offers, and complete transactions safely",
      details: ["Lead management dashboard", "Offer tracking", "Secure payment processing", "Transaction support"]
    }
  ];

  const verificationLevels = [
    {
      level: "Basic Check",
      price: "Free",
      duration: "24 hours",
      features: ["Document authenticity", "Basic title verification", "Survey number validation"],
      popular: false
    },
    {
      level: "Standard Verification", 
      price: "₹5,000",
      duration: "3-5 days",
      features: ["Complete document review", "Field inspection", "Encumbrance certificate", "Legal opinion"],
      popular: true
    },
    {
      level: "Premium Certification",
      price: "₹15,000", 
      duration: "7-10 days",
      features: ["Comprehensive due diligence", "Title insurance eligibility", "Development feasibility", "Market valuation report"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            How ClearPlot Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A transparent, secure, and intelligent platform that simplifies land transactions in Navi Mumbai through verification, tools, and expert support.
          </p>
        </div>
      </section>

      {/* For Buyers */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">For Buyers</Badge>
            <h2 className="text-3xl font-heading font-bold mb-4">Find Your Perfect Plot</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover, analyze, and purchase land with confidence using our comprehensive verification and analysis tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {buyerSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-elegant transition-smooth">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < buyerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-primary">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Sellers */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">For Sellers</Badge>
            <h2 className="text-3xl font-heading font-bold mb-4">Sell With Confidence</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your property verified, attract serious buyers, and close deals faster with our comprehensive seller tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sellerSteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full hover:shadow-elegant transition-smooth">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <CardDescription>{step.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow for desktop */}
                {index < sellerSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-accent">
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Levels */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">Verification Levels</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right verification level for your property to build buyer confidence and maximize your selling potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {verificationLevels.map((level, index) => (
              <Card key={index} className={`relative overflow-hidden ${level.popular ? 'ring-2 ring-primary shadow-elegant' : ''}`}>
                {level.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-xl">{level.level}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{level.price}</div>
                  <CardDescription>Completed in {level.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${level.popular ? 'hero-gradient text-white' : ''}`}
                    variant={level.popular ? 'default' : 'outline'}
                  >
                    Choose {level.level}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of buyers and sellers who trust ClearPlot for transparent and secure land transactions in Navi Mumbai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient text-white">
              List Your Property
            </Button>
            <Button size="lg" variant="outline">
              Browse Verified Plots
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;