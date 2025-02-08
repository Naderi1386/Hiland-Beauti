import { ProductType } from "../shop/ProductType"

interface SingleProductItemsPropsType{
    product:ProductType
}

const SingleProductItems = ({product}:SingleProductItemsPropsType) => {
  return (
    <div>SingleProductItems</div>
  )
}

export default SingleProductItems