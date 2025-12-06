import { motion } from "framer-motion";
import { Heart, Users, Award, Sparkles } from "lucide-react";
import WhatsAppButton from "@/components/WhatsAppButton";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion for Baking",
      description:
        "Every cake we create is a labor of love, crafted with passion and dedication to perfection.",
    },
    {
      icon: Sparkles,
      title: "Quality Ingredients",
      description:
        "We source only the finest ingredients, from premium Belgian chocolate to fresh organic dairy.",
    },
    {
      icon: Users,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We go above and beyond to make your celebrations special.",
    },
    {
      icon: Award,
      title: "Excellence Always",
      description:
        "Our commitment to excellence has earned us recognition and trust in the community.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="section-padding bg-[var(--gradient-hero)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
                Our Story
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Baking Dreams Into Reality Since 2023
              </h1>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What started as a small home bakery has blossomed into a beloved destination 
                for cake lovers across the city. Our journey began with a simple belief: 
                that the best cakes are made with love, quality ingredients, and an unwavering 
                commitment to excellence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue that tradition, handcrafting each cake with the same passion 
                and care that started it all. From birthday celebrations to wedding extravaganzas, 
                we're honored to be part of your sweetest moments.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?q=80&w=682&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Our bakery"
                className="rounded-3xl shadow-elevated w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-card">
                <p className="font-heading text-3xl font-bold">2+</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our values guide everything we do, from the ingredients we choose to the 
              way we serve our customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-card transition-shadow text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Story Image Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?q=80&w=687&auto=format&fit=crop"
                alt="Baking process"
                className="rounded-3xl shadow-card w-full h-[450px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Crafted with Care, Served with Love
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our team of skilled bakers brings together years of experience and a shared 
                passion for creating unforgettable cakes. Every morning, we start fresh, 
                mixing ingredients by hand and watching our creations come to life.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                From our kitchen to your table, we ensure that every cake meets our exacting 
                standards. Because when it comes to celebrating life's sweetest moments, 
                nothing less than perfection will do.
              </p>
              <WhatsAppButton cakeName="Custom Order Inquiry" />
            </motion.div>
          </div>
        </div>
      </section>

      <WhatsAppButton cakeName="General Inquiry" variant="floating" />
    </div>
  );
};

export default About;
