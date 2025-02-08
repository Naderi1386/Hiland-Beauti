export interface ProductType {
  title: string;
  discount:number
  price: number;
  mainPrice: number;
  category: string;
  img: string;
  brand: string;
  boxType?: string;
  SKU: string;
  texture?: string;
  attributes?: string[];
  caption?: string;
  coverage?: string;
  rate:number
  id:string
}