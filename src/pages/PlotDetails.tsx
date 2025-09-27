import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, FileText, ShieldCheck, IndianRupee, Calculator, ArrowLeft } from "lucide-react";

type DocumentInfo = {
  name: string;
  uploaded: boolean;
  verified: boolean;
};

type PlotDetails = {
  id: number;
  title: string;
  area: string; // display string, e.g. "2.3 Acres"
  areaSqft: number; // numeric for calculations
  price: number; // asking price in INR
  priceDisplay: string; // formatted display
  location: string;
  zoning: string;
  fsi: number;
  verified: boolean;
  documents: DocumentInfo[];
  image: string;
};

const MOCK_DATA: Record<string, PlotDetails> = {
  "1": {
    id: 1,
    title: "2.3 Acres Farm Land - Taloja",
    area: "2.3 Acres",
    areaSqft: Math.round(2.3 * 43560),
    price: 4500000,
    priceDisplay: "₹45 Lakh",
    location: "Taloja, Navi Mumbai",
    zoning: "Residential",
    fsi: 1.0,
    verified: true,
    documents: [
      { name: "Title Deed", uploaded: true, verified: true },
      { name: "7/12 Extract", uploaded: true, verified: true },
      { name: "Survey Map", uploaded: false, verified: false }
    ],
    image: "/api/placeholder/1200/600"
  },
  "2": {
    id: 2,
    title: "1.5 Acres Commercial Plot - Ulwe",
    area: "1.5 Acres",
    areaSqft: Math.round(1.5 * 43560),
    price: 8000000,
    priceDisplay: "₹80 Lakh",
    location: "Ulwe, Navi Mumbai",
    zoning: "Commercial",
    fsi: 2.0,
    verified: true,
    documents: [
      { name: "Title Deed", uploaded: true, verified: true },
      { name: "7/12 Extract", uploaded: true, verified: false },
      { name: "Survey Map", uploaded: true, verified: true }
    ],
    image: "/api/placeholder/1200/600"
  },
  "3": {
    id: 3,
    title: "5 Acres Industrial Land - Panvel",
    area: "5.0 Acres",
    areaSqft: Math.round(5.0 * 43560),
    price: 25000000,
    priceDisplay: "₹2.5 Cr",
    location: "Panvel, Navi Mumbai",
    zoning: "Industrial",
    fsi: 1.5,
    verified: false,
    documents: [
      { name: "Title Deed", uploaded: true, verified: false },
      { name: "7/12 Extract", uploaded: false, verified: false },
      { name: "Survey Map", uploaded: false, verified: false }
    ],
    image: "/api/placeholder/1200/600"
  },
  "4": {
    id: 4,
    title: "3.2 Acres Residential Plot - Kharghar",
    area: "3.2 Acres",
    areaSqft: Math.round(3.2 * 43560),
    price: 18000000,
    priceDisplay: "₹1.8 Cr",
    location: "Kharghar, Navi Mumbai",
    zoning: "Residential",
    fsi: 1.2,
    verified: true,
    documents: [
      { name: "Title Deed", uploaded: true, verified: true },
      { name: "7/12 Extract", uploaded: true, verified: true },
      { name: "Survey Map", uploaded: true, verified: true }
    ],
    image: "/api/placeholder/1200/600"
  },
  "5": {
    id: 5,
    title: "0.8 Acres Plot Near Airport - Dronagiri",
    area: "0.8 Acres",
    areaSqft: Math.round(0.8 * 43560),
    price: 3500000,
    priceDisplay: "₹35 Lakh",
    location: "Dronagiri, Navi Mumbai",
    zoning: "Residential",
    fsi: 1.0,
    verified: true,
    documents: [
      { name: "Title Deed", uploaded: true, verified: true },
      { name: "7/12 Extract", uploaded: true, verified: true },
      { name: "Survey Map", uploaded: false, verified: false }
    ],
    image: "/api/placeholder/1200/600"
  },
  "6": {
    id: 6,
    title: "4.5 Acres Development Plot - Nerul",
    area: "4.5 Acres",
    areaSqft: Math.round(4.5 * 43560),
    price: 32000000,
    priceDisplay: "₹3.2 Cr",
    location: "Nerul, Navi Mumbai",
    zoning: "Mixed Use",
    fsi: 2.5,
    verified: false,
    documents: [
      { name: "Title Deed", uploaded: true, verified: false },
      { name: "7/12 Extract", uploaded: true, verified: false },
      { name: "Survey Map", uploaded: true, verified: false }
    ],
    image: "/api/placeholder/1200/600"
  }
};

const currencyFormat = (value: number) => {
  if (value >= 10000000) {
    return `₹${(value / 10000000).toFixed(2)} Cr`;
  }
  if (value >= 100000) {
    return `₹${Math.round(value / 100000)} Lakh`;
  }
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);
};

const PlotDetailsPage = () => {
  const { id } = useParams();
  const plot = id ? MOCK_DATA[id] : undefined;

  const verificationProgress = useMemo(() => {
    if (!plot) return 0;
    const totalChecks = plot.documents.length + 1; // +1 for site verification
    const completed = plot.documents.filter(d => d.verified).length + (plot.verified ? 1 : 0);
    return Math.round((completed / totalChecks) * 100);
  }, [plot]);

  const valuation = useMemo(() => {
    if (!plot) return { estimated: 0, delta: 0, isGoodDeal: false };
    const assumedMarketRatePerSqft = Math.max(600, Math.round(plot.price / Math.max(plot.areaSqft, 1))); // naive baseline
    const estimated = assumedMarketRatePerSqft * plot.areaSqft;
    const delta = estimated - plot.price;
    return { estimated, delta, isGoodDeal: delta >= 0 };
  }, [plot]);

  if (!plot) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <Card>
            <CardHeader>
              <CardTitle>Plot not found</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to="/listings" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Listings
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Hero Image and Title */}
        <div className="rounded-lg overflow-hidden border border-border mb-6">
          <div className="aspect-[16/6] bg-muted">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={plot.image} alt={plot.title} className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">{plot.title}</h1>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-2" /> {plot.location}
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{plot.priceDisplay}</div>
            <div className="text-sm text-muted-foreground">FSI {plot.fsi} • {plot.zoning}</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Area</div>
                    <div className="font-semibold">{plot.area} ({plot.areaSqft.toLocaleString()} sq.ft)</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Zoning</div>
                    <div className="font-semibold">{plot.zoning}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">FSI</div>
                    <div className="font-semibold">{plot.fsi}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Verification</div>
                    <div className="flex items-center gap-2">
                      {plot.verified ? <Badge className="bg-primary text-white">Verified</Badge> : <Badge variant="outline">Pending</Badge>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Documents */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" /> Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {plot.documents.map((doc) => (
                    <div key={doc.name} className="flex items-center justify-between py-2">
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{doc.name}</span>
                        {doc.uploaded ? (
                          <Badge variant="outline">Uploaded</Badge>
                        ) : (
                          <Badge variant="outline">Missing</Badge>
                        )}
                        {doc.verified && <Badge className="bg-primary text-white">Verified</Badge>}
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">View</Button>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Verification, Valuation, Contact */}
          <div className="space-y-6">
            {/* Verification Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary" /> Verification Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground mb-2">{verificationProgress}% complete</div>
                <Progress value={verificationProgress} />
                <div className="mt-2 text-xs text-muted-foreground">Includes title, 7/12, survey, and site verification.</div>
              </CardContent>
            </Card>

            {/* Valuation Tool */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-primary" /> Valuation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Estimated Market Value</div>
                    <div className="font-semibold">{currencyFormat(valuation.estimated)}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Asking Price</div>
                    <div className="font-semibold">{plot.priceDisplay}</div>
                  </div>
                </div>
                <Separator className="my-3" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-4 h-4" />
                    <span className="text-sm">Delta</span>
                  </div>
                  <div className={`font-semibold ${valuation.isGoodDeal ? "text-green-600" : "text-red-600"}`}>
                    {valuation.isGoodDeal ? "+" : "-"}{currencyFormat(Math.abs(valuation.delta))}
                  </div>
                </div>
                <div className="mt-2 text-xs text-muted-foreground">
                  This is a rough estimate based on area and indicative rates.
                </div>
              </CardContent>
            </Card>

            {/* Contact/Offer */}
            <Card>
              <CardHeader>
                <CardTitle>Next Steps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button className="w-full">Message Seller</Button>
                <Button variant="outline" className="w-full">Make an Offer</Button>
                <Button variant="outline" className="w-full">Request Legal Help</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PlotDetailsPage;





