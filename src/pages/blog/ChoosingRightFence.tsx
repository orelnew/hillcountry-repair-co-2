import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ChoosingRightFence = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>

              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  Fencing Guide
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Choosing the Right Fence for Your Property
              </h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <Calendar className="h-4 w-4 mr-2" />
                <span>January 10, 2025</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  A comprehensive guide to selecting the perfect fence material and style for your Austin-area home, balancing privacy, durability, and aesthetics.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Why the Right Fence Matters</h2>
                <p className="text-foreground/80 mb-6">
                  Your fence is more than just a boundary marker—it's a significant investment that affects your property's security, privacy, curb appeal, and value. In the Texas climate, choosing the right materials and style is crucial for longevity and performance.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Popular Fence Types for Texas Properties</h2>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">Wood Fencing</h3>
                <p className="text-foreground/80 mb-2"><strong>Best For:</strong> Privacy, traditional aesthetics, customization</p>
                <p className="text-foreground/80 mb-2"><strong>Pros:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-2">
                  <li>Natural, warm appearance</li>
                  <li>Highly customizable (height, style, stain color)</li>
                  <li>Provides excellent privacy</li>
                  <li>Good sound barrier</li>
                </ul>
                <p className="text-foreground/80 mb-2"><strong>Cons:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
                  <li>Requires regular maintenance (staining/sealing)</li>
                  <li>Susceptible to rot and insect damage</li>
                  <li>Can warp in extreme heat</li>
                </ul>
                <p className="text-foreground/80 mb-6">
                  <strong>Cost:</strong> $$-$$$ | <strong>Lifespan:</strong> 15-20 years with proper maintenance
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">Chain Link Fencing</h3>
                <p className="text-foreground/80 mb-2"><strong>Best For:</strong> Security, pet containment, budget-conscious projects</p>
                <p className="text-foreground/80 mb-2"><strong>Pros:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-2">
                  <li>Most economical option</li>
                  <li>Very durable and low maintenance</li>
                  <li>Doesn't obstruct views</li>
                  <li>Withstands Texas weather well</li>
                </ul>
                <p className="text-foreground/80 mb-2"><strong>Cons:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
                  <li>Provides no privacy (unless adding slats)</li>
                  <li>Less aesthetic appeal</li>
                  <li>Can rust over time without coating</li>
                </ul>
                <p className="text-foreground/80 mb-6">
                  <strong>Cost:</strong> $ | <strong>Lifespan:</strong> 20-30 years
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">Vinyl Fencing</h3>
                <p className="text-foreground/80 mb-2"><strong>Best For:</strong> Low maintenance, modern aesthetics, pool areas</p>
                <p className="text-foreground/80 mb-2"><strong>Pros:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-2">
                  <li>Virtually maintenance-free</li>
                  <li>Won't rot, warp, or need painting</li>
                  <li>Many style options available</li>
                  <li>Resists moisture and insects</li>
                </ul>
                <p className="text-foreground/80 mb-2"><strong>Cons:</strong></p>
                <ul className="list-disc pl-6 space-y-1 text-foreground/80 mb-4">
                  <li>Higher upfront cost</li>
                  <li>Can crack in extreme cold</li>
                  <li>Limited color options</li>
                  <li>Difficult to repair if damaged</li>
                </ul>
                <p className="text-foreground/80 mb-6">
                  <strong>Cost:</strong> $$$-$$$$ | <strong>Lifespan:</strong> 20-30 years
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Key Factors to Consider</h2>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">1. Purpose</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li><strong>Privacy:</strong> Choose solid wood or vinyl panels</li>
                  <li><strong>Security:</strong> Consider height and strength (6-8 feet minimum)</li>
                  <li><strong>Pet containment:</strong> Ensure no gaps at bottom, appropriate height</li>
                  <li><strong>Curb appeal:</strong> Match architectural style of your home</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">2. HOA Requirements</h3>
                <p className="text-foreground/80 mb-6">
                  Many Austin-area neighborhoods have specific rules about fence height, materials, and colors. Always check your HOA guidelines before starting your project.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">3. Budget & Maintenance</h3>
                <p className="text-foreground/80 mb-6">
                  Consider both initial costs and long-term maintenance. A cheaper fence that requires annual upkeep may cost more over time than a higher-quality, low-maintenance option.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">4. Climate Considerations</h3>
                <p className="text-foreground/80 mb-6">
                  Texas weather is tough on fences. Choose materials that can withstand intense sun, occasional freezes, and high winds. Heat-resistant and UV-protected materials will last longer.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Professional Installation Matters</h2>
                <p className="text-foreground/80 mb-6">
                  Even the best materials won't perform well without proper installation. Professional fence installers ensure posts are set at the correct depth, panels are level, and gates operate smoothly. This attention to detail extends your fence's lifespan significantly.
                </p>

                <div className="bg-card border-2 border-primary/20 rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Need Help Choosing Your Fence?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our experienced team can assess your property, discuss your needs, and recommend the perfect fencing solution for your Austin-area home.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => window.location.href = 'tel:+12548005322'}>
                      <Phone className="mr-2 h-5 w-5" />
                      Get Free Consultation
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => window.location.href = 'mailto:hillcountryrepairco@gmail.com'}>
                      <Mail className="mr-2 h-5 w-5" />
                      Email Us
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ChoosingRightFence;
