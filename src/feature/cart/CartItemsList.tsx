import { useSelector } from "react-redux";
import { DispatchType, getCartItems, StoreType } from "../../redux/Store";
import { CartItemsType, removeCart } from "../../redux/Cart";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const CartItemsList = () => {
  const cartItems = useSelector<StoreType>(getCartItems) as CartItemsType[];
  const dispatch = useDispatch<DispatchType>();
  const navigate = useNavigate();

  return (
    <ul className="divide-y divide-stone-300 grow">
      {cartItems.map((cart, index) => (
        <li className="px-4 py-3 flex items-start gap-4 transition-all duration-150 hover:bg-stone-100 cursor-pointer">
          <div>
            <img
              onClick={() => navigate(`product/${cart.product.id}`)}
              className="w-[4.5rem] h-[4.5rem]"
              src={cart.product.img}
              alt={`cart/img/${cart.product.id}`}
            />
          </div>
          <div className="grow">
            <div className="flex items-center gap-2 justify-between mb-2">
              <h4
                onClick={() => navigate(`product/${cart.product.id}`)}
                className="text-sm font-bold transition-all duration-150 hover:opacity-60 "
              >
                {cart.product.title}
              </h4>
              <div
                onClick={() => dispatch(removeCart(index))}
                className=" transition-all duration-150 hover:bg-white flex items-center justify-center w-[1.3rem] h-[1.3rem] rounded-[100%]"
              >
                <IoMdClose size={15} />
              </div>
            </div>
            <div className="flex items-center gap-1 text-[.83rem] font-bold">
              <span className="text-stone-400">{cart.count}</span>
              <span className="text-stone-400">×</span>
              <span className="text-customePink-500">
                {cart.product.mainPrice} تومان{" "}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItemsList;
