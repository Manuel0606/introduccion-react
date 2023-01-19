import React from "react";

import './CreateTaskButton.css'
import { TaskContext } from "../TaskContext";

function CreateTaskButton() {
    const { openModal, setOpenModal } = React.useContext(TaskContext);

    const onClickButton = () => {
        setOpenModal(!openModal);
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