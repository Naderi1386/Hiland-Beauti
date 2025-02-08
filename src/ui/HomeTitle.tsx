
interface HomeTitlePropsType{
    englishTitle:string
    persianTitle:string

}

const HomeTitle = ({englishTitle,persianTitle}:HomeTitlePropsType) => {
  return (
    <div className="flex items-center gap-4 font-bold mb-10">
      <span className="text-center text-sm sm:text-base bg-customePink-500 py-2 px-8 rounded-lg  text-white shadow-custome4">
        {englishTitle}
      </span>
      <h3 className=" sm:text-xl text-customePink-500 ">{persianTitle}</h3>
    </div>
  );
}

export default HomeTitle