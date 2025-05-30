import './styles/index.sass'
import SimpleCounter from "./components/simpleCounter.jsx";
import ToDoList from "./components/toDoList/toDoList.jsx";

function App() {

  return (
    <>
      <h1>React Challenge</h1>
      <div className="main-wrapper">
          <SimpleCounter/>
          <ToDoList/>
      </div>

    </>
  )
}

export default App
