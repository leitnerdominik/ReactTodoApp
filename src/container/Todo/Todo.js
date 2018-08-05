import React, { Component } from 'react';

import _ from 'lodash';

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
            ],
            showOption: 'ALL',
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
        const updatedItems = items.map(item => {
            return (
                {...item, isCompleted: item.id === id ? !item.isCompleted : item.isCompleted}
            );
        })

        this.setState({items: updatedItems});

    }

    deleteItem(id) {
        const items = [...this.state.items];
        const updatedItems = items.filter(item => item.id !== id);
        this.setState({items: updatedItems});
    }

    toggleEdit(id) {
        const items = [...this.state.items];
        console.log(id);
        const updatedItems = items.map((item) => {
            let edit = item.isEditing;
            if(item.id === id)
                edit = !item.isEditing;
            console.log('[TOGGLE EDIT]', item.isEditing);
            return {...item, isEditing: edit};
            // {...item, isEditing: item.id === id ? !item.isEditing : item.isEditing}
        });

        // console.log('[UPDATE ITEMS]:', updatedItems[1].isEditing);

        console.table(updatedItems);

        this.setState({items: updatedItems});

    }

    editItem(value, id) {
        const items = [...this.state.items];
        const updatedItems = items.map(item => {
            return (
                {...item, name: item.id === id ? value : item.name}
            );
        })

        this.setState({items: updatedItems});

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

    changeShowItems(option) {
        const items = [...this.state.items];
        let updatedItems = items;
        if(option === 'ACTIVE') {
            updatedItems = items.filter(item => !item.isCompleted);
        } else if(option === 'COMPLETED') {
            updatedItems = items.filter(item => item.isCompleted);
        }

        return updatedItems;
    }

    changeShowOption(option) {
        this.setState({showOption: option});
    }
    

    render() {

        const itemsLeft = this.itemsLeftHandler();
        const items = this.changeShowItems(this.state.showOption)

        return(
            <div className="Container">
                <TodoInput 
                    change={this.inputChangeHandler.bind(this)}
                    value={this.state.term}
                    addItem={this.addItemHandler.bind(this)}
                    cleanInput={this.cleanInputHandler.bind(this)}
                />
                <TodoItems 
                    items={items}
                    toggleItem={this.toggleItem.bind(this)}
                    deleteItem={this.deleteItem.bind(this)}
                    editItem={this.editItem.bind(this)}
                    toggleEdit={this.toggleEdit.bind(this)} />
                <TodoFooter
                    itemsLeft={itemsLeft}
                    clearCompleted={this.clearCompleted.bind(this)}
                    show={this.changeShowOption.bind(this)} />
            </div>
        );

    }
}

export default Todo;