import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../../components/common/Icon'
import './memdetailstatus.css'

export default class OrderStatus extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	render() {
		let {current} = this.props;
		return (
			<div className="mem-orderdetail-status">
				<p className="order-detail-s">派送进行中</p>
				<p className="order-detail-time"><span className="detail-shijian-icon"><Icon type="shijian" /></span><span>剩余时间</span></p>
				<p className="order-detail-countdown">04:48</p>
			</div>
		);
	}
}