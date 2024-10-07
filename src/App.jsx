import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartItemsFetcher from "./components/CartItemsFetcher";
import Category from "./pages/Category";

import Electronics from "./components/Electronics";
import MensClothings from "./components/MensClothings";
import Jewelery from "./components/Jewelery";
import WomensClothings from "./components/WomensClothings";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching items:", error.message);
      }
    }
    fetchItems();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home items={items} />} />
        <Route path="/cart" element={<CartItemsFetcher />} />
        <Route path="/category" element={<Category />}>
          <Route path="electronics" element={<Electronics items={items} />} />
          <Route
            path="mensClothing"
            element={<MensClothings items={items} />}
          />
          <Route
            path="womensClothing"
            element={<WomensClothings items={items} />}
          />
          <Route path="jewelery" element={<Jewelery items={items} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
