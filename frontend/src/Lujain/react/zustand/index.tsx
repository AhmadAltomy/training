import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './index.css';

export default function Index() {
    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todolist">todolist</Link>
                </li>
            </ul>
        </nav>
    );
}


// put this in app.tsx
// import './App.css'
// import Counter from './Lujain/react/zustand/Counter';
// import TodoList from './Lujain/react/zustand/todolist';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Index from './Lujain/react/zustand';

// function App() {


//     return (
    
//         <BrowserRouter>
//             <Index></Index>
//             <Routes>
//                 <Route path="/counter" element={<Counter />} />
//                 <Route path="/todolist" element={<TodoList />} />
//             </Routes>
//         </BrowserRouter>
//     )
// }

// export default App
