import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { MapPin, Filter, Grid, Map, Heart, Share2, MessageCircle, Verified } from "lucide-react";
import { useState } from "react";

const Listings = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const mockListings = [
    {
      id: 1,
      title: "2.3 Acres Farm Land - Taloja",
      area: "2.3 Acres",
      price: "₹45 Lakh",
      pricePerSqFt: "₹450/sq.ft",
      location: "Taloja, Navi Mumbai",
      zoning: "Residential",
      fsi: "1.0",
      verified: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 2,
      title: "1.5 Acres Commercial Plot - Ulwe",
      area: "1.5 Acres",
      price: "₹80 Lakh",
      pricePerSqFt: "₹820/sq.ft",
      location: "Ulwe, Navi Mumbai",
      zoning: "Commercial",
      fsi: "2.0",
      verified: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 3,
      title: "5 Acres Industrial Land - Panvel",
      area: "5.0 Acres",
      price: "₹2.5 Cr",
      pricePerSqFt: "₹1,150/sq.ft",
      location: "Panvel, Navi Mumbai",
      zoning: "Industrial",
      fsi: "1.5",
      verified: false,
      image: "/api/placeholder/300/200"
    },
    {
      id: 4,
      title: "3.2 Acres Residential Plot - Kharghar",
      area: "3.2 Acres",
      price: "₹1.8 Cr",
      pricePerSqFt: "₹1,025/sq.ft",
      location: "Kharghar, Navi Mumbai",
      zoning: "Residential",
      fsi: "1.2",
      verified: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 5,
      title: "0.8 Acres Plot Near Airport - Dronagiri",
      area: "0.8 Acres",
      price: "₹35 Lakh",
      pricePerSqFt: "₹1,000/sq.ft",
      location: "Dronagiri, Navi Mumbai",
      zoning: "Residential",
      fsi: "1.0",
      verified: true,
      image: "/api/placeholder/300/200"
    },
    {
      id: 6,
      title: "4.5 Acres Development Plot - Nerul",
      area: "4.5 Acres",
      price: "₹3.2 Cr",
      pricePerSqFt: "₹1,630/sq.ft",
      location: "Nerul, Navi Mumbai",
      zoning: "Mixed Use",
      fsi: "2.5",
      verified: false,
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Search & Filters Section */}
      <section className="py-8 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-heading font-bold mb-2">Land Listings in Navi Mumbai</h1>
            <p className="text-muted-foreground">Discover verified plots with detailed FSI calculations and legal documentation</p>
          </div>
          
          {/* Quick Search */}
          <div className="grid md:grid-cols-6 gap-4 mb-6">
            <div className="md:col-span-2">
              <Input 
                placeholder="Search location, landmark..."
                className="bg-background"
              />
            </div>
            <Select>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Zoning" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="residential">Residential</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="industrial">Industrial</SelectItem>
                <SelectItem value="mixed">Mixed Use</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="taloja">Taloja</SelectItem>
                <SelectItem value="ulwe">Ulwe</SelectItem>
                <SelectItem value="panvel">Panvel</SelectItem>
                <SelectItem value="kharghar">Kharghar</SelectItem>
                <SelectItem value="dronagiri">Dronagiri</SelectItem>
                <SelectItem value="nerul">Nerul</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
            <div className="flex gap-2">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'map' ? 'default' : 'outline'} 
                size="sm"
                onClick={() => setViewMode('map')}
              >
                <Map className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Advanced Filters */}
          <div className="grid md:grid-cols-3 gap-6 p-6 bg-background rounded-lg border border-border">
            <div>
              <label className="text-sm font-medium mb-2 block">Price Range</label>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={10000000}
                min={0}
                step={100000}
                className="mb-2"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>₹{Math.round(priceRange[0] / 100000)} L</span>
                <span>₹{Math.round(priceRange[1] / 100000)} L</span>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Area Range</label>
              <div className="grid grid-cols-2 gap-2">
                <Input placeholder="Min acres" />
                <Input placeholder="Max acres" />
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="verified" className="rounded" />
                <label htmlFor="verified" className="text-sm">Verified Only</label>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="fsi" className="rounded" />
                <label htmlFor="fsi" className="text-sm">High FSI (&gt;1.5)</label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-muted-foreground">Showing {mockListings.length} results</p>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="area">Area</SelectItem>
                <SelectItem value="fsi">FSI Rating</SelectItem>
                <SelectItem value="recent">Recently Added</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Listings Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer">
                <div className="relative">
                  <div className="aspect-video bg-muted"></div>
                  <div className="absolute top-3 left-3">
                    {listing.verified ? (
                      <Badge className="bg-primary text-white gap-1">
                        <Verified className="h-3 w-3" />
                        Verified
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="bg-background/90">
                        Pending
                      </Badge>
                    )}
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <Button size="sm" variant="outline" className="bg-background/90 h-8 w-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-background/90 h-8 w-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg line-clamp-1">{listing.title}</CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {listing.location}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Area:</span>
                      <div className="font-semibold">{listing.area}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Zoning:</span>
                      <div className="font-semibold">{listing.zoning}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">FSI:</span>
                      <div className="font-semibold">{listing.fsi}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Per Sq.Ft:</span>
                      <div className="font-semibold text-primary">{listing.pricePerSqFt}</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-2xl font-bold text-primary">{listing.price}</div>
                    </div>
                    <Button size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      Contact
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Properties
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Listings;