import React from "react";

import './CreateTaskButton.css'

function CreateTaskButton() {
    const onClickButton = () => {
        alert('Aquí debe abrirse el modal');
    };

    return (
        <button 
            className="CreateTaskButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTaskButton };