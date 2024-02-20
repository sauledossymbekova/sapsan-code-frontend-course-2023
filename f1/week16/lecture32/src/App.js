import "./App.css";
import Button from "./components/Button";

function App() {
  const title = 'My Product'


  const handleClick = () => {
    console.log(`my custom ${title} function!!!! `)
  }

  return (
    <div className="App">
      <Button onButtonClick={() => alert("HEELLLLOOO!!!")} />

      <Button onButtonClick={handleClick}/>
      {/* <Button message="Вы кликнули на меня!!!!"/> */}
    </div>
  );
}

export default App;

// с родителя на ребенка передать функцию обработчика


// text, url, price, inStock - primitive data types
// {product} - object
