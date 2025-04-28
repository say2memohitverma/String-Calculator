import React, { useState } from 'react';
import { add } from './utils/calculator';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    try {
      setError(null);
      const sum = add(input);
      setResult(sum);
    } catch (err) {
      setResult(null);
      setError((err as Error).message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>String Calculator</h1>
        <p>Enter comma-separated numbers, or use custom delimiters</p>
        
        <div className="calculator-container">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., 1,2,3 or //;\n1;2;3"
            className="number-input"
          />
          <button onClick={handleCalculate} className="calculate-button">
            Calculate
          </button>
        </div>
        
        {result !== null && (
          <div className="result">
            <h2>Result:</h2>
            <p className="result-value">{result}</p>
          </div>
        )}
        
        {error && (
          <div className="error">
            <h2>Error:</h2>
            <p className="error-message">{error}</p>
          </div>
        )}
        
        <div className="examples">
          <h3>Examples:</h3>
          <ul>
            <li><code>1,2,3</code> → 6</li>
            <li><code>1\n2,3</code> → 6</li>
            <li><code>//;\n1;2;3</code> → 6 (using ; as delimiter)</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;