import React from 'react';

import TodoItem from './TodoItem/TodoItem';

const todoItems = (props) => {
    return (
        <div style={{
            marginBottom: '20px',
        }}>
        {props.items.map((item, index) => {
            return <TodoItem 
                name={item.name}
                key={index}
                id={item.id}
                toggleItem={props.toggleItem}
                isCompleted={item.isCompleted}
                deleteItem={props.deleteItem}
                editItem={props.editItem}
                toggleEdit={props.toggleEdit}
                isEditing={item.isEditing}/>
        })}
        </div>
    );
}

export default todoItems;