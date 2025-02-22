import { useState } from "react";
import { ProductType } from "../shop/ProductType";
import { useDispatch } from "react-redux";
import { DispatchType, getCart, StoreType } from "../../redux/Store";
import { addToCart, CartItemsType, editCart } from "../../redux/Cart";
import { useSelector } from "react-redux";

interface ProductAddToCartPropsType {
  product: ProductType;
}

const ProductAddToCart = ({ product }: ProductAddToCartPropsType) => {
  const [count, setCount] = useState(0);
  const { id } = product;
  const cart = useSelector<StoreType>(getCart(id as string)) as CartItemsType;
  const dispatch = useDispatch<DispatchType>();
  const onAddToCart = () => {
    if (count !== 0 && !cart) {
      dispatch(addToCart({ count, product }));
    } else if (count !== 0 && cart) {
      dispatch(editCart({ count, id }));
    }
  };
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center text-sm">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="py-2 px-3 transition-all duration-150 hover:border-customePink-500 hover:text-white hover:bg-customePink-500 rounded-r-md border border-solid border-stone-300/70 bg-white text-stone-500"
        >
          +
        </button>
        <span className="py-2 px-3 border border-solid border-stone-300/70 text-stone-500">
          {count}
        </span>
        <button
          onClick={() => {
            if (count > 1) setCount((count) => count - 1);
          }}
          className="py-2 px-3 transition-all duration-150 hover:border-customePink-500 hover:text-white hover:bg-customePink-500 rounded-l-md border border-solid border-stone-300/70 bg-white text-stone-500"
        >
          -
        </button>
      </div>
      <button
        onClick={onAddToCart}
        className=" text-xs py-3 px-4 rounded-3xl sm:text-sm text-white bg-[#aa3a8e]"
      >
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default ProductAddToCart;
