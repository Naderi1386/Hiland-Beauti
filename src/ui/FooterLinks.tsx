import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div>
      <h3 className="text-[1.25rem] font-semibold mb-4">دسترسی سریع</h3>
      <ul className="text-[1rem] space-y-2">
        <li>
          <Link to={"/"}>صفحه اصلی</Link>
        </li>
        <li>
          <Link to={"/about-us"}>درباره ما</Link>
        </li>
        <li>
          <Link to={"/blog"}>بلاگ</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>ارتباط با ما</Link>
        </li>
        <li>
          <Link to={"/shop-rules"}>قوانین فروشگاه</Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterLinks;
