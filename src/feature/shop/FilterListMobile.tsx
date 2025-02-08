import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useFilterRoute } from "../../hooks/useFilterRoute";
import useOutsideClick from "../../hooks/useOutsideClick";

export interface FilterType {
  text: string;
  value: string;
}

interface FilterListMobilePropsType {
  about: string;
  filters: FilterType[];
  name:string
}

const FilterListMobile = ({ about, filters,name }: FilterListMobilePropsType) => {
  const [isShowList, setIsShowList] = useState(false);
  const [opacity,setOpacity]=useState(false)
  const {filterRoute,setSearchParams,searchParams}=useFilterRoute()
  const onClick=(value:string)=>{
    if(value==='none'){
        searchParams.delete(name)
        setSearchParams(searchParams)
        return
    }
    
    filterRoute(name,value)
  }
  const onClickOpen=()=>{
     if (!isShowList) {
       setIsShowList(true);
       setTimeout(() => {
         setOpacity(true);
       }, 200);
     } else if (isShowList) {
       setOpacity(false);
       setTimeout(() => {
         setIsShowList(false);
       }, 200);
     }
  }
  const onClickOut=()=>{
     setOpacity(false);
     setTimeout(() => {
       setIsShowList(false);
     }, 200);
  }
  const { ref } = useOutsideClick<HTMLDivElement>(() => onClickOut());
  
  return (
    <div
      ref={ref}
      onClick={onClickOpen}
      className="relative flex flex-grow justify-between items-center text-sm border border-solid border-stone-300 rounded-md p-2 cursor-pointer"
    >
      <span>
        <span>فیلتر</span> {about}
      </span>
      <IoIosArrowDown fill="gray" />
      {isShowList && (
        <ul
          className={` transition-all duration-200 ${
            opacity ? "opacity-100" : "opacity-0"
          }  bg-white shadow-custome2 w-full absolute left-0 right-0 bottom-[-9.05rem] z-10 rounded-md`}
        >
          {filters.map((filter, index) => (
            <li
              onClick={() => onClick(filter.value)}
              className="transition-all duration-150 hover:bg-stone-100 cursor-pointer py-2 px-5"
              key={index}
            >
              <span>{filter.text}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterListMobile;
