import ProductPhoto from "./ProductPhoto";
import './ProductCard.css'

export default function ProductCard({image, title}) {
  return (
    <div>
      <ProductPhoto
        url={image}
        width="200"
        height="200"
        alt="рюкзак"
      />
      <h5>{title}</h5>
      <p>Краткая информация про продукт</p>
      <h6>Цена тг</h6>
    </div>
  );
}
