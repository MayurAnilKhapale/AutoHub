import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/parts", label: "Parts" },
  { to: "/accessories", label: "Accessories" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-heading font-bold gradient-text tracking-wider">AUTOHUB</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/wishlist" className="relative p-2 hover:text-primary transition-colors">
            <Heart className={`w-5 h-5 ${wishlistCount > 0 ? "fill-primary text-primary" : ""}`} />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-btn text-xs flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative p-2 hover:text-primary transition-colors">
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full gradient-btn text-xs flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-border/50 py-4 px-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block text-sm font-medium tracking-wide uppercase py-2 transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/wishlist" onClick={() => setMobileOpen(false)} className="block text-sm font-medium tracking-wide uppercase py-2 text-muted-foreground hover:text-primary transition-colors">
            Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
