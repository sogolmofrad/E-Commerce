import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="py-6 px-10   flex justify-between text-slate-800 items-center">
      <Link to="/" className="logo font-bold">
        E-commerce
      </Link>
      <nav>
        <ul className="menu menu-vertical md:menu-horizontal text-slate-800 items-center">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="relative">
              <img
                className="w-[28px]"
                src="icons/icons8-cart-50.png"
                alt="cart icon"
              />
              <span className="absolute top-0 right-0 py-[0.5px] px-[4px] border-2 border-slate-800 rounded-full">
                0
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
