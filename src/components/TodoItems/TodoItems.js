import React from 'react';

import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {
    return (
        <div>
        {props.items.map((item, index) => {
            return <TodoItem 
                name={item.name}
                key={index}
                id={index + 1}
                toggleItem={props.toggleItem}
                isCompleted={item.isCompleted}/>
        })}
        </div>
    );
}

export default todoItems;