import React from 'react';

import './TodoFooter.css'

const todoFooter = (props) => {

    let showAll = props.showOption === 'ALL' ? 'btn todo all-btn' : 'btn todo';
    let showActive = props.showOption === 'ACTIVE' ? 'btn todo active-btn' : 'btn todo';
    let showCompleted = props.showOption === 'COMPLETED' ? 'btn todo completed-btn' : 'btn todo';

    return (
        <div>
            <div className="show">
                <button className={showAll} onClick={() => props.show('ALL')}>All</button>
                <button className={showActive} onClick={() => props.show('ACTIVE')}>Active</button>
                <button className={showCompleted} onClick={() => props.show('COMPLETED')}>Completed</button>
            </div>
            <div className="info">
                <span className="items-left">{props.itemsLeft} {props.itemsLeft === 1 ? 'item' : 'items'} left</span>  
                <button className="btn clearCompleted" onClick={props.clearCompleted}>Clear completed</button>
            </div>
        </div>
    );
}

export default todoFooter;