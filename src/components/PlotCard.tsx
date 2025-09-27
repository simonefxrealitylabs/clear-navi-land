import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Ruler, Shield, Calculator, Heart, MessageCircle } from "lucide-react";

interface PlotCardProps {
  plot: {
    id: string;
    title: string;
    location: string;
    area: string;
    price: string;
    zoning: string;
    verified: boolean;
    fsiScore: number;
    image: string;
  };
}

const PlotCard = ({ plot }: PlotCardProps) => {
  return (
    <Card className="group hover:scale-[1.02] transition-bounce card-shadow hover:shadow-xl overflow-hidden cursor-pointer" onClick={() => window.open(`/listings/${plot.id}`, '_blank')}>
      {/* Image */}
      <div className="relative h-48 bg-muted">
        <img 
          src={plot.image} 
          alt={plot.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Verification Badge */}
        {plot.verified && (
          <Badge className="absolute top-3 left-3 verification-badge verification-glow">
            <Shield className="w-3 h-3 mr-1" />
            Verified
          </Badge>
        )}
        
        {/* FSI Score */}
        <div className="absolute top-3 right-3 trust-indicator px-2 py-1 rounded-md">
          <div className="flex items-center space-x-1">
            <Calculator className="w-3 h-3 text-primary" />
            <span className="text-xs font-medium">FSI {plot.fsiScore}</span>
          </div>
        </div>
        
        {/* Save Button */}
        <Button
          size="sm"
          variant="outline"
          className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm hover:bg-card"
        >
          <Heart className="w-4 h-4" />
        </Button>
      </div>
      
      <CardHeader className="pb-4">
        <div className="space-y-2">
          <h3 className="font-heading text-lg font-semibold line-clamp-1">
            {plot.title}
          </h3>
          
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            {plot.location}
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Key Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Ruler className="w-4 h-4 text-muted-foreground" />
            <span>{plot.area}</span>
          </div>
          <div>
            <Badge variant="outline" className="text-xs">
              {plot.zoning}
            </Badge>
          </div>
        </div>
        
        {/* Price */}
        <div className="border-t border-card-border pt-4">
          <div className="font-heading text-xl font-bold text-primary mb-3">
            {plot.price}
          </div>
          
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button size="sm" className="flex-1" onClick={(e) => { e.stopPropagation(); window.open(`/listings/${plot.id}`, '_blank'); }}>
              View Details
            </Button>
            <Button size="sm" variant="outline">
              <MessageCircle className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlotCard;