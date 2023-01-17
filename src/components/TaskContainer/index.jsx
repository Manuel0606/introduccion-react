import React from "react";

import './TaskContainer.css'

function TaskContainer(props) {
    return (
        <div className="TaskContainer">
            {props.children}
        </div>
    );
}

export {TaskContainer};