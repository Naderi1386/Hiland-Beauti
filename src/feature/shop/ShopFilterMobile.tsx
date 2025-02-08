import FilterListMobile from "./FilterListMobile";

const ShopFilterMobile = () => {
  return (
    <div className="flex items-center justify-between gap-3 ">
      <div className=" w-full">
      <FilterListMobile
        name="category"
        about="دسته بندی"
        filters={[
          { text: "آرایشی", value: "آرایشی" },
          { text: "مو", value: "مو" },
          { text: "بهداشتی", value: "بهداشتی" },
          { text: "بدون دسته بندی", value: "none" },
        ]}
      />

      </div>
    </div>
  );
};

export default ShopFilterMobile;
