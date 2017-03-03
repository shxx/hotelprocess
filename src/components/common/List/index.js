import React from 'react';
import ListItem from './ListItem';
import './List.css';


export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="we-list">
        {this.props.children}
      </div>
    );
  }
}