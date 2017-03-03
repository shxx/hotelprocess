import React from 'react';
import {Link} from 'react-router'
import './Navbar.css';

export default class index extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let rightContent = <span>{this.props.rightContent}</span>;
		if(this.props.rightHref){
			rightContent = <span><a href={this.props.rightHref}>{this.props.rightContent}</a></span>;
		}
		if(this.props.rightLink){
			rightContent = <span><Link to={this.props.rightLink}>{this.props.rightContent}</Link></span>;
		}
		if(this.props.rightClick){
			rightContent = <span onClick={this.props.rightClick}>{this.props.rightContent}</span>;
		}
		
		var rightCom = typeof this.props.rightContent == 'object' ? <span className="margin-right-icon">{this.props.rightContent}</span> : rightContent;
		let topClass = this.props.transparent ? 'we-navbar nobg-nav' : 'we-navbar';
		return (
			<div className={topClass}>
				<ul className="custom-equal">
					<li className="flex-1 we-navbar-left" onClick={this.props.onLeftClick} data-saname={this.props.left_saname}><span className="navbar-left-icon">{this.props.leftContent}</span></li>
					<li className="we-navbar-title">{this.props.children}</li>
					<li className="flex-1 we-navbar-right" data-saname={this.props.right_saname}>{rightCom}</li>
				</ul>
			</div>
		);
	}
}

index.propTypes = {
	children: React.PropTypes.string
};