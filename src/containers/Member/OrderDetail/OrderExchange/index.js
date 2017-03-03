import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../../components/common/Icon'
import './memdetailexchange.css'

export default class OrderExchange extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	render() {
		return (
			<div className="mem-orderdetail-exchange">
				<div className="order-detail-title we-line">
					<ul>
						<li className="order-d-t"><span className="m-order-icon"><Icon type="anniu-liuzhuan" /></span><span>流转信息</span></li>
					</ul>
				</div>
				<div className="order-detail-exchange">
					<ul>
						<li>
							<span className="exchange-radio"></span>
							<span className="exchange-date">2017-2-12  13:06</span>
							<span className="exchange-person">张三 转至 李四</span>
							<span className="exchange-note">流转备注：已下班</span>
						</li>
						<li>
							<span className="exchange-radio"></span>
							<span className="exchange-date">2017-2-12  13:01</span>
							<span className="exchange-person">王五 转至 张三</span>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}