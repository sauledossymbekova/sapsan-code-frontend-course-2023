import "./App.css";
import Example from "./components/Example";

function App() {

  return (
    <div className="App">
      <Example/>
    </div>
  );
}

export default App;

// useState - хук для состояния
// возвращает две вещи - переменная для состояния, функция которая обновляет состояние и тригерить реакт

// {title, price} = props
// [val, someFunction ] = arr

// задание: добавить кнопку подробнее
// при ее нажатии снизу появляется текст про продукт и текст кнопки меняется на "Скрыть"

// или добавить useState в свой проект