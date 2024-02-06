import "./App.css";
import { data } from "./data";
import ProductList from "./components/ProductList";

function App() {
  const filteredList = data.filter(
    (product) => product.category === "men's clothing"
  );
  const womenProducts = data.filter(
    (product) => product.category === "women's clothing"
  );
  const cheapProducts = data.filter((product) => product.price < 50);

  return (
    <>
      <h1>Дешевые вещи:</h1>
      <ProductList list={cheapProducts}/>

      <h1>Мужские вещи:</h1>
      <ProductList list={filteredList}/>

      <h1>Женские вещи:</h1>
      <ProductList list={womenProducts}/>
    </>
  );
}

export default App;

// нужно в консоли показать
// только те продукты у которых категория равна men's clothing

// key - уникальным,
// использоваться только в отображении списков,
// и может повторяться если это отдельные блоки
// прописываем только внутри мап и тд
// в самой компоненте как пропс не надо получать key
// если нужно внутри <></> то используем так: <Fragment key={product.id}>

// создать компоненту ProductPhoto
// который отвечает за отрисовку картинки
// ProductCard -> ProductPhoto
// через пропсы передавать адрес картинки, и размеры картинки

// Задание взять данные с data.js
// для кажлого элемента в data отрисовывать ProductCard
