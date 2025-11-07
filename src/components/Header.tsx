import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      // Navigate to home page first, then scroll
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Hill Country Repair Co." className="h-12 w-12" />
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg text-foreground">Hill Country Repair Co.</h1>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("services")} className="text-foreground hover:text-primary transition-colors">
              Services
            </button>
            <Link to="/our-approach" className="text-foreground hover:text-primary transition-colors">
              Our Approach
            </Link>
            <button onClick={() => scrollToSection("reviews")} className="text-foreground hover:text-primary transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection("blog")} className="text-foreground hover:text-primary transition-colors">
              Blog
            </button>
            <Link to="/contact">
              <Button variant="default">
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Link to="/contact">
              <Button size="sm">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
