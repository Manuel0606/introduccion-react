import React from "react";

import '../styles/CreateTaskButton.css'

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