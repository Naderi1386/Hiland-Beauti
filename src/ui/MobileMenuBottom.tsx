import { BsBasket3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  DispatchType,
  getFavoritesCount,
  getIsShowCart,
  getLengthOfCartItems,
  StoreType,
} from "../redux/Store";
import { useDispatch } from "react-redux";
import { setIsShow } from "../redux/Cart";

const MobileMenuBottom = () => {
  const navigate = useNavigate();
  const isShowCart = useSelector<StoreType>(getIsShowCart) as boolean;
  const dispatch = useDispatch<DispatchType>();
  const favoritesLength = useSelector<StoreType>(getFavoritesCount) as number;
  const cartLength = useSelector<StoreType>(getLengthOfCartItems) as number;

  return (
    <div className="bg-white lg:hidden  shadow-custome1 fixed bottom-0 left-0 right-0 z-[100000]">
      <ul className="text-[.75rem] pt-2 pb-3 px-10 flex justify-between items-center">
        <li className="inline-flex cursor-pointer flex-col   items-center transition-all duration-200 hover:opacity-70 ">
          <IoStorefrontOutline size={22} />
          <p>فروشگاه</p>
        </li>
        <li className="cursor-pointer inline-block">
          <div className="relative">
            <span className="absolute z-[10000]  font-bold w-[15px] text-[.6rem] left-[0.35rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
              {favoritesLength}
            </span>
            <div
              className="flex flex-col transition-all duration-200 hover:opacity-70  items-center"
              onClick={() => navigate("/favorites")}
            >
              <IoIosHeartEmpty
                size={24}
                title="لیست علاقه مندی ها"
                className="transition-all duration-200 hover:opacity-70 cursor-pointer"
              />

              <p>علاقه مندی</p>
            </div>
          </div>
        </li>
        <li
          onClick={() => dispatch(setIsShow(!isShowCart))}
          className=" cursor-pointer inline-block   "
        >
          <div className="relative">
            <span className="absolute z-[10000]   font-bold w-[15px] text-[.6rem] left-[.2rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
              {cartLength}
            </span>
            <div className="flex flex-col transition-all duration-200 hover:opacity-70  items-center">
              <BsBasket3 size={22} title="سبد خرید" />
              <p>سبد خرید</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenuBottom;
