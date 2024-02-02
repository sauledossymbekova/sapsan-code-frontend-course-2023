import ProductPhoto from "./ProductPhoto";
import "./ProductCard.css";

export default function ProductCard(props) {
  const { image, title, description, price, category } = props;

  return (
    <div className="card">
      <ProductPhoto url={image} alt="рюкзак" />
      <h5>{title}</h5>
      <p>{description}</p>
      <h6>{price} тг</h6>
      <p> Категория: {category}</p>
    </div>
  );
}
