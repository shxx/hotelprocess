import React from 'react';
import './popup.css';

class index extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clickAway : this.props.clickaway
		}
	}
	closeLayer(){
		this.setState({
			clickAway: false
		})
	}
	render() {
		let bState = this.state.clickAway;
		let fadeIn = bState ? 'we-popup-inner fade-in' : 'we-popup-inner',
			active = bState ? 'we-popup-overlay active' : 'we-popup-overlay';
		return (
			<div className="we-popup-Container active">
				<div className={active} onClick={this.closeLayer.bind(this)}></div>
				<div className={fadeIn} style={this.props.style}>
					<div className="we-popup">
						<a className="we-popup-close"></a>
						<div className="we-popup-header">{this.props.title}</div>
						<div className="we-popup-content">{this.props.content}</div>
						<div className="we-popup-footer"></div>
					</div>
				</div>
			</div>
		);
	}
}

function open (options) {
console.log(1111)
};

index.open = open;

export default index;