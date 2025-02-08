import { CategoryBox } from "../../ui/CategoryBox";

export interface BoxType {
  name: string;
  to: string;
  img: string;
  color: "pink" | "pink-x2" | "blue";
}

const data: BoxType[] = [
  {
    name: "محصولات بهداشتی",
    to: "/",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-6.png",
    color: 'pink',
  },
  {
    name: "محصولات ارایشی",
    to: "/",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-4.png",
    color: "pink-x2",
  },
  {
    name: "محصولات مو",
    to: "/",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/img-5.png",
    color: "blue",
  },
];

const HomeLittleBoxes = () => {
  return (
    <ul className="flex flex-col custome_md:flex-row items-center justify-center   gap-7 custome_md:gap-4 py-14">
      {data.map((item, index) => (
        <CategoryBox item={item} key={index} />
      ))}
    </ul>
  );
};

export default HomeLittleBoxes;
