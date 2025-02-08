import { useState } from "react";
import HomeCategoryItem from "./HomeCategoryItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./HomeCategories.css"; // فایل CSS را اضافه کنید
import CategoriesMobile from "./CategoriesMobile";

export interface CategoryType {
  name: string;
  to: string;
  img: string;
}

 const categories: CategoryType[] = [
  {
    name: "آرایش ابرو",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
  {
    name: "آرایش لب",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
  {
    name: "آرایش ناخن",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
  {
    name: "لوازم جانبی",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
  {
    name: "ست آرایشی",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
  {
    name: "آرایش صورت",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
  {
    name: "آرایش چشم",
    to: "/",
    img: "https://rokhbanoo.com/wp-content/uploads/2023/07/%D8%B1%DA%98-%D9%84%D8%A8-%D9%85%D8%A7%DB%8C%D8%B9-%DA%A9%D8%A7%D9%84%D8%A8%D8%A7%D8%B3%DB%8C-satin-matt.png",
  },
];

const HomeCategories = () => {
  const [pag, setPag] = useState(1);
  const [animate, setAnimate] = useState(false);


  const finalCategories =
    pag === 1
      ? categories.filter((c, i) => i <= 4)
      : pag === 2
      ? categories.filter((c, i) => i !== 0 && i <= 5)
      : categories.filter((c, i) => i > 1);

  const onNext = () => {
    setAnimate(true);
    setTimeout(() => {
      if (pag === 1) setPag(2);
      else if (pag === 2) setPag(3);
      else if (pag === 3) setPag(1);
      setAnimate(false);
    }, 300);
  };

  const onPrevius = () => {
    setAnimate(true);
    setTimeout(() => {
      if (pag === 3) setPag(2);
      else if (pag === 2) setPag(1);
      else if (pag === 1) setPag(3);
      setAnimate(false);
    }, 300);
  };

  return (

    <div className="relative ">
      <ul
        className={`hidden custome_md:flex gap-3 items-center justify-between transition-all duration-300 ${
          animate ? "fade-out" : "fade-in"
        }`}
      >
        {finalCategories.map((category, index) => (
          <HomeCategoryItem key={index} category={category} />
        ))}
        <FaChevronLeft
          onClick={onNext}
          size={25}
          className="absolute left-[-2rem] top-[50%] cursor-pointer"
        />
        <FaChevronRight
          onClick={onPrevius}
          size={25}
          className="absolute right-[-2rem] top-[50%] cursor-pointer"
        />
      </ul>
      <CategoriesMobile categories={categories} />
    </div>
  );
};

export default HomeCategories;
