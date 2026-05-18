import { Users, Award, Truck, Headphones } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Customers", value: "50,000+" },
  { icon: Award, label: "Years Experience", value: "15+" },
  { icon: Truck, label: "Vehicles Sold", value: "25,000+" },
  { icon: Headphones, label: "Support", value: "24/7" },
];

const AboutPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-heading font-bold mb-6">
          About <span className="gradient-text">AutoHub</span>
        </h1>
        <div className="glass-card p-8 mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Welcome to AutoHub, your one-stop destination for vehicles, spare parts, and accessories.
            We are passionate about automobiles and committed to providing the best products and services
            to our customers worldwide.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Founded with a vision to revolutionize the automotive e-commerce industry, AutoHub brings
            together a curated collection of premium vehicles, high-performance parts, and stylish
            accessories — all in one seamless platform. Whether you're a first-time buyer or a seasoned
            enthusiast, we've got something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl gradient-btn flex items-center justify-center">
                <s.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-heading font-bold gradient-text">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
