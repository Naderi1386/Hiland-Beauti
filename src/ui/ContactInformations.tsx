import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const ContactInformations = () => {
  return (
    <div className="space-y-[1.5rem] mb-6">
      <div className="px-2 flex items-center gap-1">
        <FaLocationDot  fill="#EC407A" size={24} />
        <div className="flex items-center gap-1">
          <span className="font-bold">آدرس:</span>
          <p>مشهد، بلوارکوثر، میدان پژوهش، کارخانه نوآوری</p>
        </div>
      </div>
      <div className="px-2 flex items-center gap-1">
        <FaPhoneVolume fill="#EC407A" size={24} />
        <div className="flex items-center gap-1">
          <span className="font-bold">شماره تماس:</span>
          <p>05138554460</p>
        </div>
      </div>
      <div className="px-2 flex items-center gap-1">
        <SiGmail fill="#EC407A" size={24} />
        <div className="flex items-center gap-1">
          <span className="font-bold">ایمیل:</span>
          <p>info@yourdomain.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInformations;
