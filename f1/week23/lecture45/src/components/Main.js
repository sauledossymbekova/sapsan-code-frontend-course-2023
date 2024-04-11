import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Main() {
  const { username, isLoggedIn } = useContext(AuthContext);

  return (
    <>
      {isLoggedIn ? (
        <h1> Добро пожаловать {username}!</h1>
      ) : (
        <h1>Пожалуйста залогиньтесь</h1>
      )}
    </>
  );
}
