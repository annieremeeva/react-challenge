import React, {useState} from 'react';

const Todo = (
    {
        index,
        id,
        text,
        completed,
        onCompleted,
        onDelete,
        onEditing,
    }
) => {
    const [editing, setEditing] = useState(false);
    const viewTemplate = (
        <li className={`todo-list__todo-item`} >
            <label className={`todo-list__todo ${ !completed || 'todo-list__todo_completed' }`} htmlFor={id}>
                <input value={text} id={id} onChange={() => onCompleted(index)} checked={completed} type="checkbox" />
                <span>{text}</span>
            </label>
            <div className="todo-list__button-group">
                <button>Edit</button>
                <button onClick={onDelete(id)} className="todo-list__remove-button">
                    Remove
                </button>
            </div>
        </li>
    )
    const editingTemplate = (
        <li className={`todo-list__todo-item`}>
            <label className={`todo-list__todo ${ !completed || 'todo-list__todo_completed' }`} htmlFor={id}>
                <input value={text} id={id} onChange={() => onEditing(id)} checked={completed}/>
                <span>{text}</span>
            </label>
            <div className="todo-list__button-group">
                <button>Edit</button>
                <button onClick={onDelete(id)} className="todo-list__remove-button">
                    Remove
                </button>
            </div>
        </li>
    )
    return editing ? editingTemplate : viewTemplate;
};

export default Todo;