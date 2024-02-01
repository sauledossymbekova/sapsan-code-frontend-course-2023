export default function Product({ product }) {
  return (
    <>
      <img
        width="200"
        src="https://www.greenwoodleather.com.au/cdn/shop/products/ST100160_3fe7c138-14e4-45f4-ac2c-6a61773db31e_2000x.jpg?v=1681747972"
      />

      <h4>{product.title}</h4>
      <h6>{product.price} тг</h6>
    </>
  );
}
