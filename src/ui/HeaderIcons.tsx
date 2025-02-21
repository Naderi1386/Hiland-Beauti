import { BsBasket3 } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getFavoritesCount, StoreType } from "../redux/Store";

export const HeaderIcons = () => {
  const navigate=useNavigate()
  const favoritesLength=useSelector<StoreType>(getFavoritesCount) as number
  return (
    <div className="flex items-start gap-6">
      <div className="relative" onClick={()=>navigate("/favorites")}>
        <span className="absolute z-[10000]  font-bold w-[15px] text-[.6rem] left-[-0.5rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
          {favoritesLength}
        </span>

        <IoIosHeartEmpty
          size={24}
          title="لیست علاقه مندی ها"
          className="transition-all duration-200 hover:opacity-70 cursor-pointer"
        />
      </div>
      <div className="flex items-center gap-4 transition-all duration-200 hover:opacity-70 cursor-pointer">
        <div className="relative ">
          <span className="absolute   font-bold w-[15px] text-[.6rem] left-[-0.5rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
            0
          </span>

          <BsBasket3 size={22} title="سبد خرید" />
        </div>
        <span className="text-sm font-semibold">0 تومان</span>
      </div>
    </div>
  );
}
