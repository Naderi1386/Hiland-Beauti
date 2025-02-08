import { useNavigate } from "react-router";
import { useFilterRoute } from "../../hooks/useFilterRoute";
import ShopSortBy from "./ShopSortBy";
import ShopProductsList from "./ShopProductsList";
import ShopFilterMobile from "./ShopFilterMobile";
import ShopPriceMobileFilter from "./ShopPriceMobileFilter";

const ShopLeftSide = () => {
  const navigate = useNavigate();
  const { searchParams } = useFilterRoute();

  const currentPageText = (searchParams.get("category") as string) || "فروشگاه";
  return (
    <div className="basis-full lg:basis-[75%] px-12 lg:pl-12">
      <div className="pb-8 border-b border-solid border-stone-400/40 mb-7">
        <div className="flex flex-col custome_sm:flex-row  custome_sm:items-center gap-4 custome_sm:justify-between ">
          <div className="flex items-center gap-2">
            <span role="button" onClick={() => navigate("/")}>
              خانه
            </span>
            <span>/</span>
            <span className="font-bold">{currentPageText}</span>
          </div>
          <ShopSortBy />
        </div>
        <div className=" pt-[2rem] lg:hidden">
          <ShopFilterMobile />
          <ShopPriceMobileFilter />
        </div>
      </div>
      <div>
        <ShopProductsList />
      </div>
    </div>
  );
};

export default ShopLeftSide;
