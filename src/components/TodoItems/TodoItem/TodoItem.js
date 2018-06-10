import React from 'react';

import classes from './TodoItem.css'
import Aux from '../../../hoc/Auxiliary';

// onClick={props.remove}
// let styleItem = [classes.Container];

const todoItem = (props) => {  
  return (
    <Aux>
    <li 
    className={props.completed ? [classes.Container, classes.Completed].join(" ") : classes.Container}
      onClick={props.markCompleted}>
      {props.val}

  
    </li>
      <span 
      className={classes.Close}
      onClick={props.remove}
      >X</span>
    </Aux>
    
  );
}

export default todoItem;