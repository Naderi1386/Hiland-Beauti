import { MdOutlineChevronLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface HomeLinkMiniBoxPropsType {
  title: string;
  caption: string;
  to: string;
  img: string;
}

const HomeLinkMiniBox = ({title,caption,to,img}:HomeLinkMiniBoxPropsType) => {
    const navigate=useNavigate()
    
  return (
    <div className="bg-customePink-300 relative w-full h-[48.35%] py-9 px-2 custome_md:py-3 custome_md:px-5 flex justify-between items-center rounded-xl">
      <div className=" flex flex-col items-start custome_md:items-center custome_md:text-center">
        <h2 className="mb-2 text-lg font-extrabold">{title}</h2>
        <p className=" text-sm text-center text-customeRed-400">{caption}</p>
        <button
          className="mt-2 bg-white transition-all duration-200 hover:bg-customePink-100  flex items-center text-sm  rounded-xl py-1 px-3"
          onClick={() => navigate(`${to}`)}
        >
          <span>خرید</span>
          <MdOutlineChevronLeft />
        </button>
      </div>
      <img
        src={img}
        alt={`product/${title}`}
        className="w-[12rem] h-[10rem] sm:w-[16rem] sm:h-[12rem] custome_md:w-[8rem] custome_md:h-[7rem] lg:w-[11rem] lg:h-[9rem] absolute left-0 custome_md:static top-[-1.2rem] sm:top-[-3rem]"
      />
    </div>
  );
}

export default HomeLinkMiniBox