export interface HomeProductType {
  discount: number;
  name: string;
  price: number;
  mainPrice: number;
  img: string;
  id: string;
}

interface HomeMiniProductPropsType {
  product: HomeProductType;
}

const HomeMiniProduct = ({ product }: HomeMiniProductPropsType) => {
  const { name, img, id, discount, price, mainPrice } = product;
  return (
    <li className="w-[45.5%] custome_md:w-auto shadow-custome5 cursor-pointer rounded-lg ">
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

export default HomeMiniProduct;
