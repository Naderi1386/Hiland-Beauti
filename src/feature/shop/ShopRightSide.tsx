import PriceSliderFilter from "./PriceSliderFilter"
import ProductsMiniList from "./ProductsMiniList"
import ShopCategoryFilter from "./ShopCategoryFilter"

const ShopRightSide = () => {
  return (
    <div className="basis-[25%] pr-12 hidden lg:block">
            <ShopCategoryFilter />
            <PriceSliderFilter />
            <ProductsMiniList/>
    </div>
  )
}

export default ShopRightSide