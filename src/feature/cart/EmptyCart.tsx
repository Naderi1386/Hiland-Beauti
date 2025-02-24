import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DispatchType } from "../../redux/Store";
import { setIsShow } from "../../redux/Cart";

const EmptyCart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<DispatchType>();

  return (
    <div className="pt-8 px-4 flex flex-col gap-4 items-center">
      <h3 className="font-bold text-[1.05rem] ">
        هیچ محصولی در سبد خرید نیست.
      </h3>
      <button
        onClick={() => {
          dispatch(setIsShow(false));
          navigate("/shop");
        }}
        className="rounded-3xl text-white py-2 px-5 bg-[#aa3a8e] text-sm"
      >
        بازگشت به فروشگاه
      </button>
    </div>
  );
};

export default EmptyCart;
