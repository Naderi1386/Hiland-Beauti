import { useNavigate } from "react-router";

export interface HomeProductType {
  discount: number;
  name: string;
  price: number;
  mainPrice: number;
  img: string;
  id: string;
}

interface HomeProductPropsType {
  product: HomeProductType;
}

const HomeProduct = ({ product }: HomeProductPropsType) => {
  const { name, img, id, discount, price, mainPrice } = product;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`product/${id}`);
  };

  return (
    <li
      className="w-[47%] custome_md:w-auto shadow-custome5 cursor-pointer "
      onClick={onClick}
    >
      <div className="relative bg-[#D4D4D4]  rounded-t-lg overflow-hidden">
        <img src={img} className="w-full" alt={`product/${id}`} />
        <span className="absolute top-2 right-2 font-bold text-sm flex justify-center items-center rounded-[100%] w-[47px] h-[47px] bg-customePink-500 text-white">
          {discount}%-
        </span>
      </div>
      <div className="bg-white custome_md:text-[.8rem] lg:text-base text-center py-2 space-y-7 rounded-b-lg">
        <h3 className="transition-all duration-300 hover:text-stone-500">
          {name}
        </h3>
        <div>
          <span className="text-stone-400 line-through font-extralight text-sm flex flex-col gap-2">
            {price} تومان
          </span>
          <span className="font-bold text-customePink-500">
            {mainPrice} تومان
          </span>
        </div>
      </div>
    </li>
  );
};

export default HomeProduct;
