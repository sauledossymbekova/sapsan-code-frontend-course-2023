import ProductPhoto from "./ProductPhoto";

export default function ProductCard(props) {
  const {imageUrl, title, description, price, rating} = props

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