import "./App.css";
import { useState } from "react";

function App() {
  const [person, setPerson] = useState({
    name: "",
    surname: "",
    info: { position: "" },
    hobby: "",
  });
  console.log(person);

  // для изменении имени
  const handleNameChange = (event) => {
    setPerson({ ...person, name: event.target.value }); // surname - undefined
  };

  // для ввода Фамилии
  const handleSurnameChange = (event) => {
    setPerson({ ...person, surname: event.target.value }); // name - undefined
  };

  const handlePostionChange = (event) => {
    setPerson({
      ...person,
      info: { ...person.info, position: event.target.value },
    });
  };
  const handleHobbyChange = (event) => {
    setPerson({ ...person, hobby: event.target.value });
  };

  return (
    <div className="App">
      <h5 className="info-text">Твое имя: {person.name}</h5>
      <h5 className="info-text">Твоя Фамилия:{person.surname}</h5>
      <h5 className="info-text">Позиция на работе: {person.info.position}</h5>
      <h5 className="info-text">Хобби: {person.hobby}</h5>
      <label>
        Имя:
        <input onChange={handleNameChange} />
      </label>
      <label>
        Фамилия:
        <input onChange={handleSurnameChange} />
      </label>
      <div className="additional">
        <label>
          Позиция на работе:
          <input onChange={handlePostionChange} />
        </label>
        <label>
          Хобби
          <input onChange={handleHobbyChange} />
        </label>
      </div>
    </div>
  );
}

export default App;

// initial render
// useState -> number, boolean, string
// null, undefined

// object

// первое понять почему setValue(value + 1)setValue(value + 1)setValue(value + 1); (когда три раза)
// то не возвращает в результате цифру 3
// как написать 3 setValue(); так чтобы он друг за другом три раза выполнился
/**      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue(value + 1);
          setValue(value + 1);
          setValue(value + 1);
        }}
      >
        +
      </button> */
