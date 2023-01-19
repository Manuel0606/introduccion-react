import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TaskContext = React.createContext();

function TaskProvider(props) {
    const {
        item: tasks,
        saveItem: saveTask,
        loading,
        error
    } = useLocalStorage('TASKS_V1', []);

    const [stateSearchValue, setStateSearchValue] = React.useState('');
    const [openModal, setOpenModal] = useState(false);

    const completedTasks = tasks.filter(task => !!task.completed).length;
    const totalTasks = tasks.length;

    const tasksFilter = stateSearchValue < 1
        ? tasks
        : tasks.filter(task => !!task.text.toLowerCase().includes(stateSearchValue.toLowerCase()));


    const addTask = (text) => {
        const newTasks = [...tasks];
        newTasks.push({
            text,
            completed: false
        });
        saveTask(newTasks);
    };

    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        saveTask(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        saveTask(newTasks);
    };

    return (
        <TaskContext.Provider value={{
            loading,
            error,
            totalTasks,
            completedTasks,
            stateSearchValue,
            setStateSearchValue,
            tasksFilter,
            addTask,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TaskContext.Provider>
    );
}

export { TaskContext, TaskProvider};
