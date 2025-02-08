import EmptyProductsList from "../../ui/EmptyProductsList"
import ShopProductItem from "./ShopProductItem"
import { useProducts } from "./useProducts"

const ShopProductsList = () => {
    const {mainProducts}=useProducts()
    if(!mainProducts?.length) return <EmptyProductsList>در حال حاضر محصولی موجود نمی باشد</EmptyProductsList>
  return (
    <ul className="flex gap-[1.74rem] items-center flex-wrap justify-between">
        {mainProducts?.map((product,index)=><ShopProductItem key={index} product={product} />)}
    </ul>
  )
}

export default ShopProductsList