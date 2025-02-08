import { useNavigate } from "react-router-dom"
import { CategoryType } from "./HomeCategories"

 interface HomeCategotyItemPropsType{
    category:CategoryType
}
const HomeCategoryItem = ({category}:HomeCategotyItemPropsType) => {
    const {img,name,to}=category
    const navigate=useNavigate()

  return (
    <li onClick={()=>navigate(`${to}`)} className="cursor-pointer rounded-xl py-3 transition-all duration-200 hover:shadow-custome1">
        <img src={img} alt={`IMG-${name}`} className=" lg:w-[10.5rem] lg:h-[12rem]  xl:w-[12.5rem] xl:h-[14rem]" />
        <h4 className="font-bold text-center custome_md:text-sm lg:text-[1.2rem]">{name}</h4>
    </li>
  )
}

export default HomeCategoryItem