import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex flex-col items-center justify-center">
        <ShoppingBag className="w-20 h-20 text-muted-foreground mb-6" />
        <h1 className="text-3xl font-heading font-bold mb-3">Your Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
        <Link to="/vehicles" className="gradient-btn px-8 py-3 text-lg">Browse Vehicles</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-8">
          Shopping <span className="gradient-text">Cart</span>
        </h1>
        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div key={item.id} className="glass-card p-4 flex gap-4 items-center">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-bold truncate">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <p className="font-heading font-bold gradient-text">${item.price.toLocaleString()}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1.5 rounded-lg border border-border hover:border-primary transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-heading font-bold">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1.5 rounded-lg border border-border hover:border-primary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <p className="font-heading font-bold w-24 text-right">${(item.price * item.quantity).toLocaleString()}</p>
              <button onClick={() => removeFromCart(item.id)} className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="glass-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button onClick={clearCart} className="text-sm text-muted-foreground hover:text-destructive transition-colors">
            Clear Cart
          </button>
          <div className="flex items-center gap-6">
            <span className="text-lg text-muted-foreground">Total:</span>
            <span className="text-3xl font-heading font-bold gradient-text">${totalPrice.toLocaleString()}</span>
            <button className="gradient-btn px-8 py-3 text-lg">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
