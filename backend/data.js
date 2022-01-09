import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Aaron",
      email: "admingyg@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
        name: "BarronJ",
        email: "usergyg@example.com",
        password: bcrypt.hashSync("1234", 8),
        isAdmin: false,
      }
  ],
  products: [
    {
      name: "Nike Slim Suit",
      category: "wears",
      image: "/images/product-1.jpg",
      price: 35000,
      countInStock: 10,
      brand: "Nike",
      rating: 3,
      numReviews: 10,
      description: "high quality product",
    },

    {
      name: "Cammon HD Camera",
      category: "accesories",
      image: "/images/product-2.jpg",
      price: 200000,
      countInStock: 20,
      brand: "Nike-accesories",
      rating: 4.0,
      numReviews: 5,
      description: "high quality product",
    },
    {
      name: "Nice Snickers",
      category: "wears",
      image: "/images/product-3.jpg",
      price: 7000,
      countInStock: 0,
      brand: "Nike",
      rating: 4.0,
      numReviews: 17,
      description: "high quality product",
    },
    {
      name: "Rolex Watch",
      category: "wears",
      image: "/images/product-4.jpg",
      price: 65000,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "high quaity product",
    },
    {
      name: "Interrior Decoration",
      category: "homes",
      image: "/images/product-5.jpg",
      price: 950000,
      countInStock: 5,
      brand: "Nike-homes",
      rating: 5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Inner Room Bulb",
      category: "homes",
      image: "/images/product-6.jpg",
      price: 2200,
      countInStock: 0,
      brand: "Nike-homes",
      rating: 2,
      numReviews: 15,
      description: "high quality product",
    },
  ],
};

export default data;
