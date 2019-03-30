import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete, this.props.deleteToDO }/>
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;
