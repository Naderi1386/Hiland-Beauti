import { useProduct } from "./useProduct"

const ProductPage = () => {
    const {isLoading,product}=useProduct()
    if(isLoading) return <div className="text-center mt-12 text-2xl font-bold"><p>درحال بارگزاری</p></div>
  return (
    <div>
        
    </div>
  )
}

export default ProductPage