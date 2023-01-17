import React from "react";

import { TaskCounter } from '../TaskCounter';
import { TaskSearch } from '../TaskSearch';
import { CreateTaskButton } from '../CreateTaskButton';
import { TaskList } from '../TaskList';
import { TaskItem } from '../TaskItem';
import { TaskContainer } from '../TaskContainer';

import './App.css';

function AppUi({
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