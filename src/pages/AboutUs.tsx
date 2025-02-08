import AboutUsPage from "../ui/AboutUsPage";
import PageTitle from "../ui/PageTitle";

const AboutUs = () => {
  return (
    <div className="pb-12">
      <PageTitle title="درباره ما" />
      <div className="px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem]">
        <AboutUsPage />
      </div>
    </div>
  );
};

export default AboutUs;
