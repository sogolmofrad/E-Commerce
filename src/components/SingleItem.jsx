import AddToCartButton from "./AddToCartButton";

function SingleItem({ src, title, price, product }) {
  return (
    <div className="card bg-base-100 h-[29rem] shadow-xl rounded-none">
      <figure className="px-10 pt-10">
        <img src={src} alt={title} className="h-[14rem] object-fill" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="font-bold text-cyan-900">{title}</h2>
        <p className="text-orange-600 font-bold">{price} €</p>
        <div className="card-actions">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default SingleItem;
