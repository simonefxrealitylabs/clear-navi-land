import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Home, Building2, ArrowRight, Scale, Calculator, DollarSign, Clipboard } from "lucide-react";

const ServiceOverview = () => {
  const services = [
    {
      icon: Users,
      title: "For Buyers",
      description: "Discover verified land plots with complete documentation and FSI analysis.",
      features: [
        "Verified listings only",
        "FSI calculation tools", 
        "Legal support available",
        "Escrow payment protection"
      ],
      cta: "Browse Plots",
      color: "primary"
    },
    {
      icon: Home,
      title: "For Sellers",
      description: "List your land with verification services and reach qualified buyers.",
      features: [
        "Document verification",
        "Professional photography",
        "Premium listing options",
        "Direct buyer connections"
      ],
      cta: "List Your Land",
      color: "success"
    },
    {
      icon: Building2,
      title: "For Developers",
      description: "Access FSI optimization tools and regulatory support for your projects.",
      features: [
        "FSI optimization analysis",
        "Due diligence reports",
        "Regulatory guidance",
        "Bulk plot sourcing"
      ],
      cta: "Developer Services",
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Comprehensive Services for Every Need
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Whether you're buying your first plot, selling inherited land, 
            or developing a large project, we have the tools and expertise 
            to make your transaction smooth and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isSuccess = service.color === "success";
            
            return (
              <Card 
                key={index}
                className="relative group hover:scale-105 transition-bounce card-shadow hover:shadow-xl"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`
                    inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
                    ${isSuccess ? 'verification-badge' : 'trust-indicator'}
                    group-hover:scale-110 transition-bounce
                  `}>
                    <Icon className={`w-8 h-8 ${isSuccess ? 'text-success' : 'text-primary'}`} />
                  </div>
                  <CardTitle className="font-heading text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${isSuccess ? 'bg-success' : 'bg-primary'}`} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`
                      w-full group/btn transition-smooth
                      ${isSuccess ? 'hero-gradient text-white hover:opacity-90' : 'hover:bg-primary/90'}
                    `}
                  >
                    {service.cta}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-smooth" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Services Bar */}
        <div className="mt-16 bg-muted/50 rounded-xl p-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group hover:bg-background/50 rounded-lg p-4 transition-smooth">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Legal Services</h4>
              <p className="text-sm text-muted-foreground">Title verification, due diligence, documentation</p>
            </div>
            <div className="group hover:bg-background/50 rounded-lg p-4 transition-smooth">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Valuation Tools</h4>
              <p className="text-sm text-muted-foreground">Market analysis, FSI calculations, ROI projections</p>
            </div>
            <div className="group hover:bg-background/50 rounded-lg p-4 transition-smooth">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Financing Support</h4>
              <p className="text-sm text-muted-foreground">Loan assistance, EMI calculators, bank partnerships</p>
            </div>
            <div className="group hover:bg-background/50 rounded-lg p-4 transition-smooth">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-smooth">
                <Clipboard className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-heading font-semibold mb-2">Project Management</h4>
              <p className="text-sm text-muted-foreground">Construction guidance, approval assistance, compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;