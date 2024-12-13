import React, { useState, useEffect } from 'react';

function NumberAnalysis() {
  const [number, setNumber] = useState(0);
  const [analysis, setAnalysis] = useState({
    evenOdd: '',
    positiveNegative: '',
    prime: ''
  });

  useEffect(() => {
    const isEven = number % 2 === 0 ? 'Even' : 'Odd';
    const isPositive = number > 0 ? 'Positive' : number < 0 ? 'Negative' : 'Zero';
    const isPrime = checkPrime(number) ? 'Prime' : 'Not Prime';

    setAnalysis({
      evenOdd: isEven,
      positiveNegative: isPositive,
      prime: isPrime
    });
  }, [number]);

  const checkPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div>
      <h2>Number Analysis</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <p>Number: {number}</p>
      <p>Even or Odd: {analysis.evenOdd}</p>
      <p>Positive or Negative: {analysis.positiveNegative}</p>
      <p>Prime or Not: {analysis.prime}</p>
    </div>
  );
}

export default NumberAnalysis;
