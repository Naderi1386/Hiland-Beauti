import { ProductType } from "../shop/ProductType";
import ProductCaptionsList from "./ProductCaptionsList";
import SingleProductItems from "./SingleProductItems";
import { useProduct } from "./useProduct";

const ProductPage = () => {
  const { isLoading, product } = useProduct();
  if (isLoading)
    return (
      <div className="text-center mt-12 text-2xl font-bold">
        <p>درحال بارگزاری</p>
      </div>
    );
  return (
    <div className="mt-20">
      <div className=" px-12">
        <SingleProductItems product={product as ProductType} />
      </div>
      <ProductCaptionsList product={product as ProductType} />
    </div>
  );
};

export default ProductPage;
