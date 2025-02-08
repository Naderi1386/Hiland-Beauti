import { useState } from "react";
import { Main_Products } from "../feature/home/HomeAmazingProductList";
import HomeMiniProduct from "../feature/home/HomeMiniProduct";

const ProductsBox = () => {
  const [page, setPage] = useState(1);
  const [opacity, setOpacity] = useState(true);
  const products =
    page === 1
      ? Main_Products.filter((p, i) => i <= 4)
      : Main_Products.filter((p, i) => i > 1);
  return (
    <div>
      <ul
        className={`flex flex-wrap custome_md:flex-nowrap justify-center  items-center gap-[1.82rem] custome_md:justify-between transition-all duration-200 ${
          opacity ? "opacity-100" : "opacity-0"
        }`}
      >
        {products.map((product, index) => (
          <HomeMiniProduct key={index} product={product} />
        ))}
      </ul>
      <div className="flex items-center justify-center gap-2 pt-4">
        {[1, 2].map((num) => (
          <span
            onClick={() => {
              if (page !== num) {
                setOpacity(false);
                setTimeout(() => {
                  setPage(num);
                  setOpacity(true);
                }, 200);
              }
            }}
            key={num}
            className={`w-[10px] h-[10px]   rounded-[100%] cursor-pointer  ${
              page === num
                ? "bg-black"
                : "bg-transparent transition-all duration-100 border-2 border-solid border-stone-500 hover:border-black"
            } `}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ProductsBox;
