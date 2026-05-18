import { useParams, Link } from "react-router-dom";
import { vehicles } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ShoppingCart, Heart, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

const VehicleDetailPage = () => {
  const { id } = useParams();
  const vehicle = vehicles.find((v) => v.id === id);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [currentImage, setCurrentImage] = useState(0);

  if (!vehicle) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Vehicle Not Found</h1>
        <Link to="/vehicles" className="gradient-btn px-8 py-3">Back to Vehicles</Link>
      </div>
    );
  }

  const wishlisted = isInWishlist(vehicle.id);
  const gallery = vehicle.gallery || [vehicle.image];
  const related = vehicles.filter((v) => v.category === vehicle.category && v.id !== vehicle.id).slice(0, 3);

  const handleAddToCart = () => {
    addToCart({ id: vehicle.id, name: vehicle.name, price: vehicle.price, image: vehicle.image, category: vehicle.category });
    toast.success(`${vehicle.name} added to cart!`);
  };

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(vehicle.id);
      toast.info(`${vehicle.name} removed from wishlist`);
    } else {
      addToWishlist({ id: vehicle.id, name: vehicle.name, price: vehicle.price, image: vehicle.image, category: vehicle.category });
      toast.success(`${vehicle.name} added to wishlist ❤️`);
    }
  };

  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  const nextImage = () => setCurrentImage((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link to="/vehicles" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Vehicles
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Image Gallery */}
          <div>
            <div className="relative glass-card overflow-hidden rounded-xl aspect-[4/3] mb-4">
              <img
                src={gallery[currentImage]}
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
              {gallery.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass-card hover:bg-primary/20 transition-colors">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass-card hover:bg-primary/20 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            {gallery.length > 1 && (
              <div className="flex gap-3">
                {gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentImage(i)}
                    className={`flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-colors ${
                      i === currentImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt={`${vehicle.name} ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <span className="px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded-full bg-primary/90 text-primary-foreground">
              {vehicle.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold mt-4 mb-2">{vehicle.name}</h1>
            <p className="text-3xl font-heading font-bold gradient-text mb-6">${vehicle.price.toLocaleString()}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{vehicle.description}</p>

            {/* Specs */}
            {vehicle.specs && (
              <div className="glass-card p-6 rounded-xl mb-8">
                <h3 className="font-heading font-bold text-lg mb-4 uppercase tracking-wider">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {vehicle.specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{spec.label}</p>
                      <p className="font-heading font-bold text-lg">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-4">
              <button onClick={handleAddToCart} className="gradient-btn px-8 py-4 text-lg flex items-center gap-3 flex-1 justify-center">
                <ShoppingCart className="w-5 h-5" /> Add to Cart
              </button>
              <button
                onClick={handleWishlist}
                className={`p-4 rounded-lg border transition-all ${
                  wishlisted ? "border-primary bg-primary/10" : "border-border hover:border-primary"
                }`}
              >
                <Heart className={`w-6 h-6 ${wishlisted ? "fill-primary text-primary" : ""}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Related Vehicles */}
        {related.length > 0 && (
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">
              Related <span className="gradient-text">Vehicles</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((v) => (
                <ProductCard key={v.id} {...v} showDetails />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleDetailPage;
