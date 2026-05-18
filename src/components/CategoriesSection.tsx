import { Link } from "react-router-dom";
import { Car, Wrench, Sparkles, Zap } from "lucide-react";

const categories = [
  { icon: Car, label: "Vehicles", to: "/vehicles", desc: "Cars, Bikes, SUVs & EVs" },
  { icon: Wrench, label: "Auto Parts", to: "/parts", desc: "Engine, Brakes & More" },
  { icon: Sparkles, label: "Accessories", to: "/accessories", desc: "Covers, Mats & Gear" },
  { icon: Zap, label: "Electric", to: "/vehicles?cat=Electric", desc: "Zero-Emission Rides" },
];

const CategoriesSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
          Popular <span className="gradient-text">Categories</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          Explore our wide range of automotive products
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={cat.to}
              className="glass-card p-6 text-center hover-lift group cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl gradient-btn flex items-center justify-center group-hover:scale-110 transition-transform">
                <cat.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-1">{cat.label}</h3>
              <p className="text-sm text-muted-foreground">{cat.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
