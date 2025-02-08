
const IMG =
  "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/image-12.jpg";
  const IMG2 =
    "https://de7541655.t.ux5.ir/themes-files/bz_sh_template05/ab1.png";

const AboutUsPage = () => {
  return (
    <div className="flex flex-col custome_md:flex-row custome_md:justify-between items-center gap-[8rem]">
      <div className="basis-full custome_md:basis-[40%] relative custome_md:self-start lg:self-center">
        <img src={IMG} alt="img/about-us" className="rounded-t-[100%]" />
        <img
          src={IMG2}
          alt="img2/about-us"
          className="absolute bottom-[-2.3rem] custome_md:bottom-[-11.3rem] lg:bottom-[-2.3rem] left-[-3.5rem] custome_md:left-[-5.5rem] w-[300px] h-[100px]"
        />
      </div>
      <div className="basis-full custome_md:basis-[60%] text-black">
        <span className="block mb-5">
          به فروشگاه اینترنتی هایلند بیوتی خوش آمدید.
        </span>
        <h2 className="font-bold text-4xl mb-10">معرفی هایلند بیوتی</h2>
        <p className="font-extralight text-justify leading-8">
          هایلند بیوتی با تنوعی بالغ بر 20 هزار کالای آرایشی بهداشتی امکان
          انتخاب بهترین محصولات از مجموعه کاملی از برترین برندهای ایرانی و
          بین‌المللی فراهم آورده است و با ارائه تصویر و توضیحات تخصصی و دقیق
          درباره هر کالا، ثبت نظرات کاربران و امکان بازگشت کالا، انتخاب را برای
          مشتری آسان نموده است و روزانه محصولات در بسته‌بندی‌های جذاب و زیبا در
          زمان درخواست شده، برای مشتریان سراسر کشور ارسال می‌شود. ما در تمامی
          قدم‌های انتخاب درست کالا و خرید تا اطمینان از صحت کالای دریافت شده و
          کسب رضایت مشتری، در کنار شما هستیم و امور مشتریان ما همواره آماده
          پاسخگویی و رفع مشکلات همراهان خود است.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage