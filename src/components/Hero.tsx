import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Shield, Calculator } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/navi-mumbai-hero.jpg";
import { SearchWithSuggestions } from "@/components/SearchWithSuggestions";

const Hero = () => {
  const [searchForm, setSearchForm] = useState({
    location: '',
    area: '',
    budget: ''
  });
  const navigate = useNavigate();

  const handleSearch = (searchValue?: string) => {
    const params = new URLSearchParams();
    const locationToUse = searchValue !== undefined ? searchValue : searchForm.location;
    if (locationToUse.trim()) params.set('location', locationToUse.trim());
    if (searchForm.area.trim()) params.set('area', searchForm.area.trim());
    if (searchForm.budget.trim()) params.set('budget', searchForm.budget.trim());

    navigate(`/listings?${params.toString()}`);
  };

  const handleInputChange = (field: string, value: string) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                Transparent, Verified & Smart{" "}
                <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  Land Deals
                </span>{" "}
                in Navi Mumbai
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Your trusted digital marketplace for land transactions. 
                Discover verified plots with FSI calculations, legal support, 
                and transparent pricing.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="trust-shadow hover:scale-105 transition-bounce" onClick={handleSearch}>
                <Search className="w-5 h-5 mr-2" />
                Search Plots
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="hero-gradient text-white border-0 hover:opacity-90 transition-smooth"
              >
                <MapPin className="w-5 h-5 mr-2" />
                List Your Land
              </Button>
            </div>

            {/* Quick Search Bar */}
            <div className="bg-card/90 backdrop-blur-sm rounded-lg p-6 card-shadow">
              <h3 className="font-heading text-lg font-semibold mb-4">Quick Search</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <SearchWithSuggestions
                  value={searchForm.location}
                  onChange={(value) => handleInputChange('location', value)}
                  onSearch={handleSearch}
                  placeholder="Location"
                  className="bg-background"
                />
                <Input 
                  placeholder="Area (sq.m)" 
                  className="bg-background" 
                  value={searchForm.area}
                  onChange={(e) => handleInputChange('area', e.target.value)}
                />
                <Input 
                  placeholder="Budget" 
                  className="bg-background" 
                  value={searchForm.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                />
                <Button className="w-full" onClick={handleSearch}>
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Trust Indicators */}
          <div className="space-y-6">
            <div className="bg-card/95 backdrop-blur-sm rounded-xl p-8 card-shadow">
              <h3 className="font-heading text-2xl font-semibold mb-6 text-center">
                Why Choose ClearPlot?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="verification-badge rounded-full p-3 verification-glow">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">Verified Listings</h4>
                    <p className="text-muted-foreground">
                      Every plot undergoes document verification and field visits
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="trust-indicator rounded-full p-3">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">FSI Calculator Built-in</h4>
                    <p className="text-muted-foreground">
                      Instant FSI calculations and development potential analysis
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="trust-indicator rounded-full p-3">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg">Legal Support Available</h4>
                    <p className="text-muted-foreground">
                      Connect with verified lawyers for due diligence and documentation
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-card-border text-center">
                <p className="text-sm font-medium text-success">
                  ✓ Escrow Payment Option Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;