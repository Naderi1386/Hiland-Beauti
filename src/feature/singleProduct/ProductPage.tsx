import { ProductType } from "../shop/ProductType"
import SingleProductItems from "./SingleProductItems"
import { useProduct } from "./useProduct"

const ProductPage = () => {
    const {isLoading,product}=useProduct()
    if(isLoading) return <div className="text-center mt-12 text-2xl font-bold"><p>درحال بارگزاری</p></div>
  return (
    <div className="mt-12 px-12">
        <SingleProductItems product={product as ProductType} />
    </div>
  )
}

export default ProductPage