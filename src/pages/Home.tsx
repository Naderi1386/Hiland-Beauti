import HomeAmazing from "../feature/home/HomeAmazing";
import HomeCategories from "../feature/home/HomeCategories";
import HomeFamous from "../feature/home/HomeFamous";
import HomeLinkBox from "../feature/home/HomeLinkBox";
import HomeLinkMiniBox from "../feature/home/HomeLinkMiniBox";
import HomeLittleBoxes from "../feature/home/HomeLittleBoxes";
import BlogsLinks from "../ui/BlogsLinks";
import Brands from "../ui/Brands";
import Informations from "../ui/Informations";

export const Img1 =
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-1.png";
export const Img1_2 =
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-11.png";
const Img2 =
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-10.png";
const Img3 =
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-9.png";
const Home = () => {
  return (
    <div>
      <div className="flex flex-col custome_md:flex-row  gap-3 px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem] py-4">
        <div className="w-full custome_md:w-[62%]">
          <HomeLinkBox
            title="هایلند بیوتی"
            caption="فروش انواع لوازم ارایشی بهداشتی"
            to="/shop"
          />
        </div>
        <div className=" w-full custome_md:w-[38%] space-y-3">
          <HomeLinkMiniBox
            img={Img2}
            title="محصولات صورت"
            caption="راز داشتن پوست لطیف"
            to="/shop"
          />
          <HomeLinkMiniBox
            img={Img3}
            title="محصولات مو"
            caption="موهایی نرم و خوش حالت"
            to="/shop"
          />
        </div>
      </div>
      <div className="px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem] py-6 overflow-x-hidden">
        <HomeAmazing />
        <HomeCategories />
        <HomeLittleBoxes />
        <HomeFamous />
        <Brands />
        <BlogsLinks />
        <Informations />
      </div>
    </div>
  );
};

export default Home;
