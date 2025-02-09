import { useState } from "react";
import { ProductType } from "../shop/ProductType";

interface ProductAddToCartPropsType {
  product: ProductType;
}

const ProductAddToCart = ({ product }: ProductAddToCartPropsType) => {
  const [count, setCount] = useState(0);
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
      <button className="py-3 px-4 rounded-3xl text-sm text-white bg-[#aa3a8e]">
        افزودن به سبد خرید
      </button>
    </div>
  );
};

export default ProductAddToCart;
