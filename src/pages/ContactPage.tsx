import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready to start your project? We're here to help. Reach out for a free consultation and quote.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Phone */}
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
                        <p className="text-muted-foreground mb-3">
                          Give us a call for immediate assistance or to schedule a free consultation.
                        </p>
                        <a
                          href="tel:+12548005322"
                          className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors block"
                        >
                          (254) 800-5322
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                          Available Monday - Saturday, 7 AM - 6 PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
                        <p className="text-muted-foreground mb-3">
                          Send us an email and we'll get back to you within 24 hours.
                        </p>
                        <a
                          href="mailto:hillcountryrepairco@gmail.com"
                          className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors block break-all"
                        >
                          hillcountryrepairco@gmail.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-2">
                          We respond to all inquiries promptly
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Service Area & Hours */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Service Area */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Service Area</h3>
                        <p className="text-foreground/80 mb-3">
                          We proudly serve Austin and surrounding areas within a 15-100 mile radius, including:
                        </p>
                        <ul className="space-y-1 text-foreground/80">
                          <li>• Austin</li>
                          <li>• Round Rock</li>
                          <li>• Georgetown</li>
                          <li>• Cedar Park</li>
                          <li>• Pflugerville</li>
                          <li>• Leander</li>
                          <li>• And surrounding Hill Country communities</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-2">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">Business Hours</h3>
                        <div className="space-y-2 text-foreground/80">
                          <div className="flex justify-between">
                            <span className="font-semibold">Monday - Friday:</span>
                            <span>7:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Saturday:</span>
                            <span>8:00 AM - 4:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-semibold">Sunday:</span>
                            <span>Closed</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-4">
                            Emergency services available by appointment
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Contact Us */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What to Expect</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Fast Response",
                    description: "We typically respond to inquiries within hours, not days."
                  },
                  {
                    title: "Free Quotes",
                    description: "No-obligation estimates for all services. Know the cost upfront."
                  },
                  {
                    title: "Professional Service",
                    description: "Courteous, knowledgeable team ready to answer all your questions."
                  }
                ].map((item) => (
                  <Card key={item.title} className="text-center">
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
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-cream/90 mb-8">
                Contact us today for your free consultation and quote. Let's bring your project to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = 'tel:+12548005322'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  (254) 800-5322
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-cream text-cream hover:bg-cream hover:text-navy"
                  onClick={() => window.location.href = 'mailto:hillcountryrepairco@gmail.com'}
                >
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

export default ContactPage;
