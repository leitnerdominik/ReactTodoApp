import React from 'react';

import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const todoItem = (props) => {
    const check = props.isCompleted ? "check-circle" : ["far", "circle"];

    const edit = <textarea defaultValue={props.name} />
    const title =  <h2 className={props.isCompleted ? "Completed" : null}>{props.name}</h2>

    const item = props.isEditing ? edit : title;

    return (
        <div className="ContainerItem">
            <div className="checkItem" onClick={() => props.toggleItem(props.index)}>
                <FontAwesomeIcon icon={check} />
            </div>
            {item}
            <div className="editItem" onClick={() => props.toggleEdit(props.index)}>
                <FontAwesomeIcon icon="pencil-alt"/>
            </div>
            <div className="deleteItem" onClick={() => props.deleteItem(props.index)}>
                <FontAwesomeIcon icon="trash-alt"/>
            </div>
        </div>
    );
}

export default todoItem;