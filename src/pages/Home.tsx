import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Droplets, Smartphone, ThermometerSun, Leaf } from "lucide-react";

const Home = () => {
  const products = [
    {
      icon: Smartphone,
      title: "SweatSmart App",
      description: "Empower your sweat management with our innovative mobile app",
      link: "/sweatsmart-app",
    },
    {
      icon: ThermometerSun,
      title: "Thermoelectric Glove",
      description: "Experience comfort with our cooling glove prototype",
      link: "/thermoelectric-glove",
    },
    {
      icon: Droplets,
      title: "Cooling Sock",
      description: "Stay cool and dry with our innovative cooling sock",
      link: "/cooling-sock",
    },
    {
      icon: Leaf,
      title: "EcoCaps",
      description: "Plant-based herbal capsules for sustainable relief",
      link: "/ecocaps",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Early Detection and Relief for Hyperhidrosis
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover innovative solutions for excessive sweating with the SweatSmart app and community pilots
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sweatsmart-app">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Explore SweatSmart
                </Button>
              </Link>
              <Link to="/programs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 border-white text-white hover:bg-white hover:text-primary">
                  Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Affordable Hyperhidrosis Solutions for Africa
            </h2>
            <p className="text-lg text-muted-foreground">
              Giftovate Therapeutics Ltd develops innovative solutions combining technology, 
              wearable devices, and community engagement to improve care and reduce stigma around excessive sweating.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link key={index} to={product.link}>
                <Card className="p-6 h-full hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border/50 hover:border-primary/50">
                  <div className="rounded-full bg-gradient-hero p-3 w-12 h-12 flex items-center justify-center mb-4">
                    <product.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{product.title}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">App-Based</div>
                <h3 className="font-semibold mb-2">Digital Health</h3>
                <p className="text-sm text-muted-foreground">
                  Track and manage your condition with our SweatSmart mobile application
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary mb-2">Wearable</div>
                <h3 className="font-semibold mb-2">Cooling Devices</h3>
                <p className="text-sm text-muted-foreground">
                  Experience relief with our thermoelectric gloves and cooling socks
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Community</div>
                <h3 className="font-semibold mb-2">Pilot Programs</h3>
                <p className="text-sm text-muted-foreground">
                  Join our community-driven approach to improving care accessibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-card p-8 md:p-12 text-center max-w-3xl mx-auto border-primary/20">
            <h2 className="text-3xl font-bold mb-4">Ready to Take Control?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our innovative solutions and join the community working to reduce stigma and improve care for hyperhidrosis
            </p>
            <Link to="/resources">
              <Button size="lg">Explore Resources</Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
