import { useNavigate } from "react-router-dom";
import { MdOutlineChevronLeft } from "react-icons/md";

import { useEffect, useState } from "react";
import { Img1, Img1_2 } from "../../pages/Home";

interface HomeLinkBoxPropsType {
  title: string;
  caption: string;
  to: string;
}

const HomeLinkBox = ({ title, caption, to }: HomeLinkBoxPropsType) => {
  const navigate = useNavigate();
  const [img, setImg] = useState(Img1);
  const [isOpacity, setIsOpacity] = useState(true); // حالت اولیه اوپاسیتی


  useEffect(()=>{
    const interval=setInterval(()=>{
      setIsOpacity(false)
      setTimeout(() => {
      setImg((prevImg) => (prevImg === Img1 ? Img1_2 : Img1));
      setIsOpacity(true); 
        
      }, 300);
    },4000)
    return ()=>{
      clearInterval(interval)
    }
  },[])

  return (
    <div className="bg-customeLinkBox-200 h-full flex flex-col relative custome_md:flex-row custome_md:items-center custome_md:justify-between gap-4 w-full px-8 pt-8 pb-72 custome_md:py-[2.87rem] rounded-xl">
      <div className="flex flex-col items-center">
        <h2 className="mb-8 text-4xl custome_md:text-2xl lg:text-3xl xl:text-4xl font-extrabold">
          {title}
        </h2>
        <p className="text-lg custome_md:text-base xl:text-lg text-center">
          {caption}
        </p>
        <button
          className="mt-4 bg-white transition-all duration-200 hover:bg-customePink-100 flex items-center rounded-3xl py-2 px-5"
          onClick={() => navigate(`${to}`)}
        >
          <span>خرید</span>
          <MdOutlineChevronLeft />
        </button>
      </div>


      <img
        src={img}
        className={`w-[20rem] ${
          isOpacity ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300 h-[16rem] sm:w-[25rem] sm:h-[21rem] absolute bottom-2 right-[-2rem] mx-auto custome_md:static custome_md:mx-0 custome_md:w-[12rem] custome_md:h-[11rem] lg:w-[16rem] lg:h-[15rem] xl:w-[19rem] xl:h-[16rem]`}
        alt={`product/${title}`}
      />
    </div>
  );
};

export default HomeLinkBox;
