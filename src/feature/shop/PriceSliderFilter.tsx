import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useFilterRoute } from "../../hooks/useFilterRoute";

const PriceSliderFilter = () => {
  const [price, setPrice] = useState([120000, 590000]);
  const { filterRoute } = useFilterRoute();

  const onFilter = () => {
    filterRoute("minPrice", `${price.at(0)}`);
    filterRoute("maxPrice", `${price.at(1)}`);
  };

  return (
    <div className="py-5 border-t border-solid border-stone-300">
      <h3 className="font-bold mb-6">فیلتر قیمت</h3>
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
        <div className="flex items-center gap-1 text-sm">
          <span className=" text-stone-400">قیمت:</span>
          <p className="font-bold">
            <span>{price.at(0)} تومان</span>
            <span> - </span>
            <span>{price.at(1)} تومان</span>
          </p>
        </div>
        <button
          onClick={onFilter}
          className="bg-[#701A75] text-black py-2 px-4 text-center rounded-3xl text-xs"
        >
          فیلتر
        </button>
      </div>
    </div>
  );
};

export default PriceSliderFilter;
