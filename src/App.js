import React, { Component, Fragment } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import {
  faCircle,
  faPencilAlt,
  faTrashAlt,
  faCheckCircle
} from "@fortawesome/free-solid-svg-icons";

import Todo from "./container/Todo/Todo";

import "./App.css";

library.add(far, faCircle, faPencilAlt, faTrashAlt, faCheckCircle);

class App extends Component {
  render() {
    return (
      <Fragment>
        <Todo />
      </Fragment>
    );
  }
}

export default App;
