import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const KitchenRemodelingBudget = () => {
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
                  Remodeling
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Kitchen Remodeling on a Budget
              </h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <Calendar className="h-4 w-4 mr-2" />
                <span>January 5, 2025</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  Learn how to achieve a stunning kitchen transformation without breaking the bank. Professional tips and tricks from our experienced team.
                </p>

                <p className="text-foreground/80 mb-6">
                  A kitchen remodel can feel overwhelming, especially when considering costs. But here's the good news: you don't need to spend $50,000+ to create a beautiful, functional kitchen you'll love. With smart planning and strategic choices, you can achieve impressive results on a moderate budget.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Set Your Priorities</h2>
                <p className="text-foreground/80 mb-4">
                  Before making any purchases, identify what matters most to you. Ask yourself:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>What frustrates you most about your current kitchen?</li>
                  <li>How do you use your kitchen daily?</li>
                  <li>What would make the biggest impact on functionality?</li>
                  <li>What aesthetic changes would you enjoy most?</li>
                </ul>
                <p className="text-foreground/80 mb-6">
                  Focus your budget on these priority areas for maximum satisfaction and value.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">High-Impact, Budget-Friendly Updates</h2>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">1. Paint Cabinets Instead of Replacing</h3>
                <p className="text-foreground/80 mb-2"><strong>Cost Savings:</strong> 70-80% compared to new cabinets</p>
                <p className="text-foreground/80 mb-6">
                  If your cabinets are structurally sound, professional painting or refinishing can completely transform their appearance. Choose a fresh white, warm gray, or even a bold navy for a modern look. Update hardware for an extra punch—new handles and pulls are surprisingly affordable and make a huge difference.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">2. Strategic Countertop Choices</h3>
                <p className="text-foreground/80 mb-2"><strong>Budget Option:</strong> Laminate or butcher block ($20-50/sq ft)</p>
                <p className="text-foreground/80 mb-2"><strong>Mid-Range Option:</strong> Quartz or granite remnants ($40-70/sq ft)</p>
                <p className="text-foreground/80 mb-6">
                  You don't need the most expensive countertops for a quality look. Today's laminates are remarkably durable and stylish. Alternatively, ask countertop shops about remnant pieces—leftover materials from larger jobs that are perfect for smaller kitchens at significant discounts.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">3. Focus on Lighting</h3>
                <p className="text-foreground/80 mb-2"><strong>Cost:</strong> $300-1,500 for significant upgrades</p>
                <p className="text-foreground/80 mb-6">
                  Lighting is one of the most underrated, budget-friendly upgrades. Under-cabinet LED strips improve functionality dramatically. A new statement pendant or chandelier over your island or table adds personality. Better lighting makes everything look newer and more expensive.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">4. Backsplash Magic</h3>
                <p className="text-foreground/80 mb-2"><strong>Cost:</strong> $400-1,200 for DIY or budget-friendly installation</p>
                <p className="text-foreground/80 mb-6">
                  A beautiful backsplash draws the eye and adds character. Subway tile remains affordable and timeless. Peel-and-stick options have improved dramatically if you're handy. Focus backsplash behind the stove and sink if covering all walls exceeds your budget.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Where to Splurge vs. Save</h2>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">Spend More On:</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li><strong>Quality sink and faucet:</strong> Used daily, worth the investment</li>
                  <li><strong>Professional installation:</strong> Especially for plumbing, electrical, and gas lines</li>
                  <li><strong>Durable flooring:</strong> High-traffic area needs to last</li>
                </ul>

                <h3 className="text-2xl font-bold text-foreground mt-6 mb-3">Save Money On:</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li><strong>Appliances:</strong> Last year's models work just as well</li>
                  <li><strong>Decorative items:</strong> Swap these out over time</li>
                  <li><strong>Some DIY work:</strong> Painting, hardware installation, simple demo</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Smart Shopping Strategies</h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Shop Black Friday, Memorial Day, and Labor Day sales for appliances</li>
                  <li>Check out builder supply stores for discounted materials</li>
                  <li>Ask for contractor discounts if working with professionals</li>
                  <li>Buy floor models or scratch-and-dent appliances (often minimally damaged)</li>
                  <li>Use store credit cards for additional discounts (pay off immediately!)</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Timeline Considerations</h2>
                <p className="text-foreground/80 mb-6">
                  Phasing your remodel over 6-12 months allows you to spread costs while watching for sales. Start with the most impactful changes (cabinets, countertops) and add elements like new lighting or backsplash later.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Sample Budget Breakdown</h2>
                <p className="text-foreground/80 mb-2">Here's how you might allocate a $10,000-15,000 budget:</p>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Cabinet painting/refinishing: $2,500-3,500</li>
                  <li>Countertops (quartz remnants): $2,000-3,000</li>
                  <li>Backsplash: $800-1,200</li>
                  <li>New sink and faucet: $400-800</li>
                  <li>Lighting upgrades: $500-1,000</li>
                  <li>Hardware (handles, pulls): $200-400</li>
                  <li>Paint and miscellaneous: $300-500</li>
                  <li>Professional labor: $3,000-5,000</li>
                  <li>Contingency (10%): $1,000-1,500</li>
                </ul>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">The Bottom Line</h2>
                <p className="text-foreground/80 mb-6">
                  A budget-friendly kitchen remodel requires careful planning, smart shopping, and strategic choices. Focus on changes that impact your daily life and visual appeal most. With the right approach, you can create a kitchen that feels custom and high-end without the luxury price tag.
                </p>

                <div className="bg-card border-2 border-primary/20 rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Kitchen Transformation?</h3>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss your vision and budget. We'll help you make smart choices that maximize your investment and create the kitchen you've been dreaming of.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => window.location.href = 'tel:+12548005322'}>
                      <Phone className="mr-2 h-5 w-5" />
                      Schedule Consultation
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

export default KitchenRemodelingBudget;
