import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProduct } from "../../services/apiProducts";

export const useProduct = () => {
  const { id } = useParams();
  const { isLoading, data: product } = useQuery({
    queryFn: () => getProduct(id as string),
    queryKey: [`product/${id}`],
  });
  return { isLoading, product };
};
