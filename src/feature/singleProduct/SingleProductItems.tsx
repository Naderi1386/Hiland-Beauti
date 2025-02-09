import { useNavigate } from "react-router"
import { ProductType } from "../shop/ProductType"
import ProductAttributes from "./ProductAttributes"
import ProductAddToCart from "./ProductAddToCart"
import ProductAddToFav from "./ProductAddToFav"
import ProductCaption from "./ProductCaption"

interface SingleProductItemsPropsType{
    product:ProductType
}

const SingleProductItems = ({product}:SingleProductItemsPropsType) => {
  const {img,id,discount,category,title,mainPrice,price,attributes,caption}=product
  const navigate=useNavigate()
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start">
      <div className="w-full md:w-[50%] lg:w-[35%] relative">
        <img src={img} alt={`img/product/${id}`} className="w-full" />
        <span className="flex justify-center items-center w-[3.5rem] h-[3.5rem] absolute top-4 left-4 bg-customePink-500 text-white rounded-[100%] font-bold ">
          <span>
            {discount}
            {"%"}
            {"-"}
          </span>
        </span>
      </div>
      <div className="w-full md:w-[50%] lg:w-[75%]">
        <div className="flex items-center gap-2 text-sm mb-4">
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
          <h2 className="font-bold text-lg mb-4">{title}</h2>
          <div className="flex items-center gap-2 text-lg mb-5">
            <span className="flex items-center text-gray-500 line-through">
              <span>{mainPrice}</span>
              <span>تومان</span>
            </span>
            <span className="flex items-center text-customePink-500 font-bold">
              <span>{price}</span>
              <span>تومان</span>
            </span>
          </div>
          {attributes && !caption && (
            <ProductAttributes attributes={attributes} />
          )}
          {caption && <ProductCaption caption={caption} />}

          <div className="mt-4 pb-4 border-b border-solid border-stone-300">
            <ProductAddToCart product={product} />
            <ProductAddToFav product={product} />
            <span className="flex items-center gap-2 mt-1 text-sm">
              <span className="block font-bold">دسته :</span>
              <span className="block ">{category}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductItems