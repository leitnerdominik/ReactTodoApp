import React, { Component } from 'react';

import TodoInput from '../../components/TodoInput/TodoInput';

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

        this.setState({items});
    }

    render() {

        return(
            <div className="Container">
                <TodoInput 
                    change={this.inputChangeHandler.bind(this)}
                    value={this.state.term}
                />
            </div>
        );

    }
}

export default Todo;