import "./App.css";
import { useState } from "react";

function App() {
  const [showText, setShowText] = useState(false);
  const [isRed, setIsRed] = useState(false);

  const makeRed = () => {
    setIsRed(!isRed);
    // ! делает true => false
    // false => true
  };

  return (
    <div className="App">
      {showText ? <h1> Hello world!</h1> : <></>}
      <button onClick={() => setShowText(true)}>Покажи</button>

      <h1 style={isRed ? { color: "red" } : { color: "black" }}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </h1>
      <button onClick={makeRed}>Клик</button>
    </div>
  );
}

export default App;
