import Slider from "rc-slider";
import { useState } from "react";
import { useFilterRoute } from "../../hooks/useFilterRoute";

const ShopPriceMobileFilter = () => {
  const [price, setPrice] = useState([120000, 590000]);
    const {filterRoute}=useFilterRoute()
  const onFilter = () => {
    filterRoute("minPrice", `${price.at(0)}`);
    filterRoute("maxPrice", `${price.at(1)}`);
  };

  return (
    <div className="mt-6 flex justify-start">
      <div className="w-full ">
        <div className="mb-4">
          <Slider
            range
            min={120000}
            max={590000}
            step={1000}
            defaultValue={price}
            onChange={(arr) => setPrice(arr as number[])}
            className="w-full "
            handleStyle={{
              backgroundColor: "#EC407A",
              borderColor: "#EC407A",
              boxShadow: "none",
            }}
            trackStyle={{
              backgroundColor: "#EC407A",
              borderColor: "#EC407A",
            }}
            activeDotStyle={{
              backgroundColor: "black",
              outline: "none",
            }}
          />
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-1 text-xs sm:text-sm">
            <span className=" text-stone-400">قیمت:</span>
            <p className="font-bold">
              <span>{price.at(0)} تومان</span>
              <span> - </span>
              <span>{price.at(1)} تومان</span>
            </p>
          </div>
          <button
            onClick={onFilter}
            className="bg-[#701A75] text-white py-1 px-3 sm:py-2 sm:px-4 text-center rounded-3xl text-xs"
          >
            فیلتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopPriceMobileFilter;
