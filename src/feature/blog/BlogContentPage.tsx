import { useParams } from "react-router-dom"
import { BlogDataType, blogItems } from "../../services/BlogsData"
import BlogContentsList from "./BlogContentsList"
import BlogPagination from "./BlogPagination"



const BlogContentPage = () => {
    const {index}=useParams()
    const blog=blogItems.find((b,i)=>i===Number(index)) as BlogDataType
    const {contents,img,title,date}=blog

  return (
    <div>
      <h2 className="font-semibold text-xl sm:text-2xl custome_md:text-3xl mb-[1.8rem]">{title}</h2>
      <div className="relative mb-8">
        <div className="absolute top-3 right-3 bg-white py-1 px-3 text-center text-sm space-y-1">
          <span className="block font-bold">
            {date.split(",").at(0)?.split(" ").at(1)}
          </span>
          <span className="block">
            {date.split(",").at(0)?.split(" ").at(0)}
          </span>
        </div>
        <img src={img} alt="img/blog" className="w-full " />
      </div>
      <BlogContentsList contents={contents} />
      <BlogPagination />

    </div>
  );
}

export default BlogContentPage