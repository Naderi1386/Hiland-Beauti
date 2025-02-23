import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from "react-router";

const categories = ["مو", "آرایشی", "بهداشتی", "ارایشی"];

const SearchInput = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const onSubmit = () => {
    const category = categories.find(
      (category) => category === input || category.startsWith(input)
    );
    if (category === "آرایشی" || category === "ارایشی")
      navigate(`/shop?category=آرایشی`);
    else if (category) navigate(`/shop?category=${category}`);
    setInput("")
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="hidden lg:flex w-[410px] border border-solid border-stone-200 rounded-md overflow-hidden h-[45px]"
    >
      <input
        required
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="نام محصول و نوع محصول و ..."
        className="w-[90%] font-light focus:outline-none text-[.85rem] px-3"
      />
      <button className="w-[10%] bg-customePink-500 flex justify-center items-center h-full">
        <IoIosSearch size={25} fill="white" />
      </button>
    </form>
  );
};

export default SearchInput;
