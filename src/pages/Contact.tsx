import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_PHONE } from "@/data/products";
import WhatsAppButton from "@/components/WhatsAppButton";
import { title } from "process";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Sri Inkaran Bakery", "Dutch Road Chavakachcheri"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+94 778235200"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["thadsajinikirubakaran@gmail.com"],
    },
    {
      icon: Clock,
      title: "Opening Hours",
      details: ["Mon - Sat: 8AM - 9PM", "Sunday: 9AM - 9PM"],
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Get in Touch
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground">
              Have a question, custom order request, or just want to say hello? 
              We'd love to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-2xl border border-border text-center hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-muted-foreground text-sm">
                    {detail}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>

          {/* WhatsApp CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-whatsapp/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-whatsapp flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                    Order on WhatsApp
                  </h2>
                </div>
                <p className="text-muted-foreground mb-6">
                  The fastest way to reach us! Send us a message on WhatsApp for quick 
                  responses, custom orders, and real-time updates on your order status.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 bg-whatsapp rounded-full" />
                    Instant responses during business hours
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 bg-whatsapp rounded-full" />
                    Share photos for custom cake designs
                  </li>
                  <li className="flex items-center gap-2 text-foreground">
                    <span className="w-1.5 h-1.5 bg-whatsapp rounded-full" />
                    Get order confirmations and updates
                  </li>
                </ul>
                <WhatsAppButton cakeName="New Order Inquiry" />
              </div>

              <div className="hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=350&fit=crop"
                  alt="Delicious cakes"
                  className="rounded-2xl shadow-card w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map / Location Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Find Our Bakery
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at our cozy bakery location. We love meeting our customers in person!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl overflow-hidden border border-border shadow-card"
          >
            <div className="aspect-[21/9] bg-muted flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">
                Sri Inkaran Bakery , Dutch Road Chavakachcheri
                </p>
                <a
                  href="https://maps.app.goo.gl/JqXVSnnCz6cTC5rm6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <WhatsAppButton cakeName="General Inquiry" variant="floating" />
    </div>
  );
};

export default Contact;
