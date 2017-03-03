import React from 'react';
import {Link} from 'react-router';
import './loading.css';

export default class index extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="loading-box">
			    <div className="loading-ani">
				    <div className="loading-pointer"></div>
				    <div className="loading-cloud1"></div>
				    <div className="loading-cloud2"></div>
				    <div className="loading-text">加载中...</div>
			    </div>
			</div>
		);
	}
}