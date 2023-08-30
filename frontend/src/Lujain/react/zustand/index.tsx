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
