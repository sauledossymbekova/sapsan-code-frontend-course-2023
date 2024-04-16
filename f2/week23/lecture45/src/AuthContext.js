import { createContext } from "react";

export const AuthContext = 
createContext({
  username: "",
  password: "",
  isLoggedIn: false,
});
