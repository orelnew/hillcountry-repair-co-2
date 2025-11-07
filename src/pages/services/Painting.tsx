import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import paintingImage from "@/assets/painting-service.jpg";

const Painting = () => {
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
                  Professional Painting Services
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your space with precision and quality craftsmanship. We provide exceptional interior and exterior painting services across the Austin and Hill Country area.
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
                <img src={paintingImage} alt="Professional Painting Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Painting Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Interior Painting</h3>
                    <ul className="space-y-3">
                      {[
                        "Walls and ceilings",
                        "Trim and molding",
                        "Cabinets and doors",
                        "Accent walls",
                        "Color consultation",
                        "Texture work"
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
                    <h3 className="text-2xl font-bold text-foreground mb-4">Exterior Painting</h3>
                    <ul className="space-y-3">
                      {[
                        "House siding",
                        "Stucco and brick",
                        "Decks and fences",
                        "Garage doors",
                        "Shutters and trim",
                        "Weather protection coatings"
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
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Painting Process</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Consultation & Color Selection",
                    description: "We meet with you to understand your vision, provide expert color consultation, and offer professional recommendations based on your space and style preferences."
                  },
                  {
                    step: "2",
                    title: "Surface Preparation",
                    description: "Proper prep is key to a lasting finish. We clean, repair, sand, and prime all surfaces to ensure optimal paint adhesion and a smooth, professional result."
                  },
                  {
                    step: "3",
                    title: "Professional Application",
                    description: "Using premium paints and proven techniques, our experienced team applies your chosen colors with precision, ensuring even coverage and clean lines."
                  },
                  {
                    step: "4",
                    title: "Final Inspection & Cleanup",
                    description: "We conduct a thorough walk-through with you, address any touch-ups, and leave your space spotless and ready to enjoy."
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
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Our Painting Services?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Quality Materials",
                    description: "We use only premium paints and supplies for lasting, beautiful results."
                  },
                  {
                    title: "Experienced Team",
                    description: "Our skilled painters have years of experience delivering exceptional results."
                  },
                  {
                    title: "Attention to Detail",
                    description: "We take pride in our meticulous prep work and precise application."
                  },
                  {
                    title: "Clean Worksite",
                    description: "We respect your home and leave it cleaner than we found it."
                  },
                  {
                    title: "Fair Pricing",
                    description: "Competitive rates with no hidden fees. Free detailed quotes."
                  },
                  {
                    title: "Satisfaction Guaranteed",
                    description: "We're not done until you're 100% happy with the results."
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
              <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
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

export default Painting;
