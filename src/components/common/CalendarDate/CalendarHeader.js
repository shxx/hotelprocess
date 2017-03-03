import React from 'react';


export default class CalendarHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="we-calendar-header">{this.props.month}月 {this.props.year}年</div>
    );
  }
}