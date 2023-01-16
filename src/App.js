import React from 'react';
import { TaskCounter } from './components/TaskCounter';
import { TaskSearch } from './components/TaskSearch';
import { CreateTaskButton } from './components/CreateTaskButton';
import { TaskList } from './components/TaskList';
import { TaskItem } from './components/TaskItem';
import { TaskContainer } from './components/TaskContainer';

import './styles/App.css';

const defaulTasks = [
  {text: 'Cortar cebolla 3', completed: true},
  {text: 'tomar curso de intro a React', completed: false},
  {text: 'Llorar con la llorona', completed: false},
  {text: 'Has completado 2 de 3 tareas', completed: false},
  {text: 'Hascompletado2de3tareas', completed: false},
];

function App() {
  const [tasks, setTasks] = React.useState(defaulTasks);
  const [stateSearchValue, setStateSearchValue] = React.useState('');

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;

  const tasksFilter = stateSearchValue < 1 
  ? tasks 
  : tasks.filter(task => !!task.text.toLowerCase().includes(stateSearchValue.toLowerCase()));
  
  const completeTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const taskIndex = tasks.findIndex(task => task.text === text);
    const newTasks = [...tasks];
    newTasks.splice(taskIndex, 1);
    setTasks(newTasks);
  };

  return (
    <React.Fragment>

      <TaskContainer>
        <TaskCounter
          total={totalTasks}
          completed={completedTasks}
        />
    
        <TaskSearch
          stateSearchValue={stateSearchValue}
          setStateSearchValue={setStateSearchValue}
        />

        <TaskList>
          {tasksFilter.map(task => (
            <TaskItem 
              key={task.text} 
              text={task.text} 
              completed={task.completed}
              onComplete={() => completeTask(task.text)}
              onDelete={() => deleteTask(task.text)}
            />
          ))}
        </TaskList>
    
        <CreateTaskButton/>
      </TaskContainer>

    </React.Fragment>
  );
}

export default App;
