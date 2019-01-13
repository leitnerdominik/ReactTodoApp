import React from 'react';

import './TodoInput.css';

const todoInput = (props) => {

    const keyDownHandler = (event) => {
        if(event.key === 'Enter') {
            props.addItem(props.value);
            props.cleanInput();
        }   
    }

    return (
        <div>
            <input 
                className="add-task"
                type="text"
                autoFocus 
                placeholder="add item.." 
                onChange={props.change}
                value={props.value}
                onKeyDown={keyDownHandler.bind(this)} />
        </div>
    );
}

export default todoInput;