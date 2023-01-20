import React from "react";

import './Loading.css';

function Loading() {
    return (
        <div className="loaderContainer">
            <div className="loader"></div>
            <div>
                <p>Cargando</p>
            </div>
        </div>
    );
}

export { Loading };