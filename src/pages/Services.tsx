import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, Calculator, Wallet, Users, Gavel } from "lucide-react";

const Services = () => {
  const buyerServices = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Verified Listings",
      description: "All plots undergo document verification and field checks before listing",
      features: ["Document authentication", "Field verification", "Title clarity check"]
    },
    {
      icon: <Gavel className="h-8 w-8 text-primary" />,
      title: "Legal Support",
      description: "Expert legal assistance throughout your land purchase journey",
      features: ["Due diligence reports", "Contract review", "Registration support"]
    },
    {
      icon: <Wallet className="h-8 w-8 text-primary" />,
      title: "Escrow Payment",
      description: "Secure payment system that protects both buyers and sellers",
      features: ["Payment protection", "Milestone-based releases", "Dispute resolution"]
    }
  ];

  const sellerServices = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Document Verification",
      description: "Professional verification service to increase buyer confidence",
      features: ["Title deed verification", "Encumbrance certificate", "Survey settlement"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Premium Listings",
      description: "Enhanced visibility for your property with priority placement",
      features: ["Featured placement", "Multiple photos", "Detailed descriptions"]
    },
    {
      icon: <Calculator className="h-8 w-8 text-primary" />,
      title: "Market Analysis",
      description: "Data-driven pricing recommendations based on comparable sales",
      features: ["Price benchmarking", "Market trends", "FSI valuation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Comprehensive Land Transaction Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From verification to closing, we provide end-to-end services that make land transactions transparent, secure, and efficient.
          </p>
        </div>
      </section>

      {/* For Buyers Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">For Land Buyers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete support services to help you find, verify, and purchase land with confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {buyerServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Sellers Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold mb-4">For Land Sellers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional services to maximize your property's value and attract serious buyers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {sellerServices.map((service, index) => (
              <Card key={index} className="hover:shadow-elegant transition-smooth">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-card">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're buying or selling, our comprehensive services ensure a smooth and secure transaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="hero-gradient text-white">
              List Your Land
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

export default Services;