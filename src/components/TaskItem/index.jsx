import React from "react";

import './TaskItem.css'

function TaskItem(props) {
    return (
        <li className="TaskItem">
            <svg 
                className={`icon check-icon ${props.completed && 'icon-check--active'}`} 
                onClick={props.onComplete}
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
            >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
            </svg>
            <div className="TaskItem-Conten">
                <p className={`TaskItem-p ${props.completed && 'TaskItem-p--complete'}`}>{props.text}</p>
                <svg 
                    className="icon x-icon" 
                    onClick={props.onDelete}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </div>
        </li>
    );
}

export { TaskItem };