import { createPortal } from "react-dom";
import HeaderMenuForm from "./HeaderMenuForm";
import useOutsideClick from "../hooks/useOutsideClick";
import HeaderMenuFilter from "./HeaderMenuFilter";
import { useEffect } from "react";

interface HeaderMenuPropsType {
  show: boolean;
  setShow: (show: boolean) => void;
}

const HeaderMenu = ({ show, setShow }: HeaderMenuPropsType) => {
  const right = show ? "right-0" : "right-[-100rem]";
  const {ref} = useOutsideClick<HTMLDivElement>(() => setShow(false));
  useEffect(()=>{
    const body=document.querySelector('body') as HTMLBodyElement
    if(show){
      body.style.overflow = "hidden";

    }
    else{
      body.style.overflow='auto'
    }
  },[show])

  return createPortal(
    <div
      className={`fixed ${
        show ? "inset-0" : "right-[-1000rem]"
      } z-[200000]  backdrop-brightness-50`}
    >
      <div
      ref={ref}
        className={`fixed transition-all duration-300  bg-white bottom-0 top-0 pt-4 ${right} w-[17.5rem]`}
      >
        <HeaderMenuForm />
        <HeaderMenuFilter setShow={setShow}/>
      </div>
    </div>,
    document.body
  );
};

export default HeaderMenu;
