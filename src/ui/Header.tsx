import { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import CreateUser from "./CreateUser";
import { HeaderIcons } from "./HeaderIcons";
import HeaderLinks from "./HeaderLinks";
import HeaderMenuMobile from "./HeaderMenuMobile";
import Logo from "./Logo";
import MobileMenuBottom from "./MobileMenuBottom";
import SearchInput from "./SearchInput";

const Header = () => {
  const [isShadow, setIsShadow] = useState(false);
  const toggleShadow = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 76) {
      setIsShadow(true);
    } else if (scrolled <= 76) {
      if (isShadow) setIsShadow(false);
    }
  };
  window.addEventListener("scroll", toggleShadow);

  return (
    <>
      <header
        className={`transition-all duration-200 ${
          isShadow && `fixed  top-0 left-0 right-0`
        }   z-[100000] ${isShadow && "shadow-custome3"}`}
      >
        <div className=" flex justify-between items-center  gap-6 bg-white custome_md:bg-customeBackGroundColor-200 py-[0.75rem] px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem]">
          <HeaderMenuMobile />
          <Logo />
          <SearchInput />
          <CreateUser />
        </div>
        <div className=" bg-white hidden lg:flex justify-between items-center gap-6 py-[1rem] px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem]">
          <CategoryMenu />
          <HeaderLinks />
          <HeaderIcons />
        </div>
      </header>
      <MobileMenuBottom />
    </>
  );
};

export default Header;
