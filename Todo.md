# Todo List


### Day 03 Sep 2023
Reading resources
- [ ] [ant-design](https://ant.design/components/layout)
- [ ] [Ant Design Tables](https://ant.design/components/table)

### Day 27 August 2023
Reading resources:
- [ ] [Zustand](./zustand.md)
- [ ] [React Router](./react_router.md)

Tasks:
- [ ] Create a new page and use Zustand to manage the state of the page
  - The page should have a list of items
  - The page should have a form to add new items to the list
  - The page should have a form to edit items in the list
  - The page should have a form to delete items from the list
- [ ] Use Ant Design to create the UI of the page
- [ ] Use React Router to create a route for the page
- [ ] Use Zustand to manage the state of the page
- [ ] Use Zustand to manage the state of the form
- [ ] Use Zustand to manage the state of the list

---

### Day 23 August 2023
Reading resources:
- [x] [Zustand](https://github.com/pmndrs/zustand)

Tasks:
- [x] Install Zustand using npm or yarn: npm install zustand or yarn add zustand
- [x] Create a store using Zustand to manage a piece of state. Define initial state and basic actions to update the state.
- [x] Use the useStore hook to access and display the state in a component.
- [x] Implement actions in the store that allow modifying the state in response to user interactions.

---

### Day 22 August 2023
Reading resources:
- [x] [React Reducer](https://www.robinwieruch.de/react-usereducer-vs-usestate/)


Tasks:
- [x] Create a new React component called FormReducer that utilizes the useReducer hook to manage form state.
- [x] Define an initial state object that includes fields for a user's name, email, and password.
- [x] Create action types for updating each field (e.g., UPDATE_NAME, UPDATE_EMAIL, UPDATE_PASSWORD).
- [x] Write action creator functions for each field update action. These functions should accept a payload and return an object with the corresponding action type and payload.
- [x] Implement a reducer that handles each field update action. Update the appropriate field in the state object with the new value from the action payload.
- [x] In the FormReducer component, use the useReducer hook to manage the form state using your defined reducer and initial state.
- [x] Create input fields for the user's name, email, and password. Connect these inputs to the respective state fields using the value attribute and the onChange event.
- [x] Add a submit button to the form. When clicked, the button should console log the current form state.


---

### Day 21 August 2023
Reading resources:
- [x] [React Context](https://legacy.reactjs.org/docs/context.html)


Tasks:
- [x]  Set up a simple component hierarchy with a parent component and child components.
- [x] Create a context using the createContext function.
- [x] Use the useContext hook to access and consume the context data in child components.
- [x] Implement a simple counter application using React Context to manage the count state across components.


---

### Day 20 August 2023
Reading resources:
- [x] [React Router](https://reactrouter.com/en/main)
- [x] [React Router](https://www.youtube.com/watch?v=0cSVuySEB0A)


Tasks:
- [x] Set up React Router in your application by installing and configuring the appropriate packages
- [x] Create three main components: Home, About, and Contact.
- [x] Implement basic routing using BrowserRouter, Route, and Link components for the Home, About, and Contact pages.
- [x] Implement a dynamic route that displays detailed information when clicked (e.g., a blog post).

### Day 19 August 2023
Reading resources:
- [x] [AntDesignLayout](https://ant.design/components/layout/)
- [x] [AntDesignGrid](https://ant.design/components/grid/)
- [x] [AntDesignSpace](https://ant.design/components/space/)
- [x] [AntDesignCard](https://ant.design/components/card/)

Tasks:
- [x] Use Ant Design Layout components (Header, Footer, Sider, Content)
- [x] Use an Ant Design Grid system (Row, Col)
- [x] Use Ant Design Space component
- [x] Use Ant Design Card component

### Day 15 August 2023
Reading resources:
- [x] [AntDesign](https://ant.design/docs/react/introduce)

Tasks:
- The project now includes Ant Design, To be sure that you understand it do the following tasks:
- [x] Create a new page and use Ant Design components: 
- [x] Use different types of typography (Title, Text, Paragraph)
- [x] Use different types of buttons (Primary, Secondary, Danger, Ghost, Link)
- [x] Use different types of inputs (Text, Password, Number, Email, TextArea)
- [x] Use Icons (Ant Design Icons) in buttons and inputs
- [x] Use Divider component


### Day 14 August 2023

Reading resources:
- [x] [React Custom Hooks](https://www.bezkoder.com/react-custom-hook-typescript/)
- [x] [React Custom hooks](https://blog.bitsrc.io/step-by-step-guide-on-building-a-custom-react-hook-in-typescript-167e243045a4) 

Tasks:
- [x] Use hooks in React (useState, useEffect, useMemo, useCallback) In Typescript
- [x] Create a custom hook in React
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
- [x] Read about [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

Tasks:
- [x] Create a different types of variables with different types of values (string, number, boolean, array, object)
- [x] Define interfaces for objects and functions
- [x] Define types for objects and functions
- [x] Use optional properties in interfaces and types
- [x] Use default values in interfaces and types
- [x] Use readonly properties in interfaces and types

