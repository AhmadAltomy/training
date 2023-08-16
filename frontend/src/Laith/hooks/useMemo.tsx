import React, { useMemo } from 'react';

const ExpensiveComponent: React.FC = () => {
  const computeExpensiveValue = () => {
    console.log('Computing expensive value...');
    // Simulate a time-consuming computation
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  };

  const memoizedValue = useMemo(() => computeExpensiveValue(), []);

  return <p>Memoized Value: {memoizedValue}</p>;
};

export default ExpensiveComponent;
