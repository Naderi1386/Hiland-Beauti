import { useNavigate, useSearchParams } from "react-router";
import ShopLeftSide from "../feature/shop/ShopLeftSide";
import ShopRightSide from "../feature/shop/ShopRightSide";
import PageTitle from "./PageTitle"
import { MdArrowRightAlt } from "react-icons/md";

const ShopPage = () => {
  const [searchParams]=useSearchParams()
  const navigate=useNavigate()
  const category=searchParams.get('category') as string
  const text=category ? category : 'فروشگاه'
  const icon=category ? <MdArrowRightAlt className="cursor-pointer" size={20} onClick={()=>navigate(-1)}/> : null
  
  return (
    <div>
      <PageTitle title={text} icon={icon}   />
      <div className="flex gap-14 items-start">
        <ShopRightSide />
        <ShopLeftSide />
      </div>
    </div>
  );
}

export default ShopPage