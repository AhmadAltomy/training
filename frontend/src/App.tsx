import './App.css'
import Counter from './Lujain/react/zustand/Counter';
// import PersonCard from "./PersonCard.tsx";
import TodoList from './Lujain/react/zustand/todolist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Lujain/react/zustand';
// type Person = {
//     name: string
//     age: number
//     isEmployed: boolean
// }

// const persons: Person[] = [
//     {
//         name: 'John',
//         age: 20,
//         isEmployed: true
//     },
//     {
//         name: "Jane",
//         age: 30,
//         isEmployed: false
//     },
//     {
//         name: "Jack",
//         age: 40,
//         isEmployed: true
//     }
// ]

function App() {


    return (
        // <div className="App">
        //     {persons.map((person, index) => (
        //         <PersonCard key={index} person={person} />
        //     ))}
        // </div>
        // <TodoList></TodoList>

        <BrowserRouter>
            <Index></Index>
            <Routes>
                <Route path="/counter" element={<Counter />} />
                <Route path="/todolist" element={<TodoList />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App