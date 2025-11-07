import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import remodelingImage from "@/assets/remodeling-service.jpg";

const Remodeling = () => {
  const scrollToContact = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                  Complete Remodeling Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Bring your vision to life with expert design and execution. From kitchens to bathrooms, interior to exterior, we handle complete remodeling projects with precision and care.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Get Free Quote
                  </Button>
                  <Button size="lg" variant="outline" onClick={scrollToContact}>
                    <Mail className="mr-2 h-5 w-5" />
                    Email Us
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img src={remodelingImage} alt="Professional Remodeling Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Remodeling Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Interior Remodeling</h3>
                    <ul className="space-y-3">
                      {[
                        "Kitchen remodeling",
                        "Bathroom upgrades",
                        "Living room renovation",
                        "Bedroom updates",
                        "Basement finishing",
                        "Open floor plan conversions"
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Exterior & Additions</h3>
                    <ul className="space-y-3">
                      {[
                        "Room additions",
                        "Exterior renovations",
                        "Patio & deck building",
                        "Sunroom additions",
                        "Garage conversions",
                        "Curb appeal upgrades"
                      ].map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Remodeling Process</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Design Consultation",
                    description: "We meet to discuss your vision, needs, and budget. We'll offer design suggestions and help you make informed decisions about materials, layout, and finishes."
                  },
                  {
                    step: "2",
                    title: "Detailed Planning",
                    description: "We create a comprehensive project plan with timelines, material selections, and a detailed scope of work. You'll know exactly what to expect before we begin."
                  },
                  {
                    step: "3",
                    title: "Expert Execution",
                    description: "Our skilled team brings your remodel to life, managing every aspect from demolition to finishing touches with professional craftsmanship and attention to detail."
                  },
                  {
                    step: "4",
                    title: "Final Reveal & Walkthrough",
                    description: "We conduct a thorough walkthrough to ensure every detail meets your expectations, address any concerns, and celebrate your newly transformed space."
                  }
                ].map((item) => (
                  <Card key={item.step} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Our Remodeling Services?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Design Expertise",
                    description: "We help you maximize space, functionality, and aesthetics within your budget."
                  },
                  {
                    title: "Quality Craftsmanship",
                    description: "Skilled professionals who take pride in delivering exceptional results."
                  },
                  {
                    title: "Project Management",
                    description: "We coordinate all aspects, keeping your project on time and on budget."
                  },
                  {
                    title: "Clear Communication",
                    description: "Regular updates and open dialogue throughout your remodeling journey."
                  },
                  {
                    title: "Respect for Your Home",
                    description: "We minimize disruption and maintain a clean, organized work environment."
                  },
                  {
                    title: "Value Enhancement",
                    description: "Thoughtful upgrades that increase both enjoyment and property value."
                  }
                ].map((item) => (
                  <Card key={item.title} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-navy-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
              <p className="text-xl text-cream/90 mb-8">
                Get your free, no-obligation quote today. We serve Austin, Round Rock, Georgetown, Cedar Park, and the entire Hill Country area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => window.location.href = 'tel:+12548005322'}>
                  <Phone className="mr-2 h-5 w-5" />
                  (254) 800-5322
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-cream text-cream hover:bg-cream hover:text-navy" onClick={() => window.location.href = 'mailto:hillcountryrepairco@gmail.com'}>
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Remodeling;
