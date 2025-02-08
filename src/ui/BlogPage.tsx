import BlogBoxes from "../feature/blog/BlogBoxes";
import BlogsList from "../feature/blog/BlogsList";
import PageTitle from "./PageTitle"

const BlogPage = () => {
  return (
    <div className="pb-[13rem] custome_md:pb-[10rem]">
      <PageTitle title="بلاگ" />
      <div className="flex gap-[9rem] px-4 custome_md:px-0  custome_md:pl-10">
        <BlogBoxes />
        <BlogsList />
      </div>
      
    </div>
  );
}

export default BlogPage