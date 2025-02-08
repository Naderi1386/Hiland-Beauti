import ContactApps from "./ContactApps";
import ContactInformations from "./ContactInformations";
import ContactQuestion from "./ContactQuestion";
import PageTitle from "./PageTitle";

const ContactPage = () => {
  return (
    <div>
      <PageTitle
        title="ارتباط با ما
"
      />
      <div className="px-[1.5rem] sm:px-[6rem] md:px-[8rem] xl:px-[12rem]">
        <div>
          <h3 className="mb-4 font-bold text-lg">سوالات متداول</h3>
          <ContactQuestion />
          <h3 className="mt-4 mb-5 font-bold text-lg">ارتباط با ما</h3>
          <ContactInformations />
          <ContactApps />
          {/* <CompanyMap x={36.2973}  y={59.6102} /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
