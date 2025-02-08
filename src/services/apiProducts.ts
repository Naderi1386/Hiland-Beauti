import { ProductType } from "../feature/shop/ProductType";

const MAIN_URL = "http://localhost:9000";

export const getProducts=async()=>{
        try {
            const request = await fetch(`${MAIN_URL}/products`);
            const response=await request.json()
            return response as ProductType[]
        } catch (error) {
            console.error(error)
        }
}

export const getProduct=async(id:string)=>{
     try {
       const request = await fetch(`${MAIN_URL}/products/${id}`);
       const response = await request.json();
       return response as ProductType;
     } catch (error) {
       console.error(error);
     }
}





