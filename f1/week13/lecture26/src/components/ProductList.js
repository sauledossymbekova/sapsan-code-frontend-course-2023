import ProductCard from "./ProductCard";
import Container from "./Container";

export default function ProductList({list}) {

  return (
    <Container>
        {list.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
            rating={product.rating}
          />
        ))}
    </Container>
  );
}
// && - условный рендеринн
// Задание: отображать карточку продукта если только он есть на складе

// фильтрация продуктов по категории, где категория продукта ровно "men's clothing"
