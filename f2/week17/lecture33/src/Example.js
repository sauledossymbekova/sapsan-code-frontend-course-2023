import "./App.css";
import { useState } from "react";

function Example() {
  // переменную создаете как обычно, но функция должна начинаться со слова set и к нему прибавляете название переменной
  const [num, setNum] = useState(10)
  
  const plus = () => {
    setNum(num+1)
    console.log("sum..", num);
  }

  // let num = 0;

  // const plus = () => {
  //   num = num+1;
  //   console.log("sum..", num);
  // };

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={plus}>+1</button>
    </div>
  );
}

export default Example;

// useState - хук, функция которая может давать возможность управлять состоянием
// Returns a stateful value, and a function to update it.
// возвращает переменную для состояния и функцию для обновления состояния
  // useState возвращает массив
  // из этого массива вы вытаскиваете сами элементы через деструктуризацию
  // [value, someFunction] = useState()

// {title, price} = props
// arr[1,2,3]

// [1,2,3] = arr