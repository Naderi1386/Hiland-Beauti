import { useSelector } from "react-redux"
import { getFavorites, StoreType } from "../../redux/Store"
import { ProductType } from "../shop/ProductType";

const FavoritesList = () => {
    const products=useSelector<StoreType>(getFavorites) as ProductType[]
    
  return (
    <div>FavoritesList</div>
  )
}

export default FavoritesList