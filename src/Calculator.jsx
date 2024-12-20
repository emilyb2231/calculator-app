import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState(""); 
  const [result, setResult] = useState(0);

  const handleOperation = (operation) => {
    const inputNumber = parseFloat(input);

    if (isNaN(inputNumber)) {
      alert("Please enter a valid number");
      return;
    }

    let newResult = result;
    switch (operation) {
      case "add":
        newResult += inputNumber;
        break;
      case "subtract":
        newResult -= inputNumber;
        break;
      case "multiply":
        newResult *= inputNumber;
        break;
      case "divide":
        if (inputNumber !== 0) {
          newResult /= inputNumber;
        } else {
          alert("Cannot divide by zero");
          return;
        }
        break;
      default:
        return;
    }

    setResult(newResult);
    setInput(""); 
  };

  const resetInput = () => setInput("");
  const resetResult = () => setResult(0);

  return (
    <div className="app">
      <h2>Enhanced Calculator</h2>
      <div>
        <h3>Result: {result}</h3>
        <input
          className="input"
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a number"
        />
      </div>
      <div className="btn">
        <button className="op-btn" onClick={() => handleOperation("add")}>Add</button>
        <button className="op-btn" onClick={() => handleOperation("subtract")}>Subtract</button>
        <button className="op-btn" onClick={() => handleOperation("multiply")}>Multiply</button>
        <button className="op-btn" onClick={() => handleOperation("divide")}>Divide</button>
      </div>
      <div className="btn">
        <button className="reset-btn" onClick={resetInput}>Reset Input</button>
        <button className="reset-btn" onClick={resetResult}>Reset Result</button>
      </div>
    </div>
  );
};

export default Calculator;
