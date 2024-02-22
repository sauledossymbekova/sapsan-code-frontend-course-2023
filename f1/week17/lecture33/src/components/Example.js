import { useState, useEffect } from "react";

export default function Example() {
  // num - это переменная для состояния, setNum - это функция для обновления состояния
  const [num, setNum] = useState(0); // => []
  const [isRed, setIsRed] = useState(false);

  const plus = () => {
    // обновляете состояние
    setNum(num + 1);
    console.log("plus..");
  };

  const getInfo = async () => {
    try {
      await fetch("");
    } catch {}
  };

  useEffect(() => {
    getInfo();
  });

  return (
    <>
      {/* {isRed ? <h1>Красное</h1> : <></>} */}
      {/* <h1 style={isRed ? { color: "red" } : { color: "black" }}>
        {isRed ? "Привет Мир!" : "Hello World!"}
      </h1> */}
      {isRed && <>.......</>}
      <button onClick={() => setIsRed(!isRed)}>
        {isRed ? "скрыть" : "подробнее"}
      </button>

      <h1>Число: {num}</h1>
      <button onClick={plus}>+1</button>
    </>
  );
}
