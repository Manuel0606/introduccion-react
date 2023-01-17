import React from 'react';

import './TaskSearch.css'


function TaskSearch({stateSearchValue, setStateSearchValue}) {
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

