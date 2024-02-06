export default function Product({ title, description, image, price }) {
  return (
    <>
      <img src={image} width="200"/>
      <h5> Название продукта: {title}</h5>
      <h5> Цена продукта: {price}</h5>
      <p> {description}</p>
      <div style={{}}>

      </div>
    </>
  );
}
