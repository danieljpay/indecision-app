import React from "react";
import Option from "./Option.js";

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Tus opciones</h3>
            <button 
                className="button--link"
                onClick={props.handleDeleteOptions}
            >
                Eliminar todo
            </button>
        </div>

        {props.options.length === 0 && <p className="widget__message">Por favor agrega una opción para empezar</p>}
        {
            props.options.map((option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                />
            ))
        }
    </div>
);

export default Options;