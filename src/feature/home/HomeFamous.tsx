import HomeTitle from "../../ui/HomeTitle";
import ProductsBox from "../../ui/ProductsBox";


const HomeFamous = () => {
  return (
    <div className="mb-14">
      <HomeTitle
        englishTitle="Top"
        persianTitle="
        پرفروش‌تریـــن محصولات
        "
      />
      <ProductsBox/>
    </div>
  );
};

export default HomeFamous;
