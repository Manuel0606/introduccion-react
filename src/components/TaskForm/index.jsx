import React from "react";
import { TaskContext } from "../TaskContext";

import './TaskForm.css';

function TaskForm() {
    const [newTaskValue, setNewTaskValue] = React.useState('');
    const { addTask, setOpenModal } = React.useContext(TaskContext);

    const onChange = (event) => {
        setNewTaskValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };

    return(
        <form className="TaskForm" onSubmit={onSubmit}>
            <label>Escribe una nueva tarea</label>
            <textarea
                value={newTaskValue}
                onChange={onChange}
                placeholder="Escribe una tarea"
            />
            <div className="TaskForm-buttonContainer">
                <button
                    type="button"
                    onClick={onCancel}
                    className="TaskForm-button button-cancel"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TaskForm-button button-submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TaskForm };