import SingleItem from "./SingleItem";
function Jewelery({ items }) {
  const jeweleries = items.filter((item) => item.category === "jewelery");

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 my-24 px-24 gap-12">
      {jeweleries.map((item) => (
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

export default Jewelery;