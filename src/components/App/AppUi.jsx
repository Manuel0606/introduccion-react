import React from "react";

import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { CreateTaskButton } from '../CreateTaskButton';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TaskContainer } from '../TaskContainer';

import './App.css';

function AppUi({
    loading,
    error,
    totalTasks,
    completedTasks,
    stateSearchValue,
    setStateSearchValue,
    tasksFilter,
    completeTask,
    deleteTask
}) {
    return (
        <React.Fragment>

            <TaskContainer>
                <TaskCounter
                    total={totalTasks}
                    completed={completedTasks}
                />

                <TaskSearch
                    stateSearchValue={stateSearchValue}
                    setStateSearchValue={setStateSearchValue}
                />

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

                <CreateTaskButton />
            </TaskContainer>

        </React.Fragment>
    );
}

export { AppUi };