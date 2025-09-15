import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, MapPin } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-card-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <MapPin className="h-8 w-8 text-primary" />
          <span className="font-heading text-2xl font-bold text-foreground">
            ClearPlot
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/listings" className="text-muted-foreground hover:text-foreground transition-smooth">
            Listings
          </Link>
          <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
            How It Works
          </Link>
          <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
            Services
          </Link>
          <Link to="/for-agents" className="text-muted-foreground hover:text-foreground transition-smooth">
            For Agents
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-smooth">
            Blog
          </Link>
        </nav>

        {/* Search Bar - Desktop */}
        <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-md mx-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by location, plot ID, or landmark..."
              className="pl-10 bg-muted/50 border-muted"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="hero-gradient text-white hover:opacity-90 transition-smooth">
            List Your Land
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card border-b border-card-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search locations..."
                className="pl-10 bg-muted/50"
              />
            </div>
            
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-3">
              <Link to="/listings" className="text-muted-foreground hover:text-foreground transition-smooth">
                Listings
              </Link>
              <Link to="/how-it-works" className="text-muted-foreground hover:text-foreground transition-smooth">
                How It Works
              </Link>
              <Link to="/services" className="text-muted-foreground hover:text-foreground transition-smooth">
                Services
              </Link>
              <Link to="/for-agents" className="text-muted-foreground hover:text-foreground transition-smooth">
                For Agents
              </Link>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-smooth">
                Blog
              </Link>
            </nav>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-card-border">
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="hero-gradient text-white">
                List Your Land
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;