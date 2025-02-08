import Information, { InformationType } from "./Information";

const informations: InformationType[] = [
  {
    caption: "اصالت انقضا کالای سالم",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/ic-1.png",
    title: "گارانتی 4 گانه محصولات",
  },
  {
    caption: "حتی سلیقه‌ای",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/ic-002.png",
    title: "20 روز ضمانت مرجوعی",
  },
  {
    caption: "هفت روز هفته تا ساعت 24",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/ic.png",
    title: "مشاوره تخصصی رایگان",
  },
  {
    caption: "از طریق درگاه های معتبر",
    img: "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/ic-3.png",
    title: "پرداخت ایمن",
  },
];

const Informations = () => {
  return (
    <div>
      <ul className="flex flex-wrap xl:flex-nowrap  items-center gap-[.7rem] justify-between">
        {informations.map((info, index) => (
          <Information key={index} information={info} />
        ))}
      </ul>
    </div>
  );
};

export default Informations;
