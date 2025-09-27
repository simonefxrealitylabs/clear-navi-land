import { Button } from "@/components/ui/button";
import { Search, Menu, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchWithSuggestions } from "@/components/SearchWithSuggestions";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  const handleSearch = (searchValue?: string) => {
    const queryToUse = searchValue !== undefined ? searchValue : searchQuery;
    if (queryToUse.trim()) {
      navigate(`/listings?q=${encodeURIComponent(queryToUse.trim())}`);
    } else {
      navigate('/listings');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
          <SearchWithSuggestions
            value={searchQuery}
            onChange={setSearchQuery}
            onSearch={handleSearch}
            placeholder="Search by location, plot ID, or landmark..."
            className="bg-muted/50 border-muted"
          />
        </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  {user.user_metadata?.role === 'admin' && (
                    <Link to="/admin">
                      <Button variant="outline" size="sm">
                        Admin
                      </Button>
                    </Link>
                  )}
                  <Button variant="outline" size="sm" onClick={() => signOut()}>
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline" size="sm">
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button size="sm">
                      Sign Up
                    </Button>
                  </Link>
                </>
              )}
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
            <SearchWithSuggestions
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search locations..."
              className="bg-muted/50"
            />
            
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
                  {user ? (
                    <>
                      {user.user_metadata?.role === 'admin' && (
                        <Link to="/admin">
                          <Button variant="outline" size="sm" className="w-full">
                            Admin
                          </Button>
                        </Link>
                      )}
                      <Button variant="outline" size="sm" className="w-full" onClick={() => signOut()}>
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <Button variant="outline" size="sm" className="w-full">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/signup">
                        <Button size="sm" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
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