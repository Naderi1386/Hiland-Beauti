import { ProductType } from "../shop/ProductType";
import ProductCaptionListItems from "./ProductCaptionListItems";

interface ProductCaptionsListPropsType {
  product: ProductType;
}

const ProductCaptionsList = ({ product }: ProductCaptionsListPropsType) => {
  const { brand, boxType, SKU, texture, attributes, coverage,caption } = product;
  const att = attributes ? attributes?.join(" , ") : "";

  return (
    <div className="mt-20">
      <div className="border-t border-solid border-stone-300 flex justify-center mb-[4.5rem]">
        <span className="block pt-6 border-t-[3.8px] border-solid border-customePink-500 font-bold">
          توضیحات
        </span>
      </div>
      <div className="px-12">
        <ul>
          <ProductCaptionListItems title="برند" content={brand} />
          {boxType && (
            <ProductCaptionListItems title="نوع بسته بندی" content={boxType} />
          )}
          <ProductCaptionListItems title="کد محصول (SKU)" content={SKU} />
          {texture && (
            <ProductCaptionListItems title="بافت" content={texture} />
          )}
          {(att && caption) && <ProductCaptionListItems title="ویژگی" content={att} />}
          {coverage && (
            <ProductCaptionListItems title="پوشانندگی" content={coverage} />
          )}
        </ul>
      </div>
    </div>
  );
};

export default ProductCaptionsList;
