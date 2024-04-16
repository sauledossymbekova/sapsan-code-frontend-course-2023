import "./App.css";
import NewsList from "./components/NewsList";
import { LangContext } from "./LangContext";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    // дать доступ к значению контекста
    <>
      <LangContext.Provider value={language}>
        <div className="App">
          <button onClick={() => setLanguage("ru")}>RU</button>
          <NewsList />
        </div>
      </LangContext.Provider>
    </>
  );
}

export default App;
