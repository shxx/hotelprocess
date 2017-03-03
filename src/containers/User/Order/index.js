import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import OrderList from '../OrderList'
import BottomNav from '../BottomNav'

export default class Home extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			orderData:[{
				orderType: '派送物品',
				orderTime: '2017-01-01 13:00',
				orderItem: '毛巾',
				orderItemAmount: '2',
				orderState: '服务中',
				orderBtn: '取消派送',
		        orderServer:''
			},{
				orderType: '派送物品',
				orderTime: '2017-01-01 13:00',
				orderItem: '拖鞋',
				orderItemAmount: '1',
				orderState: '已完成',
				orderBtn: '立即评价',
				orderServer:'老李'
			}]
		};
    }

	render() {
		return (
			<div className="user-item-list-bg">
				<OrderList orderData={this.state.orderData}/>
	            <BottomNav active={1}/>
		    </div>
	    );
	}
}