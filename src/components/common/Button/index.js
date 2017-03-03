import React from 'react';
import './Button.css';


class ABox extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		if(this.props.href){
			return (
				<a href={this.props.href}>
					{this.props.children}
				</a>
			)
		}else{
			return (this.props.children)
		}
	}
}
export default class index extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let sType=this.props.type ? this.props.type : "button";
		let sClass = `we-button ${this.props.className?this.props.className:""}`;
		sClass = this.props.size ? sClass + " we-button-" + this.props.size : sClass;

		return (
			<ABox href={this.props.href}>
				<button data-saname={this.props.disabled ? '' : this.props.saname}
					onClick={this.props.onClick}
					disabled={this.props.disabled}
				    type={sType}
					className={sClass}>
					<span>{this.props.children}</span>
				</button>
			</ABox>
		)
	}
}

index.propTypes = {
	children: React.PropTypes.string
};
