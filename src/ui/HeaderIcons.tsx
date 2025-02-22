import { BsBasket3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  DispatchType,
  getFavoritesCount,
  getIsShowCart,
  getLengthOfCartItems,
  getTotalPricesOfCart,
  StoreType,
} from "../redux/Store";
import { useDispatch } from "react-redux";
import { setIsShow } from "../redux/Cart";

export const HeaderIcons = () => {
  const navigate = useNavigate();
  const favoritesLength = useSelector<StoreType>(getFavoritesCount) as number;
  const isShowCart = useSelector<StoreType>(getIsShowCart) as boolean;
  const dispatch = useDispatch<DispatchType>();
  const cartLength = useSelector<StoreType>(getLengthOfCartItems) as number;
  const cartPrices=useSelector<StoreType>(getTotalPricesOfCart) as number

  return (
    <div className="flex items-start gap-6">
      <div className="relative" onClick={() => navigate("/favorites")}>
        <span className="absolute z-[10000]  font-bold w-[15px] text-[.6rem] left-[-0.5rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
          {favoritesLength}
        </span>

        <IoIosHeartEmpty
          size={24}
          title="لیست علاقه مندی ها"
          className="transition-all duration-200 hover:opacity-70 cursor-pointer"
        />
      </div>
      <div
        onClick={() => dispatch(setIsShow(!isShowCart))}
        className="flex items-center gap-4 transition-all duration-200 hover:opacity-70 cursor-pointer"
      >
        <div className="relative ">
          <span className="absolute   font-bold w-[15px] text-[.6rem] left-[-0.5rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
            {cartLength}
          </span>

          <BsBasket3 size={22} title="سبد خرید" />
        </div>
        <span className="text-sm font-semibold">{cartPrices} تومان</span>
      </div>
    </div>
  );
};
