// import { useState } from "react";
import FilterNav from "../components/FilterNav";
import Header from "../components/Header";
import Items from "../components/Items";

function Home({ items }) {
  return (
    <>
      <Header />
      <FilterNav />
      <Items items={items} />
    </>
  );
}

export default Home;
