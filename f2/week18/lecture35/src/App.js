import "./App.css";
import { useEffect, useState } from "react";

const BACKEND_USERS =
  "https://mocki.io/v1/ac69aa4c-0737-4c04-99fa-c458e6fcf5a7";

function App() {
  const [usersList, setUsersList] = useState([]);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  // async
  async function getUsers() {
    setLoading(true);
    try {
      const result = await fetch(BACKEND_USERS);
      console.log("начался запрос");
      const users = await result.json();
      setUsersList(users);

      setLoading(false);
      console.log("закончился запрос");
    } catch {
      setIsError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <button onClick={getUsers}>Получить данные</button>
      {loading && <h5>Загрузка....</h5>}
      {isError && (
        <h5 style={{ color: "red" }}>
          Непредвиденная ошибка, попробуйте еще раз.
        </h5>
      )}
      {usersList.map((user) => (
        <div key={user.id}>
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
