import HeaderLink from "./HeaderLink";

const links = [
  { to: "/", text: "صفحه اصلی",to2:'/' },
  { to: "/about-us", text: "درباره ما" },
  { to: "/shop", text: "فروشگاه" },
  { to: "/blog", text: "بلاگ" },
  { to: "/contact-us", text: "ارتباط با ما" },
];

const HeaderLinks = () => {
  return (
    <div className="flex items-center gap-5">
        {links.map((link,index)=><HeaderLink key={index} to2={link.to2} to={link.to}><p>{link.text}</p></HeaderLink>)}
    </div>
  )
}

export default HeaderLinks