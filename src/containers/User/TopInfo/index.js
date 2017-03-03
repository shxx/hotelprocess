import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './top-info.css'

export default class TopInfoCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	render() {
		return (
			<div className="user-top-info">
				<ul className="flex-equal">
					<li><i className="iconfont icon-fangxing"></i>入住房间：A101</li>
					<li><i className="iconfont icon-user"></i>入住客人：徐先生</li>
				</ul>
			</div>
		);
	}
}