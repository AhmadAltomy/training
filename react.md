# React JS

## 1. React Hooks

- [ ] useState Hook
  useState is a Hook that lets you add React state to function components. It returns a pair of values: the current
  state and a function that updates it. This is similar to this.state and this.setState in a class, except you get them
  in a pair.

```typescript
import React, {useState} from 'react';

function Component() {
    const [count, setCount] = useState(0);

    return (

        <div>
            <p>{count} < /p>
        < /div>

    )
}
```

- [ ] useEffect Hook
  By using this Hook, you tell React that your component needs to do something after render. React will remember the
  function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.

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
            <p></p>
        < /div>

    )
}
```

- [ ] useMemo hook
  UseMemo will only recompute the memoized value when one of the dependencies has changed. This optimization helps to
  avoid expensive calculations on every render.

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
    }, [])

    return (

        <div>
            <p></p>
        < /div>

    )
}
```

- [ ] useCallback hook
  UseCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.
  This is useful when passing callbacks to optimized child components that rely on reference equality to prevent
  unnecessary renders.

```typescript

import {useCallback} from "react"

function Component() {
    const callback = useCallback(() => {
        // In first render, this function will be called and return 10 with 10 seconds
        // In next render, this function will not be called and return 10 immediately
        return VeryExpensiveFunction()
    }, [])

    return (

        <div>
            <p></p>
        < /div>

    )
}
```

- [ ] useRef hook
  UseRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The
  returned object will persist for the full lifetime of the component.

```typescript
import {useRef} from "react"

function Component() {
    const ref = useRef(null)


    // controler the ref
    const focus = () => {
        ref.current.focus()
    }

    return (

        <div>
            <input ref = {ref}
    />
    < /div>
)
}
```

- [ ] useContext hook
  Context is a way to pass data through the component tree without having to pass props down manually at every level.

```typescript
import {createContext, useContext} from "react"

const MyContext = createContext()

function Component() {
    return (
        <MyContext.Provider value = {10} >
            <ChildComponent / >
            </MyContext.Provider>
    )
}

function ChildComponent() {
    const value = useContext(MyContext)
    return (
        <div>
            <p>{value} < /p>
        < /div>
    )
}
```

- [ ] useReducer hook
  An alternative to useState. Accepts a reducer of type (state, action) => newState, and returns the current state
  paired with a dispatch method. (If you’re familiar with Redux, you already know how this works.)

```typescript
import {useReducer} from "react"

const initialState = {count: 0}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}

function Component() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count
:
    {
        state.count
    }
    <button onClick = {()
=>
    dispatch({type: 'decrement'})
}>
    -</button>
    < button
    onClick = {()
=>
    dispatch({type: 'increment'})
}>
    +</button>
    < />
)
}
```

- [ ] useImperativeHandle hook
  useImperativeHandle customizes the instance value that is exposed to parent components when using ref. As always,
  imperative code using refs should be avoided in most cases. useImperativeHandle should be used with forwardRef.

```typescript
import {forwardRef, useImperativeHandle} from "react"

function ChildComponent(props, ref) {
    useImperativeHandle(ref, () => ({
        focus: () => {
            // ...
        }
    }))
    return (
        <div>
            <p></p>
        < /div>
    )
}

ChildComponent = forwardRef(ChildComponent)

function ParentComponent() {
    const ref = useRef()
    return (
        <ChildComponent ref = {ref}
    />
)
}


function ReportsBottomSheet(props, ref) {
    useImperativeHandle(ref, () => ({
        // this function will be called when parent component call ref.current.open()
        open: () => {
            // When call this function from the parent component, we tell the bottom sheet to expand
            bottomSheetRef.current.snapTo(0)
            // or 
            // bottomSheetRef.current.expand()
        }
    }))
    const bottomSheetRef = useRef(null)
    return (
        <BottomSheet ref = {bottomSheetRef} >
            // content        
            </BottomSheet>
    )
}

// it's important to use forwardRef to pass the ref to the child component
ReportsBottomSheet = forwardRef(ReportsBottomSheet)

function ParentComponent() {
    const ref = useRef()
    const openBottomSheet = () => {
        ref.current.open()
    }
    return (
        <ReportsBottomSheet ref = {ref}
    />
)
}
```

- [ ] useLayoutEffect hook
  The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout
  from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously,
  before the browser has a chance to paint.

```typescript

import {useLayoutEffect} from "react"

function Component() {
    useLayoutEffect(() => {
        // code to run on component mount

        return () => {
            // code to run on component unmount
        }
    }, []);

    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        // Calling every time when value changes
    }, [value]);


    return (

        <div>
            <p></p>
        < /div>

    )
}
```

- [ ] useDebugValue hook
  useDebugValue can be used to display a label for custom hooks in React DevTools.

```typescript

import {useDebugValue} from "react"

function useFriendStatus(friendID) {
    const [isOnline, setIsOnline] = useState(null)

    // Show a label in DevTools next to this Hook
    // e.g. "FriendStatus: Online"
    useDebugValue(isOnline ? 'Online' : 'Offline')

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
        return () => {
            ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
        }
    }, [friendID])

    return isOnline
}
```

## 2. React Custom Hooks

- [ ] useToggle hook

```typescript
import {useState} from "react"

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue)
    const toggle = () => {
        setValue(!value)
    }
    return [value, toggle]
}
```

- [ ] useArray hook

```typescript
import {useState} from "react"

function useArray(initialValue = []) {
    const [value, setValue] = useState(initialValue)
    return {
        value,
        setValue,
        add: (el) => setValue([...value, el]),
        clear: () => setValue([]),
        removeById: (id) => setValue(value.filter((v, i) => i !== id)),
        removeIndex: (index) => setValue(value.filter((v, i) => i !== index)),
        removeBy: (filterFn) => setValue(value.filter((v, i) => !filterFn(v, i))),
        updateById: (id, newEl) => setValue(value.map((v, i) => i === id ? newEl : v)),
        updateIndex: (index, newEl) => setValue(value.map((v, i) => i === index ? newEl : v)),
        updateBy: (filterFn, newEl) => setValue(value.map((v, i) => filterFn(v, i) ? newEl : v)),
    }
}
```

- [ ] usePrevious hook

```typescript
import {useEffect, useRef} from "react"

function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {
        ref.current = value
    })
    return ref.current
}
```

- [ ] useWindowSize hook

```typescript

import {useEffect, useState} from "react"

function useWindowSize() {
    const [size, setSize] = useState([0, 0])
    useEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, [])
    return size
}
```

- [ ] useEventListener hook

```typescript
import {useRef, useEffect} from "react"

function useEventListener(eventName, handler, element = window) {
    // Create a ref that stores handler
    const savedHandler = useRef()

    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
        savedHandler.current = handler
    }, [handler])

    useEffect(
        () => {
            // Make sure element supports addEventListener
            // On 
            const isSupported = element && element.addEventListener
            if (!isSupported) return

            // Create event listener that calls handler function stored in ref
            const eventListener = event => savedHandler.current(event)

            // Add event listener
            element.addEventListener(eventName, eventListener)

            // Remove event listener on cleanup
            return () => {
                element.removeEventListener(eventName, eventListener)
            }
        },
        [eventName, element] // Re-run if eventName or element changes
    )
}
```

- [ ] useHover hook

```typescript
import {useRef, useState, useEffect} from "react"

function useHover() {
    const [value, setValue] = useState(false)

    const ref = useRef(null)

    const handleMouseOver = () => setValue(true)
    const handleMouseOut = () => setValue(false)

    useEffect(
        () => {
            const node = ref.current
            if (node) {
                node.addEventListener('mouseover', handleMouseOver)
                node.addEventListener('mouseout', handleMouseOut)

                return () => {
                    node.removeEventListener('mouseover', handleMouseOver)
                    node.removeEventListener('mouseout', handleMouseOut)
                }
            }
        },
        [ref.current] // Recall only if ref changes
    )

    return [ref, value]
}
```

## 3. Ant Design

### Basics

- [ ] Install

```bash
npm install antd
```

- [ ] Import

```typescript
import {Button} from 'antd';
```

- [ ] Button

```typescript
import {Button} from 'antd';

function App() {

    return (
        <div>
            <Button type = "primary" > Primary < /Button>
            < Button > Default < /Button>
            < Button
    type = "dashed" > Dashed < /Button>
        < Button
    type = "link" > Link < /Button>
        < /div>
)
    ;
}
```

- [ ] Icon

```typescript
import {Button, Icon} from 'antd';

function App() {

    return (
        <div>
            <Button type = "primary"
    shape = "circle"
    icon = "search" / >
    <Button type = "primary"
    icon = "search" >
        Search
        < /Button>
        < Button
    shape = "circle"
    icon = "search" / >
    <Button icon = "search" > Search < /Button>
    < br / >
    <Button shape = "circle"
    icon = "search" / >
    <Button icon = "search" > Search < /Button>
        < Button
    type = "dashed"
    shape = "circle"
    icon = "search" / >
    <Button type = "dashed"
    icon = "search" >
        Search
        < /Button>
        < /div>
)
    ;
}
```

- [ ] Typography

```typescript
import {Typography, Divider} from 'antd';

const {Title, Paragraph, Text} = Typography;

function App() {

    return (
        <Typography>
            <Title>Introduction < /Title>
        < Paragraph >
        duplication
        < /Paragraph>
        < Paragraph >
        After
        < /Paragraph>
        < Title
    level = {2} > Guidelines
    and
    Resources < /Title>
    < /Typography>
)
}
```
