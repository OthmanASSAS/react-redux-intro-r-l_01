import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div >
      React Redux intro
      </div>
    );
  }
}

export default connect(null, null)(App);
