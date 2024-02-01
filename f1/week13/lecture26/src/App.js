import "./App.css";
import ProductCard from "./components/ProductCard";
import { data } from "./data";
import Container from "./components/Container";

function App() {
  return (
    <>
      <Container>
        {/* ProductList */}
        {data.map((product) => (
          <ProductCard
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.image}
            rating={product.rating}
          />
        ))}
      </Container>

      <Container>Hello Wordl!</Container>

      <Container>
        <img
          width="200"
          src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
        />
        <img
          width="200"
          src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
        />
        <img
          width="200"
          src="https://t4.ftcdn.net/jpg/05/62/99/31/360_F_562993122_e7pGkeY8yMfXJcRmclsoIjtOoVDDgIlh.jpg"
        />
      </Container>
    </>
  );
}

export default App;



// Задание div.app -> Container с children

// props

// parent -> children

// component tree

// Задание создать компоненту Product Photo
// в него должно передаваться пропсы юрл картинки и размер картинки

// Задание взять данные с data.js
// для кажлого элемента в data отрисовывать ProductCard
