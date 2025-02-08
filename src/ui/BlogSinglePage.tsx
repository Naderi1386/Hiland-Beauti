import BlogContentPage from "../feature/blog/BlogContentPage";
import BlogsList from "../feature/blog/BlogsList";
import PageTitle from "./PageTitle";

const BlogSinglePage = () => {
  return (
    <div className="mb-8">
      <div>
        <PageTitle title="بلاگ" />
      </div>
      <div className="flex gap-4 px-4 custome_md:px-0  custome_md:pl-10 custome_md:pr-10">
        <div className="w-full custome_md:w-[75%] ">
          <span className="text-center text-xs py-1 px-2 mb-2 inline-block text-white bg-customePink-500">
            بلاگ
          </span>
          <BlogContentPage />
        </div>
        <BlogsList />
      </div>
    </div>
  );
}

export default BlogSinglePage