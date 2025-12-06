import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, Heart, Award } from "lucide-react";
import { cakes } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const featuredCakes = cakes.slice(0, 4);

  const features = [
    {
      icon: Star,
      title: "Premium Quality",
      description: "Only the finest ingredients in every creation",
    },
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Baked fresh every morning for ultimate freshness",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Handcrafted with passion and care",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in baking",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-light/50 rounded-full">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                <span className="text-sm font-medium text-foreground/80">Freshly Baked Daily</span>
              </div>

              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Indulge in{" "}
                <span className="text-primary">Sweet</span>{" "}
                Perfection
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Discover our exquisite collection of handcrafted cakes, made with premium 
                ingredients and baked with love. Every slice tells a story of sweetness.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-soft"
                >
                  Explore Cakes
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <WhatsAppButton cakeName="Custom Cake Order" className="justify-center" />
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-4">
                <div>
                  <p className="font-heading text-3xl font-bold text-foreground">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">Cake Varieties</p>
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold text-foreground">5★</p>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-square">
                <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop"
                  alt="Delicious Chocolate Cake"
                  className="relative z-10 w-full h-full object-cover rounded-3xl shadow-elevated animate-float"
                />
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/20 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-background rounded-2xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              Our Bestsellers
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Cakes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our most loved creations, handpicked for their exceptional taste 
              and stunning presentation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCakes.map((cake, index) => (
              <ProductCard key={cake.id} cake={cake} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all"
            >
              View All Cakes
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-primary rounded-3xl p-8 md:p-16 overflow-hidden text-center"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Order Your Dream Cake?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Contact us on WhatsApp for custom orders, special requests, or any questions. 
                We're here to make your celebrations sweeter!
              </p>
              <WhatsAppButton 
                cakeName="Custom Cake Inquiry" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton cakeName="General Inquiry" variant="floating" />
    </div>
  );
};

export default Index;
