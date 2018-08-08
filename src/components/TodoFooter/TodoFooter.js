import React from 'react';

import './TodoFooter.css'

const todoFooter = (props) => {

    let showAll = props.showOption === 'ALL' ? 'All' : null;
    let showActive = props.showOption === 'ACTIVE' ? 'Active' : null;
    let showCompleted = props.showOption === 'COMPLETED' ? 'Completed' : null;

    return (
        <div>
            <div className="Show">
                <button className={showAll} onClick={() => props.show('ALL')}>All</button>
                <button className={showActive} onClick={() => props.show('ACTIVE')}>Active</button>
                <button className={showCompleted} onClick={() => props.show('COMPLETED')}>Completed</button>
            </div>
            <div className="Info">
                <span>{props.itemsLeft} {props.itemsLeft === 1 ? 'item' : 'items'} left</span>  
                <button className="ClearCompleted" onClick={props.clearCompleted}>Clear completed</button>
            </div>
        </div>
    );
}

export default todoFooter;