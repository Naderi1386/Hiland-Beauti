import { Link } from "react-router-dom";

export interface BlogLinkType {
  img: string;
  title: string;
  to: string;
}

interface BlogLinkPropsType{
  BlogLink:BlogLinkType
}

const BlogLink = ({BlogLink}:BlogLinkPropsType) => {
    const {img,title,to}=BlogLink
  return (
    <li className="basis-full custome_md:basis-[33.3%] rounded-xl bg-white shadow-custome6 text-center p-2 pb-5">
      <img src={img} alt={`Blog-Link`} className="rounded-xl mb-4 cursor-pointer w-full" />
      <h4 className="text-black text-lg custome_md:text-sm  lg:text-lg mb-6 cursor-pointer">{title}</h4>
      <Link to={to} className="text-customePink-500 font-semibold cursor-pointer">مطالعه بیشتر ….</Link>
    </li>
  );
}

export default BlogLink