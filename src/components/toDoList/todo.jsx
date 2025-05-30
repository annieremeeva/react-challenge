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
    const [editedValue, setEditedValue] = useState(text)
    const handleSave = (id, editedValue) => {
        onEditing(id, editedValue);
        setEditing(false);
    }
    const viewTemplate = (
        <li className={`todo-list__todo-item`} >
            <label className={`todo-list__todo ${ !completed || 'todo-list__todo_completed' }`} htmlFor={id}>
                <input id={id} onChange={() => onCompleted(index)} checked={completed} type="checkbox" />
                <span>{text}</span>
            </label>
            <div className="todo-list__button-group">
                <button onClick={() => setEditing(() => true)}>Edit</button>
                <button onClick={() => onDelete(id)} className="todo-list__remove-button">
                    Remove
                </button>
            </div>
        </li>
    )
    const editingTemplate = (
        <li className={`todo-list__todo-item todo-list__todo`}>
            <label className={`todo-list__todo todo-list__todo_edit ${ !completed || 'todo-list__todo_completed' }`} htmlFor={id}>
                <input className={'todo-list__edit-input'} value={editedValue} id={id} onChange={(e) => setEditedValue(()=> e.target.value)}/>
            </label>
            <div className="todo-list__button-group">
                <button onClick={() => handleSave(id, editedValue)}>Save</button>
                <button onClick={() => setEditing(false)} className="todo-list__cancel-button">
                    Cancel
                </button>
            </div>
        </li>
    )
    return editing ? editingTemplate : viewTemplate;
};

export default Todo;