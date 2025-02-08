import FooterAbout from "./FooterAbout";
import FooterBlogs from "./FooterBlogs";
import FooterLine from "./FooterLine";
import FooterLinks from "./FooterLinks";
import FooterSymbol from "./FooterSymbol";

const BGimage =
  "https://sitetesttemplate05.see5.net/?brizy_media=wp-3722a122f21d2596dc2e1dbe870ec392.jpg&brizy_crop=iW%3D5000%26iH%3Dany";

const Footer = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url(${BGimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%", 
        }}
        className="absolute inset-0 "
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#500724] to-[#9D174D] opacity-[.90] "></div>

      <footer className=" relative text-white pt-10 pb-3">
        <div className="px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem] flex flex-col md:flex-row md:justify-between gap-10 md:gap-6 md:flex-wrap">
          <FooterAbout />
          <FooterLinks />
          <FooterBlogs />
          <FooterSymbol />
        </div>
        <div className="px-[1.35rem] sm:px-[5.8rem] md:px-[7.8rem] xl:px-[13.5rem] mt-[1.3rem] overflow-hidden">
          <FooterLine />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
