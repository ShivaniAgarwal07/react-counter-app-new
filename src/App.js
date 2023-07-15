import "./styles.css";
import { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setCounter(counter - value);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCounter(counter + value);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(0);
          setValue(1);
        }}
      >
        Reset
      </button>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
    </div>
  );
}
