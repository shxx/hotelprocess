import React, { PropTypes, Component } from 'react'
import { Link, hashHistory } from 'react-router'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Icon from '../../../../components/common/Icon'
import {CountDown} from '../../../../utils/countDown'
import './memexchangedesc.css';



export default class ExchangeDesc extends Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.getCountDown = this.getCountDown.bind(this);
        this.state = {
        }
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

    componentWillMount(){
    	if(!this.props.orderData){
    		this.props.getOrderList();
    	}
    	this.getCountDown();
    }


    getCountDown(){
    	let {orderData} = this.props

		var orderReceivingTime = ''
    	if(!!orderData){
			//订单剩余完成时间倒计时
	    	new CountDown({
	    		currentTime: orderData.currentTime,
	    		orderTime: orderData.orderPlaceTime,
	    		expirationTime: orderData.orderSurplusTime,
	    		orderNo: orderData.orderNo,
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

    componentDidUpdate(){
		this.getCountDown();
	}

	render() {
		let orderData = !!this.props.orderData && this.props.orderData;
		let orderServer;
		if(!!orderData){
			orderServer = orderData.orderReq == '清洁打扫' ? orderData.orderDesc : (orderData.orderDesc + '×' + orderData.orderReqNum);
		}

		return (
			<div className="m-exchange-info">
				<div className="m-order-title we-line">
					<ul className="flex-equal">
						<li className="m-order-num"><span className="m-order-icon"><Icon type="dingdan" /></span><span>订单号:{orderData.orderNo}</span></li>
						<li className="m-surplus-time tr"><span className="m-ordertime-icon"><Icon type="shijian" /></span><span>剩余时间：<i className="b-time" id={`rematime${orderData.orderNo}`}>{this.secondTurnTime(orderData.orderSurplusTime)}</i></span></li>
					</ul>
				</div>
				<div className="exchange-goods">{orderData.hotelRoom} / {orderData.person} / {orderServer}</div>
			</div>
		);
	}
}