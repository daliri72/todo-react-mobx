import React from 'react';
import './App.css';
import { TodoNew } from './components/TodoNew';
import { TodoList } from './components/TodoList';


const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <TodoNew />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
