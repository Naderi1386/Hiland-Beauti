
interface ShopRuleItemPropsType{
    rule:string
    index:number
}

const ShopRuleItem = ({rule,index}:ShopRuleItemPropsType) => {
  return (
    <li className="text-justify text-sm sm:text-base">
      <p className="leading-8">{index}- {rule}</p>
    </li>
  );
}

export default ShopRuleItem