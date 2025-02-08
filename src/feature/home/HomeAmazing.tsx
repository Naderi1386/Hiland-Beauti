import HomeAmazingOffer from "./HomeAmazingOffer";
import HomeAmazingProductList from "./HomeAmazingProductList";

const HomeAmazing = () => {
  return (
    <div className="bg-customePink-600 mb-12 rounded-3xl py-5 px-3 flex flex-col gap-4 custome_md:gap-3 custome_md:flex-row custome_md:justify-between">
      <HomeAmazingOffer />
      <HomeAmazingProductList width="75" />
    </div>
  );
};

export default HomeAmazing;
