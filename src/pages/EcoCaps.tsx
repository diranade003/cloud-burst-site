import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Users, Sparkles, CheckCircle } from "lucide-react";

const EcoCaps = () => {
  const features = [
    {
      icon: Leaf,
      title: "Plant-Based Formula",
      description: "Natural herbal ingredients sourced sustainably from local communities",
    },
    {
      icon: Users,
      title: "Community Co-Designed",
      description: "Developed in collaboration with African communities for cultural relevance",
    },
    {
      icon: Sparkles,
      title: "Clinically Tested",
      description: "Pilot-tested through SweatSmart app with documented results",
    },
    {
      icon: CheckCircle,
      title: "Affordable Relief",
      description: "Cost-effective solution designed for accessibility",
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
                EcoCaps
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-4">
                Plant-Based Herbal Capsules
              </p>
              <p className="text-lg text-white/80 mb-8">
                Sustainable herbal relief co-designed with local communities and pilot-tested via SweatSmart
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
                <h2 className="text-3xl font-bold mb-4">Natural Hyperhidrosis Relief</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  EcoCaps combines traditional herbal knowledge with modern research to provide effective, sustainable relief
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

        {/* About EcoCaps */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why EcoCaps?</h2>
              <Card className="p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-3">Community-Driven Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    EcoCaps was developed through extensive collaboration with African communities, 
                    ensuring the formulation is culturally appropriate and addresses local needs.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Sustainable Sourcing</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    All herbal ingredients are sustainably sourced from local suppliers, supporting 
                    community economies while maintaining environmental responsibility.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">SweatSmart Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pilot testing through the SweatSmart app allows us to continuously improve the 
                    formulation based on real-world usage data and user feedback.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">Affordable Access</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designed with affordability in mind, EcoCaps makes herbal hyperhidrosis relief 
                    accessible to communities that need it most.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Join the EcoCaps Pilot</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be part of our community pilot program and experience natural relief while contributing to product development
              </p>
              <Button size="lg">Participate in Pilot</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default EcoCaps;
