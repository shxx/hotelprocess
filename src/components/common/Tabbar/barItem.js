import React from 'react';
import {Link} from 'react-router';
import Icon from '../Icon';

export default class barItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
  	let selected = this.props.selected;
  	let iconCls = selected ? this.props.selIcon : this.props.curIcon,
  		selCls = selected ? 'selected' : '';
	if(this.props.href){
		return (
	      <li><Link to={this.props.href}><span className={selCls}><Icon type={iconCls} /></span><span>{this.props.title}</span></Link></li>
	    );
  	}else{
  		return (
	      <li><span className={selCls}><Icon type={iconCls} /></span><span>{this.props.title}</span></li>
	    );
  	}
  	
  }
}
