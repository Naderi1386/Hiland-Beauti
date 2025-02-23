import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/Store";
import { setIsShow } from "../../redux/Cart";

const CartHeader = () => {
  const dispatch = useDispatch<DispatchType>();
  const onClick = () => {
    dispatch(setIsShow(false));
  };
  return (
    <div className="py-5 px-4 flex items-center gap-2 justify-between border-b border-solid border-stone-300">
      <h3 className="font-bold text-lg"> ُسبد خرید</h3>
      <div
        onClick={onClick}
        className="flex items-center gap-1 cursor-pointer transition-all duration-200 hover:opacity-60"
      >
        <IoMdClose size={22} />
        <span className="block">بستن</span>
      </div>
    </div>
  );
};

export default CartHeader;
