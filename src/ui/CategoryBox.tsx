import { MdOutlineChevronLeft } from "react-icons/md";
import { BoxType } from "../feature/home/HomeLittleBoxes";
import { useNavigate } from "react-router-dom";

interface CategoryBoxPropsType {
  item: BoxType;
}

// #F9A8D4; first
// #F472B6; second
// #7DD3FC third

export const CategoryBox = ({ item }: CategoryBoxPropsType) => {
  const { img, to, name, color } = item;
  const navigate = useNavigate();
  const bgColor =
    color === "blue"
      ? "bg-[#7DD3FC]"
      : color === "pink"
      ? "bg-[#FBCFE8]"
      : "bg-[#F9A8D4]";
  return (
    <li
      className={`${bgColor} relative flex  items-center px-4 py-8 rounded-2xl w-full custome_md:w-[33.3%]`}
    >
      <div>
        <span className="block text-lg mb-2">انواع</span>
        <h3 className="text-[1.35rem] custome_md:text-[.8rem] lg:text-[1rem] xl:text-[1.35rem] font-bold">
          {name}
        </h3>
        <button
          className="mt-2 bg-white   flex items-center text-sm  rounded-lg py-1 px-[.68rem]"
          onClick={() => navigate(`${to}`)}
        >
          <span>خرید</span>
          <MdOutlineChevronLeft />
        </button>
      </div>
      <div className="w-[10rem] h-[9.8rem] custome_md:w-[7rem] custome_md:h-[7rem] lg:w-[10rem] lg:h-[9.8rem] absolute left-0 bottom-[-1.4rem] custome_md:bottom-[1rem]  lg:bottom-[-1.4rem]">
        <img className="w-[100%] h-[100%] " src={img} alt={`${name}/IMG`} />
      </div>
    </li>
  );
};
