import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import Painting from "./pages/services/Painting";
import Fencing from "./pages/services/Fencing";
import Remodeling from "./pages/services/Remodeling";
import Construction from "./pages/services/Construction";

// Blog Pages
import PaintColors2025 from "./pages/blog/PaintColors2025";
import ChoosingRightFence from "./pages/blog/ChoosingRightFence";
import KitchenRemodelingBudget from "./pages/blog/KitchenRemodelingBudget";

// Other Pages
import ContactPage from "./pages/ContactPage";
import OurApproach from "./pages/OurApproach";
import LeadFunnel from "./pages/LeadFunnel";
import RoofingLeadFunnel from "./pages/RoofingLeadFunnel";
import BookMeeting from "./pages/BookMeeting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Service Routes */}
          <Route path="/services/painting" element={<Painting />} />
          <Route path="/services/fencing" element={<Fencing />} />
          <Route path="/services/remodeling" element={<Remodeling />} />
          <Route path="/services/construction" element={<Construction />} />

          {/* Blog Routes */}
          <Route path="/blog/paint-colors-2025" element={<PaintColors2025 />} />
          <Route path="/blog/choosing-right-fence" element={<ChoosingRightFence />} />
          <Route path="/blog/kitchen-remodeling-budget" element={<KitchenRemodelingBudget />} />

          {/* Other Pages */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/get-started" element={<LeadFunnel />} />
          <Route path="/roofing-estimate" element={<RoofingLeadFunnel />} />
          <Route path="/book-meeting" element={<BookMeeting />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
