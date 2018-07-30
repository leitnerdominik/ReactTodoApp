import React from 'react';

import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const todoItem = (props) => {
    return (
        <div className="ContainerItem">
            <div className="checkItem">
                <FontAwesomeIcon icon={["far","circle"]} />
            </div>
            <h2>{props.value.name}</h2>
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