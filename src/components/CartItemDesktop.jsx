
const CartItemDesktop = ({ item, onRemove, onDecrease, onIncrease }) => {
  return (
    <tr className="border-t border-slate-200">
      {/* Delete button */}
      <td className="px-6 py-4" width="5%">
        <div className="flex justify-center">
          <button className="text-slate-800 text-xl p-2" onClick={onRemove}>
            &times;
          </button>
        </div>
      </td>

      {/* Picture */}
      <td className="pr-24 py-6" width="5%">
      <div className="flex items-center w-[80px] h-[100px] rounded-sm py-2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full bg-white object-contain"
          />
        </div>
      </td>

      {/* Title and Description */}
      <td className="px-6 ml-8 py-6 text-left" width="30%">
        <div className="font-semibold text-sm text-slate-800">{item.title}</div>
        <div className="text-sm mt-2 line-clamp-3">
          {item.description || "No description available."}
        </div>
      </td>

      {/* Counter */}
      <td className="pl-24 py-6" width="5%">
      <div className="flex items-center bg-slate-100 rounded-sm w-24 h-8">
          <button
            className="px-3 py-1 text-cyan-600 font-semibold focus:outline-none"
            onClick={onDecrease}
          >
            –
          </button>
          <span className="mx-3 font-medium text-center" style={{ minWidth: "8px" }}>{item.quantity}</span>
          <button
            className="px-3 py-1 text-cyan-600 font-semibold focus:outline-none"
            onClick={onIncrease}
          >
            +
          </button>
        </div>
      </td>

      {/* Price */}
      <td className="pl-24 py-4 font-semibold text-base text-slate-800" width="2%">
        {item.price} €
      </td>
    </tr>
  );
};

export default CartItemDesktop;


