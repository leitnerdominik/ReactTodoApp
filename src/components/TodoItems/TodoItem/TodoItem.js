import React from 'react';

const todoItem = (props) => {

    const keyDownHandler = (event) => {
        if(event.key === 'Enter')
    }

    return (
        <div>
            <i class="far fa-circle"></i>
            <h2></h2>
        </div>
    );
}

export default todoItem;