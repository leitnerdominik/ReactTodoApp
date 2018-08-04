import React from 'react';

const todoFooter = (props) => {
    return (
        <div>
            {props.itemsLeft} {props.itemsLeft === 1 ? 'item' : 'items'} left
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
            <button onClick={props.clearCompleted}>Clear completed</button>
        </div>
    );
}

export default todoFooter;