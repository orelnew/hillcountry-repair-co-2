import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Martinez",
    location: "Austin, TX",
    rating: 5,
    review: "Hill Country Repair did an amazing job painting our home's exterior. The crew was professional, arrived on time every day, and the attention to detail was outstanding. Our house looks brand new!",
    service: "Exterior Painting"
  },
  {
    name: "Michael Thompson",
    location: "Round Rock, TX",
    rating: 5,
    review: "We hired them to build a fence around our backyard and couldn't be happier. Quality workmanship at a fair price. They cleaned up everything when done. Highly recommend!",
    service: "Fencing"
  },
  {
    name: "Jennifer Lopez",
    location: "Cedar Park, TX",
    rating: 5,
    review: "Our kitchen remodel was completed beautifully and within budget. The team was respectful of our home and communicated with us throughout the entire process. We love our new kitchen!",
    service: "Kitchen Remodeling"
  },
  {
    name: "David Chen",
    location: "Georgetown, TX",
    rating: 5,
    review: "Exceptional tile work in our bathrooms. The craftsmanship is evident in every detail. They turned our outdated bathrooms into modern, beautiful spaces. Worth every penny!",
    service: "Tilework"
  },
  {
    name: "Emily Rodriguez",
    location: "Pflugerville, TX",
    rating: 5,
    review: "From start to finish, this company exceeded our expectations. Interior painting was flawless, and they took great care to protect our furniture and floors. Very impressed!",
    service: "Interior Painting"
  },
  {
    name: "Robert Johnson",
    location: "Leander, TX",
    rating: 5,
    review: "Reliable, affordable, and professional - exactly as advertised. They completed our home exterior renovation on schedule and the results are stunning. Best decision we made!",
    service: "Exterior Remodeling"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across the Austin area
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-4 italic">"{review.review}"</p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.location}</p>
                  <p className="text-sm text-primary mt-1">{review.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
