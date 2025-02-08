interface AmazingTimeItemPropsType {
  text: string;
  time: string;
}

const AmazingTimeItem = ({ text, time }: AmazingTimeItemPropsType) => {
  return (
    <div className="bg-white rounded-md text-center flex flex-col  justify-center items-center w-[25%] custome_md:w-[50px] custome_md:h-[50px] ">
      <span className="text-black font-bold text-lg custome_md:text-base">{time}</span>
      <span className="text-stone-400 text-lg custome_md:text-[.75rem] lg:text-sm ">{text}</span>
    </div>
  );
};

export default AmazingTimeItem;
