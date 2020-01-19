import React from 'react';

import { TodoItem } from "./TodoItem";
import { useObserver } from "mobx-react-lite";
import { useStore } from '../providers/store-provider';

export const TodoList = () => {
    const todoList = useStore();

    return useObserver(() => (
        <div>
            <h1>Open Todos</h1>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th className="text-left">Do It?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.openTodos.map(todo =>
                            <tr key={`${todo.id}-${todo.text}`}>
                                <TodoItem todo={todo} />
                            </tr>)
                    }

                </tbody>
            </table>



            <h1>Finished Todos</h1>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Name</th>
                        <th className="text-left">Do It?</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todoList.finishedTodos.map(todo =>
                            <tr key={`${todo.id}-${todo.text}`}>
                                <TodoItem todo={todo} />
                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    ));
};
