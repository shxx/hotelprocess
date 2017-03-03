import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import OrderStatus from './OrderStatus'
import OrderDesc from './OrderDesc'
import OrderExchange from './OrderExchange'
import OrderEvaluate from './OrderEvaluate'
import * as orderActions from '../../../actions/Member/order'
import './orderdetail.css'


const mapStateToProps = state => {
	return {
		orderList: state.waitingOrder
	}
}
const mapDispatchToProps = dispatch => {
	return {
		orderActions: bindActionCreators(orderActions, dispatch)
	}
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class OrderDetailCom extends Component {

	constructor(props, context) {
		super(props, context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			show: false
		}
	}

	componentWillMount() {	
		document.title = '派单详情';
	}

	componentDidMount() {
		let {orderActions} = this.props;
		//orderActions.getOrderDetail();
	}

	componentDidUpdate() {
	}

	render() {
		let {orderList} = this.props;
		
		return (	
			<ReactCSSTransitionGroup transitionName="animate-slide-left"
          transitionEnterTimeout={100}
          transitionLeaveTimeout={100} transitionAppear={true}>
			  <div className="member-order-bg" key={1}>
				<OrderStatus />
				<OrderDesc />
				<OrderExchange />
				<OrderEvaluate />
			  </div>
			 </ReactCSSTransitionGroup>
		);
	}
}
