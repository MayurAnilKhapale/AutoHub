import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury sports car" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in">
          Find Your <span className="gradient-text">Perfect Ride</span>
          <br />& Premium Auto Parts
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Your one-stop destination for vehicles, spare parts, and accessories. Drive your dreams.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <Link to="/vehicles" className="gradient-btn px-8 py-4 text-lg inline-block">
            Browse Vehicles
          </Link>
          <Link to="/parts" className="px-8 py-4 text-lg font-heading font-semibold uppercase tracking-wider border border-primary/50 rounded-lg hover:bg-primary/10 transition-colors inline-block">
            Shop Parts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
