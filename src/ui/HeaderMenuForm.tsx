import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

const HeaderMenuForm = () => {
    const [input,setInput]=useState('')
    const onSubmit=()=>{

    }
  return (
    <form
      className="w-full pl-2 pr-4 flex items-center"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit()
      }}
    >
      <input
      value={input}
      onChange={(e)=>setInput(e.target.value)}
        type="text"
        className="w-[90%] text-sm outline-none"
        placeholder="جستجوی محصولات"
      />
      <button type="submit" className="w-[10%]">
        <IoSearchOutline size={22} stroke="gray"/>
      </button>
    </form>
  );
};

export default HeaderMenuForm;
