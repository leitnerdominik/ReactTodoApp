import React from 'react';

import classes from './TodoItem.css'

// onClick={props.remove}
// let styleItem = [classes.Container];

const todoItem = (props) => {  
  console.log(props);
  return (
    <li 
    className={props.completed ? [classes.Container, classes.Completed].join(" ") : classes.Container}
      onClick={props.markCompleted}>
      {props.val}

    <span className={classes.Close}>X</span>
    </li>
    
  );
}

export default todoItem;