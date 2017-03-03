import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DetailInfo from '../DetailInfo'
import DetailProcess from '../DetailProcess'
import BottomNav from '../BottomNav'


export default class Home extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			orderData:{
				orderType: '派送物品',
				orderTime: '2017-01-01 13:00',
				orderItem: '毛巾',
				orderItemAmount: '2',
				orderState: '派单服务中',
		        orderServer:'老王',
				orderNumber:'123456789',
			}
		};
    }

	render() {
		return (
			<div className="user-item-list-bg">
				<DetailInfo orderData={this.state.orderData}/>
				<DetailProcess orderData={this.state.orderData}/>
	            <BottomNav active={1}/>
		    </div>
	    );
	}
}