import { useState } from "react";
import HomeProduct, { HomeProductType } from "./HomeProduct";

export const Main_Products: HomeProductType[] = [
  {
    name: "رژ گونه مای",
    discount: 3,
    price: 207000,
    mainPrice: 200000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-6.jpg",
    id: "pp1",
  },
  {
    name: "ریمیل حجم دهنده",
    discount: 20,
    price: 740000,
    mainPrice: 590000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-2.jpg",
    id: "pp2",
  },
  {
    name: "عطر کریستال",
    discount: 20,
    price: 150000,
    mainPrice: 120000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-7.jpg",
    id: "pp3",
  },
  {
    name: "کرم پودر کالیستا",
    discount: 9,
    price: 440000,
    mainPrice: 400000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-3.jpg",
    id: "pp4",
  },
  {
    name: "کرم ضد چروک",
    discount: 29,
    price: 350000,
    mainPrice: 250000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-8.jpg",
    id: "pp5",
  },
  {
    name: "کرم موس میبلین",
    discount: 3,
    price: 450000,
    mainPrice: 435000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-5.jpg",
    id: "pp6",
  },
  {
    name: "کرم وازلین کامان",
    discount: 3,
    price: 360000,
    mainPrice: 350000,
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-4.jpg",
    id: "pp7",
  },
];
const Size=4
interface HomeAmazingProductListPropsType{
  width:string
}
const HomeAmazingProductList = ({width}:HomeAmazingProductListPropsType) => {
  const [page, setPage] = useState(1);
  const [opacity, setOpacity] = useState(true);
  const products =
    page === 1
      ? Main_Products.filter((p, i) => i < Size)
      : Main_Products.filter((p, i) => i >= Size-1);
  return (
    <div className={`w-full ${width === "75" && "custome_md:w-[75%]"} $`}>
      <ul
        className={`flex gap-3 transition-all duration-200 flex-wrap ${
          opacity ? "opacity-100" : "opacity-0"
        } custome_md:flex-nowrap justify-between custome_md:justify-normal `}
      >
        {products.map((product, index) => (
          <HomeProduct key={index} product={product as HomeProductType} />
        ))}
      </ul>
      <div className="hidden custome_md:flex items-center justify-center gap-2 pt-4">
        {[1, 2].map((num) => (
          <span
            onClick={() => {
              if (page !== num) {
                setOpacity(false);
                setTimeout(() => {
                  setPage(num);
                  setOpacity(true);
                }, 200);
              }
            }}
            key={num}
            className={`w-[10px] h-[10px]   rounded-[100%] cursor-pointer  ${
              page === num
                ? "bg-black"
                : "bg-transparent transition-all duration-100 border-2 border-solid border-stone-500 hover:border-black"
            } `}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeAmazingProductList;
