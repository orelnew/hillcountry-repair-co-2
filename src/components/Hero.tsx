import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import logo from "@/assets/logo.png";
import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-navy/70" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <img src={logo} alt="Hill Country Repair Co." className="h-32 w-32 mx-auto mb-6 animate-in fade-in zoom-in duration-700" />
          
          <h1 className="text-5xl md:text-7xl font-bold text-cream animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Quality Work at
            <span className="block text-primary mt-2">Affordable Prices</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/90 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Proudly serving Austin and the greater Hill Country area with professional painting, fencing, remodeling, and construction services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6"
            >
              Get Your Free Quote
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-navy text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:+12548005322'}
            >
              <Phone className="mr-2 h-5 w-5" />
              (254) 800-5322
            </Button>
          </div>

          <div className="pt-8 animate-in fade-in duration-700 delay-500">
            <p className="text-cream font-semibold text-lg mb-2">Reliable • Affordable • Professional</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
