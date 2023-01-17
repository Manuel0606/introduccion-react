import React from 'react';

import { AppUi } from './AppUi';


const defaulTasks = [
  { text: 'Cortar cebolla 3', completed: true },
  { text: 'tomar curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Has completado 2 de 3 tareas', completed: false },
  { text: 'Hascompletado2de3tareas', completed: false },
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
    // const taskIndex = tasks.findIndex(task => task.text === text);
    // const newTasks = [...tasks];
    // newTasks[taskIndex].completed = !newTasks[taskIndex].completed;
    // setTasks(newTasks);

    //Todo: Cambiar text por index
    const newTasks = [...tasks];
    newTasks[text].completed = !newTasks[text].completed;
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    // const taskIndex = tasks.findIndex(task => task.text === text);
    // const newTasks = [...tasks];
    // newTasks.splice(taskIndex, 1);
    // setTasks(newTasks);

    //Todo: Cambiar text por index
    const newTasks = [...tasks];
    newTasks.splice(text, 1);
    setTasks(newTasks);
  };

  return (
    <AppUi
      totalTasks={totalTasks}
      completedTasks={completedTasks}
      stateSearchValue={stateSearchValue}
      setStateSearchValue={setStateSearchValue}
      tasksFilter={tasksFilter}
      completeTask={completeTask}
      deleteTask={deleteTask}
    />
  );
}

export default App;