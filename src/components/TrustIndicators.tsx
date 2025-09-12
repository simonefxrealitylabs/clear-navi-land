import { Shield, Calculator, FileCheck, Users, Lock, Award } from "lucide-react";

const TrustIndicators = () => {
  const indicators = [
    {
      icon: Shield,
      title: "Verified Listings",
      description: "Document verified plots only",
      color: "success"
    },
    {
      icon: Calculator,
      title: "FSI Calculator",
      description: "Built-in development potential",
      color: "primary"
    },
    {
      icon: FileCheck,
      title: "Legal Support",
      description: "Expert assistance available",
      color: "primary"
    },
    {
      icon: Lock,
      title: "Escrow Option",
      description: "Secure payment protection",
      color: "success"
    },
    {
      icon: Users,
      title: "Trusted Network",
      description: "Verified agents & developers",
      color: "primary"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Premium service standards",
      color: "success"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Built for Trust & Transparency
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every feature is designed to make land transactions safer, 
            smarter, and more transparent for all parties involved.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {indicators.map((indicator, index) => {
            const Icon = indicator.icon;
            const isSuccess = indicator.color === "success";
            
            return (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-bounce"
              >
                <div className={`
                  inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto
                  ${isSuccess ? 'verification-badge verification-glow' : 'trust-indicator'}
                  group-hover:scale-110 transition-bounce
                `}>
                  <Icon className={`w-8 h-8 ${isSuccess ? 'text-success' : 'text-primary'}`} />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-2">
                  {indicator.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {indicator.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Verified Plots</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-success mb-2">95%</div>
            <div className="text-muted-foreground">Verification Rate</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Expert Lawyers</div>
          </div>
          <div className="text-center">
            <div className="font-heading text-3xl font-bold text-success mb-2">₹100Cr+</div>
            <div className="text-muted-foreground">Transactions</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;