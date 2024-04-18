import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [val, setVal] = useState("");
  // монтируй (mounting) обновляй(update) и демонтируй (unmounting)

  useEffect(() => {}, []);
  useEffect(() => {
    console.log("1");
    setVal(number + 1);
    return () => {};
  }, [number]);

  return (
    <div className="App">
      <button onClick={() => setNumber(number + 1)}>+1</button>
      <h1>{number}</h1>
      <h1>{val}</h1>
    </div>
  );
}

export default App;

// плохой тон
// useEffect(()=>{})

// useLayoutEffect - синхронно
// useEffect - асинхронно
