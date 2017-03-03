import React, { PropTypes, Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../components/common/Icon'
import Button from '../../../components/common/Button'
import ExchangeDesc from './ExchangeDesc';
import ExchangePerson from './ExchangePerson';
import * as orderActions from '../../../actions/Member/order'

const mapStateToProps = (state) => {
	return {
		personList: state.person,
		oWaitingOrder: state.waitingOrder,
        oReceivingOrder: state.receivingOrder
	}
}
const mapDispatchToProps = dispatch => {
	return {
		orderActions: bindActionCreators(orderActions, dispatch)
	}
}

// React & Redux 绑定
@connect(mapStateToProps,mapDispatchToProps)
export default class OrderExchange extends Component {
	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getOrderData = this.getOrderData.bind(this);
        this.state = {
        }
    }

    componentWillMount() {	
		document.title = '派单流转';
	}

	componentDidMount() {
    	let {orderActions} = this.props;
    	orderActions.getAllPerson();
    }

    /**
     * [getOrderData 派单流转页面刷新，重新请求数据]
     * @return {[type]} [description]
     */
    getOrderData() {
    	let {orderActions,params} = this.props;
    	let orderNo = params.orderid,
            type = params.type;
        if(type == 'home'){
            orderActions.getWatingOrders({
                'orderNo':orderNo
            });
        }else if(type == 'receivingorder'){
            orderActions.getReceivingOrders({
                'orderNo':orderNo
            });
        }
    }

    /**
     * [getTypeOrder 根据传入的参数获取值]
     * @return {[type]} [description]
     */
    getTypeOrder() {
        let {oWaitingOrder,oReceivingOrder,params} = this.props;
        let orderData;
        switch(params.type){
            case 'home':
                orderData = oWaitingOrder.waitingOrder;
                break;
            case 'receivingorder':
                orderData = oReceivingOrder.receivingOrder;
                break;
        }

        return orderData;
    }

	render() {
		let {personList,params} = this.props;
        let oOrder = this.getTypeOrder();

		return (
			<div className="member-order-bg">
		  		<ExchangeDesc orderData = {oOrder} getOrderList = {this.getOrderData} />
		  		<ExchangePerson personData = {personList.person} />
		  	</div>
		);
	}
}