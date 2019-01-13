import React, { Component } from "react";

import TodoInput from "../../components/TodoInput/TodoInput";
import TodoItems from "../../components/TodoItems/TodoItems";
import TodoFooter from "../../components/TodoFooter/TodoFooter";

import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "",
      items: [
        {
          name: "Have breakfast",
          id: 1,
          isCompleted: false,
          isEditing: false
        },
        {
          name: "Go to school",
          id: 2,
          isCompleted: false,
          isEditing: false
        },
        {
          name: "Read a book",
          id: 3,
          isCompleted: false,
          isEditing: false
        },
        {
          name: "Play games",
          id: 4,
          isCompleted: false,
          isEditing: false
        }
      ],
      showOption: "ALL"
    };
  }

  inputChangeHandler(event) {
    this.setState({
      term: event.target.value
    });
  }

  cleanInputHandler() {
    this.setState({ term: "" });
  }

  addItemHandler(item) {
    const items = [...this.state.items];
    const newItem = {
      name: item,
      id: 0,
      isCompleted: false
    };

    items.push(newItem);

    const updatedItems = items.map((value, index) => {
      const newItem = { ...value, id: index + 1 };
      return newItem;
    });

    this.setState({ items: updatedItems });
  }

  toggleItem(id) {
    const items = [...this.state.items];
    const updatedItems = items.map(item => {
      return {
        ...item,
        isCompleted: item.id === id ? !item.isCompleted : item.isCompleted
      };
    });

    this.setState({ items: updatedItems });
  }

  deleteItem(id) {
    const items = [...this.state.items];
    const updatedItems = items.filter(item => item.id !== id);
    this.setState({ items: updatedItems });
  }

  toggleEdit(id) {
    const items = [...this.state.items];
    const updatedItems = items.map(item => {
      return {
        ...item,
        isEditing: item.id === id ? !item.isEditing : item.isEditing
      };
    });

    this.setState({ items: updatedItems });
  }

  editItem(value, id) {
    const items = [...this.state.items];
    const updatedItems = items.map(item => {
      if (item.id === id) {
        item.name = value;
        item.isEditing = !item.isEditing;
      }
      return item;
    });

    this.setState({ items: updatedItems });
  }

  itemsLeftHandler() {
    const itemsLeft = this.state.items.filter(item => !item.isCompleted);
    return itemsLeft.length;
  }

  clearCompleted() {
    const items = [...this.state.items];
    const updatedItems = items.filter(item => !item.isCompleted);
    this.setState({ items: updatedItems });
  }

  changeShowItems(option) {
    const items = [...this.state.items];
    let updatedItems = items;
    if (option === "ACTIVE") {
      updatedItems = items.filter(item => !item.isCompleted);
    } else if (option === "COMPLETED") {
      updatedItems = items.filter(item => item.isCompleted);
    }

    return updatedItems;
  }

  changeShowOption(option) {
    this.setState({ showOption: option });
  }

  render() {
    const itemsLeft = this.itemsLeftHandler();
    const items = this.changeShowItems(this.state.showOption);

    return (
      <div className="container">
        <h1 className="title">your tasks</h1>
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
          toggleEdit={this.toggleEdit.bind(this)}
        />
        <TodoFooter
          itemsLeft={itemsLeft}
          clearCompleted={this.clearCompleted.bind(this)}
          show={this.changeShowOption.bind(this)}
          showOption={this.state.showOption}
        />
      </div>
    );
  }
}

export default Todo;
