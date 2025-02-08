import { ReactNode } from "react"
import { Link, useLocation } from "react-router-dom"

interface HeaderLinkPropsType{
    children:ReactNode
    to:string
    to2?:string
    
}
const HeaderLink = ({children,to,to2}:HeaderLinkPropsType) => {
    const {pathname}=useLocation()
    const isSelected=pathname===to || to2===pathname
    
  return (
    <Link to={`${to}`} className={`block transition-all text-[.9rem] duration-200 hover:text-customePink-500 ${isSelected && 'text-customePink-500'} `}>
        {children}
    </Link>
  )
}

export default HeaderLink