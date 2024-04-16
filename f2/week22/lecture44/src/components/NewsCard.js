import { useContext } from "react";
import { LangContext } from "../LangContext";

export default function NewCard({ title, description, image }) {
  
  // использовать - получить значение контекста
  const lang = useContext(LangContext);

  return (
    <div>
      {lang === "ru" ? (
        <div style={{ width: "500px" }}>
          <h1>{title}</h1>
          <p>{description}</p>
          <img src={image} width="300" height="300" />
        </div>
      ) : (
        <div>
          <h1>Извините мы не поддерживаем сайт на английском языке</h1>
          <h1>Sorry we don't supporte English</h1>
        </div>
      )}
    </div>
  );
}
