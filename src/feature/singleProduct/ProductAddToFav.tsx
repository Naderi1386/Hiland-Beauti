import { useDispatch } from "react-redux";
import { ProductType } from "../shop/ProductType";
import { IoMdHeartEmpty } from "react-icons/io";
import { DispatchType, getFavorite, StoreType } from "../../redux/Store";
import { addFavorite } from "../../redux/Favorite";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

interface ProductAddToFavPropsType {
  product: ProductType;
}

const ProductAddToFav = ({ product }: ProductAddToFavPropsType) => {
  const dispatch = useDispatch<DispatchType>();
  const { id } = product;
  const findProduct = useSelector<StoreType>(getFavorite(id));
  const navigate = useNavigate();
  return (
    <div className="mt-4 ">
      {findProduct ? (
        <div
          onClick={() => navigate("/favorites")}
          className="inline-flex items-center gap-1 cursor-pointer transition-all duration-200 hover:opacity-70"
        >
          <IoMdHeartEmpty size={22} />
          <span>نمایش لیست علاقه مندی</span>
        </div>
      ) : (
        <div
          onClick={() => dispatch(addFavorite(product))}
          className="inline-flex items-center gap-1 cursor-pointer transition-all duration-200 hover:opacity-70"
        >
          <IoMdHeartEmpty size={22} />
          <span>افزودن به علاقه مندی</span>
        </div>
      )}
    </div>
  );
};

export default ProductAddToFav;
