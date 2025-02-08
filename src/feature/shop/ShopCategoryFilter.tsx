import { useFilterRoute } from "../../hooks/useFilterRoute";

const ShopCategoryFilter = () => {
    const {filterRoute}=useFilterRoute()
  return (
    <div className="mb-8">
      <h3 className="font-bold mb-6">دسته بندی محصولات</h3>
      <ul className="space-y-4 text-stone-500">
        <li
          className="cursor-pointer"
          onClick={() => filterRoute("category", "مو")}
        >
          <span>مو</span>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => filterRoute("category", "آرایشی")}
        >
          <span>آرایشی</span>
        </li>
        <li
          className="cursor-pointer"
          onClick={() => filterRoute("category", "بهداشتی")}
        >
          <span>بهداشتی</span>
        </li>
      </ul>
    </div>
  );
}

export default ShopCategoryFilter