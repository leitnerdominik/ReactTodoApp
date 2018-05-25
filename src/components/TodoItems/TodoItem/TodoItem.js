import React from 'react';

import classes from './TodoItem.css'

// onClick={props.remove}
// let styleItem = [classes.Container];

const todoItem = (props) => {  
  console.log(props);
  return (
      <label 
          className={props.completed ? [classes.Container, classes.Completed].join(" ") : classes.Container}
          htmlFor="chkbx"
          onClick={props.markCompleted}
          >{props.val}
          <input type="checkbox" id="chkbx" />
        <span className={classes.Checkmark}></span>
      </label>
    // <li className={classes.Container}>
    //   <input type="checkbox" className={classes.Hiddenchkbx} id={props.key}/>
    //   <label className={props.completed ? [classes.ChkLabel, classes.Done].join(" ") : classes.chklbl}
    //     onClick={props.markCompleted}
    //     htmlFor={props.key}>
      
    //   <span className={classes.SpanBox}></span>
    //   {props.val}
    //   </label>
    //   <button className={classes.DeleteItem} onClick={props.remove}>x</button>
    // </li>
    
  );
}

export default todoItem;