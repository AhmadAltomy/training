# Todo List



### Day 23 August 2023
Reading resources:
- [ ] [Zustand](https://legacy.reactjs.org/docs/context.html)


Tasks:
- [ ] Install Zustand using npm or yarn: npm install zustand or yarn add zustand
- [ ] Create a store using Zustand to manage a piece of state. Define initial state and basic actions to update the state.
- [ ] Use the useStore hook to access and display the state in a component.
- [ ] Implement actions in the store that allow modifying the state in response to user interactions.

### Day 22 August 2023
Reading resources:
- [ ] [React Reducer](https://www.robinwieruch.de/react-usereducer-vs-usestate/)


Tasks:
- [ ] Create a new React component called FormReducer that utilizes the useReducer hook to manage form state.
- [ ] Define an initial state object that includes fields for a user's name, email, and password.
- [ ] Create action types for updating each field (e.g., UPDATE_NAME, UPDATE_EMAIL, UPDATE_PASSWORD).
- [ ] Write action creator functions for each field update action. These functions should accept a payload and return an object with the corresponding action type and payload.
- [ ] Implement a reducer that handles each field update action. Update the appropriate field in the state object with the new value from the action payload.
- [ ] In the FormReducer component, use the useReducer hook to manage the form state using your defined reducer and initial state.
- [ ] Create input fields for the user's name, email, and password. Connect these inputs to the respective state fields using the value attribute and the onChange event.
- [ ] Add a submit button to the form. When clicked, the button should console log the current form state.




### Day 21 August 2023
Reading resources:
- [ ] [React Context](https://legacy.reactjs.org/docs/context.html)


Tasks:
- [ ]  Set up a simple component hierarchy with a parent component and child components.
- [ ] Create a context using the createContext function.
- [ ] Use the useContext hook to access and consume the context data in child components.
- [ ] Implement a simple counter application using React Context to manage the count state across components.




### Day 20 August 2023
Reading resources:
- [ ] [React Router](https://reactrouter.com/en/main)
- [ ] [React Router](https://www.youtube.com/watch?v=0cSVuySEB0A)


Tasks:
- [ ] Set up React Router in your application by installing and configuring the appropriate packages
- [ ] Create three main components: Home, About, and Contact.
- [ ] Implement basic routing using BrowserRouter, Route, and Link components for the Home, About, and Contact pages.
- [ ] mplement a dynamic route that displays detailed information when clicked (e.g., a blog post).

### Day 19 August 2023
Reading resources:
- [ ] [AntDesignLayout](https://ant.design/components/layout/)
- [ ] [AntDesignGrid](https://ant.design/components/grid/)
- [ ] [AntDesignSpace](https://ant.design/components/space/)
- [ ] [AntDesignCard](https://ant.design/components/card/)

Tasks:
- [ ] Use Ant Design Layout components (Header, Footer, Sider, Content)
- [ ] Use an Ant Design Grid system (Row, Col)
- [ ] Use Ant Design Space component
- [ ] Use Ant Design Card component

### Day 15 August 2023
Reading resources:
- [ ] [AntDesign](https://ant.design/docs/react/introduce)

Tasks:
- The project now includes Ant Design, To be sure that you understand it do the following tasks:
- [ ] Create a new page and use Ant Design components: 
- [ ] Use different types of typography (Title, Text, Paragraph)
- [ ] Use different types of buttons (Primary, Secondary, Danger, Ghost, Link)
- [ ] Use different types of inputs (Text, Password, Number, Email, TextArea)
- [ ] Use Icons (Ant Design Icons) in buttons and inputs
- [ ] Use Divider component


### Day 14 August 2023

Reading resources:
- [ ] [React Custom Hooks](https://www.bezkoder.com/react-custom-hook-typescript/)
- [ ] [React Custom hooks](https://blog.bitsrc.io/step-by-step-guide-on-building-a-custom-react-hook-in-typescript-167e243045a4) 

Tasks:
- [ ] Use hooks in React (useState, useEffect, useMemo, useCallback) In Typescript
- [ ] Create a custom hook in React
  - Error handling hook (useError)
    - It's create a state with error message and a function to set error message and function to check if has error and return it as array [hasError, errorMessage, setError]
    - Has function (hasError, setError, clearError)
  - Loading hook (useLoading)
    - It's create a state with loading boolean and a function to set loading boolean and function to check if is loading and return it as array [isLoading, setLoading]
    - Has function (isLoading, setLoading, resetLoading)
  - Toggle hooks (useToggle)
    - Toggle function included (isOn, toggle, setOn, setOff) as boolean and functions

### Day 13 August 2023

Reading resources:
- [ ] Read about [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

Tasks:
- [ ] Create a different types of variables with different types of values (string, number, boolean, array, object)
- [ ] Define interfaces for objects and functions
- [ ] Define types for objects and functions
- [ ] Use optional properties in interfaces and types
- [ ] Use default values in interfaces and types
- [ ] Use readonly properties in interfaces and types

