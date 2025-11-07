import { MapPin } from "lucide-react";

const ServiceArea = () => {
  const cities = [
    "Austin", "Round Rock", "Georgetown", "Cedar Park", "Pflugerville",
    "Leander", "Kyle", "Buda", "San Marcos", "Dripping Springs",
    "Lakeway", "Bee Cave", "Marble Falls", "Burnet", "Wimberley"
  ];

  return (
    <section className="py-20 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Service Area</h2>
          </div>
          
          <p className="text-xl mb-8 text-cream/90">
            Proudly serving Austin and surrounding areas within 15-100 miles
          </p>
          
          <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-primary/20">
            <p className="text-lg mb-6 text-cream/90">
              With deep roots in Texas, we're committed to providing the highest quality work at affordable prices throughout the Hill Country region.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3">
              {cities.map((city) => (
                <span 
                  key={city}
                  className="px-4 py-2 bg-primary/20 text-cream rounded-full text-sm border border-primary/30 hover:bg-primary/30 transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>
            
            <p className="mt-6 text-cream/80 text-sm">
              Don't see your city? Contact us - we may service your area!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
