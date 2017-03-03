import React from 'react';
import {Link} from 'react-router';
import Icon from '../Icon';
import {loadSessionParam} from '../../../utils/params';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.props.saname = this.props.saname || "";
  }

  render() {
  	var extra,listIcon,rightIcon,rightCon,iconClass;
  	iconClass = 'iconfont icon-icon'+this.props.rightIcon;
  	if(this.props.extra){
  		extra = <li className="we-list-extra">{this.props.extra}</li>;
  	}
  	if(this.props.leftIcon){
  		listIcon = <span className="we-list-icon"><Icon key="0" type={this.props.leftIcon} /></span>;
  	}
    if(this.props.rightIcon){
      rightIcon = <span><Icon key="0" type={this.props.rightIcon} /></span>;
    }
    if(this.props.rightHtml){
      rightIcon = this.props.rightHtml
    }
  	if(this.props.rightCon){
  		rightCon = <li className="flex-2 we-list-rightCon">{this.props.rightCon}</li>;
  	}
    if(this.props.href){
    	this.props.href = this.props.href + "?loginOutFlag="+loadSessionParam('loginOutFlag');
    	if(this.props.goBackUrl){
    		this.props.href = this.props.href + "&goBackUrl="+this.props.goBackUrl;
    	}
        return (
          <div className="we-list-item we-line">
          <a href={this.props.href}>
            <ul className="custom-equal" data-saname={this.props.saname}>
              <li className="flex-1 we-list-content">{listIcon}{this.props.children}</li>
              {rightCon}{extra}
              <li className="we-list-arrow">{rightIcon}</li>
            </ul>
            </a>
          </div>
      );
    }else if(this.props.leftHref){
       return (
          <div className="we-list-item we-line">
            <ul className="custom-equal">
              <li className="flex-1 we-list-content" data-saname={this.props.saname}><Link to={this.props.leftHref} style={{textOverflow:'ellipsis',overflow:'hidden'}}>{listIcon}{this.props.children}</Link></li>
              {rightCon}{extra}
              <li className="we-list-arrow">{rightIcon}</li>
            </ul>
          </div>
      );
    }else{
      return (
          <div className="we-list-item we-line" onClick={this.props.onClick} data-saname={this.props.saname}>
            <ul className="custom-equal">
              <li className="flex-1 we-list-content">{listIcon}{this.props.children}</li>
              {rightCon}{extra}
              <li className="we-list-arrow">{rightIcon}</li>
            </ul>
          </div>
      );
    }
  }
}