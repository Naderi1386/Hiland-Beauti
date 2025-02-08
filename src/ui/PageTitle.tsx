interface PageTitlePropsType {
  title: string;
  icon?: JSX.Element | null;
}

const PageTitle = ({ title,  icon }: PageTitlePropsType) => {
  return (
    <div
      className={`bg-customeBackGroundColor-200  text-black text-5xl font-bold py-14 flex items-center ${
        icon && "gap-3"
      } justify-center mb-16`}
    >
      {icon && icon}

      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;
