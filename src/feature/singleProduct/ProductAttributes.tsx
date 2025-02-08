interface ProductAttributesPropsType {
  attributes:string[]
}

const ProductAttributes = ({attributes}:ProductAttributesPropsType) => {
  return (
    <div>
      <h3 className="mb-6 font-bold text-lg">ویژگی‌های محصول</h3>
      <ul className="px-3 space-y-2 list-disc ">
        {attributes.map((att, index) => (
          <li key={index} className="text-sm">
            <p>{att}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductAttributes