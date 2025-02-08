import { useState } from "react"
import { IoChevronUpOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

const ContactQuestion = () => {
    const [question,setQuestion]=useState(1)
    const onFirst=()=>{
        if(question===2)setQuestion(1)
    }
   const onSecond = () => {
     if (question === 1) setQuestion(2);
   };
  return (
    <div className="px-2 w-full custome_md:w-[50%] space-y-2">
      <div className="border border-solid border-black rounded-xl p-3 ">
        <div
          onClick={onFirst}
          className="flex items-center justify-between cursor-pointer"
        >
          <p className=" font-bold">پرسش شما در این قسمت قرار می‌گیرد؟</p>
          {question === 1 ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </div>
        {question === 1 && (
          <p className="transition-all duration-100 mt-5 text-sm">
            متن پاسخ شما در این قسمت قرار میگیرد متن پاسخ شما در این قسمت قرار
            میگیرد
          </p>
        )}
      </div>
      <div className="border border-solid border-black rounded-xl p-3">
        <div
          onClick={onSecond}
          className="flex items-center justify-between cursor-pointer"
        >
          <p className=" font-bold">پرسش شما در این قسمت قرار می‌گیرد؟</p>
          {question === 2 ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
        </div>
        {question === 2 && (
          <p className="transition-all duration-100 mt-5 text-sm">
            متن پاسخ شما در این قسمت قرار میگیرد متن پاسخ شما در این قسمت قرار
            میگیرد
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactQuestion