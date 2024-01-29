import ProductPhoto from "./ProductPhoto";

export default function ProductCard({cardUrl, title}) {
  return (
    <div>
      <ProductPhoto
        url=""
      />
      {/* <img src="https://www.greenwoodleather.com.au/cdn/shop/products/ST100160_3fe7c138-14e4-45f4-ac2c-6a61773db31e_2000x.jpg?v=1681747972" width="200" height="200"/> */}
      <h4>{title}</h4>
      <p>Краткая информация про продукт</p>
      <h5>Цена тг</h5>
    </div>
  );
}
