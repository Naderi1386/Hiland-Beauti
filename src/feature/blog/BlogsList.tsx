import { useNavigate } from "react-router-dom";
import { blogItems } from "../../services/BlogsData";

const BlogsList = () => {
  const navigate=useNavigate()
  return (
    <div className="hidden custome_md:block w-[25%] border-t border-solid border-stone-300 pt-8 ">

      <h2 className="font-semibold mb-4">آخرین نوشته ها</h2>
      <ul className="divide-y divide-stone-300">
        {blogItems.map((blog, index) => (
          <li key={index} className="flex gap-3 items-start py-4 ">
            <img
              onClick={() => navigate(`/blog/${index}`)}
              src={blog.img}
              alt={`${index}/IMG`}
              className="w-[70px] h-[65px] cursor-pointer"
            />
            <div>
              <p
                onClick={() => navigate(`/blog/${index}`)}
                className="transition-all duration-150 hover:opacity-70 text-sm mb-3 cursor-pointer"
              >
                {blog.title}
              </p>
              <span className="text-xs text-stone-300">{blog.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogsList