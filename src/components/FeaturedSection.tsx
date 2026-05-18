import ProductCard from "./ProductCard";
import { vehicles, parts } from "@/data/products";

const FeaturedSection = () => {
  const featured = vehicles.slice(0, 3);
  const bestParts = parts.slice(0, 3);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
          Trending <span className="gradient-text">Vehicles</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Handpicked for performance enthusiasts</p>
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {featured.map((v) => (
            <ProductCard key={v.id} {...v} showDetails />
          ))}
        </div>

        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-center mb-4">
          Best Selling <span className="gradient-text">Parts</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">Quality parts for peak performance</p>
        <div className="grid md:grid-cols-3 gap-6">
          {bestParts.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
