import ProductPhoto from "./ProductPhoto";
import "./ProductCard.css";

export default function ProductCard(props) {
  const { image, title, description, price, category } = props;
  const instock = true
  const productClassName = instock ?  'active' : 'notActive'

  return (
    <div className="card">
      <ProductPhoto url={image} alt="рюкзак" />
      <h5>{title}</h5>
      <p>{description}</p>
      <h6>{price} тг</h6>
      <p> Категория: {category}</p>
      <button disabled={true} className={productClassName}> {instock ? "Купить" : "Нет в наличии"}</button>
      {instock ? <button> Нет в наличии</button> : <button>Купить</button>}
    </div>
  );
}

// instock если есть на складе показывать кнопку с зеленым фоном и белым текстом "Купить"
// если нет то серю кнопку с черным  текстом "нет в наличии"

// ** вся карточка будто прозрачно серая
