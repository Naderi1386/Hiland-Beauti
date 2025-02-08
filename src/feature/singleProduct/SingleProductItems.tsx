import { useNavigate } from "react-router"
import { ProductType } from "../shop/ProductType"
import ProductAttributes from "./ProductAttributes"

interface SingleProductItemsPropsType{
    product:ProductType
}

const SingleProductItems = ({product}:SingleProductItemsPropsType) => {
  const {img,id,discount,category,title,mainPrice,price,attributes}=product
  const navigate=useNavigate()
  return (
    <div className="flex gap-4 items-start">
      <div className="w-[35%] relative">
        <img src={img} alt={`img/product/${id}`} className="w-full" />
        <span className="flex justify-center items-center w-[3.5rem] h-[3.5rem] absolute top-4 left-4 bg-customePink-500 text-white rounded-[100%] font-bold ">
          <span>
            {discount}
            {"%"}
            {"-"}
          </span>
        </span>
      </div>
      <div className="w-[75%]">
        <div className="flex items-center gap-2 text-sm mb-6">
          <span onClick={() => navigate("/")} role="button">
            خانه{" "}
          </span>
          <span>/</span>
          <span
            onClick={() => navigate(`/shop?category=${category}`)}
            role="button"
          >
            {category}
          </span>
          <span>/</span>
          <span className="font-bold" role="button">
            {title}
          </span>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-7">{title}</h2>
          <div className="flex items-center gap-2 text-lg mb-7">
            <span className="flex items-center text-gray-500 line-through">
              <span>{mainPrice}</span>
              <span>تومان</span>
            </span>
            <span className="flex items-center text-customePink-500 font-bold">
              <span>{price}</span>
              <span>تومان</span>
            </span>
          </div>
          {attributes && <ProductAttributes attributes={attributes} />}
        </div>
      </div>
    </div>
  );
}

export default SingleProductItems