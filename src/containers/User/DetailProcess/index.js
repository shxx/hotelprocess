import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../../../components/common/Button'
import './detail-process.css'

export default class OrderListCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }


	render() {
		let item=this.props.orderData;
		return (
			<div className="user-detail-process">
				<div className="user-detail-process-row">
					<div className="user-detail-process-line"></div>
					<div className="user-detail-process-line2"></div>
					<div className="user-detail-process-dot"></div>
					<p>订单追踪</p>
				</div>
				<div className="user-detail-process-row">
					<div className="user-detail-process-line"></div>
					<div className="user-detail-process-dot"></div>
					<div className="user-detail-process-circle"></div>
					<div className="user-detail-process-box">
						<label>派单提交成功</label>
						<span>2017-01-01 13:00</span>
					</div>
				</div>
				<div className="user-detail-process-row">
					<div className="user-detail-process-line"></div>
					<div className="user-detail-process-dot"></div>
					<div className="user-detail-process-circle"></div>
					<div className="user-detail-process-box">
						<label>已接单</label>
						<span>2017-01-01 13:01</span>
						<p>服务员：{item.orderServer}</p>
					</div>
				</div>
				<div className="user-detail-process-row">
					<div className="user-detail-process-line"></div>
					<div className="user-detail-process-dot"></div>
					<div className="user-detail-process-circle"></div>
					<div className="user-detail-process-box">
						<label>订单已完成</label>
						<span>2017-01-01 13:03</span>
						<p>您可以给服务人员打分评价</p>
					</div>
				</div>
			</div>
		);
	}
}