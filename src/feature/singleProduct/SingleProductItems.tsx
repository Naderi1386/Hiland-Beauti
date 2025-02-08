import { ProductType } from "../shop/ProductType"

interface SingleProductItemsPropsType{
    product:ProductType
}

const SingleProductItems = ({product}:SingleProductItemsPropsType) => {
  const {title}=product
  return (
    <div>{title}</div>
  )
}

export default SingleProductItems