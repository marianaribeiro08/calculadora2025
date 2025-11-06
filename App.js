import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  // Função que é chamada quando o usuário clica em um botão
  const handleClick = (value) => {
    if (value === "=") {
      try {
        // Avalia a expressão matemática
        setInput(eval(input).toString());
      } catch {
        setInput("Erro");
      }
    } else if (value === "C") {
      // Limpa tudo
      setInput("");
    } else if (value === "⌫") {
      // Apaga o último caractere
      setInput(input.slice(0, -1));
    } else {
      // Adiciona o valor clicado
      setInput(input + value);
    }
  };

  // Lista de botões
  const buttons = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "⌫", "C"
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
