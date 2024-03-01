import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({name: '', surname: '', profession: '', hobby: ''})

  // для имени
  const handleNameChange = (a) => {
    setPerson({...person, name: a.target.value})
    console.log(person, "ты меняешь человека")
  }

  // для фамилии
  const handleSurnameChange = (b) => {
    setPerson({...person, surname: b.target.value})
    console.log(person, "ты меняешь человека")
    // console.log("ты что-то вводишь", event.target.value)
  }

  const handleProfessionChange = (event) => {
    setPerson({profession: event.target.value, surname: person.surname, name: person.name, hobby: person.hobby})
  }

  const handleHobbyChange= (event) => {
    setPerson({hobby: event.target.value, surname: person.surname, name: person.name, profession: person.profession})
  }

  return (
    <div className="App">
      <h5>имя: {person.name} фамилия:{person.surname}</h5>
      <h5>профессия - {person.profession} хобби - {person.hobby}</h5>
      <label>
        Ваше имя:
      <input onChange={handleNameChange}/> 
      </label>
      
      <label>
        Ваша фамилия:
      <input onChange={handleSurnameChange}/> 
      </label>

      <div>
      <label>
        Ваша профессия:
      <input onChange={handleProfessionChange}/> 
      </label>

      <label>
        Ваше хобби:
      <input onChange={handleHobbyChange}/> 
      </label>
      </div>
    </div>
  );
}

export default App;

// input
// string

/*
  const [num, setNum] = useState(0)

  // 0 => 0+1 => 1
  // 1 => 1+1 => 2
  // 2 => 2+1 => 3
  setNum(num+1)
*/

/**
 function App() {
  // const [surname, setSurname] = useState("") // string

  const [num, setNum] = useState(0); // number

  const handleClick = () => {
    setNum(num + 1);
    setNum(num + 1);
    setNum(num + 1);
  }; // 3? 1?

  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={handleClick}> + </button>
    </div>
  );
}
 */