import { ProductType } from "../shop/ProductType"
import { IoMdHeartEmpty } from "react-icons/io";

interface ProductAddToFavPropsType{
    product:ProductType
}

const ProductAddToFav = ({product}:ProductAddToFavPropsType) => {
  return (
    <div className="mt-4 ">
      <div className="inline-flex items-center gap-1 cursor-pointer transition-all duration-200 hover:opacity-70">
        <IoMdHeartEmpty size={22} />
        <span>افزودن به علاقه مندی</span>
      </div>
    </div>
  );
}

export default ProductAddToFav