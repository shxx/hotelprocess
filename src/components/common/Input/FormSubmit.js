import React from 'react';
import Button from '../Button'

export default class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let children = this.props.children;
    let content;
    if (Array.isArray(children)) {
      content = this.props.locked ? children[1] : children[0];
    } else {
      content = children;
    }
    return (
      <div style={this.props.style} className="rct-control-group">
        <Button onEventClick={this.props.onEventClick} disabled={this.props.locked} type={this.props.type}>
          {content}
        </Button>
      </div>
    );
  }
}