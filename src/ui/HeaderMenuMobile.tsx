import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import HeaderMenu from "./HeaderMenu";


const HeaderMenuMobile = () => {
  const [show,setShow]=useState(false)
  
  return (
    <div className="lg:hidden">
          <div onClick={()=>setShow(true)} className="transition-all duration-200 hover:opacity-70 cursor-pointer flex items-center gap-2">
            <IoMenuOutline size={25} />
            <span>فهرست</span>
          </div>
          <HeaderMenu setShow={(show:boolean)=>setShow(show)} show={show}/>
     
    </div>
  );
}

export default HeaderMenuMobile