import { Link } from "react-router-dom";


const CategoryMenuItems = () => {
  return (
    <ul
      className={`absolute bottom-[-7.6rem]  left-[-0.415rem]    transition-all duration-200   bg-white text-black z-[1000] w-[16rem] border border-solid border-stone-200 divide-y divide-stone-200 `}
    >
      <li className="py-2 px-4 transition-all duration-200 hover:bg-stone-100">
        <Link to={"/shop?category=بهداشتی"}>بهداشتی</Link>
      </li>
      <li className="py-2 px-4 transition-all duration-200 hover:bg-stone-100">
        <Link to={"/shop?category=آرایشی"}>آرایشی</Link>
      </li>
      <li className="py-2 px-4 transition-all duration-200 hover:bg-stone-100">
        <Link to={"/shop?category=مو"}>مو</Link>
      </li>
    </ul>
  );
};

export default CategoryMenuItems;
