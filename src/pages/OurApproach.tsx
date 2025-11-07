import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, CheckCircle2, Phone, Mail } from "lucide-react";

const OurApproach = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Our Approach
              </h1>
              <p className="text-xl text-muted-foreground">
                Quality craftsmanship, honest service, and customer satisfaction are at the heart of everything we do.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Safety First</h3>
                    <p className="text-muted-foreground">
                      We prioritize the safety of our team, your family, and your property on every job. Our crew follows strict safety protocols and uses professional-grade equipment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Quality Work</h3>
                    <p className="text-muted-foreground">
                      We take pride in our craftsmanship. Every project receives the same attention to detail, whether it's a small repair or a complete remodel.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary/20 hover:border-primary transition-colors">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Customer Focus</h3>
                    <p className="text-muted-foreground">
                      Your satisfaction is our success. We listen to your needs, communicate clearly, and work diligently to exceed your expectations.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">What Sets Us Apart</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Experienced Professionals",
                    description: "Our team brings 15+ years of combined experience in painting, fencing, remodeling, and construction. We've seen it all and know how to handle any challenge that arises."
                  },
                  {
                    title: "Quality Materials",
                    description: "We use only professional-grade materials from trusted suppliers. Quality materials ensure your project looks great and lasts for years to come."
                  },
                  {
                    title: "Transparent Pricing",
                    description: "No hidden fees or surprise charges. We provide detailed, itemized quotes so you know exactly what you're paying for before we start."
                  },
                  {
                    title: "Clear Communication",
                    description: "We keep you informed every step of the way. From initial consultation through project completion, you'll always know what's happening and when."
                  },
                  {
                    title: "Respect for Your Property",
                    description: "We treat your home as if it were our own. Our team maintains a clean, organized work area and protects your property throughout the project."
                  },
                  {
                    title: "Reliable Service",
                    description: "When we say we'll be there, we'll be there. We respect your time and work efficiently to complete projects on schedule without sacrificing quality."
                  }
                ].map((item, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
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

        {/* Our Process */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-foreground mb-12 text-center">How We Work</h2>
              <div className="space-y-8">
                {[
                  {
                    step: "1",
                    title: "Free Consultation",
                    description: "We start with a conversation to understand your needs, vision, and budget. We'll visit your property if needed to provide an accurate assessment."
                  },
                  {
                    step: "2",
                    title: "Detailed Proposal",
                    description: "You'll receive a comprehensive quote outlining the scope of work, materials, timeline, and costs. We answer all your questions before you commit."
                  },
                  {
                    step: "3",
                    title: "Scheduled Start",
                    description: "Once approved, we schedule your project at a time that works for you. We arrive on time and ready to work with all necessary materials and equipment."
                  },
                  {
                    step: "4",
                    title: "Quality Execution",
                    description: "Our experienced team completes your project with professionalism and precision. We keep you updated on progress and address any questions promptly."
                  },
                  {
                    step: "5",
                    title: "Final Walkthrough",
                    description: "We conduct a thorough review with you to ensure everything meets your expectations. We're not done until you're completely satisfied."
                  },
                  {
                    step: "6",
                    title: "Ongoing Support",
                    description: "Our relationship doesn't end at project completion. We're here if you have questions or need additional services in the future."
                  }
                ].map((item) => (
                  <Card key={item.step} className="border-2">
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

        {/* Our Promise */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Promise to You</h2>
              <p className="text-xl text-muted-foreground mb-8">
                We promise to deliver honest, reliable service and quality workmanship on every project. Your satisfaction is guaranteed, and we won't rest until you're thrilled with the results. We're not just building and repairing homes—we're building lasting relationships with our clients across the Austin and Hill Country area.
              </p>
              <div className="bg-background rounded-lg p-8 border-2 border-primary/20">
                <p className="text-2xl font-bold text-primary mb-2">100% Satisfaction Guaranteed</p>
                <p className="text-foreground/80">
                  If you're not completely happy with our work, we'll make it right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-navy text-navy-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Experience the Difference</h2>
              <p className="text-xl text-cream/90 mb-8">
                Ready to work with a team that puts quality and customer satisfaction first? Contact us today for your free consultation.
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

export default OurApproach;
