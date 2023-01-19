import React from 'react';
import { TaskContext } from '../TaskContext';

import './TaskSearch.css'


function TaskSearch() {
    const {stateSearchValue, setStateSearchValue} = React.useContext(TaskContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setStateSearchValue(event.target.value);
    };

    return (
        <input
            className='TaskSearch'
            onChange={onSearchValueChange}
            value={stateSearchValue}
            placeholder="🔎 Busca una tarea"
        />
    );
}

export { TaskSearch };

