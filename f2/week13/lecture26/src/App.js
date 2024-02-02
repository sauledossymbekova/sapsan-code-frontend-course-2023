import "./App.css";
import ProductCard from "./components/ProductCard";
import { data } from "./data";

function App() {
  return (
    // здесь div заменить на Container 
    <div className="App">
      {data.map((product) => (
        <ProductCard
          // здесь использовать спред
          {...product}
        />
      ))}
    </div>
  );
}

export default App;

// создать компоненту ProductPhoto
// который отвечает за отрисовку картинки
// ProductCard -> ProductPhoto
// через пропсы передавать адрес картинки, и размеры картинки

// Задание взять данные с data.js
// для кажлого элемента в data отрисовывать ProductCard
