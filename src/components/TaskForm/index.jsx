import React from "react";
import { TaskContext } from "../TaskContext";

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
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                value={newTaskValue}
                onChange={onChange}
                placeholder="Excribe una tarea"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TaskForm };