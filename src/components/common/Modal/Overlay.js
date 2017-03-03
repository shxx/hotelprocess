import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class Overlay extends Component {
  render () {
    let className = classnames(
      this.props.className,
      'we-popup-overlay'
    );

    return (
      <div className={className} style={this.props.style} onClick={this.props.onClick} />
    );
  }
}

Overlay.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

Overlay.defaultProps = {
  onClick: () => {}
};

module.exports = Overlay;