import { Link } from "react-router-dom";

function camelCase(str) {
  const strArr = str.split("");
  const [firstLetter, ...rest] = strArr;
  const restLowerCase = rest.map((letter) => letter.toLowerCase());
  const result = [firstLetter.toUpperCase(), ...restLowerCase];
  return result.join("");
}

function FilterNav() {
  return (
    <div className="text-center text-slate-800 mt-8">
      <h1 className="uppercase font-semibold">our offers</h1>
      <div className="flex justify-between w-[90%] md:p-x-[1rem] md:w-[50%] xl:w-[35%] mx-auto mt-8">
        <Link
          to="/"
          className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900 hover:font-semibold"
        >
          All
        </Link>
        <Link
          to="/category/electronics"
          className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900 hover:font-semibold"
        >
          Electronics
        </Link>
        <Link
          to="/category/jewelery"
          className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900 hover:font-semibold"
        >
          Jewelery
        </Link>
        <Link
          to="/category/mensClothing"
          className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900 hover:font-semibold"
        >
          Men&apos;s Clothing
        </Link>
        <Link
          to="/category/womensClothing"
          className="hover:border-b-2 hover:text-cyan-900 hover:border-cyan-900 hover:font-semibold"
        >
          Women&apos;s Clothing
        </Link>
      </div>
    </div>
  );
}

export default FilterNav;
