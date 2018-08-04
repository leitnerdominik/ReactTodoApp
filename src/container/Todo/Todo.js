import React, { Component } from 'react';

import TodoInput from '../../components/TodoInput/TodoInput';
import TodoItems from '../../components/TodoItems/TodoItems';
import TodoFooter from '../../components/TodoFooter/TodoFooter';

import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            items: [
                {
                    name: 'cleaning stairs',
                    id: 1,
                    isCompleted: false,
                    isEditing: false,
                },
                {
                    name: 'sluice',
                    id: 2,
                    isCompleted: false,
                    isEditing: false,
                },
                {
                    name: 'coding',
                    id: 3,
                    isCompleted: false,
                    isEditing: false,
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

    toggleItem(index) {
        const items = [...this.state.items];
        items[index].isCompleted = !items[index].isCompleted;

        this.setState({items});

    }

    deleteItem(index) {
        const items = [...this.state.items];
        items.splice(index, 1);
        this.setState({items: items});
    }

    toggleEdit(index) {
        const items = [...this.state.items];
        items[index].isEditing = !items[index].isEditing;
        this.setState({items: items});
    }

    editItem(value, index) {
        const items = [...this.state.items];
        items[index].name = value;
        this.setState({items: items});
    }

    itemsLeftHandler() {
        const itemsLeft = this.state.items.filter(item => !item.isCompleted);
        return itemsLeft.length;
    }

    clearCompleted() {
        const items = [...this.state.items];
        const updatedItems = items.filter(item => !item.isCompleted)
        this.setState({items: updatedItems});
    }

    showItems() {
        
    }

    render() {

        const itemsLeft = this.itemsLeftHandler();

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
                    toggleItem={this.toggleItem.bind(this)}
                    deleteItem={this.deleteItem.bind(this)}
                    editItem={this.editItem.bind(this)}
                    toggleEdit={this.toggleEdit.bind(this)} />
                <TodoFooter
                    itemsLeft={itemsLeft}
                    clearCompleted={this.clearCompleted.bind(this)} />
            </div>
        );

    }
}

export default Todo;