import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-heading font-bold mb-2">
          Get In <span className="gradient-text">Touch</span>
        </h1>
        <p className="text-muted-foreground mb-10">We'd love to hear from you</p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Mail, label: "Email", value: "hello@autohub.com" },
            { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: MapPin, label: "Address", value: "123 Auto Drive, Detroit, MI" },
          ].map((info) => (
            <div key={info.label} className="glass-card p-6 text-center hover-lift">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl gradient-btn flex items-center justify-center">
                <info.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold mb-1">{info.label}</h3>
              <p className="text-sm text-muted-foreground">{info.value}</p>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <input
              type="text" placeholder="Your Name" required
              value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              type="email" placeholder="Your Email" required
              value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
          <input
            type="tel" placeholder="Phone Number"
            value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <textarea
            placeholder="Your Message" rows={5} required
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
          />
          <button type="submit" className="gradient-btn px-8 py-3 text-lg flex items-center gap-2 mx-auto">
            <Send className="w-5 h-5" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
