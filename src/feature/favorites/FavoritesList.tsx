import { useSelector } from "react-redux";
import { getFavorites, StoreType } from "../../redux/Store";
import { ProductType } from "../shop/ProductType";
import FavoriteItems from "./FavoriteItems";
import { useState } from "react";

const FavoritesList = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const products = useSelector<StoreType>(getFavorites) as ProductType[];
  const isTwo = products.length === 3 || products.length === 2;
  console.log(selected);
  

  return (
    <div>
      <ul
        className={`mt-4 px-6 flex gap-6 items-center ${
          !isTwo && "justify-between"
        }  flex-wrap`}
      >
        {products.map((product) => (
          <FavoriteItems
            onUnSelect={(id: string) => {
              setSelected((old) => old.filter((i) => i !== id));
            }}
            selectedProducts={selected}
            onSelect={(id: string) => {
              setSelected((old) => [...old, id]);
            }}
            key={product.id}
            product={product}
          />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
