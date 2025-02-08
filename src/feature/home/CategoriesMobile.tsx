import { useState } from "react";
import { CategoryType } from "./HomeCategories";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface CategoriesMobilePropsType {
  categories: CategoryType[];
}
const CategoriesMobile = ({ categories }: CategoriesMobilePropsType) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState(true);
  const { img, name, to } = categories.at(index) as CategoryType;
  const onNext = () => {
    if (index != categories.length - 1) {
      setOpacity(false);
      setTimeout(() => {
        setIndex((i) => i + 1);
        setOpacity(true);
      }, 200);
    }
    else {
          setOpacity(false);
          setTimeout(() => {
            setIndex((i) => i -1 );
            setOpacity(true);
          }, 200);
    }
  };
  const onPrevius = () => {
    if (index !== 0) {
      setOpacity(false);
      setTimeout(() => {
        setIndex((i) => i - 1);
        setOpacity(true);
      }, 200);
    }
    else{
            setOpacity(false);
            setTimeout(() => {
              setIndex((i) => i + 1);
              setOpacity(true);
            }, 200);
    }
  };
  return (
    <div className="custome_md:hidden relative">
      <FaChevronLeft
        onClick={onNext}
        size={28}
        className="absolute left-[-1.4rem] top-[50%] cursor-pointer"
      />
      <FaChevronRight
        onClick={onPrevius}
        size={28}
        className="absolute right-[-1.4rem] top-[50%] cursor-pointer"
      />
      <div
        className={`cursor-pointer transition-all duration-200 ${
          opacity ? "opacity-100" : "opacity-0"
        } `}
        onClick={() => navigate(`${to}`)}
      >
        <img src={img} alt={`IMG-${name}`} className="w-full h-[18rem] mb-3" />
        <h3 className="text-lg font-bold text-center">{name}</h3>
      </div>
    </div>
  );
};

export default CategoriesMobile;
