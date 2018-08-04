import React from 'react';

const todoFooter = (props) => {
    return (
        <div>
            {props.itemsLeft} {props.itemsLeft === 1 ? 'item' : 'items'} left
            <button onClick={() => props.show()}>All</button>
            <button onClick={() => props.show('ACTIVE')}>Active</button>
            <button onClick={() => props.show('COMPLETED')}>Completed</button>
            <button onClick={props.clearCompleted}>Clear completed</button>
        </div>
    );
}

export default todoFooter;