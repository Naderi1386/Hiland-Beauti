interface ProductCaptionListItemsPropsType{
    title:string
    content:string 
}
const ProductCaptionListItems = ({content,title}:ProductCaptionListItemsPropsType) => {
  return (
    <li className="py-3 border-b border-solid border-stone-300 text-stone-600 ">
      <div className="w-[47.5%] flex items-center justify-between">
        <span className="block">{title}</span>
        <span className="block">{content}</span>
      </div>
    </li>
  );
}

export default ProductCaptionListItems