import React from 'react';

import TodoItem from './TodoItem/TodoItem';

import classes from './TodoItems.css'

const todoItems = (props) => (
  <div>
    <ul className={classes.ListUl}>
      {props.items.map((item, index) => {
        console.log(index);
        return <TodoItem 
                  key={index}
                  val={item.value}
                  remove={() => props.remove(index)}
                  markCompleted={() => props.markCompleted(index)}
                  completed={item.completed}
                  />
      })}
     </ul>
  </div>
);


export default todoItems;