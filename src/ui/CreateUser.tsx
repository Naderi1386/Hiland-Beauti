import { BsBasket3 } from "react-icons/bs";

const CreateUser = () => {
  return (
    <div>
      
      <div className="flex lg:hidden gap-3">
        
        <div className="relative ">
          <span className="absolute z-[10000] w-[15px] text-[.7rem] left-[-0.5rem] top-[-0.1rem] h-[15px] bg-customePink-500 text-white rounded-[100%] flex justify-center items-center">
            0
          </span>

          <BsBasket3
            size={22}
            title="سبد خرید"
            className="transition-all duration-200 hover:opacity-70 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
