import { Link } from "react-router-dom";

const FooterBlogs = () => {
  return (
    <div>
      <h3 className="text-[1.25rem] font-semibold mb-4">اخرین مقالات</h3>
      <ul className="text-[1rem] space-y-4">
        <li>
          <Link to={"/"}>نکات استفاده از روغن پوست</Link>
        </li>
        <li>
          <Link to={"/"}>فوم اصلاح چیست؟</Link>
        </li>
        <li>
          <Link to={"/"}>اهمیت استفاده از کرم ضد افتاب</Link>
        </li>
     
      </ul>
    </div>
  );
}

export default FooterBlogs