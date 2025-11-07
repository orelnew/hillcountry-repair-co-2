import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Hill Country Repair Co." className="h-12 w-12" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">Hill Country Repair Co.</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-foreground hover:text-primary transition-colors">
              Blog
            </button>
            <Button onClick={() => scrollToSection("contact")} variant="default">
              Get a Quote
            </Button>
          </div>

          <div className="md:hidden">
            <Button onClick={() => scrollToSection("contact")} size="sm">
              Contact
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
