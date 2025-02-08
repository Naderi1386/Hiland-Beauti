import { useFilterRoute } from "../../hooks/useFilterRoute";


const ShopSortBy = () => {
    const {filterRoute}=useFilterRoute()
    
  return (
    <div className="py-1 border-b border-solid border-stone-400/40 font-bold ">
      <select
      style={{appearance:'none'}}
        defaultValue={"defalut"}
        className="pl-8 text-sm outline-none cursor-pointer"
        onChange={(e) => filterRoute("sortBy", e.target.value)}
      >
        <option value="defalut">مرتب سازی پیش فرض</option>
        <option value="rating">مرتب سازی براساس امتیاز</option>
        <option value="cheap">مرتب سازی براساس ارزان ترین</option>
        <option value="expensive">مرتب سازی براساس گران ترین</option>
      </select>
    </div>
  );
}

export default ShopSortBy