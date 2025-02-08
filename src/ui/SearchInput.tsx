import { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
    const [input,setInput]=useState('')
    const onSubmit=()=>{
      if(input){
        setInput('')
      }
    }
  return (
    <form onSubmit={(e)=>{
        e.preventDefault()
        onSubmit()
    }} className="hidden lg:flex w-[410px] border border-solid border-stone-200 rounded-md overflow-hidden h-[45px]">
      <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="جستجوی محصولات" className="w-[90%] font-light focus:outline-none text-[.85rem] px-3" />
      <button className="w-[10%] bg-customePink-500 flex justify-center items-center h-full">
        <IoIosSearch size={25} fill="white" />
      </button>
    </form>
  );
}

export default SearchInput