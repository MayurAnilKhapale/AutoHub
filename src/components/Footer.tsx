import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="text-2xl font-heading font-bold gradient-text">AUTOHUB</span>
            <p className="text-muted-foreground text-sm mt-3">
              Your one-stop destination for vehicles, spare parts, and accessories.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              {["/vehicles", "/parts", "/accessories", "/about", "/contact"].map((to) => (
                <Link key={to} to={to} className="block text-sm text-muted-foreground hover:text-primary transition-colors capitalize">
                  {to.replace("/", "")}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Categories</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Cars</p><p>Bikes</p><p>SUVs</p><p>Electric Vehicles</p><p>Auto Parts</p>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-bold mb-4 text-sm uppercase tracking-wider">Connect</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Instagram</p><p>Twitter / X</p><p>Facebook</p><p>YouTube</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border/50 pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} AutoHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
