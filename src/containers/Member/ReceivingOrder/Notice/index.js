import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './memnotice.css';

export default class Notice extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        	show: false
        }
    }

	render() {
		let {num,content} = this.props;
		return (
		  <div className="mem-notice">{content}：{num || 0}单</div>
		);
	}
}
