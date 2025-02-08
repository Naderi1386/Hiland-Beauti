import { useState } from "react";
import { blogItems } from "../../services/BlogsData";
import { IoLinkSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const BlogBoxes = () => {
  const [opacity,setOpacity]=useState(false)
  const navigate=useNavigate()
  
  return (
    <div className="w-full custome_md:w-[75%] custome_md:pr-[10rem]">
      <ul className="space-y-[14.5rem] custome_md:space-y-[12rem]">
        {blogItems.map((blog, index) => (
          <li key={index}>
            <div className="relative">
              {opacity && (
                <IoLinkSharp
                  stroke="white"
                  size={50}
                  className="absolute top-[50%] left-[47%]  z-10"
                />
              )}
              <img
                onClick={() => navigate(`/blog/${index}`)}
                onMouseEnter={() => {
                  if (!opacity) setOpacity(true);
                }}
                onMouseLeave={() => {
                  if (opacity) setOpacity(false);
                }}
                src={blog.img}
                alt="img/blog"
                className="w-full transition-all duration-500 hover:brightness-50 cursor-pointer"
              />
              <div className="absolute top-3 right-3 bg-white py-1 px-3 text-center text-sm space-y-1">
                <span className="block font-bold">
                  {blog.date.split(",").at(0)?.split(" ").at(1)}
                </span>
                <span className="block">
                  {blog.date.split(",").at(0)?.split(" ").at(0)}
                </span>
              </div>
              <div className="absolute left-0 right-0 bottom-[-11.5rem] sm:bottom-[-9rem] custome_md:bottom-[-8rem] py-3 px-4 w-[95%] mx-auto bg-white shadow-custome6">
                <div className="text-center">
                  <span className="text-center text-xs py-1 px-2 mb-5 inline-block text-white bg-customePink-500">
                    بلاگ
                  </span>
                  <h2
                    onClick={() => navigate(`/blog/${index}`)}
                    className="font-semibold mb-4 text-center text-lg custome_md:text-2xl transition-all duration-150 hover:opacity-65 cursor-pointer"
                  >
                    {blog.title}
                  </h2>
                  <p className="text-[.99rem] custome_md:text-[1.12rem] px-4 text-stone-500 mb-3 text-center">
                    {blog.summary}
                  </p>
                  <span
                    role="button"
                    className="text-customePink-500 text-sm transition-all duration-150 hover:scale-110"
                  >
                    ادامه مطلب
                  </span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogBoxes;
