import { Card, CardContent } from "@/components/ui/card";
import paintingImage from "@/assets/painting-service.jpg";
import fencingImage from "@/assets/fencing-service.jpg";
import remodelingImage from "@/assets/remodeling-service.jpg";
import constructionImage from "@/assets/construction-service.jpg";

const services = [
  {
    title: "Painting",
    description: "Professional interior and exterior painting services. We transform your space with precision and quality craftsmanship.",
    image: paintingImage,
    features: ["Interior Painting", "Exterior Painting", "Color Consultation", "Surface Preparation"]
  },
  {
    title: "Fencing",
    description: "Custom fence installation and repair to secure and beautify your property with durable, attractive solutions.",
    image: fencingImage,
    features: ["Wood Fencing", "Chain Link", "Privacy Fences", "Repairs & Maintenance"]
  },
  {
    title: "Remodeling",
    description: "Complete interior and exterior remodeling to bring your vision to life with expert design and execution.",
    image: remodelingImage,
    features: ["Kitchen Remodeling", "Bathroom Upgrades", "Room Additions", "Exterior Renovations"]
  },
  {
    title: "Construction",
    description: "From demolition to finishing touches, we handle all aspects of construction with professional expertise.",
    image: constructionImage,
    features: ["Demolition", "Flooring Installation", "Tilework", "General Construction"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional craftsmanship backed by years of experience serving the Austin area
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary group"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-foreground">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
