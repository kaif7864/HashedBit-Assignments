import React, { useState } from 'react'


function Assignment5() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleCalculate = (operation) => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (isNaN(n1) || isNaN(n2)) {
            setResult("Please enter valid numbers");
            return;
        }

        switch (operation) {
            case "add":
                setResult(n1 + n2);
                break;
            case "subtract":
                setResult(n1 - n2);
                break;
            case "multiply":
                setResult(n1 * n2);
                break;
            case "divide":
                setResult(n2 !== 0 ? n1 / n2 : "Cannot divide by zero");
                break;
            default:
                setResult(null);
        }
    };

    return (
        <div className="calculator">
            <h2>Calculator</h2>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Enter second number"
            />
            <div className="buttons">
                <button onClick={() => handleCalculate("add")}>+</button>
                <button onClick={() => handleCalculate("subtract")}>-</button>
                <button onClick={() => handleCalculate("multiply")}>×</button>
                <button onClick={() => handleCalculate("divide")}>÷</button>
            </div>
            <div className="result">
                <h3>Result: {result !== null ? result : "N/A"}</h3>
            </div>
        </div>
    );
}


export default Assignment5