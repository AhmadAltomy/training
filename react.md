# React JS


## 1. React Hooks

- [ ] useState Hook
```typescript
import React, {useState} from 'react';

function Component() {
    const [count, setCount] = useState(0);

    return (

        <div>
            <p>{count} </p>
        </div>

    )
}
```

- [ ] useEffect Hook
```typescript
import React, {useEffect} from 'react';

function Component() {
    useEffect(() => {
        // code to run on component mount
        
        return () => {
            // code to run on component unmount
        }
    }, []);

    const [value, setValue] = useState(0);

    useEffect(() => {
        // Calling every time when value changes
    }, [value]);
    
    
    return (

        <div>
            <p> </p>
        </div>

    )
}
```


- [ ] useMemo hook
```typescript
import {useMemo} from "react"

function VeryExpensiveFunction() {
    console.log("VeryExpensiveFunction called")
    // Taken 10 seconds to run
    return 10
}
function Component() {
    const veryExpensiveValue = useMemo(() => {
        // In first render, this function will be called and return 10 with 10 seconds
        // In next render, this function will not be called and return 10 immediately
        return VeryExpensiveFunction()
    },[])

    return (

        <div>
            <p> </p>
        </div>

    )
}
```


- [ ] useCallback hook
```typescript

import {useCallback} from "react"

function Component() {
    const callback = useCallback(() => {
        // In first render, this function will be called and return 10 with 10 seconds
        // In next render, this function will not be called and return 10 immediately
        return VeryExpensiveFunction()
    },[])

    return (

        <div>
            <p> </p>
        </div>

    )
}
```


- [ ] useRef hook

- [ ] useContext hook

- [ ] useReducer hook

