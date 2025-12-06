export interface Cake {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const cakes: Cake[] = [
  {
    id: 1,
    name: "Chocolate Truffle",
    price: 1500,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    description: "Rich chocolate layered cake with Belgian truffle",
    category: "Chocolate",
  },
  {
    id: 2,
    name: "Red Velvet Dream",
    price: 1800,
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&h=300&fit=crop",
    description: "Classic red velvet with cream cheese frosting",
    category: "Classic",
  },
  {
    id: 3,
    name: "Strawberry Bliss",
    price: 1600,
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop",
    description: "Fresh strawberry layers with vanilla cream",
    category: "Fruit",
  },
  {
    id: 4,
    name: "Caramel Delight",
    price: 1700,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&h=300&fit=crop",
    description: "Salted caramel drizzle on moist vanilla sponge",
    category: "Classic",
  },
  {
    id: 5,
    name: "Blueberry Cheesecake",
    price: 2000,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=300&fit=crop",
    description: "Creamy cheesecake topped with fresh blueberries",
    category: "Cheesecake",
  },
  {
    id: 6,
    name: "Tiramisu Layer",
    price: 1900,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    description: "Coffee-soaked layers with mascarpone cream",
    category: "Coffee",
  },
  {
    id: 7,
    name: "Mango Paradise",
    price: 1650,
    image: "https://images.unsplash.com/photo-1557925923-cd4648e211a0?w=400&h=300&fit=crop",
    description: "Tropical mango mousse with sponge layers",
    category: "Fruit",
  },
  {
    id: 8,
    name: "Black Forest",
    price: 1750,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop",
    description: "Classic chocolate with cherries and cream",
    category: "Chocolate",
  },
];

export const WHATSAPP_PHONE =import.meta.env.VITE_WHATSAPP_PHONE; 
