import React, { useState, createContext } from "react";
import DisplayLanguage from "./DisplayLanguage";

// Creiamo il contesto
export const LanguageContext = createContext();

function App() {
  // Definiamo lo stato per la lingua selezionata
  const [language, setLanguage] = useState("italiano");

  // Funzione per gestire la selezione della lingua
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    // Avvolgiamo il componente DisplayLanguage nel provider del contesto
    <LanguageContext.Provider value={{ language }}>
      <div>
        <h1>Language Selector</h1>
        <select value={language} onChange={handleLanguageChange}>
          <option value="italiano">Italiano</option>
          <option value="inglese">Inglese</option>
          <option value="spagnolo">Spagnolo</option>
        </select>
        <DisplayLanguage />
      </div>
    </LanguageContext.Provider>
  );
}

export default App;