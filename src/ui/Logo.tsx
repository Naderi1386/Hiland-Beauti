import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/"} className="block">
      <img
      className="w-[120px] h-[38px] md:w-[130px] md:h-[40px] lg:w-[165px] lg:h-[55px]"
        src="https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/logo3.png"
        alt="logo"
      />
    </Link>
  );
}

export default Logo