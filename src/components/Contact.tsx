import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Quote Today</h2>
            <p className="text-xl text-cream/90">
              Ready to transform your property? Contact us for a free, no-obligation quote
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-background/10 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-cream">Call Us</h3>
                <a href="tel:+12548005322" className="text-primary hover:text-primary/80 transition-colors text-lg">
                  (254) 800-5322
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background/10 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-cream">Email Us</h3>
                <a href="mailto:hillcountryrepairco@gmail.com" className="text-primary hover:text-primary/80 transition-colors break-all">
                  hillcountryrepairco@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-background/10 backdrop-blur-sm border-primary/20 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2 text-cream">Service Area</h3>
                <p className="text-cream/80">
                  Austin & Surrounding Areas
                  <br />
                  <span className="text-sm">15-100 mile radius</span>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20 text-center">
            <h3 className="text-2xl font-bold mb-4 text-cream">Why Choose Hill Country Repair Co.?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-primary mb-2">15+</p>
                <p className="text-cream/80">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">500+</p>
                <p className="text-cream/80">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary mb-2">100%</p>
                <p className="text-cream/80">Satisfaction Guaranteed</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => window.location.href = 'tel:+12548005322'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now for Free Quote
              </Button>
              <Button
                size="lg"
                className="bg-cream text-navy hover:bg-cream/90 hover:text-navy"
                onClick={() => window.location.href = 'mailto:hillcountryrepairco@gmail.com'}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
