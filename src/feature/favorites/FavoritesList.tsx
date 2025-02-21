import { useSelector } from "react-redux";
import { DispatchType, getFavorites, StoreType } from "../../redux/Store";
import { ProductType } from "../shop/ProductType";
import FavoriteItems from "./FavoriteItems";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeAll, removeSomeFavorites } from "../../redux/Favorite";
import { Link } from "react-router";

const FavoritesList = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const products = useSelector<StoreType>(getFavorites) as ProductType[];
  const dispatch = useDispatch<DispatchType>();
  const isTwo = products.length === 3 || products.length === 2;
  const onRemove = () => {
    dispatch(removeSomeFavorites(selected));
    setSelected([]);
  };
  const onRemoveAll = () => {
    dispatch(removeAll());
    setSelected([]);
  };
  if(products.length===0) return <div className="text-center pt-8 pb-12">
    <h2 className="text-lg font-bold mb-2 ">محصولی در لیست علاقه مندی شما وجود ندارد</h2>
    <Link to={'/shop'} className="text-sm underline text-customePink-500">مشاهده محصولات</Link>

  </div>

  return (
    <div>
      {selected.length > 0 && (
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <div className="bg-gray-100 py-2 px-3 flex items-center gap-4 justify-start">
            <div
              onClick={onRemove}
              className="inline-flex items-center cursor-pointer transition-all duration-150 hover:opacity-70 "
            >
              <IoMdClose />
              <span>حذف</span>
            </div>
            <div
              onClick={onRemoveAll}
              className="inline-flex items-center cursor-pointer transition-all duration-150 hover:opacity-70 "
            >
              <IoMdClose />
              <span>حذف همه</span>
            </div>
          </div>
        </motion.div>
      )}
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
