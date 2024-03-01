import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log("список пользователей", usersList);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const result = await fetch(
        "https://mocki.io/v1/19c6d07b-1df6-473d-9140-7487dc8195412"
      );
      const resultJson = await result.json();
      setUsersList(resultJson);

      setIsLoading(false);
    } catch {
      setIsLoading(false);
      setIsError(true);
      console.log("Произашла ошибка");
    }
  };

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="App">
      <h1>Пример получения данных с апишки</h1>
      <button onClick={getUsers}>Получить данные</button>
      {isLoading && <h6>Загрузка....</h6>}

      {isError && <h6>Извините, произошла непредвиденная ошибка :(</h6>}

      {usersList.map((user) => (
        <div key={user.name}>
          <h5>
            {user.name} {user.surname}
          </h5>
          <h5 style={{ color: "green" }}>{user.email}</h5>
        </div>
      ))}
    </div>
  );
}

export default App;
