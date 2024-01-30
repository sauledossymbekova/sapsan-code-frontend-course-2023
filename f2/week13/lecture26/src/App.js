import './App.css';
import ProductCard from './components/ProductCard';
import { data } from './data'

function App() {
  console.log(data)

  return (
    <div className="App">
      {data.map((product) => <ProductCard title={product.title} image={product.image}/>)}

      {/* <ProductCard image="https://object.pscloud.io/cms/cms/Photo/img_0_398_406_8.jpg"/> */}
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