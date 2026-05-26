import React from "react";
import "./App.css";

function App() {
  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    },
    {
      id: 2,
      name: "Headphones",
      price: "₹1,299",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
    },
    {
      id: 3,
      name: "Shoes",
      price: "₹1,999",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    },
    {
      id: 4,
      name: "Laptop Bag",
      price: "₹899",
      image:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400",
    },
  ];

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1>MyShop</h1>

        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <h2>Welcome to MyShop</h2>
        <p>Best products at affordable prices</p>
        <button>Shop Now</button>
      </div>

      {/* Products */}
      <div className="products">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

            <button>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer>
        <p>© 2026 MyShop | Made by Student</p>
      </footer>
    </div>
  );
}


