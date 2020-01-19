import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { TodoList } from './stores/todo-list';
import { StoreProvider } from './providers/store-provider';


const todoList = new TodoList([
    'Read Book',
    'Do exercise',
    'Watch Walking dead series'
]);

ReactDOM.render(
    <StoreProvider value={todoList}>
        <App />
    </StoreProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
