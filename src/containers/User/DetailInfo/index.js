import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Button from '../../../components/common/Button'
import './detail-info.css'
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

	render() {
		let item=this.props.orderData;
		let stateHtml,btnHtml;
		if(item.orderState=="派单服务中"){
			stateHtml=<div className="user-order-list-state user-order-list-blue">{item.orderState}<p className="user-margin-top">请您耐心等待</p></div>;
			btnHtml=<div className="user-order-list-btn user-order-list-blue" onClick={this.cancel.bind(this)}>取消派送</div>;
		}else{
			stateHtml=<div className="user-order-list-state">{item.orderState}<p className="user-margin-top">您可以给服务人员打分评价</p></div>;
			btnHtml=<Link to='/h5/user/comment'><div className="user-order-list-btn user-order-list-orange">立即评价</div></Link>;
		}
		return (
			<div className="user-order-list-row user-detail-info">
				<div className="user-order-list-middle">
					<div className="user-order-list-pic"></div>
					<div className="user-order-list-item">{item.orderType}<span className="user-margin-top">{item.orderItem}X{item.orderItemAmount}</span></div>
					{stateHtml}
				</div>
				<div className="user-order-list-footer">
					订单号：{item.orderNumber}
					{btnHtml}
				</div>
			</div>
		);
	}
}