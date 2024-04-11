import { createContext } from "react";
import { useState } from "react";

// context -
// мы создали чтобы отслеживать человек залогинен или нет

export const AuthContext = createContext({
  username: "",
  password: "",
  isLoggedIn: false,
  login: undefined,
});

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData) => {
    if (userData.username === "admin" && userData.password === "123") {
      setIsLoggedIn(true);
      setUser(userData);
    } else {
      console.error("Не правильные авторизационные данные!!!");
    }
  };
  console.log(user, isLoggedIn);

  return (
    <AuthContext.Provider value={{ ...user, isLoggedIn, login }}>
      {children}
    </AuthContext.Provider>
  );
}
