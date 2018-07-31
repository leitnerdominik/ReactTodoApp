import React, { Component } from 'react';

import TodoInput from '../../components/TodoInput/TodoInput';
import TodoItems from '../../components/TodoItems/TodoItems';

import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: [
                {
                    name: 'stiagn kehrn',
                    id: 1,
                    isCompleted: false,
                },
                {
                    name: 'bluamen giasn',
                    id: 2,
                    isCompleted: false,
                },
                {
                    name: 'coding',
                    id: 3,
                    isCompleted: false,
                },
            ]
        }
    }

    inputChangeHandler(event) {
        this.setState({
            term: event.target.value,
        });
    }

    cleanInputHandler() {
        this.setState({term: ''});
    }

    addItemHandler(item) {
        const items = [...this.state.items];
        const newItem = {
            name: item,
            id: 0,
            isCompleted: false,
        }

        items.push(newItem);

        const updatedItems = items.map((value, index) => {
            const newItem = {...value, id: index + 1};
            return newItem;
        });

        this.setState({items: updatedItems});
    }

    toggleItem(id) {
        const items = [...this.state.items];
        const updatedItems = items.map((item) => {
            if(id === item.id) {
                console.log('[TOGGLEITEM]: id', id);
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });

        this.setState({updatedItems});

    }

    render() {

        return(
            <div className="Container">
                <TodoInput 
                    change={this.inputChangeHandler.bind(this)}
                    value={this.state.term}
                    addItem={this.addItemHandler.bind(this)}
                    cleanInput={this.cleanInputHandler.bind(this)}
                />
                <TodoItems 
                    items={this.state.items}
                    toggleItem={this.toggleItem.bind(this)} />
            </div>
        );

    }
}

export default Todo;