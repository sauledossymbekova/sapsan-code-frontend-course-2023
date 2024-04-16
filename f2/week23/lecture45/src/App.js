import LoginForm from "./components/LoginForm";
import Main from "./components/Main";
import "./App.css";
import { AuthContext } from "./AuthContext";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({ username: "", password: "" });

  const login = (values) => {
    if(values.username === 'saule' && values.password === '123'){
      setUser(values);
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{...user, isLoggedIn}}>
        <LoginForm onLoginClick={login} />
        <Main />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

// renderProps - когда в ребенке есть функция в качестве пропса
// которая влияет на родителя

// сделать контекст в виде обьекта