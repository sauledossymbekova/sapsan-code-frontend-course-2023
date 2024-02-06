import "./App.css";
import Container from "./components/Container";
import Product from './components/Product'

function App() {
  let product1 = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };

  return (
    <div className="App">
      {/* <div style={{border: '3px solid black'}}>
        <img width="200"src="https://m.media-amazon.com/images/I/41JqxFHP36L._AC_UY1000_.jpg"/>
      </div>

      <div style={{border: '3px solid black'}}>
        <h1>Hello World!</h1>
      </div> */}

      <Container>
        <h1>Hello World!</h1>
      </Container>

      <Container>
        <Product {...product1}/>
      </Container>

    </div>
  );
}

export default App;

// SPREAD Operator ...
// - для упращение кода
