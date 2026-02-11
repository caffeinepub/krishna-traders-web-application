import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Package, Wrench, Shield } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Package,
      title: 'Wholesale Pricing',
      description: 'Competitive wholesale rates for bulk orders',
    },
    {
      icon: Wrench,
      title: 'Quality Materials',
      description: 'Premium GI materials for lasting durability',
    },
    {
      icon: Shield,
      title: 'Trusted Supplier',
      description: 'Reliable partner for construction & industrial needs',
    },
  ];

  const categories = [
    {
      title: 'GI Plumbing Material',
      description: 'Complete range of galvanized iron plumbing solutions',
      image: '/assets/generated/category-gi-plumbing.dim_512x512.png',
    },
    {
      title: 'GI Clamps',
      description: 'Heavy-duty clamps for secure installations',
      image: '/assets/generated/category-gi-clamps.dim_512x512.png',
    },
    {
      title: 'GI Brackets',
      description: 'Robust brackets for structural support',
      image: '/assets/generated/category-gi-brackets.dim_512x512.png',
    },
    {
      title: 'Hardware Materials',
      description: 'Comprehensive hardware supplies for all projects',
      image: '/assets/generated/category-hardware.dim_512x512.png',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-accent/50 rounded-full text-base md:text-lg font-medium">
                Wholesale Supplier
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Premium GI Materials for Construction & Industrial
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Krishna Traders is your trusted wholesale supplier of high-quality GI plumbing materials, GI clamps, GI brackets, and comprehensive hardware materials. Serving construction and industrial sectors with excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/products" className="flex items-center space-x-2">
                    <span>View Products</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/assets/generated/krishna-traders-hero.dim_1600x600.png" 
                alt="Krishna Traders - GI Materials" 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="border-border/50">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base md:text-lg">{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Product Categories</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of GI materials and hardware supplies
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden bg-muted/30">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-base">{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Why Choose Krishna Traders?</h2>
            <div className="space-y-4">
              {[
                'Extensive inventory of GI plumbing materials, clamps, and brackets',
                'Competitive wholesale pricing for bulk orders',
                'High-quality materials meeting industry standards',
                'Reliable supply chain for construction and industrial projects',
                'Expert guidance and customer support',
                'Fast delivery and flexible ordering options',
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-lg md:text-xl">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us today for wholesale pricing and product inquiries. Our team is ready to assist with your construction and industrial material needs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Send Inquiry</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
