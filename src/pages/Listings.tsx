import Header from "@/components/Header";

const Listings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Land Listings in Navi Mumbai</h1>
        <p className="text-muted-foreground mb-6">Discover verified plots with detailed FSI calculations and legal documentation</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">2.3 Acres Farm Land - Taloja</h3>
            <p className="text-muted-foreground mb-2">Taloja, Navi Mumbai</p>
            <p className="text-2xl font-bold text-primary mb-2">₹2.5 Cr</p>
            <p className="text-sm">Prime agricultural land with good connectivity to Mumbai-Pune highway.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Commercial Plot - Ulwe</h3>
            <p className="text-muted-foreground mb-2">Ulwe, Navi Mumbai</p>
            <p className="text-2xl font-bold text-primary mb-2">₹4.2 Cr</p>
            <p className="text-sm">High-value commercial plot near upcoming airport.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">Residential Land - Panvel</h3>
            <p className="text-muted-foreground mb-2">Panvel, Navi Mumbai</p>
            <p className="text-2xl font-bold text-primary mb-2">₹1.8 Cr</p>
            <p className="text-sm">Residential plot in developing area with good growth potential.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;