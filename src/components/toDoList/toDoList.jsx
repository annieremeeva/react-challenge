import { nanoid } from 'nanoid';
import React, {useEffect, useState} from 'react';
import Todo from "./todo.jsx";

const ToDoList = () => {
    const initialList = [
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
    const handleAdd = (newTodo) => {
        setList([...list, {id: `todo-${nanoid()}`, text: newTodo, completed: false}]);
        setNewTodo('');
    }
    const handleListToggle = (index) => {
        setList(list.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item));
    }
    const handleDelete = (id) => {
        // setList(() => list.filter((item) => id !== item.id));
    }
    const handleEdit = (id, newText) => {
        const editedList = list.map((item) => {
            if (id === item.id) {
                return {...item, text: newText};
            }
            return item;
        });
        setList(editedList);
    }
    return(
        <div className="todo-list">
            <h2>2. Dynamic List of Items with Strikethrough</h2>
            <form className="todo-list__add-form">
                <input onChange={(e) => setNewTodo(e.target.value)} value={newTodo} className="todo-list__add-input" type="text" placeholder="Enter to do"/>
                <button type={"button"} onClick={()=> handleAdd(newTodo)} className="todo-list__add-button">Add</button>
            </form>
            <ul className="todo-list__list">
                {list.map((todo, index) => (
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