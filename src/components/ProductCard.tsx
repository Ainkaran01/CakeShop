import { motion } from "framer-motion";
import { Cake } from "@/data/products";
import WhatsAppButton from "./WhatsAppButton";

interface ProductCardProps {
  cake: Cake;
  index?: number;
}

const ProductCard = ({ cake, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card rounded-2xl overflow-hidden card-hover border border-border"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={cake.image}
          alt={cake.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
          {cake.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {cake.name}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {cake.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs text-muted-foreground uppercase tracking-wide">Price</span>
            <p className="font-heading text-xl font-bold text-primary">
              LKR {cake.price.toLocaleString()}
            </p>
          </div>
          <WhatsAppButton cakeName={cake.name }  className="text-sm px-4 py-2" />
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
