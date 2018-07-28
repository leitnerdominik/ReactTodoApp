import React from 'react';

import './TodoInput.css';

const todoInput = (props) => {
    return (
        <div>
            <i className="fas fa-plus fa-lg"></i>
            <input type="text" autoFocus placeholder="add item" onChange={props.change} value={props.value} />
        </div>
    );
}

export default todoInput;