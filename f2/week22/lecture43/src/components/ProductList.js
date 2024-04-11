import Product from "./Product";

export default function ProductList({onBuyClick}) {
  return (
    <>
      Список продуктов:
      <Product name="Футболка" onBuy={onBuyClick}/>
    </>
  );
}
