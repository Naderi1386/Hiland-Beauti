import { useNavigate } from "react-router";
import { ProductType } from "./ProductType";

interface ShopProductItemPropsType {
  product: ProductType;
}

const ShopProductItem = ({ product }: ShopProductItemPropsType) => {
  const { discount, img, price, mainPrice, title ,id} = product;
  const navigate=useNavigate()
  const to=`/product/${id}`
  return (
    <li className="shadow-custome2 basis-full custome_sm:basis-[46%] lg:basis-[30%] xl:basis-[22%] rounded-b-lg  ">
      <div
        onClick={() => navigate(to)}
        className="bg-gray-400 rounded-t-lg overflow-hidden relative cursor-pointer"
      >
        <img src={img} alt={`img/${title}`} className="w-full" />
        <span className="absolute top-2 right-2 bg-customePink-500 font-bold text-xs flex justify-center items-center text-white w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-[100%]">
          {discount}

          {"%"}
          {"-"}
        </span>
      </div>
      <div className="py-3 px-2">
        <h3
          onClick={() => navigate(to)}
          className="text-center mb-8 transition-all duration-200 hover:opacity-60 cursor-pointer text-sm lg:text-base"
        >
          {title}
        </h3>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-[.3rem] md:text-[.69rem] lg:text-xs xl:text-sm">
          <span className="text-stone-300 line-through flex items-center">
            <span>{price}</span>
            <span>{"تومان"}</span>
          </span>
          <span className="font-bold text-customePink-500 flex items-center">
            <span>{mainPrice}</span>
            <span>{"تومان"}</span>
          </span>
        </div>
      </div>
    </li>
  );
};

export default ShopProductItem;
