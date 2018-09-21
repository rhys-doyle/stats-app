import React, { Component } from "react";
import Login from "./Components/Login/login";
import styles from "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Login />
      </div>
    );
  }
}
