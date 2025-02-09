interface ProductCaptionPropsType{
    caption:string
}
const ProductCaption = ({caption}:ProductCaptionPropsType) => {
  return (
    <div >
        <p className="leading-8 text-justify">{caption}</p>
    </div>
  )
}

export default ProductCaption