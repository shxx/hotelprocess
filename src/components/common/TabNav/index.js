import React from 'react';
import {Link} from 'react-router'
import Icon from '../Icon';

import './TabNav.css';

export default class index extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className={this.props.className}>
				<ul className="custom-equal">
					{
						this.props.navContent.map( (item,i) => {
							console.log(this)
							return (
								<li className="flex-1 we-tabbox" onClick={this.props.navClick[i]}>
									<Icon key="0" type={this.props.iconType[i]} />
									<span>{item}</span>
								</li>
							)
						})
					}
				</ul>
			</div>
		);
	}
}

index.propTypes = {
	children: React.PropTypes.string
};
