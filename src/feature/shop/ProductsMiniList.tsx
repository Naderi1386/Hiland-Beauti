import { useProducts } from "./useProducts";

const ProductsMiniList = () => {
    const {products}=useProducts()
  
  return (
    <div className="pt-8 border-t border-solid border-stone-300">
      <h3 className="font-bold mb-4">محصولات</h3>
      <ul className="divide-y divide-stone-300">
        {products?.map((product, index) => (
          <li key={index} className="flex gap-4 py-4">
            <div className="w-[65px] h-[65px]">
              <img
                src={product.img}
                alt={`img/${product.title}`}
                className="w-full h-full cursor-pointer"
              />
            </div>
            <div>
              <h4
                title={product.title}
                className="transition-all duration-200 hover:opacity-60 cursor-pointer mb-3 text-[.9rem] font-bold"
              >
                {product.title}
              </h4>
              <div className="flex items-center justify-center gap-[.3rem] text-sm pr-8">
                <span className="text-stone-300 line-through flex items-center">
                  <span>{product.price}</span>
                  <span>{"تومان"}</span>
                </span>
                <span className="font-bold text-customePink-500 flex items-center">
                  <span>{product.mainPrice}</span>
                  <span>{"تومان"}</span>
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsMiniList