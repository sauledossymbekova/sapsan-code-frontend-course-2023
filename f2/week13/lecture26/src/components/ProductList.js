import Container from "./Container"
import ProductCard from "./ProductCard"

export default function ProductList({list}){

    return(
        <Container>
        {list.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Container>
    )
}

// && - условный рендеринн
// Задание: отображать карточку продукта если только он есть на складе