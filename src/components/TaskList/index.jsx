import React from "react";

import './TaskList.css'

function TaskList(props) {
    return (
        <section className="TaskList">
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TaskList };