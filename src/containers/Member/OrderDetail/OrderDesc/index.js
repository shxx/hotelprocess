import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../../components/common/Icon'
import './memorderdetaildesc.css'

export default class OrderDesc extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	render() {
		return (
			<div className="mem-orderdetail-desc">
				<div className="order-detail-title we-line">
					<ul>
						<li className="order-d-t"><span className="m-order-icon"><Icon type="dingdan" /></span><span>订单号：1234567891</span></li>
					</ul>
				</div>
				<div className="order-detail-desc">
					<div className="order-detail-demand">
						<ul>
							<li className="m-order-service"><span className="left1rem order-yellow">派送物品</span></li>
						</ul>
					</div>
					<div className="order-detail-room we-line">
						<p className="m-order-name"><span>A102</span><span>殷林林</span></p>
						<p className="m-order-goods">毛巾 ×2</p>
					</div>
				</div>
				<div className="order-detail-xj-time">
					<ul>
						<li>下单时间：13:00  2017/2/12</li>
						<li>接单时间：13:10  2017/2/12</li>
					</ul>
				</div>
			</div>
		);
	}
}