import React from 'react';

import '../styles/TaskCounter.css'


function TaskCounter({total, completed}) {
    return (
        <h2 className='TaskCounter'>Has completado {completed} de {total} tareas</h2>
    );
}

export { TaskCounter };