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
import { Loading } from "../Loading";
import { Error } from "../Error";

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
                    {error && <Error/>}
                    {loading && <Loading/>}
                    {(!loading && !tasksFilter.length) && <p className="EmptyTask-p">Crea tu primera tarea</p>}

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