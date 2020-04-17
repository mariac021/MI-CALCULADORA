import React, { useState } from "react";
import ReactDOM from "react-dom";

import './App.css';

function App() {
  const [input, setInput] = useState("");
  const calcBtns = [];
  [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, ".", "%"].forEach(item => {
    calcBtns.push(
      <button
        onClick={e => {
          setInput(input + e.target.value);
        }}
        value={item}
        key={item}
      >
        {" "}
        {item}
      </button>
    );
  });

  return (
    <div className="container">
      {" "}
      <div className="show-input">{input}</div>
      <div className="btn numeros botones flex">{calcBtns}</div>
     
      <div className="operaciones btn  ajustes">
        {/* add button */}
        <button onClick={e => setInput(input + e.target.value)} value="+">
          +
        </button>

        {/* minus btn */}
        <button onClick={e => setInput(input + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={e => setInput(input + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={e => setInput(input + e.target.value)} value="/">
          {" "}
          /
        </button>
        {/* "=" btn */}
        <button
          onClick={e => {
            try {
              setInput(
                String(eval(input)).length > 3 &&
                  String(eval(input)).includes(".")
                  ? String(eval(input).toFixed(4))
                  : String(eval(input))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>
      </div>
      <div className="btn borrar botones2">
        {/* clear button */}

        <button onClick={() => setInput(input.substr(0, input.length - 1))}>
          Borrar
        </button>

        {/* clear all */}
        <button onClick={() => setInput("")} value="">
          AC
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
