import { useNavigate, useParams } from "react-router-dom";
import { blogItems } from "../../services/BlogsData";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { GrCube } from "react-icons/gr";

const BlogPagination = () => {
  const { index } = useParams();
  const nextBlog = blogItems.find((b, i) => i === Number(index) + 1);
  const previousBlog = blogItems.find((b, i) => i === Number(index) - 1);
  const navigate = useNavigate();
  const onNext = () => navigate(`/blog/${Number(index) + 1}`);

  const onPrevious = () => navigate(`/blog/${Number(index) - 1}`);

  return (
    <div className="mt-12 py-5 border-y-2 border-solid border-stone-200 relative">
      <div
        onClick={() => navigate("/blog")}
        title="بازگشت به لیست"
        className="absolute top-[32%]  left-[48.5%] cursor-pointer text-stone-400 transition-all duration-150 hover:text-black"
      >
        <GrCube size={28} />
      </div>
      <div
        className={`flex items-center ${
          nextBlog && previousBlog
            ? "justify-between "
            : nextBlog
            ? "justify-end"
            : "justify-start"
        } `}
      >
        {previousBlog && (
          <div
            className="flex items-center gap-3 cursor-pointer "
            onClick={onPrevious}
          >
            <div className="border border-solid border-stone-300 rounded-[100%]  p-1 sm:p-3 flex items-center justify-center">
              <FaChevronRight />
            </div>
            <span
              role="button"
              className="hidden sm:inline transition-all duration-200 hover:text-customePink-500 text-[.7rem] sm:text-sm"
            >
              {previousBlog.title}
            </span>
            <span
              role="button"
              className="sm:hidden transition-all duration-200 hover:text-customePink-500 text-sm"
            >
              بلاگ قبلی
            </span>
          </div>
        )}
        {nextBlog && (
          <div
            className="flex items-center gap-3 cursor-pointer "
            onClick={onNext}
          >
            <div className="border border-solid border-stone-300 rounded-[100%] p-1 custome_md:p-3 flex items-center justify-center">
              <FaChevronLeft />
            </div>
            <span
              role="button"
              className="transition-all duration-200 hover:text-customePink-500 text-[.7rem] custome_md:text-sm order-[-1] hidden sm:inline"
            >
              {nextBlog.title}
            </span>
            <span
              role="button"
              className="sm:hidden transition-all duration-200 hover:text-customePink-500 order-[-1] text-sm"
            >
              بلاگ بعدی
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPagination;
