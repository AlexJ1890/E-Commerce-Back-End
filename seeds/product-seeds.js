const { Product } = require("../models");

const productData = [
  {
    product_name: "Plain T-Shirt",
    price: 19.99,
    stock: 19,
    category_id: 1,
  },
  {
    product_name: "Running Sneakers",
    price: 105.0,
    stock: 12,
    category_id: 5,
  },
  {
    product_name: "Branded Baseball Hat",
    price: 29.99,
    stock: 17,
    category_id: 4,
  },
  {
    product_name: "Top 40 Music Compilation Vinyl Record",
    price: 15.99,
    stock: 47,
    category_id: 3,
  },
  {
    product_name: "Cargo Shorts",
    price: 39.99,
    stock: 40,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
