import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Building2,
      title: 'Industry Expertise',
      description: 'Years of experience serving construction and industrial sectors with quality GI materials.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Dedicated to understanding and meeting the unique needs of each client.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'All products meet industry standards and undergo rigorous quality checks.',
    },
    {
      icon: TrendingUp,
      title: 'Competitive Pricing',
      description: 'Wholesale rates that help your projects stay within budget without compromising quality.',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Krishna Traders</h1>
            <p className="text-lg text-muted-foreground">
              Your trusted wholesale partner for GI materials and hardware supplies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Company Overview */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  Krishna Traders is a leading wholesale supplier of galvanized iron (GI) materials and hardware supplies, specializing in serving the construction and industrial sectors. We pride ourselves on being a reliable partner for contractors, builders, and industrial facilities across the region.
                </p>
                <p>
                  Our extensive inventory includes a comprehensive range of GI plumbing materials, GI clamps, GI brackets, and general hardware materials. We understand the critical importance of quality materials in construction and industrial applications, which is why we source only the best products that meet industry standards.
                </p>
                <p>
                  At Krishna Traders, we believe in building long-term relationships with our clients by providing not just quality products, but also exceptional service, competitive wholesale pricing, and expert guidance. Whether you're working on a small residential project or a large industrial installation, we have the materials and expertise to support your success.
                </p>
              </div>
            </div>

            {/* Our Values */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index}>
                      <CardHeader>
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle>{value.title}</CardTitle>
                        <CardDescription>{value.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* What We Offer */}
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>GI Plumbing Materials</CardTitle>
                    <CardDescription>
                      Complete range of galvanized iron pipes, fittings, and accessories for all plumbing applications
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>GI Clamps</CardTitle>
                    <CardDescription>
                      Heavy-duty clamps in various sizes for secure pipe mounting and support systems
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>GI Brackets</CardTitle>
                    <CardDescription>
                      Robust brackets for structural support, pipe mounting, and equipment installation
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Hardware Materials</CardTitle>
                    <CardDescription>
                      Comprehensive selection of fasteners, tools, and general hardware supplies
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Our Commitment */}
            <div className="bg-muted/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  We are committed to being more than just a supplier – we aim to be your trusted partner in every project. Our team works diligently to ensure that you receive the right products at the right time, with the support and guidance you need to make informed decisions.
                </p>
                <p>
                  With competitive wholesale pricing, reliable inventory, and a customer-first approach, Krishna Traders is here to help you build better, stronger, and more efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
