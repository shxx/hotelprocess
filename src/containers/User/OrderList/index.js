import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../../../components/common/Button'
import { Link, hashHistory } from 'react-router'
import './order-list.css'
import Modal from '../../../components/common/Modal'

export default class OrderListCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
        }
    }

	cancel(){
		Modal.open({
			title: '取消派送',
			popup: 'center',
			content: <div className="win-box"><div className="win-title">温馨提示</div><div className="win-body">您确认要取消派单吗？<br/></div></div>,
			clickaway: true,
			closebtn: true,
			buttons: {'取 消': () => Modal.close(), '确 认': () => Modal.close()}
		})
	}

	getOrderListHtml() {
		let orderHtml = this.props.orderData.map((item,i) => {
			let stateHtml,btnHtml,serverHtml;
			if(item.orderState=="服务中"){
				stateHtml=<div className="user-order-list-state user-order-list-blue">{item.orderState}</div>;
				btnHtml=<div className="user-order-list-btn user-order-list-blue" onClick={this.cancel.bind(this)}>取消派送</div>;
			}else{
				stateHtml=<div className="user-order-list-state">{item.orderState}</div>;
				btnHtml=<Link to='/h5/user/comment'><div className="user-order-list-btn user-order-list-orange">立即评价</div></Link>;
				serverHtml=<div className="user-order-list-server"><div className="user-order-list-pic2"></div><span>服务员：{item.orderServer}</span></div>
			}
			return(<div className="user-order-list-row">
				<Link to='/h5/user/orderdetail'>
				<div className="user-order-list-header">
					<div className="user-order-list-info">
					    订单内容：{item.orderType}
					    <br/>
					    <span>{item.orderTime}</span>
					</div>
					{stateHtml}
				</div>
				</Link>
				<Link to='/h5/user/orderdetail'>
				<div className="user-order-list-middle">
					<div className="user-order-list-pic"></div>
					<div className="user-order-list-item">{item.orderItem}X{item.orderItemAmount}</div>
					{serverHtml}
				</div>
			    </Link>
				<div className="user-order-list-footer">
					{btnHtml}
				</div>
			</div>);
		});

		return orderHtml;
	}

	render() {
		return (
			<div className="user-order-list">
				{this.getOrderListHtml()}
			</div>
		);
	}
}