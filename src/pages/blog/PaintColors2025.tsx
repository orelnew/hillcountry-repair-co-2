import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PaintColors2025 = () => {
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
                  Painting Tips
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Top 5 Paint Colors for Texas Homes in 2025
              </h1>

              <div className="flex items-center text-muted-foreground mb-8">
                <Calendar className="h-4 w-4 mr-2" />
                <span>January 15, 2025</span>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-muted-foreground mb-8">
                  Discover the trending paint colors that perfectly complement the Texas Hill Country aesthetic while keeping your home cool and stylish.
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">1. Desert Sand</h2>
                <p className="text-foreground/80 mb-4">
                  This warm, neutral beige continues to dominate Texas homes in 2025. Desert Sand reflects heat beautifully, helping keep your home cooler during those scorching summer months. It pairs exceptionally well with natural stone accents and wooden features common in Hill Country architecture.
                </p>
                <p className="text-foreground/80 mb-6">
                  <strong>Best for:</strong> Exterior walls, living rooms, and open-concept spaces
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">2. Sage Green</h2>
                <p className="text-foreground/80 mb-4">
                  Inspired by the Texas landscape, sage green brings a calming, organic feel to any space. This versatile color works beautifully in both modern and traditional homes, creating a connection between indoor and outdoor living spaces.
                </p>
                <p className="text-foreground/80 mb-6">
                  <strong>Best for:</strong> Accent walls, bedrooms, and bathrooms
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">3. Terracotta Sunset</h2>
                <p className="text-foreground/80 mb-4">
                  Bold yet warm, terracotta-inspired hues are making a major comeback. These rich orange-red tones capture the essence of Texas sunsets and complement the earthy tones of Hill Country homes. Use sparingly for maximum impact.
                </p>
                <p className="text-foreground/80 mb-6">
                  <strong>Best for:</strong> Accent walls, front doors, and outdoor living spaces
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">4. Soft Limestone</h2>
                <p className="text-foreground/80 mb-4">
                  Paying homage to the native Texas limestone, this soft gray with warm undertones provides a sophisticated, timeless look. It's perfect for creating a bright, airy feel while maintaining that distinctly Texan character.
                </p>
                <p className="text-foreground/80 mb-6">
                  <strong>Best for:</strong> Whole home exterior, kitchens, and bathrooms
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">5. Deep Creek Blue</h2>
                <p className="text-foreground/80 mb-4">
                  This rich, navy-inspired blue adds depth and sophistication to any space. It works particularly well in bedrooms and home offices, creating a focused, tranquil environment. Pair with warm wood tones and brass fixtures for a modern Texas look.
                </p>
                <p className="text-foreground/80 mb-6">
                  <strong>Best for:</strong> Bedrooms, home offices, and front doors
                </p>

                <h2 className="text-3xl font-bold text-foreground mt-8 mb-4">Expert Tips for Choosing Your Color</h2>
                <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-6">
                  <li>Always test colors in your actual space with sample patches</li>
                  <li>Consider how natural light affects color throughout the day</li>
                  <li>Think about existing fixtures, flooring, and furniture</li>
                  <li>Remember that exterior colors should complement your roof and stonework</li>
                  <li>Choose heat-reflective paints for exterior walls to improve energy efficiency</li>
                </ul>

                <div className="bg-card border-2 border-primary/20 rounded-lg p-8 my-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Home?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our expert team can help you choose the perfect colors and provide professional painting services throughout the Austin and Hill Country area.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={() => window.location.href = 'tel:+12548005322'}>
                      <Phone className="mr-2 h-5 w-5" />
                      Get Free Quote
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

export default PaintColors2025;
