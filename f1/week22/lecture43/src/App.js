import "./App.css";
import { useState } from "react";
import InfoList from "./components/InfoList";
import { LangContext } from "./LangContext";

function App() {
  const [selectedLang, setSelectedLang] = useState("ru");

  const handleLangChange = () => {
    if (selectedLang === "ru") {
      setSelectedLang("en");
    } else if (selectedLang === "en") {
      setSelectedLang("ru");
    }
  };

  return (
    <div className="App">
      <InfoList />

      <LangContext.Provider value={selectedLang}>
        <button onClick={handleLangChange}>{selectedLang}</button>
        <InfoList />
      </LangContext.Provider>
    </div>
  );
}

export default App;
