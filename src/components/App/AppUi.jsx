import React from "react";

import { TaskContext } from "../TaskContext";
import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { CreateTaskButton } from '../CreateTaskButton';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TaskContainer } from '../TaskContainer';
import { Modal } from "../modal";
import { TaskForm } from "../TaskForm";

import './App.css';

function AppUi() {
    const {
        error,
        loading,
        tasksFilter,
        completeTask,
        deleteTask,
        openModal,
    } = React.useContext(TaskContext);

    return (
        <React.Fragment>

            <TaskContainer>
                <TaskCounter />

                <TaskSearch />

                <TaskList>
                    {error && <p>Ups, hubo un error...</p>}
                    {loading && <p>Estamos cargando, espera un momento...</p>}
                    {(!loading && !tasksFilter.length) && <p>Crea tu primera tarea</p>}

                    {tasksFilter.map((task, index) => (
                        <TaskItem
                            key={index}
                            text={task.text}
                            completed={task.completed}
                            onComplete={() => completeTask(index)}
                            onDelete={() => deleteTask(index)}
                        />
                    ))}
                </TaskList>

                <CreateTaskButton/>
            </TaskContainer>

            {!!openModal && (
                <Modal>
                    <TaskForm/>
                </Modal>
            )}

        </React.Fragment>
    );
}

export { AppUi };