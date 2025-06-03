import { nanoid } from 'nanoid';
import React, {useState} from 'react';
import Todo from "./todo.jsx";
import FilterButton from "./filterButton.jsx";

const FILTER_NAMES = {
    All: 'all',
    Completed:'completed',
    Uncompleted: 'uncompleted'};

const ToDoList = () => {
    const initialList = JSON.parse(localStorage.getItem('list')) || [
        {
            id: `todo-${nanoid()}`,
            text: 'Wash the dishes',
            completed: false,
        },
        {
            id: `todo-${nanoid()}`,
            text: 'Clean bedroom',
            completed: false,
        },
        {
            id: `todo-${nanoid()}`,
            text: 'Vacuum the floors',
            completed: false,
        },
        {
            id: `todo-${nanoid()}`,
            text: 'Swipe the floors',
            completed: false,
        }
    ]
    const [list, setList] = useState(initialList);
    const [newTodo, setNewTodo] = useState('');
    const [filter, setFilter] = useState(FILTER_NAMES.All)
    const handleAdd = (newTodo) => {
        const newTodoList = [...list, {id: `todo-${nanoid()}`, text: newTodo, completed: false}]
        setList(newTodoList);
        setNewTodo('');
        localStorage.setItem('list', JSON.stringify(newTodoList));
    }
    const handleListToggle = (index) => {
        const toggledList = list.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item)
        setList(toggledList);
        localStorage.setItem('list', JSON.stringify(toggledList));
    }
    const handleDelete = (id) => {
        const deletedList = list.filter((item) => id !== item.id);
        setList(deletedList);
        localStorage.setItem('list', JSON.stringify(deletedList));
    }
    const handleEdit = (id, newText) => {
        const editedList = list.map((item) => {
            if (id === item.id) {
                return {...item, text: newText};
            }
            return item;
        });
        setList(editedList);
        localStorage.setItem('list', JSON.stringify(editedList));
    }

    const filteredList = list.filter( todo => {
        switch (filter) {
            case FILTER_NAMES.All: return true;
            case FILTER_NAMES.Completed: return todo.completed;
            case FILTER_NAMES.Uncompleted: return !todo.completed;
        }
    })

    const filterValues = Object.values(FILTER_NAMES);
    return(
        <div className="todo-list">
            <h2>2. Dynamic List of Items with Strikethrough</h2>
            <form className="todo-list__add-form">
                <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} className="todo-list__add-input" type="text" placeholder="Enter to do"/>
                <button type={"button"} onClick={()=> handleAdd(newTodo)} className="todo-list__add-button">Add</button>
            </form>
            <div className="todo-list__button-group">
                {filterValues.map((filterName) => (
                    <FilterButton
                        key={filterName}
                        filterName={filterName}
                        isPressed={filterName === filter}
                        setFilter={() => setFilter(filterName)} />
                ))}
            </div>
            <ul className="todo-list__list">
                {filteredList.map((todo, index) => (
                   <Todo
                       key={index}
                       text={todo.text}
                       completed={todo.completed}
                       id={todo.id}
                       onCompleted={handleListToggle}
                       onDelete={handleDelete}
                       index={index}
                       onEditing={handleEdit}
                   />
                ))}
            </ul>
        </div>
    )
};

export default ToDoList;