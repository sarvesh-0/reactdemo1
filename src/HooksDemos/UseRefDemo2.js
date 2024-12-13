import React, { useRef } from 'react';

function UseRefCalculator() {
  const input1Ref = useRef(null); // Reference for first input
  const input2Ref = useRef(null); // Reference for second input
  const resultRef = useRef(null); // Reference to display result

  const calculate = (operation) => {
    const num1 = parseFloat(input1Ref.current.value || 0);
    const num2 = parseFloat(input2Ref.current.value || 0);
    let result;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        result = 'Invalid operation';
    }

    resultRef.current.textContent = `Result: ${result}`;
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input type="number" ref={input1Ref} placeholder="Enter first number" />
      <input type="number" ref={input2Ref} placeholder="Enter second number" />
      <div>
        <button onClick={() => calculate('add')}>Add</button>
        <button onClick={() => calculate('subtract')}>Subtract</button>
        <button onClick={() => calculate('multiply')}>Multiply</button>
        <button onClick={() => calculate('divide')}>Divide</button>
      </div>
      <p ref={resultRef}>Result: </p>
    </div>
  );
}

export default UseRefCalculator;
