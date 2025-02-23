import { BsBasket3 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { DispatchType, getLengthOfCartItems, StoreType } from "../redux/Store";
import { useDispatch } from "react-redux";
import { setIsShow } from "../redux/Cart";

const CreateUser = () => {
  const cartLength = useSelector<StoreType>(getLengthOfCartItems) as number;
  const dispatch = useDispatch<DispatchType>();

  return (
    <div>
      <div className="flex lg:hidden gap-3">
        <div className="relative " onClick={() => dispatch(setIsShow(true))}>
          <span className="absolute z-[10000] w-[15px] text-[.7rem] left-[-0.5rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
            {cartLength}
          </span>

          <BsBasket3
            size={22}
            title="سبد خرید"
            className="transition-all duration-200 hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
