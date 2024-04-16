import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function Main() {
  const {username, isLoggedIn} = useContext(AuthContext);
  
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Добро пожаловать, ${username}!`
          : " Пожалуйста зайдите на свой аккаунт!"}
      </h1>
    </div>
  );
}
