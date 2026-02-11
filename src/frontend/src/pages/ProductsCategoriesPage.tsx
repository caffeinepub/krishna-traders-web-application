import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function ProductsCategoriesPage() {
  const categories = [
    {
      title: 'GI Plumbing Material',
      image: '/assets/generated/category-gi-plumbing.dim_512x512.png',
      description: 'Comprehensive range of galvanized iron plumbing materials including pipes, fittings, elbows, tees, reducers, and couplings. Ideal for water supply systems, drainage, and industrial piping applications.',
      products: [
        'GI Pipes (various sizes)',
        'GI Fittings & Connectors',
        'GI Elbows & Tees',
        'GI Reducers & Couplings',
        'GI Unions & Nipples',
        'GI Valves & Accessories',
      ],
    },
    {
      title: 'GI Clamps',
      image: '/assets/generated/category-gi-clamps.dim_512x512.png',
      description: 'Heavy-duty galvanized iron clamps for secure pipe mounting and support. Available in various sizes to accommodate different pipe diameters for residential, commercial, and industrial installations.',
      products: [
        'Pipe Clamps (all sizes)',
        'U-Bolt Clamps',
        'Beam Clamps',
        'Hose Clamps',
        'Cable Clamps',
        'Adjustable Clamps',
      ],
    },
    {
      title: 'GI Brackets',
      image: '/assets/generated/category-gi-brackets.dim_512x512.png',
      description: 'Robust galvanized iron brackets designed for structural support and mounting applications. Perfect for pipe support, cable management, and equipment installation in construction projects.',
      products: [
        'Pipe Support Brackets',
        'Wall Mounting Brackets',
        'L-Brackets & Angle Brackets',
        'Channel Brackets',
        'Adjustable Brackets',
        'Heavy-Duty Support Brackets',
      ],
    },
    {
      title: 'Hardware Materials',
      image: '/assets/generated/category-hardware.dim_512x512.png',
      description: 'Complete selection of hardware materials and accessories for construction and industrial applications. From fasteners to tools, we supply everything you need for your projects.',
      products: [
        'Nuts, Bolts & Screws',
        'Washers & Anchors',
        'Hinges & Handles',
        'Wire & Cables',
        'Tools & Equipment',
        'General Hardware Supplies',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Product Categories</h1>
            <p className="text-lg text-muted-foreground">
              Explore our comprehensive range of GI materials and hardware supplies. All products available at competitive wholesale rates for construction and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Card className="overflow-hidden">
                    <div className="aspect-square bg-muted/30">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="font-semibold mb-3">Available Products:</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{product}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild>
                    <Link to="/contact" className="flex items-center space-x-2">
                      <span>Inquire About {category.title}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Quote?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Contact us with your specific requirements and quantities. We'll provide competitive wholesale pricing tailored to your project needs.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get a Quote</span>
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
