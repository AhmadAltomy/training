import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './style.css';

export default function Index() {
    return (
        <nav className="nav">
            <Link to="/" className="title">WebSolutions</Link>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}


// ////////////////////////////
// we have to add this to the app.tsx
// import './App.css'
// import Index from './Lujain/react/router/index.tsx';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Lujain/react/router/home.tsx';
// import Contact from './Lujain/react/router/contact.tsx';
// import About from './Lujain/react/router/about.tsx';

// function App() {

//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Index></Index>
//                 <Routes>
//                     <Route path='/home' element={<Home />}></Route>
//                     <Route path='/about' element={<About />}></Route>
//                     <Route path='/contact' element={<Contact />}></Route>
//                 </Routes>
//             </BrowserRouter>
//         </div>)
// }
// export default App
