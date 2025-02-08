import { ReactNode } from "react"
import { useNavigate } from "react-router";

interface EmptyProductsListPropsType{
    children:ReactNode
    
}

const EmptyProductsList = ({children}:EmptyProductsListPropsType) => {
    const navigate=useNavigate()
  return (
    <div className="text-center">
      <h2 className="text-lg font-bold text-black pt-6 mb-3">{children}</h2>
      <span onClick={()=>navigate(-1)} role="button" className="underline text-customePink-500 text-sm font-bold">بازگشت به صفحه قبل</span>
    </div>
  );
}

export default EmptyProductsList