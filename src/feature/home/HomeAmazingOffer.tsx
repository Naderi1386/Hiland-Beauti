import { useNavigate } from "react-router-dom";
import AmazingTimeItem from "./AmazingTimeItem";

const Img =
  "https://de7541655.t.ux5.ir/files/de7541655/brizy/imgs/rtry-min-254x155x0x17x254x121x1726741606.png";

const HomeAmazingOffer = () => {
    const navigate=useNavigate()
  return (
    <div className="py-2 text-center flex flex-col items-center w-full custome_md:w-[25%]">
      <h2 className="font-semibold text-2xl custome_md:text-xl text-white mb-6 custome_md:mb-3">
        پیشنهاد شگفت انگیز
      </h2>
      <img
        src={Img}
        className="hidden custome_md:block w-[210px] h-[105px] mb-4"
        alt={`Amazing-Offer`}
      />
      <ul className="flex items-center justify-center gap-4 custome_md:gap-2 mb-7 w-full ">
        <AmazingTimeItem text="ثانیه" time="00" />
        <AmazingTimeItem text="دقیقه" time="00" />
        <AmazingTimeItem text="ساعت" time="00" />
        <AmazingTimeItem text="روز" time="00" />
      </ul>
      <button onClick={()=>navigate('/')} className="bg-transparent text-white rounded-lg border border-solid border-white py-[.60rem] custome_md:py-[.32rem] px-4 transition-all duration-200 hover:text-black hover:bg-white">
        مشاهده همه
      </button>
    </div>
  );
};

export default HomeAmazingOffer;
