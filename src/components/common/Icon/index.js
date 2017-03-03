import React from 'react';
import './icon.css'

export default class index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let fancyClass = 'iconfont icon-' + this.props.type;
  	if(this.props.sort == 1){
  		 return (
  		 	<i className={`sort-${this.props.clas}`} onClick={this.props.onClick}>{this.props.title}</i>
  		 );
  	}else{
	    return (
	      <i className={fancyClass} onClick={this.props.iconClick}></i>
	    );
    }
  }
}