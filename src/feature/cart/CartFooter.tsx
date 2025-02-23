import { useSelector } from "react-redux";
import { getTotalPricesOfCart, StoreType } from "../../redux/Store";

const CartFooter = () => {
  const totalPrices = useSelector<StoreType>(getTotalPricesOfCart) as number;
  if (totalPrices === 0) return null;
  return (
    <div className="border-t border-solid border-stone-300 px-4 py-3 text-base sm:text-lg ">
      <div className="flex items-center justify-between gap-2">
        <span className="font-bold">جمع جزء:</span>
        <span className="font-bold flex items-center gap-1 text-customePink-500">
          <span>{totalPrices}</span>
          <span>تومان</span>
        </span>
      </div>
    </div>
  );
};

export default CartFooter;
