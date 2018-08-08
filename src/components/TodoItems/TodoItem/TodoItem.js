import React, { Component } from 'react';

import './TodoItem.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.changeItem = this.changeItem.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
    }
    changeItem(event) {
        const value = event.target.value;
        this.props.editItem(value, this.props.id);
    }
    
    keyDownHandler(event) {
        if(event.key === 'Enter') {
            this.changeItem(event);
        }   
    }

    

    render() {

        const check = this.props.isCompleted ? "check-circle" : ["far", "circle"];

        const edit = <textarea 
            defaultValue={this.props.name}
            onKeyDown={this.keyDownHandler}
            autoFocus
            onBlur={this.changeItem} />
        const title =  <h2 className={this.props.isCompleted ? "CompletedItem" : null}>{this.props.name}</h2>

        const item = this.props.isEditing ? edit : title;

        const showEdit = !this.props.isEditing ? <div className="editItem controls" onClick={() => this.props.toggleEdit(this.props.id)}>
            <FontAwesomeIcon icon="pencil-alt"/>
        </div> : null;

        return (
            <div className="ContainerItem">
                <div className="checkItem" onClick={() => this.props.toggleItem(this.props.id)}>
                    <FontAwesomeIcon icon={check} />
                </div>
                {item}
                {showEdit}
                <div className="deleteItem controls" onClick={() => this.props.deleteItem(this.props.id)}>
                    <FontAwesomeIcon icon="trash-alt"/>
                </div>
            </div>
        );
    }
}

export default TodoItem;