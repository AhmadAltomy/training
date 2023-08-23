import React, { useContext } from 'react';
import CounterFunction from './counterfunction';

const ChildComponent = () => {
    const { count, increment, decrement } = useContext(CounterFunction);

    return (
        <div>
            <h2>Child Component</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default ChildComponent;
