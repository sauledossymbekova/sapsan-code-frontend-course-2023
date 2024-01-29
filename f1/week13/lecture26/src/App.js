import "./App.css";
import ProductCard from "./components/ProductCard";
import { data } from "./data";

function App() {
  console.log(data);

  return (
    <div className="App">
      {
        data.map((element)=> <ProductCard title={element.title}/>)
      }
      <ProductCard cardUrl="https://www.greenwoodleather.com.au/cdn/shop/products/ST100160_3fe7c138-14e4-45f4-ac2c-6a61773db31e_2000x.jpg?v=1681747972"/>
      <ProductCard cardUrl="https://www.greenwoodleather.com.au/cdn/shop/products/ST100160_3fe7c138-14e4-45f4-ac2c-6a61773db31e_2000x.jpg?v=1681747972"/>
      <ProductCard cardUrl="https://www.greenwoodleather.com.au/cdn/shop/products/ST100160_3fe7c138-14e4-45f4-ac2c-6a61773db31e_2000x.jpg?v=1681747972"/>
    </div>
  );
}

export default App;

// props

// parent -> children

// component tree

// Задание создать компоненту Product Photo
// в него должно передаваться пропсы юрл картинки и размер картинки


// Задание взять данные с data.js
// для кажлого элемента в data отрисовывать ProductCard
