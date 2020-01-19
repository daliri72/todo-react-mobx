import React, { useState } from 'react';
import { useStore } from '../providers/store-provider';


export const TodoNew = () => {
    const [newTodo, setTodo] = useState('');
    const todoList = useStore();

    const addTodo = () => {
        todoList.addTodo(newTodo);
        setTodo('');
    };

    return (

        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Add To do" value={newTodo} onChange={(e) => setTodo(e.target.value)} />
            <div className="input-group-append">
                <button className="btn btn-success" type="submit" onClick={addTodo}>Add Todo</button>
            </div>
        </div>


    )
};
