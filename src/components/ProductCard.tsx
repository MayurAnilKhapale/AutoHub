import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { ShoppingCart, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description?: string;
  showDetails?: boolean;
}

const ProductCard = ({ id, name, price, image, category, description, showDetails }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(id);

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category });
    toast.success(`${name} added to cart!`);
  };

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(id);
      toast.info(`${name} removed from wishlist`);
    } else {
      addToWishlist({ id, name, price, image, category });
      toast.success(`${name} added to wishlist ❤️`);
    }
  };

  return (
    <div className="glass-card overflow-hidden hover-lift group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded-full bg-primary/90 text-primary-foreground">
            {category}
          </span>
        </div>
        <button
          onClick={handleWishlist}
          className="absolute top-3 right-3 p-2 rounded-full glass-card transition-all hover:scale-110"
        >
          <Heart className={`w-4 h-4 transition-colors ${wishlisted ? "fill-primary text-primary" : "text-foreground"}`} />
        </button>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-heading font-bold mb-1">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-heading font-bold gradient-text">
            ${price.toLocaleString()}
          </span>
          <div className="flex gap-2">
            {showDetails && (
              <Link
                to={`/vehicles/${id}`}
                className="p-2 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <Eye className="w-4 h-4" />
              </Link>
            )}
            <button
              onClick={handleAddToCart}
              className="gradient-btn p-2 rounded-lg"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
