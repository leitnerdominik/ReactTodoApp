import React from 'react';

import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {
    return (
        <div>
        {props.items.map((item, index) => {
            return <TodoItem value={item} key={index} />
        })}
        </div>
    );
}

export default todoItems;