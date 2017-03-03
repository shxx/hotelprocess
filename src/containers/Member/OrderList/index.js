import React, { PropTypes, Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link, hashHistory } from 'react-router'
import Button from '../../../components/common/Button'
import Icon from '../../../components/common/Icon'
import Modal from '../../../components/common/Modal'
import AHref from '../AHref';
import {CountDown} from '.././../../utils/countDown'
import './memorderlist.css'

export default class OrderListCom extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.handleExchange = this.handleExchange.bind(this);
        this.state = {
        	orderReceivingTime:''
        }
    }
    /**
     * [orderTimeFormate 时间格式化]
     * @param  {[type]} str [description]
     * @return {[type]}     [description]
     */
    orderTimeFormate(str){
    	var reg = /^\d{4}-\d{2}-\d{2} (\d{2}):(\d{2}):(\d{2})$/;
    	return str.replace(reg,'$1:$2:$3');	
    }

    /**
     * [secondTurnTime 秒转为00:00]
     * @param  {[type]} s [description]
     * @return {[type]}   [description]
     */
    secondTurnTime(s){
    	return this.filled(Math.floor(s / 60)) + ':' + this.filled(Math.floor(s % 60));
    }

    filled(v){
		return v.toString().replace(/^(\d)$/, '0$1');
	}

    /**
     * [getOrderStatusHtml 根据订单状态显示不同信息]
     * @param  {[type]} item [description]
     * @return {[type]}      [description]
     */
    getOrderStatusHtml(item) {
    	return (<div className="m-order-title">
					<ul className="flex-equal">
						<li className="m-order-num"><span className="m-order-icon"><Icon type="dingdan" /></span><span>订单号:{item.orderNo}</span></li>
						{ (item.orderStatus == '接单中' || item.orderStatus == '待接单') ? <li className="m-surplus-time tr"><span className="m-ordertime-icon"><Icon type="shijian" /></span><span>剩余时间：<i className="b-time" id={`rematime${item.orderNo}`}>{this.secondTurnTime(item.orderSurplusTime)}</i></span></li> : <li className="m-order-status tr">{item.orderStatus}</li>}
					</ul>
				</div>)
    }
	
	/**
	 * [getOrderTime 获取下单时间]
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 */
    getOrderTime(item) {
    	return (<div className="m-order-demand">
					<ul className="flex-equal">
						<li className="m-order-service"><span className={item.orderReq == '派送物品' ? 'order-yellow' : 'order-green'}>{item.orderReq}</span></li>
						<li className="m-placeorder-time tr">下单时间: {this.orderTimeFormate(item.orderPlaceTime)}</li>
					</ul>
				</div>)
    }
	
	/**
	 * [getOrderDesc 获取酒店用户需求信息]
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 */
    getOrderDesc(item) {
    	let orderDesc;
    	if(item.orderReq == '派送物品'){
    		orderDesc = item.orderDesc +' ×'+ item.orderReqNum;
    	}else{
    		orderDesc = item.orderDesc;
    	}

		return (<div className="m-order-room">
					<p className="m-order-name"><span>{item.hotelRoom}</span><span>{item.person}</span></p>
					<p className="m-order-goods">{orderDesc}</p>
				</div>)
    }


	/**
	 * [getOrderEdit 根据不同状态操作]
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 */
    getOrderEdit(item) {
    	let oneEditHtml = '',
    		secondEditHtml = '';
    	let exchange = <Link to={'/h5/member/'+ this.props.type + '/exchange/' +item.orderNo} data-orderno={item.orderNo} data-status={item.orderStatus} onClick={this.handleExchange}><Button  className="order-change-wrap" data-orderno={item.orderNo}><span className="liuzhuan-icon"><Icon type="anniu-liuzhuan" /></span><span>派单流转</span></Button></Link>;
    	let sendConfirm = <Button className="order-send-wrap"><span className="queren-icon"><Icon type="anniu-queren" /></span><span>确认送达</span></Button>;

    	let owner = <Button className="order-change-wrap" data-orderno={item.orderNo}>自己接单</Button>;
    	let distribution = <Button className="order-send-wrap"><span className="queren-icon"><Icon type="anniu-fenpeidingdan" /></span><span>分配订单</span></Button>;
		
		if(item.orderStatus == '待接单'){
			oneEditHtml = exchange;
			secondEditHtml = <Button>接单<i className="jiedan-time" id={`time${item.orderNo}`}>{item.orderSurplusTime}</i></Button>;
		}else if(item.orderStatus == '接单中'){
			oneEditHtml = exchange;
			secondEditHtml = sendConfirm;
		}else if(item.orderStatus == '待分配' || item.orderStatus == '流转待分配'){
			oneEditHtml = owner;
			secondEditHtml = distribution;
		}

    	if(item.orderStatus == '待接单' || item.orderStatus == '接单中' || item.orderStatus == '待分配' || item.orderStatus == '流转待分配'){
    		return(<div className="m-order-edit">
					<ul className="flex-equal">
						<li className="m-order-time">{oneEditHtml}</li>
						<li className="m-order-btnedit">{secondEditHtml}</li>
					</ul>
				</div>)
    	}
    	
    }
	
	/**
	 * [getExchangeDesc 得到员工间的流转信息]
	 * @param  {[type]} item [description]
	 * @return {[type]}      [description]
	 */
    getExchangeDesc(item) {
    	let exhangeDes = item.exchangeDesc;
    	if(exhangeDes && exhangeDes.length > 0){
			return (
				<div className="orderlist-exchange-source we-line">
					<ul className="custom-equal">
						<li className="exchange-left">流转自</li>
						<li>{exhangeDes[0].fromPerson}（{exhangeDes[0].fromPersonDepart})，{exhangeDes[0].exchangeNote}</li>
					</ul>
				</div>);
		}
    }
	
	componentDidUpdate(){
		let {orderData} = this.props,
    		length = orderData && orderData.length;
		var orderReceivingTime = ''
    	if(length > 0){
    		for(var i=0; i<orderData.length; i++){
    			//接单倒计时
    			new CountDown({
		    		currentTime: orderData[i].currentTime,
		    		orderTime: orderData[i].orderPlaceTime,
		    		expirationTime: orderData[i].orderReceivingTime,
		    		orderNo: orderData[i].orderNo,
		    		countFunc: function(S,M,orderNo){
		    			var timeHtml = document.querySelector('#time'+ orderNo);
		    			if(!!timeHtml){
		    				timeHtml.innerHTML = '(' + M + ':' + S + ')';
		    			}
		    		},
		    		endFunc: function(orderNo){
		    			var timeHtml = document.querySelector('#time'+ orderNo);
		    			if(!!timeHtml){
		    				timeHtml.innerHTML = '(' + '00:00' + ')';
		    				
		    				//抢单倒计时结束后隐藏到当前订单信息
		    				//document.querySelector('#order_'+ orderNo).style.display = 'none';

		    			}
		    		}
		    	}).start();
				
				//订单剩余完成时间倒计时
		    	new CountDown({
		    		currentTime: orderData[i].currentTime,
		    		orderTime: orderData[i].orderPlaceTime,
		    		expirationTime: orderData[i].orderSurplusTime,
		    		orderNo: orderData[i].orderNo,
		    		countFunc: function(S,M,orderNo){
		    			var timeHtml = document.querySelector('#rematime'+ orderNo);
		    			if(!!timeHtml){
		    				timeHtml.innerHTML = M + ':' + S;
		    			}
		    		},
		    		endFunc: function(orderNo){
		    			var timeHtml = document.querySelector('#rematime'+ orderNo);
		    			if(!!timeHtml){
		    				timeHtml.innerHTML = '00:00';
		    			}
		    		}
		    	}).start();
    		}
    	} 
    	
	}
    /**
     * [handleExchange description]
     * @return {[type]} [description]
     */
    handleExchange(e){
    	let orderNo = e.currentTarget.getAttribute('data-orderno');
    	this.props.handleFilter(orderNo);
    	
    }

    getOrderListHtml() {
    	let {orderData,href} = this.props,
    		length = orderData && orderData.length;

    	let orderHtml = length && orderData.map((item,i) => {
    		return(<div key={i} className="m-order-list" id={'order_' + item.orderNo}>
    			<AHref href={item.orderStatus !== '待接单' ? '/h5/member/orderdetail/'+item.orderId : null}>
	    			{ this.getOrderStatusHtml(item) }
	    			{ this.getOrderTime(item) }
	    			{ this.getOrderDesc(item) }
	    			{ this.getExchangeDesc(item) }
    			</AHref>
				{ this.getOrderEdit(item) }
			</div>);
    	});

    	return orderHtml;
    }

	render() {
		return (
			<div className="m-order-listwrap">
				{this.getOrderListHtml()}
			</div>
		);
	}
}