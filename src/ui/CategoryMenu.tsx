import { useEffect, useRef, useState } from "react";
import { IoMenuOutline, IoChevronDown } from "react-icons/io5";
import CategoryMenuItems from "./CategoryMenuItems";

const CategoryMenu = () => {
  const [hover, setHover] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    function onDocumentMouseOver(e: MouseEvent) {
      if (ref.current && ref.current.contains(e.target as Node)) {
        setHover(true)
      } else if (ref.current && !ref.current.contains(e.target as Node)) {
        setHover(false);
        
      }
    }
    document.addEventListener("mouseover", onDocumentMouseOver);
    return () => {
      document.removeEventListener("mouseover", onDocumentMouseOver);
    };
  }, []);

  return (
    <div
      ref={ref}
      id="header-category-links"
      className="hidden lg:flex items-center gap-[4.8rem] relative h-[38.5px]"
    >
      <div className="flex items-center gap-2">
        <IoMenuOutline size={25} />
        <p className="text-sm">دسته‌بندی محصولات</p>
      </div>
      <IoChevronDown />

      {hover && <CategoryMenuItems />}
    </div>
  );
};

export default CategoryMenu;
