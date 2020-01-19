import React, { useState } from 'react';
import TodoItemClass from "../stores/todo-item";


import { useStore } from '../providers/store-provider';

interface Props {
    todo: TodoItemClass;
}

export const TodoItem = ({ todo }: Props) => {
    const todoList = useStore();
    const [newText, setText] = useState('');
    const [isEditing, setEdit] = useState(false);

    const saveText = () => {
        todo.updateText(newText);
        setEdit(false);
        setText('');
    };

    return (
        <React.Fragment>
            {
                isEditing ?
                    <React.Fragment>
                        <td>
                            <input className="form-control" placeholder={todo.text} type="text" onChange={(e) => setText(e.target.value)} />
                        </td>
                        <td></td>
                        <td>
                            <button className="btn btn-xs btn-success " onClick={saveText}>Save</button>
                        </td>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <td>
                            {todo.text}
                        </td>

                        <td className="text-left">
                            <input className="form-check-input" type="checkbox" onChange={todo.toggleIsDone} defaultChecked={todo.isDone}></input>
                        </td>
                        <td>
                            <button className="btn btn-xs btn-warning " onClick={() => setEdit(true)}>
                                <i className="fa fa-edit"></i>
                            </button>
                            <button className="btn btn-xs btn-danger ml-2" onClick={() => todoList.removeTodo(todo)}>
                                <i className="fa fa-remove"></i>
                            </button>
                        </td>
                    </React.Fragment>
            }

        </React.Fragment>

    )
};
