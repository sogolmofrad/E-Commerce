import { useEffect, useState } from "react";

function camelCase(str) {
  const strArr = str.split("");
  const [firstLetter, ...rest] = strArr;
  const restLowerCase = rest.map((letter) => letter.toLowerCase());
  const result = [firstLetter.toUpperCase(), ...restLowerCase];
  return result.join("");
}

function FilterNav() {
  const [categories, setCategories] = useState([]);
  useEffect(function () {
    async function fetchCategories() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/categories`);
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        throw new Error(error.message);
      }
    }
    fetchCategories();
  }, []);

  return (
    <div className="text-center text-slate-800 mt-8">
      <h1 className="uppercase font-semibold">our offers</h1>
      <div className="flex justify-between w-[35%] mx-auto mt-8">
        <button className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900">
          All
        </button>
        {categories.map((category) => (
          <button
            className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900 hover:font-semibold"
            key={category}
          >
            {camelCase(category)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterNav;
