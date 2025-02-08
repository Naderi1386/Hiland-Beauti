import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const ContactApps = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <IoLogoInstagram size={28} className="text-gray-400 transition-all duration-150 hover:text-purple-400" />
      </div>
      <div>
        <FaWhatsapp size={28} className="text-gray-400 transition-all duration-150 hover:text-green-300" />
      </div>
      <div>
        <FaTelegramPlane size={28} className="text-gray-400 transition-all duration-150 hover:text-blue-300" />
      </div>
    </div>
  );
}

export default ContactApps