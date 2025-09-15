import Header from "@/components/Header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, TrendingUp, FileText, Calculator } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: "Complete Guide to FSI Rules in Navi Mumbai 2024",
    excerpt: "Understanding Floor Space Index regulations, calculations, and how they impact your land investment decisions in CIDCO developed areas.",
    category: "Investment Guide",
    readTime: "8 min read",
    date: "March 15, 2024",
    image: "/api/placeholder/800/400",
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: "Stamp Duty Changes in Maharashtra: What Land Buyers Need to Know",
      excerpt: "Latest updates on stamp duty rates, exemptions, and how to calculate registration costs for your land purchase.",
      category: "Legal Updates",
      readTime: "6 min read",
      date: "March 12, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Top 5 Emerging Areas in Navi Mumbai for Land Investment",
      excerpt: "Discover high-potential locations like Dronagiri, Ulwe, and Panvel that offer excellent returns for land investors.",
      category: "Market Analysis",
      readTime: "10 min read", 
      date: "March 10, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 4,
      title: "How to Verify Land Documents: Complete Checklist",
      excerpt: "Step-by-step guide to checking title deeds, survey settlements, and encumbrance certificates before buying land.",
      category: "Buyer Guide",
      readTime: "12 min read",
      date: "March 8, 2024", 
      image: "/api/placeholder/400/250"
    },
    {
      id: 5,
      title: "Understanding CIDCO Land Allotment Process",
      excerpt: "Complete walkthrough of CIDCO's land allocation system, eligibility criteria, and application procedures.",
      category: "Government Process",
      readTime: "7 min read",
      date: "March 5, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: 6,
      title: "Land Investment vs. Real Estate: ROI Comparison in Navi Mumbai", 
      excerpt: "Detailed analysis of returns from raw land investment compared to developed properties in the region.",
      category: "Investment Analysis",
      readTime: "9 min read",
      date: "March 3, 2024",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = [
    { name: "Investment Guide", icon: <TrendingUp className="h-4 w-4" />, count: 12 },
    { name: "Legal Updates", icon: <FileText className="h-4 w-4" />, count: 8 },
    { name: "Market Analysis", icon: <Calculator className="h-4 w-4" />, count: 15 },
    { name: "Buyer Guide", icon: <ArrowRight className="h-4 w-4" />, count: 10 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Land Investment Insights
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert guides, market analysis, and regulatory updates to help you make informed land investment decisions in Navi Mumbai.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Post */}
            <Card className="mb-12 overflow-hidden hover:shadow-elegant transition-smooth">
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <Badge className="mb-3 bg-primary text-white border-0">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/90 mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-elegant transition-smooth cursor-pointer">
                  <div className="aspect-video bg-muted"></div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-primary transition-smooth">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-smooth cursor-pointer">
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span className="font-medium">{category.name}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Stay Updated</CardTitle>
                <CardDescription>
                  Get weekly insights on Navi Mumbai land market trends and investment opportunities.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-input rounded-md text-sm"
                />
                <Button className="w-full" size="sm">
                  Subscribe
                </Button>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Popular This Week</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {blogPosts.slice(0, 3).map((post, index) => (
                  <div key={post.id} className="flex gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-smooth">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-sm">{index + 1}</span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;