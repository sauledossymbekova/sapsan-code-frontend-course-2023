import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [korzinaList, setKorzinaList] = useState();
  const addToCart = () => {
    console.log("товар был добавлен");
    setKorzinaList(["футболка"]);
  };

  return (
    <div className="App">
      <Cart list={korzinaList}/>
      <ProductList onBuyClick={addToCart} />
    </div>
  );
}

export default App;
