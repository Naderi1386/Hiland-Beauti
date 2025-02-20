import { useState } from "react"
import HeaderMenuFilterList from "./HeaderMenuFilterList";

export interface FilterItemType{
  text:string
  to:string
}

interface HeaderMenuFilter {
  setShow: (show: boolean) => void;
}

const HeaderMenuFilter = ({setShow}:HeaderMenuFilter) => {
    const [filter,setFilter]=useState('list')
    const [opacity,setOpacity]=useState(true)
    const data: FilterItemType[] =
      filter === "list"
        ? [
            { text: "صفحه اصلی", to: "/" },
            { text: "درباره ما", to: "/about-us" },
            { text: "فروشگاه", to: "/shop" },
            { text: "بلاگ", to: "/blog" },
            { text: "ارتباط با ما", to: "/contact-us" },
            { text: "علاقه مندی", to: "/favorites" },
          ]
        : [
            { text: "بهداشتی", to: "/" },
            { text: "ارایشی", to: "/" },
            { text: "مو", to: "/" },
          ];
  return (
    <div className="mt-6">
      <div className="flex items-center  text-sm">
        <button
          onClick={() => {
            if (filter !== "list"){
              setOpacity(false)
              setTimeout(() => {
                setFilter("list");
                setOpacity(true)
              }, 200);
            };
          }}
          className={`w-[50%] transition-all duration-300 py-4 ${
            filter == "list"
              ? "bg-[#E0E0E0] text-black"
              : "bg-[#EEEEEE] text-stone-600"
          } border-t-2 border-b-2 border-solid border-stone-200 ${
            filter === "list" && "border-b-customePink-500"
          }`}
        >
          فهرست
        </button>
        <button
          onClick={() => {
            if (filter !== "category") {
               setOpacity(false);
               setTimeout(() => {
                 setFilter("category");
                 setOpacity(true);
               }, 200);
            };
          }}
          className={`w-[50%]  transition-all duration-300 py-4 ${
            filter == "category"
              ? "bg-[#E0E0E0] text-black"
              : "bg-[#EEEEEE] text-stone-600"
          } border-t-2 border-b-2 border-solid border-stone-200 ${
            filter === "category" && "border-b-customePink-500"
          }`}
        >
          دسته بندی ها
        </button>
      </div>
      <HeaderMenuFilterList setShow={setShow} data={data} opacity={opacity} />
    </div>
  );
}

export default HeaderMenuFilter