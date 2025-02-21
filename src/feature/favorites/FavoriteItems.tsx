import { useNavigate } from "react-router";
import { ProductType } from "../shop/ProductType";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import { removeFavorite } from "../../redux/Favorite";
import { useEffect, useState } from "react";

interface FavoriteItemsPropsType {
  product: ProductType;
  onSelect: (id: string) => void;
  selectedProducts: string[];
  onUnSelect: (id: string) => void;
}

const FavoriteItems = ({
  product,
  onSelect,
  selectedProducts,
  onUnSelect,
}: FavoriteItemsPropsType) => {
  const { id, title, img, discount, price, mainPrice } = product;
  const isChecked = selectedProducts.includes(id);
  const [checked, setChecked] = useState(isChecked);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClick = () => navigate(`/product/${id}`);

  const handleChange = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  useEffect(() => {
    if (checked !== isChecked) {
      setChecked(isChecked);
    }
  }, [isChecked]);

  useEffect(() => {
    if (checked && !isChecked) {
      onSelect(id);
    } else if (!checked && isChecked) {
      onUnSelect(id);
    }
  }, [checked, id, isChecked, onSelect, onUnSelect]);

  return (
    <div className="w-full sm:w-[48%] lg:w-[31%] xl:w-[22.5%]">
      <div className="flex items-center justify-between gap-2">
        <div
          onClick={() => dispatch(removeFavorite(id))}
          className="flex items-center cursor-pointer transition-all duration-150 hover:opacity-70"
        >
          <IoMdClose />
          <span>حذف</span>
        </div>
        <div>
          <input type="checkbox" checked={checked} onChange={handleChange} />
        </div>
      </div>

      <li
        className="cursor-pointer shadow-custome6 rounded-md mt-2"
        onClick={onClick}
      >
        <div className="bg-gray-400 rounded-t-lg overflow-hidden relative cursor-pointer">
          <img src={img} alt={`img/${title}`} className="w-full" />
          <span className="absolute top-2 right-2 bg-customePink-500 font-bold text-xs flex justify-center items-center text-white w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] rounded-[100%]">
            {discount}%
          </span>
        </div>
        <div className="py-3 px-2">
          <h3 className="text-center mb-8 transition-all duration-200 hover:opacity-60 cursor-pointer text-sm lg:text-base">
            {title}
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-[.3rem] md:text-[.69rem] lg:text-xs xl:text-sm">
            <span className="text-stone-300 line-through flex items-center">
              <span>{price}</span>
              <span>تومان</span>
            </span>
            <span className="font-bold text-customePink-500 flex items-center">
              <span>{mainPrice}</span>
              <span>تومان</span>
            </span>
          </div>
        </div>
      </li>
    </div>
  );
};

export default FavoriteItems;
