// import { useState } from "react";
import FilterNav from "../components/FilterNav";
import Header from "../components/Header";
import Items from "../components/Items";

function Home() {
  return (
    <>
      <Header />
      <FilterNav />
      <Items />
    </>
  );
}

export default Home;
