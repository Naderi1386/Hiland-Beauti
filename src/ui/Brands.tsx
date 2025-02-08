import HomeTitle from "./HomeTitle";

const brands: string[] = [
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/garnier-logo.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/deborah-logo.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/yves-roocher-logo.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/bourjois.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/essence.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/farmasi.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/inlay-logo.png",
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/eternity.png",
];


const Brands = () => {
  return (
    <div className="mb-20">
      <HomeTitle
        englishTitle="Brands

"
        persianTitle="برترین برنـــدها

"
      />
      <ul className="flex flex-wrap custome_md:flex-nowrap  items-center gap-1 custome_md:justify-between">
        {brands.map((brand,index)=><li className="border w-[49%] custome_md:w-auto border-solid border-stone-200/70 rounded-lg p-[.35rem]" key={index}>
            <img src={brand} alt={`brand/${index+1}`} className="w-full h-full"   />
        </li>)}
      </ul>
    </div>
  );
};

export default Brands;
