import EmptyProductsList from "../../ui/EmptyProductsList";
import LoadingSpinner from "../../ui/LoadingSpinner";
import ShopProductItem from "./ShopProductItem";
import { useProducts } from "./useProducts";

const ShopProductsList = () => {
  const { mainProducts, isLoading } = useProducts();
  if (isLoading) return <LoadingSpinner />;
  if (!mainProducts?.length)
    return (
      <EmptyProductsList>در حال حاضر محصولی موجود نمی باشد</EmptyProductsList>
    );
  return (
    <ul className="flex gap-[1.74rem] items-center flex-wrap justify-between">
      {mainProducts?.map((product, index) => (
        <ShopProductItem key={index} product={product} />
      ))}
    </ul>
  );
};

export default ShopProductsList;
