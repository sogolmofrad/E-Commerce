import { Outlet } from "react-router-dom";
import FilterNav from "../components/FilterNav";
import Header from "../components/Header";

function Category() {
  return (
    <>
      <Header />
      <FilterNav />
      <Outlet />
    </>
  );
}

export default Category;
