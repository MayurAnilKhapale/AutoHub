import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const WishlistPage = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleMoveToCart = (item: typeof items[0]) => {
    addToCart({ ...item });
    removeFromWishlist(item.id);
    toast.success(`${item.name} moved to cart!`);
  };

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex flex-col items-center justify-center">
        <Heart className="w-20 h-20 text-muted-foreground mb-6" />
        <h1 className="text-3xl font-heading font-bold mb-3">Your Wishlist is Empty</h1>
        <p className="text-muted-foreground mb-8">Save your favorite items here</p>
        <Link to="/vehicles" className="gradient-btn px-8 py-3 text-lg">Browse Vehicles</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">
          My <span className="gradient-text">Wishlist</span>
          <span className="text-lg text-muted-foreground ml-3">({items.length} items)</span>
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="glass-card overflow-hidden hover-lift group">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wider rounded-full bg-primary/90 text-primary-foreground">
                  {item.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-heading font-bold mb-1">{item.name}</h3>
                <p className="text-xl font-heading font-bold gradient-text mb-4">${item.price.toLocaleString()}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleMoveToCart(item)}
                    className="gradient-btn px-4 py-2 text-sm flex items-center gap-2 flex-1 justify-center"
                  >
                    <ShoppingCart className="w-4 h-4" /> Move to Cart
                  </button>
                  <button
                    onClick={() => { removeFromWishlist(item.id); toast.info(`${item.name} removed`); }}
                    className="p-2 rounded-lg border border-border hover:border-destructive hover:text-destructive transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
