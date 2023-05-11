import React, { useContext } from "react";
import { LanguageContext } from "./App";

function DisplayLanguage() {
  // Utilizziamo il contesto per accedere alla lingua selezionata
  const { language } = useContext(LanguageContext);

  // Definiamo un oggetto che contiene le traduzioni per le diverse lingue
  const translations = {
    italiano: "Ciao mondo!",
    inglese: "Hello world!",
    spagnolo: "¡Hola mundo!",
  };

  return (
    <div>
      <h2>Display Language</h2>
      <p>{translations[language]}</p>
    </div>
  );
}

export default DisplayLanguage;