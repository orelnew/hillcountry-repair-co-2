import logo from "@/assets/logo.png";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Hill Country Repair Co." className="h-16 w-16" />
              <h3 className="font-bold text-xl">Hill Country Repair Co.</h3>
            </div>
            <p className="text-background/80">
              Professional painting, fencing, remodeling, and construction services across the Austin and Hill Country area.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-background/80">
              <li>Interior & Exterior Painting</li>
              <li>Fencing Installation & Repair</li>
              <li>Home Remodeling</li>
              <li>Construction & Tilework</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3 text-background/80">
              <a href="tel:+12548005322" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                (254) 800-5322
              </a>
              <a href="mailto:hillcountryrepairco@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors break-all">
                <Mail className="h-4 w-4" />
                hillcountryrepairco@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Hill Country Repair Co. All rights reserved.</p>
          <p className="mt-2 text-sm">Serving Austin, Round Rock, Georgetown, Cedar Park, and surrounding areas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
