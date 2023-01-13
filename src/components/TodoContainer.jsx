import React from "react";

import '../styles/TodoContainer.css'

function TodoContainer(props) {
    return (
        <div className="TodoContainer">
            {props.children}
        </div>
    );
}

export {TodoContainer};