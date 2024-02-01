import './App.css';
import Card from './components/Card'
import Product from './components/Product';

function App() {
  let product1 = {title: 'Рюкзак', price: '25000'}

  return (
    <div className="App">
      <div>
        <img/>
      </div>

      <Card>
        <Product product={product1}/>
      </Card>

      <Card>
        <h1> Hello </h1>
      </Card>

      <Card>
        <img
          width="200"
          src="https://www.greenwoodleather.com.au/cdn/shop/products/ST100160_3fe7c138-14e4-45f4-ac2c-6a61773db31e_2000x.jpg?v=1681747972"
        />
      </Card>
    </div>
  );
}

export default App;

// children 