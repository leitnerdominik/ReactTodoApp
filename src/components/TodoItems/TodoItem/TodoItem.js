import React from 'react';

import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const todoItem = (props) => {
    const check = props.isCompleted ? "check-circle" : ["far", "circle"];
    return (
        <div className="ContainerItem">
            <div className="checkItem" onClick={() => props.toggleItem(props.id)}>
                <FontAwesomeIcon icon={check} />
            </div>
            <h2 className={props.isCompleted ? "Completed" : null}>{props.name}</h2>
            <div className="editItem">
                <FontAwesomeIcon icon="pencil-alt"/>
            </div>
            <div className="deleteItem">
                <FontAwesomeIcon icon="trash-alt"/>
            </div>
        </div>
    );
}

export default todoItem;