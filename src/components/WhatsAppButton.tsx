import { MessageCircle } from "lucide-react";
import { WHATSAPP_PHONE } from "@/data/products";

interface WhatsAppButtonProps {
  cakeName: string;
  variant?: "default" | "floating";
  className?: string;
}

const WhatsAppButton = ({ cakeName, variant = "default", className = "" }: WhatsAppButtonProps) => {
  const message = encodeURIComponent(`Hi, I want to order this cake: ${cakeName}`);
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${message}`;

  if (variant === "floating") {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-primary-foreground flex items-center justify-center shadow-elevated hover:scale-110 transition-transform ${className}`}
        aria-label="Order on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    );
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-whatsapp ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>Order on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
