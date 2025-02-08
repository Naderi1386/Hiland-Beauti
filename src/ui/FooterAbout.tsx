import { Link } from "react-router-dom";

const FooterAbout = () => {
  return (
    <div className="flex flex-col w-full md: md:max-w-[16rem] items-center gap-[1rem] md:gap-[.65rem] text-[1rem] ">
      <Link to={"/"}>
        <img
          className="w-[260px] h-[90px] md:w-[190px] md:h-[60px]"
          src="https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/logo-footer3.png"
          alt="footer--logo"
        />
      </Link>
      <p className="w-full  text-justify leading-8">
        هایلند بیوتی در تمامی قدم های انتخاب درست کالا و خرید تا اطمینان از صحت
        کالای دریافت شده و کسب رضایت مشتری، در کنار شما هست
      </p>
    </div>
  );
}

export default FooterAbout