import React from 'react';

import { TaskProvider } from '../TaskContext';
import { AppUi } from './AppUi';


// const defaulTasks = [
//   { text: 'Cortar cebolla 3', completed: true },
//   { text: 'tomar curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'Has completado 2 de 3 tareas', completed: false },
//   { text: 'Hascompletado2de3tareas', completed: false },
// ];


function App() {
  return (
    <TaskProvider>
      <AppUi/>
    </TaskProvider>
  );
}

export default App;
