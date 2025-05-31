import './styles/index.sass'
import SimpleCounter from "./components/simpleCounter.jsx";
import ToDoList from "./components/toDoList/toDoList.jsx";
import ColorPicker from "./components/colorPicker.jsx";
import {useState} from "react";

function App() {
    const puzzles = [
        {
            value: '1',
            name: '1. Simple Counter',
            component: <SimpleCounter />,
        },
        {
            value: '2',
            name: '2. Dynamic List of Items with Strikethrough',
            component: <ToDoList/>
        },
        {
            value: '3',
            name: '3. Color Picker',
            component: <ColorPicker/>
        }
    ]
    const [puzzle, setPuzzle] = useState(puzzles[0])

    const handlePuzzleChange = (event) => {
        console.log(event.target.value)
        const filteredPuzzles = puzzles.filter((item) =>item.value === event.target.value)
        console.log(filteredPuzzles)
        setPuzzle(() => filteredPuzzles[0])
    }
    return (
        <>
            <h1>React Challenge</h1>
            <select onChange={(e) => handlePuzzleChange(e)} id="puzzles">{
                puzzles.map((item, i) =>  <option key={i}  value={item.value}>{item.name}</option>)}
            </select>
            <div className="main-wrapper">
                {puzzle.component}
            </div>

        </>
    )
}

export default App
