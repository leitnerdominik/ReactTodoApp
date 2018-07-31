import React, { Component } from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCircle, faPencilAlt, faTrashAlt, faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Todo from './container/Todo/Todo';

import './App.css';


library.add(far, faCircle, faPencilAlt, faTrashAlt, faPlus, faCheckCircle);

class App extends Component {

    render() {
        return (
            <div>
                <Todo />
            </div>
        );
    }
}

export default App;