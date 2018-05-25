import React, { Component } from 'react';

import Aux from './hoc/Auxiliary';
import classes from './App.css';

import TodoInput from './components/TodoInput/TodoInput';
import TodoItems from './components/TodoItems/TodoItems';




class App extends Component {

  state = {
    term: '',
    items: [],
  };

  inputChangeHandler = (event) => {
    this.setState({term: event.target.value});
  }

  inputSubmitHandler = (event) => {
    if(this.state.term.length > 0) {
      this.addTodoItem();
      this.setState({term: ''});
    }

    event.preventDefault();
  }

  addTodoItem = () => {
    const item = {
      value: this.state.term,
      completed: false,
    };
    const items = [...this.state.items];
    items.push(item);
    this.setState({items})

  }

  removeTodoItem = (index) => {
    const items = [...this.state.items];
    items.splice(index, 1);
    this.setState({items});
  }

  completedItem = (index) => {
    console.log(index);
    const items = this.state.items.slice();
    const item = items[index];
    item.completed = !item.completed;
    items[index] = item;
    console.log(item.completed);
    this.setState({items});
  }

  render() {
    return (
      <Aux className={classes.App}>
        <TodoInput 
          term={this.state.term}
          change={this.inputChangeHandler}
          submit={this.inputSubmitHandler} />
        <TodoItems 
          items={this.state.items}
          remove={this.removeTodoItem}
          markCompleted={this.completedItem}/>
      </Aux>
    );
  }
}

export default App;
