import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodoContainer } from './components/TodoContainer';

import './styles/App.css';

const todos = [
  {text: 'Cortar cebolla 3', completed: true},
  {text: 'tomar curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Has completado 2 de 3 tareas', completed: false},

  {text: 'Cortar cebolla 3', completed: true},
  {text: 'tomar curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Has completado 2 de 3 tareas', completed: false},
  {text: 'Cortar cebolla 3', completed: true},
  {text: 'tomar curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Has completado 2 de 3 tareas', completed: false},
  {text: 'Cortar cebolla 3', completed: true},
  {text: 'tomar curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Has completado 2 de 3 tareas', completed: false},
];

function App() {
  return (
    <React.Fragment>

      <TodoContainer>
        <TodoCounter />
    
        <TodoSearch />

        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text} completed={todo.completed} />
          ))}
        </TodoList>
    
        <CreateTodoButton />
      </TodoContainer>

    </React.Fragment>
  );
}

export default App;
