import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import FeaturedPlots from "@/components/FeaturedPlots";
import ServiceOverview from "@/components/ServiceOverview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustIndicators />
        <FeaturedPlots />
        <ServiceOverview />
      </main>
      
      {/* Footer */}
      <footer className="bg-card border-t border-card-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold">ClearPlot</h3>
              <p className="text-sm text-muted-foreground">
                Transparent, verified & smart land deals in Navi Mumbai. 
                Your trusted digital marketplace for land transactions.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">For Buyers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Browse Plots</li>
                <li>FSI Calculator</li>
                <li>Legal Support</li>
                <li>Verification Status</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">For Sellers</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>List Your Land</li>
                <li>Get Verified</li>
                <li>Premium Listings</li>
                <li>Market Analysis</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-heading font-semibold">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Legal Resources</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-card-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ClearPlot. All rights reserved. Building trust in land transactions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
