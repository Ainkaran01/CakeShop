import { useState } from "react";
import { motion } from "framer-motion";
import { cakes } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";

const Products = () => {
  const categories = ["All", ...Array.from(new Set(cakes.map((cake) => cake.category)))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCakes =
    activeCategory === "All"
      ? cakes
      : cakes.filter((cake) => cake.category === activeCategory);

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
              Our Collection
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Cakes
            </h1>
            <p className="text-muted-foreground">
              From classic flavors to unique creations, find the perfect cake for every 
              occasion. Each one is handcrafted with love and premium ingredients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Products */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-soft"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredCakes.map((cake, index) => (
              <ProductCard key={cake.id} cake={cake} index={index} />
            ))}
          </motion.div>

          {filteredCakes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No cakes found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-8">
              We love creating custom cakes! Tell us your vision and we'll bring it to life.
            </p>
            <WhatsAppButton cakeName="Custom Cake Design" />
          </motion.div>
        </div>
      </section>

      <WhatsAppButton cakeName="General Inquiry" variant="floating" />
    </div>
  );
};

export default Products;
