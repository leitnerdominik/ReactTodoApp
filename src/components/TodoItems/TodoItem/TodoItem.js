import React from 'react';

import classes from './TodoItem.css'

// onClick={props.remove}
// let styleItem = [classes.Container];

const todoItem = (props) => {  
  console.log(props);
  return (
    <div className={classes.Container}>
      <label 
          className={props.completed ? classes.Completed : null}
          
          
          >{props.val}
      </label>
      <span className={classes.Checkmark}
      onClick={props.markCompleted}
      htmlFor={"chkbx" + props.val}></span>
      <input type="checkbox" id={"chkbx" + props.val} />
 
      </div>
      
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