import { Button } from "@/components/ui/button";
import PlotCard from "./PlotCard";
import { ArrowRight } from "lucide-react";

const FeaturedPlots = () => {
  // Mock data for featured plots
  const featuredPlots = [
    {
      id: "1",
      title: "Premium Residential Plot - Kharghar",
      location: "Sector 14, Kharghar, Navi Mumbai",
      area: "2.3 Acres",
      price: "₹4.2 Cr",
      zoning: "Residential",
      verified: true,
      fsiScore: 1.2,
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=300&fit=crop"
    },
    {
      id: "2", 
      title: "Commercial Hub Plot - Panvel",
      location: "New Panvel East, Navi Mumbai",
      area: "1.8 Acres",
      price: "₹6.8 Cr",
      zoning: "Commercial",
      verified: true,
      fsiScore: 2.0,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
    },
    {
      id: "3",
      title: "Industrial Development Land - Taloja",
      location: "MIDC Taloja, Navi Mumbai", 
      area: "5.2 Acres",
      price: "₹12.5 Cr",
      zoning: "Industrial",
      verified: true,
      fsiScore: 1.5,
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop"
    },
    {
      id: "4",
      title: "Waterfront Plot - Ulwe",
      location: "Sector 19, Ulwe, Navi Mumbai",
      area: "3.1 Acres", 
      price: "₹8.9 Cr",
      zoning: "Mixed Use",
      verified: false,
      fsiScore: 1.8,
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="font-heading text-4xl font-bold mb-4">
              Featured Land Plots
            </h2>
            <p className="text-muted-foreground text-lg">
              Premium verified plots in prime Navi Mumbai locations
            </p>
          </div>
          
          <Button variant="outline" className="hidden md:flex items-center space-x-2">
            View All Plots
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlots.map((plot) => (
            <PlotCard key={plot.id} plot={plot} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button className="w-full sm:w-auto">
            View All Plots
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Quick Filters */}
        <div className="mt-12 bg-card rounded-xl p-6 card-shadow">
          <h3 className="font-heading text-lg font-semibold mb-4">
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Residential Plots Kharghar",
              "Commercial Land Panvel", 
              "Industrial Plots Taloja",
              "Agricultural Land Karjat",
              "Plots under ₹5 Cr",
              "FSI 2.0+ Properties"
            ].map((search, index) => (
              <Button 
                key={index}
                variant="outline" 
                size="sm"
                className="text-sm hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlots;