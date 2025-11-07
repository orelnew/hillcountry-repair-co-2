import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Top 5 Paint Colors for Texas Homes in 2025",
    slug: "paint-colors-2025",
    excerpt: "Discover the trending paint colors that perfectly complement the Texas Hill Country aesthetic while keeping your home cool and stylish.",
    date: "January 15, 2025",
    category: "Painting Tips"
  },
  {
    title: "Choosing the Right Fence for Your Property",
    slug: "choosing-right-fence",
    excerpt: "A comprehensive guide to selecting the perfect fence material and style for your Austin-area home, balancing privacy, durability, and aesthetics.",
    date: "January 10, 2025",
    category: "Fencing Guide"
  },
  {
    title: "Kitchen Remodeling on a Budget",
    slug: "kitchen-remodeling-budget",
    excerpt: "Learn how to achieve a stunning kitchen transformation without breaking the bank. Professional tips and tricks from our experienced team.",
    date: "January 5, 2025",
    category: "Remodeling"
  },
  {
    title: "Essential Home Maintenance for Texas Weather",
    slug: "home-maintenance-texas",
    excerpt: "Protect your investment with our seasonal home maintenance checklist tailored for the Texas Hill Country's unique climate challenges.",
    date: "December 28, 2024",
    category: "Home Care"
  },
  {
    title: "Outdoor Living Space Trends for 2025",
    slug: "outdoor-living-trends-2025",
    excerpt: "Discover the hottest outdoor living trends and how to create your perfect backyard oasis in the Austin area.",
    date: "December 20, 2024",
    category: "Outdoor Living"
  },
  {
    title: "Signs Your Home Needs Professional Repairs",
    slug: "signs-need-repairs",
    excerpt: "Learn to identify common warning signs that indicate it's time to call in professional help for your home repairs.",
    date: "December 15, 2024",
    category: "Home Care"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Latest from Our Blog</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Expert advice, tips, and insights from our experienced team
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="block"
            >
              <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-primary group cursor-pointer h-full">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {post.date}
                    </div>

                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
