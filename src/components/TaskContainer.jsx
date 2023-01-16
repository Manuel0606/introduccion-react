import React from "react";

import '../styles/TaskContainer.css'

function TaskContainer(props) {
    return (
        <div className="TaskContainer">
            {props.children}
        </div>
    );
}

export {TaskContainer};