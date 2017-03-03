import React from 'react';
import InputItem from './InputItem';
import './input.css';

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="we-input-list">
        {this.props.children}
      </div>
    );
  }
}