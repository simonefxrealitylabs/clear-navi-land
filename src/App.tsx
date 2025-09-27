import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Listings from "./pages/Listings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import HowItWorks from "./pages/HowItWorks";
import Services from "./pages/Services";
import ForAgents from "./pages/ForAgents";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import PlotDetails from "./pages/PlotDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/listings/:id" element={<PlotDetails />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/services" element={<Services />} />
              <Route path="/for-agents" element={<ForAgents />} />
              <Route path="/blog" element={<Blog />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
