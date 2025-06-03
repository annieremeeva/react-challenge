import './styles/index.sass'
import SimpleCounter from "./components/simpleCounter.jsx";
import ToDoList from "./components/toDoList/toDoList.jsx";
import ColorPicker from "./components/colorPicker.jsx";
import {useRef, useState} from "react";
import {NavLink, Link, Outlet} from 'react-router-dom';
function App() {
    const puzzles = [
        {
            route: '/counter',
            title: '1. Simple Counter',
        },
        {
            route: '/list',
            title: '2. Dynamic List of Items with Strikethrough',
        },
        {
            route: '/color-picker',
            title: '3. Color Picker',
        },
    ]


    return (
        <div className="app">
            <nav>
                { puzzles.map((puzzle, index) => <NavLink key={index} to={puzzle.route}>{puzzle.title}</NavLink>) }
            </nav>
            <Outlet/>
        </div>
    )
}

export default App
