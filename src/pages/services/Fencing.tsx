import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import fencingImage from "@/assets/fencing-service.jpg";

const Fencing = () => {
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
                  Custom Fencing Solutions
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Secure and beautify your property with durable, attractive fencing solutions. From wood to chain link, we install and repair all types of fences across the Austin area.
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
                <img src={fencingImage} alt="Professional Fencing Service" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-8 text-center">Our Fencing Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Fence Installation</h3>
                    <ul className="space-y-3">
                      {[
                        "Wood fencing",
                        "Chain link fencing",
                        "Privacy fences",
                        "Decorative fencing",
                        "Pool fencing",
                        "Ranch fencing"
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
                    <h3 className="text-2xl font-bold text-foreground mb-4">Fence Repair & Maintenance</h3>
                    <ul className="space-y-3">
                      {[
                        "Post replacement",
                        "Panel repair",
                        "Gate repair & installation",
                        "Staining & sealing",
                        "Fence straightening",
                        "Hardware replacement"
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
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Fencing Process</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Site Assessment & Planning",
                    description: "We visit your property to assess the terrain, discuss your needs, and help you choose the perfect fencing style and materials for your specific requirements."
                  },
                  {
                    step: "2",
                    title: "Measurements & Permits",
                    description: "We take precise measurements, check property lines, and handle any necessary permits to ensure your fence is installed correctly and legally."
                  },
                  {
                    step: "3",
                    title: "Professional Installation",
                    description: "Our experienced team installs your fence with attention to detail, ensuring posts are properly set, panels are level, and gates operate smoothly."
                  },
                  {
                    step: "4",
                    title: "Final Walkthrough & Care Tips",
                    description: "We walk you through the completed project, ensure everything meets your expectations, and provide maintenance tips to keep your fence looking great for years."
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
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Why Choose Our Fencing Services?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Quality Materials",
                    description: "We source durable, weather-resistant materials built to last in the Texas climate."
                  },
                  {
                    title: "Expert Installation",
                    description: "Years of experience installing all fence types with professional-grade results."
                  },
                  {
                    title: "Custom Solutions",
                    description: "We tailor each project to your property's unique needs and aesthetic."
                  },
                  {
                    title: "Proper Foundation",
                    description: "Posts are set deep and secure for stability that withstands weather and time."
                  },
                  {
                    title: "Transparent Pricing",
                    description: "Detailed estimates with no surprises. You'll know exactly what to expect."
                  },
                  {
                    title: "Warranty Backed",
                    description: "We stand behind our work with solid warranties on materials and labor."
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
              <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
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

export default Fencing;
