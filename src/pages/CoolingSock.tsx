import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Activity, Droplets, Heart } from "lucide-react";

const CoolingSock = () => {
  const features = [
    {
      icon: Wind,
      title: "Breathable Materials",
      description: "Advanced moisture-wicking fabric keeps feet cool and dry",
    },
    {
      icon: Activity,
      title: "Active Cooling",
      description: "Integrated cooling technology targets plantar hyperhidrosis",
    },
    {
      icon: Droplets,
      title: "Moisture Management",
      description: "Superior absorbency and quick-drying properties",
    },
    {
      icon: Heart,
      title: "All-Day Comfort",
      description: "Ergonomic design for comfortable extended wear",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Cooling Sock Prototype
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Stay cool and dry with our innovative cooling sock technology
              </p>
              <Button size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Revolutionary Foot Care</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our cooling sock combines advanced materials with cooling technology for effective plantar hyperhidrosis management
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="p-8 hover:shadow-soft transition-all border-border/50">
                    <div className="rounded-full bg-gradient-hero p-4 w-16 h-16 flex items-center justify-center mb-6">
                      <feature.icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
              <Card className="p-8">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Reduced Foot Sweating</h3>
                      <p className="text-sm text-muted-foreground">
                        Active cooling technology helps manage excessive foot perspiration
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Enhanced Comfort</h3>
                      <p className="text-sm text-muted-foreground">
                        Stay comfortable throughout the day with moisture-wicking properties
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Odor Control</h3>
                      <p className="text-sm text-muted-foreground">
                        Antimicrobial properties help prevent odor-causing bacteria
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Improved Confidence</h3>
                      <p className="text-sm text-muted-foreground">
                        Feel more confident in social and professional situations
                      </p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Test Our Prototype</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Participate in our pilot program and help us perfect the cooling sock technology
              </p>
              <Button size="lg">Join Pilot Program</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default CoolingSock;
