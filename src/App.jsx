import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartItemsFetcher from "./components/CartItemsFetcher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartItemsFetcher />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
