import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Thermometer, Zap, Clock, Shield } from "lucide-react";

const ThermoelectricGlove = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Active Cooling",
      description: "Thermoelectric technology provides targeted cooling to reduce palm sweating",
    },
    {
      icon: Zap,
      title: "Rechargeable",
      description: "Long-lasting battery for all-day comfort and relief",
    },
    {
      icon: Clock,
      title: "Adjustable Settings",
      description: "Customize cooling intensity to match your needs",
    },
    {
      icon: Shield,
      title: "Durable Design",
      description: "Built to withstand daily use with medical-grade materials",
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
                Thermoelectric Glove
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Experience comfort with our innovative cooling glove prototype
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
                <h2 className="text-3xl font-bold mb-4">Advanced Cooling Technology</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Our thermoelectric glove uses cutting-edge technology to provide targeted relief for palmar hyperhidrosis
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

        {/* How It Works */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
              <Card className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The thermoelectric glove utilizes Peltier effect technology to create a temperature differential 
                  that actively cools the palms. This targeted cooling helps reduce sweating by lowering the 
                  temperature of the affected area.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Wear the glove on the affected hand</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Adjust the cooling level to your comfort</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Experience relief within minutes</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                    <p className="text-sm">Use as needed throughout the day</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
              <h2 className="text-3xl font-bold mb-4">Join Our Pilot Program</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Be among the first to test our thermoelectric glove prototype and help shape its development
              </p>
              <Button size="lg">Express Interest</Button>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default ThermoelectricGlove;
