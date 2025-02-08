export interface InformationType {
  title: string;
  caption: string;
  img: string;
}
interface InformationPropsType {
  information: InformationType;
}

const Information = ({ information }: InformationPropsType) => {
  const { caption, title, img } = information;
  return (
    <li className="border border-solid basis-[100%] md:basis-[48%] xl:basis-[25%]  border-stone-500/30 bg-white  rounded-lg py-3 px-3 flex items-center justify-between">
      <div>
        <h4 className="mb-3 custome_md:text-[.84rem]  font-semibold">
          {title}
        </h4>
        <p className="text-[.8rem] font-extralight">{caption}</p>
      </div>
      <img
        src={img}
        alt={`img/${img}`}
        className="w-[50px] h-[50px] custome_md:w-[43px] custome_md:h-[43px] xl:w-[50px] xl:h-[50px]"
      />
    </li>
  );
};

export default Information;
