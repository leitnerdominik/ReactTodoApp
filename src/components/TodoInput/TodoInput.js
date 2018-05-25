import React from 'react';

import classes from './TodoInput.css'

const todoInput = (props) => {
  return (
    <form className={classes.TodoInput} onSubmit={props.submit}>
      <input 
            type="text"
            value={props.term}
            onChange={props.change}
            placeholder="what needs to be done?"
            autoFocus />
    </form>
  );
}

export default todoInput;