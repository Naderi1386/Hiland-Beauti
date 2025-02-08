import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router";
import { ProductType } from "./ProductType";

export const useProducts = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") as string;
  const minPrice = searchParams.get("minPrice") as string;
  const maxPrice = searchParams.get("maxPrice") as string;
  const sortBy = searchParams.get("sortBy") as string;
 
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const categoryProducts = category
    ? products?.filter((p) => p.category === category)
    : products;
  const filterProducts =
    minPrice && maxPrice
      ? categoryProducts?.filter(
          (p) => p.price >= Number(minPrice) && p.price <= Number(maxPrice)
        )
      : categoryProducts;

   const sortingProducts=filterProducts as ProductType[]   
  const mainProducts =
    sortBy === "cheap"
      ? sortingProducts.sort((a, b) => a.price - b.price)
      : sortBy === "expensive"
      ? sortingProducts.sort((a, b) => b.price - a.price)
      : sortBy === "rating"
      ? sortingProducts.sort((a, b) => b.rate - a.rate)
      : filterProducts
      

  return { products, isLoading, mainProducts };
};
