import { useContext } from "react";
import { LangContext } from "../LangContext";

export default function Title({ text }) {
  const language = useContext(LangContext);

  return (
    <>
      <h1>{language === "ru" && text}</h1>
      <h1>{language === "kz" && "кешіріңіз сайт казақша колданылмайды"}</h1>
      <h1>{language === "en" && "Sorry, website does not support English"}</h1>
    </>
  );
}
