import ProductPhoto from "./ProductPhoto";

export default function ProductCard(props) {
  const { imageUrl, title, description, price, rating, inStock} = props

  return (
    <div>
      <ProductPhoto
        url={imageUrl}
      />
      <h4>{title}</h4>
      <p>{description}</p>
      <h5 style={{color: 'red'}}>{price} тг</h5>
      <h5 style={{color: 'blue'}}> {rating.rate} / 5</h5>

    </div>
  );
}

// props - {...все свойства которые вы сами передали} {children}

// instock если есть на складе показывать кнопку с зеленым фоном и белым текстом "Купить"
// если нет то серю кнопку с черным  текстом "нет в наличии"
  // ** вся карточка будто прозрачно серая