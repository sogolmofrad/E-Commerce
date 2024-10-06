import { useState, useEffect } from "react";
import SingleItem from "./SingleItem";

function Items() {
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
    <div className="grid md:grid-cols-4 my-24 px-24 gap-12">
      {items.map((item) => (
        <SingleItem
          key={item.id}
          product={item} // Passing the whole product
          src={item.image}
          title={item.title}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default Items;
