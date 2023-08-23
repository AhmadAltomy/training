import { createContext } from 'react';

const CounterFunction = createContext({
    count: 0,
    increment: () => { },
    decrement: () => { },
});

export default CounterFunction;