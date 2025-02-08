import { useLocation, useNavigate } from "react-router-dom";
import { FilterItemType } from "./HeaderMenuFilter";

interface HeaderMenuFilterListPropsType {
  data: FilterItemType[];
  opacity: boolean;
  setShow: (show: boolean) => void;
}

const HeaderMenuFilterList = ({
  data,
  opacity,
  setShow
}: HeaderMenuFilterListPropsType) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <ul>
      {data.map((item, index) => (
        <li
          onClick={() => {
            navigate(`${item.to}`);
            setShow(false)
          }}
          className={`transition-all cursor-pointer duration-200 hover:text-customePink-500 ${
            opacity ? "opacity-100" : "opacity-0"
          }  border-b py-3 px-5 text-sm border-solid border-b-stone-200`}
          key={index}
        >
          <p className={`${pathname === item.to && "text-customePink-500"}`}>
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default HeaderMenuFilterList;
