import React, { useState, ReactNode } from 'react';
import CounterFunction from './counterfunction';

interface CounterDataProps {
    children: ReactNode;
}

const CounterData: React.FC<CounterDataProps> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <CounterFunction.Provider value={{ count, increment, decrement }}>
            {children}
        </CounterFunction.Provider>
    );
}

export default CounterData;
