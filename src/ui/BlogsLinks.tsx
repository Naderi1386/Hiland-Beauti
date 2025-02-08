import BlogLink, { BlogLinkType } from "./BlogLink";
import HomeTitle from "./HomeTitle";

const blogLinks: BlogLinkType[] = [
  {
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/blog2-R1.jpg",
    title: "اهمیت استفاده از ضد آفتاب",
    to: "/blog/0",
  },
  {
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-10.jpg",
    title: "فوم اصلاح چیست؟",
    to: "/blog/1",
  },
  {
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-9.jpg",
    title: "نکات استفاده از روغن پوست",
    to: "/blog/2",
  },
];

const BlogsLinks = () => {
  return (
    <div className="mb-16">
      <HomeTitle
        englishTitle="
Blog"
        persianTitle="جدیدتریـــن مقالات"
      />
      <ul className="flex flex-col custome_md:flex-row  custome_md:items-center gap-5 custome_md:justify-between">
    {blogLinks.map((blog,index)=><BlogLink key={index} BlogLink={blog} />)}
      </ul>
    </div>
  );
};

export default BlogsLinks;
