import { useSelector } from "react-redux";
import { getFavorites, StoreType } from "../../redux/Store";
import { ProductType } from "../shop/ProductType";
import FavoriteItems from "./FavoriteItems";

const FavoritesList = () => {
  const products = useSelector<StoreType>(getFavorites) as ProductType[];
  const isTwo = products.length === 3 || products.length === 2;
  return (
    <div>
      <ul
        className={`mt-4 px-6 flex gap-6 items-center ${
          !isTwo && "justify-between"
        }  flex-wrap`}
      >
        {products.map((product) => (
          <FavoriteItems key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
